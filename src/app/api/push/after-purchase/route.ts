// app/api/push/after-purchase/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }
function forbidden(m = "Forbidden") { return json({ ok: false, error: m }, { status: 403 }); }

const REQ_KEY_HEADER = "x-server-key";
const SERVER_KEY = process.env.SERVER_PUSH_KEY;
const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST(req: NextRequest) {
  // basit güvenlik anahtarı
//   if (SERVER_KEY) {
//     const k = req.headers.get(REQ_KEY_HEADER);
//     if (k !== SERVER_KEY) return forbidden("Invalid or missing server key");
//   }

  initFirebaseAdmin();
  const db = getFirestore();

  let body: any;
  try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }

  const { userId, title, body: msgBody, data, sound = "default", priority = "default" } = body || {};
  if (!userId || !title || !msgBody) return badRequest("userId, title, body required");

  // tokenları userPushTokens/{userId}’dan çek
  const tokenDoc = await db.collection("userPushTokens").doc(userId).get();
  if (!tokenDoc.exists) return badRequest("No token document for user");

  const tokenArr = Array.isArray(tokenDoc.data()?.tokens) ? tokenDoc.data()!.tokens : [];
  const tokens: string[] = tokenArr.map((t: any) => t?.token).filter(Boolean);
  if (tokens.length === 0) return badRequest("No tokens for user");

  const validTokens = tokens.filter((t) => EXPO_TOKEN_RE.test(t));
  const invalid = tokens.filter((t) => !EXPO_TOKEN_RE.test(t));
  if (validTokens.length === 0) return badRequest(`All tokens invalid: ${invalid.join(", ")}`);

  const messages = validTokens.map((to) => ({
    to,
    sound: sound as "default" | "default",
    title,
    body: msgBody,
    data: data || {},
    priority: (priority === "high" ? "high" : "default") as "default" | "high",
  }));

  const tickets = await sendExpoMessages(messages);

  return json({
    ok: true,
    userId,
    sent: validTokens.length,
    invalidCount: invalid.length,
    ticketCount: tickets.length,
  });
}