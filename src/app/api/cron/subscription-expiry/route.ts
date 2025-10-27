import { NextRequest, NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

function json(d: any, init?: ResponseInit) { return NextResponse.json(d, init); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

export async function POST(req: NextRequest) {
  initFirebaseAdmin();
  const db = getFirestore();

  // ---- body (mesaj içeriği API’den gelir)
  let body: any; try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }
  const {
    title,
    body: msgBody,
    data,
    sound = "default",
    priority = "default"
  } = body || {};
  if (!title || !msgBody) return badRequest("title and body required in request");

  // ---- query param’lar (testi kolaylaştırır)
  const url = new URL(req.url);
  const daysAhead = Number(url.searchParams.get("daysAhead") ?? 2);       // varsayılan: 2 gün sonra
  const windowHours = Number(url.searchParams.get("windowHours") ?? 24);  // pencere: 24 saat
  const onlyPremium = url.searchParams.get("onlyPremium") !== "false";    // varsayılan: true
  const limitUsers = Number(url.searchParams.get("limitUsers") ?? 0);     // 0 = limitsiz
  const dryRun = url.searchParams.get("dryRun") === "true";

  // ---- zaman aralığı (daysAhead başlangıcı + windowHours)
  const now = new Date();
  const windowStart = new Date(now.getTime() + daysAhead * 24 * 3600 * 1000);
  const windowEnd = new Date(windowStart.getTime() + windowHours * 3600 * 1000);

  // Firestore Timestamp’e çevir
  const tsStart = Timestamp.fromDate(windowStart);
  const tsEnd = Timestamp.fromDate(windowEnd);

  // ---- users sorgusu
    let query = db
    .collection("users")
    .where("revenueCat.activeUntil", ">=", tsStart)
    .where("revenueCat.activeUntil", "<=", tsEnd);

    const qs = await query.get();
    const docs = qs.docs.filter(d => d.data()?.revenueCat?.isPremium === true);

  // ---- mesajları hazırla
  const messages: {
    to: string; sound: "default"; title: string; body: string;
    data: any; priority: "default" | "high";
  }[] = [];

  for (const doc of docs) {
    const u = doc.data() || {};
    const untilISO = u?.revenueCat?.activeUntil?.toDate?.()?.toISOString?.() ?? null;

    // token’ları userPushTokens/{userId}’dan çek
    const tokenDoc = await db.collection("userPushTokens").doc(doc.id).get();
    const tokenArr = Array.isArray(tokenDoc.data()?.tokens) ? tokenDoc.data()!.tokens : [];
    const tokens: string[] = tokenArr.map((t: any) => t?.token).filter(Boolean);

    for (const to of tokens) {
      if (!EXPO_TOKEN_RE.test(to)) continue; // Expo token formatı
      messages.push({
        to,
        sound: "default",
        title,
        body: msgBody,
        data: { ...data, type: "subscription_expiry", subscriptionEnd: untilISO },
        priority: (priority === "high" ? "high" : "default"),
      });
    }
  }

  if (messages.length === 0) {
    return json({
      ok: false,
      matchedUsers: qs.size,
      selectedUsers: docs.length,
      preview: dryRun ? "no messages to send" : undefined
    }, { status: 404 });
  }

  // ---- dryRun: gönderme, sadece önizleme
  if (dryRun) {
    return json({
      ok: true,
      matchedUsers: qs.size,
      selectedUsers: docs.length,
      previewCount: messages.length,
      sample: messages.slice(0, 3)
    });
  }

  // ---- gönderim
  const tickets = await sendExpoMessages(messages);
  return json({
    ok: true,
    matchedUsers: qs.size,
    selectedUsers: docs.length,
    sentMessages: messages.length,
    ticketCount: tickets.length,
    window: { start: windowStart.toISOString(), end: windowEnd.toISOString() }
  });
}
