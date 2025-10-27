import { NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    initFirebaseAdmin();
    const db = getFirestore();

    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 0, 0, 0);
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 23, 59, 59);

    const qs = await db.collection("users")
        .where("subscriptionEnd", ">=", Timestamp.fromDate(start))
        .where("subscriptionEnd", "<=", Timestamp.fromDate(end))
        .get();

    const messages: any[] = [];
    qs.forEach(doc => {
        const data = doc.data() || {};
        const tokens = Array.isArray(data.pushTokens) ? data.pushTokens : [];
        const endDate = data.subscriptionEnd?.toDate?.()?.toISOString?.() ?? null;
        for (const t of tokens) {
            if (!t?.token) continue;
            messages.push({
                to: t.token,
                sound: "default",
                title: "Aboneliğin bitiyor ⏳",
                body: "2 gün içinde yenilemeyi unutma!",
                data: { type: "subscription_expiry", subscriptionEnd: endDate }
            });
        }
    });

    const tickets = await sendExpoMessages(messages);
    return NextResponse.json({ ok: true, users: qs.size, ticketCount: tickets.length });
}
