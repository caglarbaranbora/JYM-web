import { NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { checkExpoReceipts, purgeInvalidTokensForReceipts } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    initFirebaseAdmin();
    const db = getFirestore();

    // son 24 saat içinde üretilen ticket’ları kontrol et
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const qs = await db.collection("pushTickets")
        .where("createdAt", ">=", since)
        .limit(500)
        .get();

    const ticketIds: string[] = [];
    qs.forEach(d => {
        const arr = Array.isArray(d.data()?.tickets) ? d.data()!.tickets : [];
        for (const id of arr) ticketIds.push(id);
    });

    const receipts = await checkExpoReceipts(ticketIds);
    const { purged } = await purgeInvalidTokensForReceipts(receipts);

    return NextResponse.json({ ok: true, checked: ticketIds.length, purged });
}
