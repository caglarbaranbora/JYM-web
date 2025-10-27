import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

export async function POST(req: NextRequest) {
    initFirebaseAdmin();
    const db = getFirestore();

    let body: any; try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }
    const { userId, productName, orderId } = body || {};
    if (!userId || !productName) return badRequest("userId, productName required");

    const snap = await db.collection("users").doc(userId).get();
    if (!snap.exists) return badRequest("User not found");

    const tokens: string[] = (snap.data()?.pushTokens || []).map((t: any) => t.token).filter(Boolean);
    if (tokens.length === 0) return badRequest("No tokens");

    const messages = tokens.map((to) => ({
        to,
        sound: "default" as const,
        title: "Satın alma başarılı 🎉",
        body: `${productName} aboneliğin aktif edildi.`,
        data: { type: "purchase", orderId, productName }
    }));

    const tickets = await sendExpoMessages(messages);
    return json({ ok: true, ticketCount: tickets.length });
}
