import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }
function forbidden(m = "Forbidden") { return json({ ok: false, error: m }, { status: 403 }); }

// Basit sunucu anahtarı (önerilir)
const REQ_KEY_HEADER = "x-server-key";
const SERVER_KEY = process.env.SERVER_PUSH_KEY;

// Sadece Expo token doğrulaması yapmak istiyorsan açık bırak:
const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST(req: NextRequest) {
    // Güvenlik: sunucu anahtarı
    if (SERVER_KEY) {
        const k = req.headers.get(REQ_KEY_HEADER);
        if (k !== SERVER_KEY) return forbidden("Invalid or missing server key");
    }

    let body: any;
    try { body = await req.json(); }
    catch { return badRequest("Invalid JSON body"); }

    // Kullanım:
    // 1) { toUserId, title, body, data? }
    // 2) { toUserIds: string[], title, body, data? }
    const { toUserId, toUserIds, title, body: msgBody, data, priority = "default" } = body || {};
    if ((!toUserId && !Array.isArray(toUserIds)) || !title || !msgBody) {
        return badRequest("toUserId OR toUserIds, and title, body are required");
    }

    initFirebaseAdmin();
    const db = getFirestore();

    // Hedef kullanıcıları topla
    const targetIds: string[] = Array.isArray(toUserIds) ? toUserIds : [toUserId];

    // Firestore’dan tokenları çek
    const refs = targetIds.map((id) => db.collection("userPushTokens").doc(id));
    const snaps = await db.getAll(...refs);

    const tokens: string[] = [];
    for (const s of snaps) {
        if (!s.exists) continue;

        // burada pushTokens yerine tokens kullan
        const arr = Array.isArray(s.data()?.tokens) ? s.data()!.tokens : [];
        for (const t of arr) {
            if (t?.token) tokens.push(t.token);
        }
    }
    if (tokens.length === 0) return badRequest("No push tokens for target user(s)");

    // (Opsiyonel) Expo token format validation
    const invalid = tokens.filter((t) => !EXPO_TOKEN_RE.test(t));
    if (invalid.length) {
        // İstersen burada invalidleri sessizce atlayıp kalanlara gönderim yapabilirsin.
        return badRequest(`Invalid Expo token(s): ${invalid.join(", ")}`);
    }

    // Mesajı hazırla
    const messages = tokens.map((to) => ({
        to,
        sound: "default" as const,
        title,
        body: msgBody,
        data: data || {},
        priority: (priority === "high" ? "high" : "default") as "default" | "high",
    }));

    // Gönder + ticket logla
    const ticketIds = await sendExpoMessages(messages);

    if (ticketIds.length) {
        await db.collection("pushTickets").add({
            createdAt: FieldValue.serverTimestamp(),
            targetUserIds: targetIds,
            tickets: ticketIds,
            meta: { title, dataType: data?.type ?? null }
        });
    }

    return json({ ok: true, sent: tokens.length, ticketCount: ticketIds.length });
}