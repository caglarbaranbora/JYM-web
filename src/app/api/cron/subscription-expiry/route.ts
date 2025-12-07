import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

interface Entitlement {
  expiresDate?: string;
  isActive?: boolean;
  willRenew?: boolean;
  periodType?: string;
  productIdentifier?: string;
}

export async function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const isCron = ua.includes("vercel-cron");

  if (!isCron) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  initFirebaseAdmin();
  const db = getFirestore();

  const customersSnap = await db.collection("customers").get();

  const nowSec = Math.floor(Date.now() / 1000);
  const messages: any[] = [];

  for (const doc of customersSnap.docs) {
    const customer = doc.data() || {};

    const entitlements = (customer.entitlements || {}) as Record<
      string,
      Entitlement
    >;

    const activeEnt = Object.values(entitlements).find(
      (ent) => ent?.isActive === true
    );
    if (!activeEnt || !activeEnt.expiresDate) continue;

    const expiresSec = Math.floor(
      new Date(activeEnt.expiresDate).getTime() / 1000
    );

    const diffDays = Math.floor((expiresSec - nowSec) / 86400);
    if (![7, 4, 1].includes(diffDays)) continue;

    let msgBody = "";
    if (diffDays === 7) msgBody = "Your subscription expires in 1 week ⏳";
    if (diffDays === 4) msgBody = "Your subscription will expire in 4 days 🔔";
    if (diffDays === 1) msgBody = "Your subscription ends tomorrow ⚠️";

    const tokenSnap = await db.collection("userPushTokens").doc(doc.id).get();
    if (!tokenSnap.exists) continue;

    const tokenArr = tokenSnap.data()?.tokens || [];

    const activeTokens = tokenArr
      .filter((t: any) => t?.isActive === true && t?.token)
      .map((t: any) => t.token)
      .filter((tok: string) => EXPO_TOKEN_RE.test(tok));

    const uniqueActiveTokens = Array.from(new Set(activeTokens));

    if (uniqueActiveTokens.length === 0) continue;

    for (const tok of uniqueActiveTokens) {
      messages.push({
        to: tok,
        sound: "default",
        title: "Subscription Expiry Reminder",
        body: msgBody,
        data: {
          type: "subscription_expiry",
          daysLeft: diffDays,
        },
      });
    }
  }

  if (messages.length === 0) {
    return NextResponse.json(
      { ok: true, sent: 0, message: "No matching users" },
      { status: 200 }
    );
  }

  const tickets = await sendExpoMessages(messages);

  return NextResponse.json({
    ok: true,
    sent: messages.length,
    ticketCount: tickets.length,
  });
}

export async function POST(req: NextRequest) {
  return GET(req);
}
