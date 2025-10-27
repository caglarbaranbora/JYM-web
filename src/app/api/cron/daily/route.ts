// app/api/push/daily/route.ts
import { NextResponse } from "next/server";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import { sendExpoMessages } from "@/lib/expoPush";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REQ_KEY_HEADER = "x-server-key";
const SERVER_KEY = process.env.SERVER_PUSH_KEY;
const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST() {
  // (opsiyonel) basit sunucu anahtarı koruması
  //   if (SERVER_KEY) {
  //     const k = req.headers.get(REQ_KEY_HEADER);
  //     if (k !== SERVER_KEY) return forbidden("Invalid or missing server key");
  //   }

  initFirebaseAdmin();
  const db = getFirestore();

  // userPushTokens koleksiyonundan tüm kullanıcı tokenlarını çek
  const qs = await db.collection("userPushTokens").get();

  const messages: { to: string; sound: "default"; title: string; body: string; data: any }[] = [];
  qs.forEach((doc) => {
    const data = doc.data() || {};
    const tokensArr = Array.isArray(data.tokens) ? data.tokens : [];
    for (const t of tokensArr) {
      const tok = t?.token;
      if (!tok || !EXPO_TOKEN_RE.test(tok)) continue; // sadece geçerli Expo token
      messages.push({
        to: tok,
        sound: "default",
        title: "Günün hatırlatması",
        body: "Bugünkü hedefini tamamladın mı?",
        data: { type: "daily" },
      });
    }
  });

  if (messages.length === 0) {
    return NextResponse.json({ ok: false, users: qs.size, ticketCount: 0, error: "No valid tokens" }, { status: 400 });
  }

  const tickets = await sendExpoMessages(messages);
  return NextResponse.json({ ok: true, users: qs.size, sent: messages.length, ticketCount: tickets.length });
}
