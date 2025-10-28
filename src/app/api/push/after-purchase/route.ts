// app/api/push/after-purchase/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST(req: NextRequest) {
  initFirebaseAdmin();
  const db = getFirestore();

  let body: any;
  try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }

  const { toUserId, title, body: msgBody, data, sound = "default", priority = "default" } = body || {};
  if (!toUserId || !title || !msgBody) return badRequest("userId, title, body required");

  // tokenları userPushTokens/{userId}’dan çek
  const tokenDoc = await db.collection("userPushTokens").doc(toUserId).get();
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
    userId: toUserId,
    sent: validTokens.length,
    invalidCount: invalid.length,
    ticketCount: tickets.length,
  });
}