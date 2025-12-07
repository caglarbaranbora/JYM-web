// app/api/push/daily/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";
import crypto from "crypto";

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

function verifyCronSignature(signature: string | null) {
  const secret = process.env.VERCEL_CRON_SECRET;
  if (!secret || !signature) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update("") // GET isteklerinde body boş
    .digest("hex");

  return signature === expected;
}

export async function GET(req: NextRequest) {
  const signature = req.headers.get("x-vercel-cron-signature");
  if (!verifyCronSignature(signature)) {
    return forbidden("Invalid or missing cron signature");
  }

  initFirebaseAdmin();
  const db = getFirestore();

  const qs = await db.collection("userPushTokens").get();

  const messages: {
    to: string;
    sound: "default";
    title: string;
    body: string;
    data: any;
  }[] = [];
  qs.forEach((doc) => {
    const data = doc.data() || {};
    const tokensArr = Array.isArray(data.tokens) ? data.tokens : [];
    for (const t of tokensArr) {
      const tok = t?.token;
      console.log(tok);
      if (!tok || !EXPO_TOKEN_RE.test(tok)) continue; // sadece geçerli Expo token
      messages.push({
        to: tok,
        sound: "default",
        title: "Daily Reminder",
        body: "Did you complete your daily task today?",
        data: { type: "daily" },
      });
    }
  });

  if (messages.length === 0) {
    return NextResponse.json(
      { ok: false, users: qs.size, ticketCount: 0, error: "No valid tokens" },
      { status: 400 }
    );
  }

  const tickets = await sendExpoMessages(messages);
  return NextResponse.json({
    ok: true,
    users: qs.size,
    sent: messages.length,
    ticketCount: tickets.length,
  });
}

export async function POST(req: NextRequest) {
  return GET(req);
}