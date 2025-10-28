import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

// Sadece Expo token doğrulaması yapmak istiyorsan açık bırak:
const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST(req: NextRequest) {
    let body: any;
    try { body = await req.json(); }
    catch { return badRequest("Invalid JSON body"); }

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

    // Gönder
    const ticketIds = await sendExpoMessages(messages);
    return json({ ok: true, sent: tokens.length, ticketCount: ticketIds.length });
}