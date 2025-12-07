// app/api/push/subscription-expiry/route.ts
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
  // Allow only Vercel Cron
  const ua = req.headers.get("user-agent") || "";
  if (!ua.includes("vercel-cron")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  initFirebaseAdmin();
  const db = getFirestore();

  // New collection name
  const qs = await db.collection("customers").get();

  const nowSec = Math.floor(Date.now() / 1000);
  const messages: any[] = [];

  for (const doc of qs.docs) {
    const u = doc.data() || {};
    const entitlements = (u.entitlements || {}) as Record<string, Entitlement>;

    // 1) Active entitlement bul
    const activeEnt = Object.values(entitlements).find(
      (ent) => ent?.isActive === true
    );
    if (!activeEnt) continue;

    if (!activeEnt.expiresDate) continue;

    const expiresIso = activeEnt.expiresDate;
    const expiresSec = Math.floor(new Date(expiresIso).getTime() / 1000);

    const diffDays = Math.floor((expiresSec - nowSec) / 86400);

    // Only notify at 7, 4, 1 days remaining
    if (![7, 4, 1].includes(diffDays)) continue;

    let msgBody = "";
    if (diffDays === 7) msgBody = "Your subscription expires in 1 week ⏳";
    if (diffDays === 4) msgBody = "Your subscription will expire in 4 days 🔔";
    if (diffDays === 1) msgBody = "Your subscription ends tomorrow ⚠️";

    // 3) Push tokenları çek
    const tokenSnap = await db.collection("userPushTokens").doc(doc.id).get();
    const tokenArr = tokenSnap.data()?.tokens || [];

    const validTokens = tokenArr
      .map((t: any) => t?.token)
      .filter((t: any) => EXPO_TOKEN_RE.test(t));

    for (const tok of validTokens) {
      messages.push({
        to: tok,
        sound: "default",
        title: "Subscription Expiry Reminder",
        body: msgBody,
        data: {
          type: "subscription_expiry",
          daysLeft: diffDays,
        },
        priority: "high",
      });
    }
  }

  if (messages.length === 0) {
    return NextResponse.json(
      {
        ok: true,
        sent: 0,
        message: "No users match the expiry criteria",
      },
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