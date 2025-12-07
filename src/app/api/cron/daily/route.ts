// app/api/push/daily/route.ts
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

const DAILY_MESSAGES = [
  "Did you complete your daily task today?",
  "Stay consistent — finish your daily goal!",
  "A small step today brings big results tomorrow!",
  "Your daily progress matters. Don’t forget your task!",
  "Keep the streak alive! Did you complete today's task?",
  "Success is built daily — have you taken your step today?",

  "Don't forget to scan your meal today — let's keep your macros on track!",
  "Your macros matter! Did you scan your food with the AI scanner today?",
  "Fuel your body right — scan your meal and check your macros!",
  "Quick reminder: Scan your dish with AI to keep your daily nutrition balanced.",
  "Your meal scan is missing today — want to upload your plate now?",
  "Tracking your macros makes a big difference. Did you scan your food today?",
  "Healthy habits start with awareness. Scan your meal and see your nutrition breakdown!",
  "Consistency is key — scan your meals to stay aligned with your goals.",
];

function getRandomMessage() {
  return DAILY_MESSAGES[Math.floor(Math.random() * DAILY_MESSAGES.length)];
}

export async function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const isCron = ua.includes("vercel-cron");

  if (!isCron) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

  const globalTokens = new Set<string>();

  qs.forEach((doc) => {
    const data = doc.data() || {};
    const tokensArr = Array.isArray(data.tokens) ? data.tokens : [];

    for (const t of tokensArr) {
      const tok = t?.token;
      if (!tok || !EXPO_TOKEN_RE.test(tok)) continue;

      globalTokens.add(tok);
    }
  });

  globalTokens.forEach((tok) => {
    const randomBody = getRandomMessage();

    messages.push({
      to: tok,
      sound: "default",
      title: "Daily Reminder",
      body: randomBody,
      data: { type: "daily" },
    });
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