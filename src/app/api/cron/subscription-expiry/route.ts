// app/api/push/subscription-expiry/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

function json(d: any, init?: ResponseInit) {
  return NextResponse.json(d, init);
}
function badRequest(m = "Bad Request") {
  return json({ ok: false, error: m }, { status: 400 });
}
function forbidden(m = "Forbidden") {
  return json({ ok: false, error: m }, { status: 403 });
}

// ...imports ve sabitler aynı
export async function GET(req: NextRequest) {
  const signature = req.headers.get("x-vercel-cron-signature");
  if (signature !== process.env.VERCEL_CRON_SECRET) {
    return forbidden("Invalid or missing cron signature");
  }

  initFirebaseAdmin();
  const db = getFirestore();

  let body: any;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  const { title, body: msgBody } = body || {};
  if (!title || !msgBody)
    return badRequest("title and body required in request");

  const qs = await db
    .collection("users")
    .where("revenueCat.isPremium", "==", true)
    .get();

  const nowSec = Math.floor(Date.now() / 1000);
  const messages: any[] = [];

  let invalidCount = 0;

  for (const doc of qs.docs) {
    const u = doc.data() || {};
    const untilTs = u?.revenueCat?.activeUntil?._seconds;
    if (!untilTs) continue;

    const diffDays = Math.floor((untilTs - nowSec) / 86400); // saniyeden gün farkı
    if (diffDays > 7 || diffDays < 0) continue; // yalnızca 1 hafta içindekiler

    // sadece 7, 4 ve 1 gün kala gönder
    if (![7, 4, 1].includes(diffDays)) continue;

    // mesaj metni duruma göre değişiyor
    let msgBodyDynamic = "";
    if (diffDays === 7)
      msgBodyDynamic = "Your subscription expires in 1 week ⏳";
    else if (diffDays === 4)
      msgBodyDynamic = "Your subscription will expire in 4 days 🔔";
    else if (diffDays === 1)
      msgBodyDynamic = "Your subscription ends tomorrow ⚠️";

    // tokenları al
    const tokenSnap = await db.collection("userPushTokens").doc(doc.id).get();
    const tokenArr = Array.isArray(tokenSnap.data()?.tokens)
      ? tokenSnap.data()!.tokens
      : [];
    const tokens = tokenArr.map((t: any) => t?.token).filter(Boolean);

    const validTokens = tokens.filter((t: string) => EXPO_TOKEN_RE.test(t));
    for (const to of validTokens) {
      messages.push({
        to,
        sound: "default",
        title: "Subscription Expiry Reminder",
        body: msgBodyDynamic,
        data: { type: "subscription_expiry", daysLeft: diffDays },
        priority: "high",
      });
    }
  }

  if (messages.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        matchedUsers: qs.size,
        sent: 0,
        invalidCount,
      },
      { status: 404 }
    );
  }

  const tickets = await sendExpoMessages(messages);
  return NextResponse.json({
    ok: true,
    matchedUsers: qs.size,
    sent: messages.length,
    invalidCount,
    ticketCount: tickets.length,
  });
}
