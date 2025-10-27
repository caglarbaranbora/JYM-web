import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { verifyToken } from "@clerk/backend";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function unauthorized(m = "Unauthorized") { return json({ ok: false, error: m }, { status: 401 }); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

export async function POST(req: NextRequest) {
    // Auth
    let userId: string | null = null;
    const authz = req.headers.get("authorization");
    const bearer = authz?.match(/^Bearer\s+(.+)/i)?.[1];
    try {
        if (bearer) {
            if (!process.env.CLERK_SECRET_KEY) return unauthorized("Server configuration error");
            const payload = await verifyToken(bearer, { secretKey: process.env.CLERK_SECRET_KEY });
            userId = payload.sub ?? null;
        } else {
            const a = await auth();
            userId = a.userId ?? null;
        }
    } catch { return unauthorized("Authentication verification failed"); }
    if (!userId) return unauthorized("No valid Clerk session");

    let body: any; try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }

    // tek kullanıcıya veya çok kullanıcıya destek:
    // 1) { toUserId, title, body, data }
    // 2) { toUserIds: string[], title, body, data }
    const { toUserId, toUserIds, title, body: msgBody, data } = body || {};
    if ((!toUserId && !Array.isArray(toUserIds)) || !title || !msgBody) {
        return badRequest("toUserId OR toUserIds, and title, body required");
    }

    initFirebaseAdmin();
    const db = getFirestore();

    // hedef kullanıcıları topla
    const targetIds: string[] = Array.isArray(toUserIds) ? toUserIds : [toUserId];

    // tokenları getir
    const tokens: string[] = [];
    const userRefs = targetIds.map(id => db.collection("users").doc(id));
    const snaps = await db.getAll(...userRefs);
    for (const s of snaps) {
        if (!s.exists) continue;
        const arr = Array.isArray(s.data()?.pushTokens) ? s.data()!.pushTokens : [];
        for (const t of arr) if (t?.token) tokens.push(t.token);
    }
    if (tokens.length === 0) return badRequest("No push tokens for target user(s)");

    const messages = tokens.map((to) => ({ to, sound: "default" as const, title, body: msgBody, data }));
    const ticketIds = await sendExpoMessages(messages);

    // opsiyonel: ticket logla (receipt cron'u için)
    if (ticketIds.length) {
        await db.collection("pushTickets").add({
            createdAt: FieldValue.serverTimestamp(),
            createdBy: userId,
            targetUserIds: targetIds,
            tickets: ticketIds,
            meta: { title, dataType: data?.type ?? null }
        });
    }

    return json({ ok: true, sent: tokens.length, ticketCount: ticketIds.length });
}
