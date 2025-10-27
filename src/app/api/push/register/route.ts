import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { verifyToken } from "@clerk/backend";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { initFirebaseAdmin } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(data: any, init?: ResponseInit) {
    return NextResponse.json(data, init);
}
function unauthorized(m = "Unauthorized") { return json({ ok: false, error: m }, { status: 401 }); }
function forbidden(m = "Forbidden") { return json({ ok: false, error: m }, { status: 403 }); }
function badRequest(m = "Bad Request") { return json({ ok: false, error: m }, { status: 400 }); }

const EXPO_TOKEN_RE = /^ExponentPushToken\[[\w-]+\]$/;

export async function POST(req: NextRequest) {
    // ---- Auth: Bearer -> mobil, Cookie -> web
    let userId: string | null = null;
    const authz = req.headers.get("authorization");
    const bearer = authz?.match(/^Bearer\s+(.+)/i)?.[1];

    try {
        if (bearer) {
            if (!process.env.CLERK_SECRET_KEY) return unauthorized("Server configuration error");
            const payload = await verifyToken(bearer, { secretKey: process.env.CLERK_SECRET_KEY });
            userId = payload.sub ?? null;
        } else {
            const a = await auth();
            userId = a.userId ?? null;
        }
    } catch {
        return unauthorized("Authentication verification failed");
    }
    if (!userId) return unauthorized("No valid Clerk session");

    let body: any;
    try { body = await req.json(); } catch { return badRequest("Invalid JSON body"); }

    const { pushToken, deviceId, platform } = body || {};
    if (!pushToken || typeof pushToken !== "string") return badRequest("pushToken is required");

    // Sadece Expo kullanıyorsan açık bırak; FCM/APNS destekleyeceksen gevşet
    if (!EXPO_TOKEN_RE.test(pushToken)) return badRequest("Invalid Expo push token format");

    const safePlatform =
        typeof platform === "string" && ["ios", "android", "web"].includes(platform.toLowerCase())
            ? platform.toLowerCase()
            : "unknown";

    try {
        initFirebaseAdmin();
        const db = getFirestore();
        const docRef = db.collection("users").doc(userId);

        await db.runTransaction(async (tx) => {
            const snap = await tx.get(docRef);

            type TokenRec = { token: string; deviceId?: string; platform?: string; updatedAt: any };
            let pushTokens: TokenRec[] = [];
            if (snap.exists) {
                const data = snap.data() || {};
                pushTokens = Array.isArray(data.pushTokens) ? data.pushTokens : [];
            }

            const idxByDevice = deviceId ? pushTokens.findIndex((t) => t.deviceId === deviceId) : -1;
            const idxByToken = pushTokens.findIndex((t) => t.token === pushToken);

            const now = FieldValue.serverTimestamp();

            if (idxByDevice >= 0) {
                pushTokens[idxByDevice] = { ...pushTokens[idxByDevice], token: pushToken, platform: safePlatform, updatedAt: now };
            } else if (idxByToken >= 0) {
                pushTokens[idxByToken] = { ...pushTokens[idxByToken], deviceId: deviceId ?? pushTokens[idxByToken].deviceId, platform: safePlatform, updatedAt: now };
            } else {
                pushTokens.push({ token: pushToken, deviceId, platform: safePlatform, updatedAt: now });
            }

            pushTokens = pushTokens.filter((t) => typeof t.token === "string" && t.token.length > 0);

            tx.set(docRef, { userId, pushTokens, lastPushTokenAt: now }, { merge: true });
        });

        return json({ ok: true, userId, saved: true });
    } catch (e) {
        console.error("Firestore error:", e);
        return json({ ok: false, error: "Failed to save token" }, { status: 500 });
    }
}

export async function GET() {
    return forbidden("Use POST");
}
