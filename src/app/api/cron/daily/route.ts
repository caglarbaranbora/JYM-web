import { NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    initFirebaseAdmin();
    const db = getFirestore();

    // tercih edersen burada segment koşulları ekle (örn: active==true)
    const qs = await db.collection("users").get();

    const messages: any[] = [];
    qs.forEach(doc => {
        const data = doc.data() || {};
        const tokens = Array.isArray(data.pushTokens) ? data.pushTokens : [];
        for (const t of tokens) {
            if (!t?.token) continue;
            messages.push({
                to: t.token,
                sound: "default",
                title: "Günün hatırlatması",
                body: "Bugünkü hedefini tamamladın mı?",
                data: { type: "daily" }
            });
        }
    });

    const tickets = await sendExpoMessages(messages);
    return NextResponse.json({ ok: true, users: qs.size, ticketCount: tickets.length });
}
