// lib/expoPush.ts
import { getFirestore, FieldValue } from "firebase-admin/firestore";

type ExpoMessage = {
    to: string;
    sound?: "default" | null;
    title?: string;
    body?: string;
    data?: Record<string, any>;
    priority?: "default" | "high";
};

const EXPO_URL = "https://exp.host/--/api/v2/push/send";
const RECEIPTS_URL = "https://exp.host/--/api/v2/push/getReceipts";

function chunk<T>(arr: T[], size = 100): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

// Basit retry/backoff
async function postJson(url: string, body: any, retries = 2): Promise<any> {
    for (let i = 0; i <= retries; i++) {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (res.status === 429 && i < retries) {
            const wait = 500 * (i + 1);
            await new Promise(r => setTimeout(r, wait));
            continue;
        }
        return res.json().catch(() => ({}));
    }
    return {};
}

export async function sendExpoMessages(messages: ExpoMessage[]) {
    const parts = chunk(messages, 100);
    const ticketIds: string[] = [];
    for (const p of parts) {
        const payload = p.length === 1 ? p[0] : p;
        const json = await postJson(EXPO_URL, payload);
        const tickets = Array.isArray(json?.data) ? json.data : [json?.data].filter(Boolean);
        for (const t of tickets) {
            if (t?.status === "ok" && t?.id) ticketIds.push(t.id);
            // error ise receipt tarafında temizleyeceğiz
        }
    }
    return ticketIds;
}

export async function checkExpoReceipts(ticketIds: string[]) {
    if (!ticketIds?.length) return {};
    const json = await postJson(RECEIPTS_URL, { ids: ticketIds });
    return json?.data ?? {};
}

export async function purgeInvalidTokensForReceipts(receipts: Record<string, any>) {
    const db = getFirestore();
    const invalidTokens = new Set<string>();

    for (const rid of Object.keys(receipts || {})) {
        const r = receipts[rid];
        if (r?.status === "error") {
            const code = r?.details?.error;
            // Expo error kodları içinde cihaz/kimlik hataları
            if (code === "DeviceNotRegistered" || code === "InvalidCredentials") {
                const tok = r?.details?.token;
                if (tok) invalidTokens.add(tok);
            }
        }
    }
    if (invalidTokens.size === 0) return { purged: 0 };

    const snap = await db.collection("users").get();
    let changed = 0;
    const batch = db.batch();
    snap.forEach(doc => {
        const data = doc.data() || {};
        const arr = Array.isArray(data.pushTokens) ? data.pushTokens : [];
        const next = arr.filter((t: any) => !invalidTokens.has(t?.token));
        if (next.length !== arr.length) {
            changed++;
            batch.set(doc.ref, {
                pushTokens: next,
                lastTokenPurgeAt: FieldValue.serverTimestamp()
            }, { merge: true });
        }
    });
    if (changed) await batch.commit();
    return { purged: changed };
}
