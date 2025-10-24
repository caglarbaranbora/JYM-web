import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { verifyToken } from "@clerk/backend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ====== ENV AYARLARI ======
const ENV_WHITELIST = process.env.ENV_WHITELIST?.split(",")
  .map((s) => s.trim())
  .filter(Boolean) ?? [""];
const ENV_WHITELIST_SET = new Set(ENV_WHITELIST);

const ALLOWED_ORIGINS =
  process.env.ALLOWED_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];
const ALLOW_NO_ORIGIN =
  (process.env.ALLOW_NO_ORIGIN ?? "true").toLowerCase() === "true";

function json(data: any, init?: ResponseInit) {
  const res = NextResponse.json(data, init);
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  res.headers.set(
    "Content-Security-Policy",
    "default-src 'none'; frame-ancestors 'none'; base-uri 'none';"
  );
  res.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()"
  );
  res.headers.set("Vary", "Origin, Authorization, Cookie");
  return res;
}

function unauthorized(message = "Unauthorized") {
  return json({ ok: false, error: message }, { status: 401 });
}
function forbidden(message = "Forbidden") {
  return json({ ok: false, error: message }, { status: 403 });
}
function methodNotAllowed() {
  return json(
    { ok: false, error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "GET" } }
  );
}
function badRequest(message = "Bad Request") {
  return json({ ok: false, error: message }, { status: 400 });
}

function isHttps(req: NextRequest) {
  const proto =
    req.headers.get("x-forwarded-proto") ||
    req.nextUrl.protocol.replace(":", "");
  return proto.toLowerCase() === "https";
}

function checkOrigin(req: NextRequest) {
  if (ALLOWED_ORIGINS.length === 0) return { ok: true };
  const origin = req.headers.get("origin") || "";
  if (!origin) return { ok: ALLOW_NO_ORIGIN, reason: "no-origin" };
  return { ok: ALLOWED_ORIGINS.includes(origin), origin };
}

function pickWhitelistedEnv() {
  const out: Record<string, string> = {};
  for (const k of ENV_WHITELIST_SET) {
    if (!k) continue;
    const v = process.env[k];
    if (v !== undefined) out[k] = v;
  }
  return out;
}

export async function GET(req: NextRequest) {
  if (req.method !== "GET") return methodNotAllowed();
  if (!isHttps(req) && process.env.NODE_ENV === "production")
    return forbidden("HTTPS required");

  const originCheck = checkOrigin(req);
  if (!originCheck.ok) return forbidden("Origin not allowed");

  // ---- Auth ----
  let userId: string | null = null;

  // 1) Bearer token kontrolü
  const authz = req.headers.get("authorization");
  const bearer = authz?.match(/^Bearer\s+(.+)/i)?.[1];

  try {
    if (bearer) {
      // Mobil için JWT doğrulama
      if (!process.env.CLERK_SECRET_KEY) {
        console.error("CLERK_SECRET_KEY not found");
        return unauthorized("Server configuration error");
      }
      console.log("Token received:", bearer.substring(0, 30) + "...");
      console.log("CLERK_SECRET_KEY exists:", !!process.env.CLERK_SECRET_KEY);
      // Token'ı doğrula
      const payload = await verifyToken(bearer, {
        secretKey: process.env.CLERK_SECRET_KEY,
      });
      console.log("Token verified successfully:", payload.sub);

      userId = payload.sub ?? null;

      // JWT template'den gelen custom claims'e erişebilirsiniz
      // const email = payload.email;
      // const metadata = payload.metadata;
    } else {
      // Cookie-based auth (web için)
      const a = await auth();
      userId = a.userId ?? null;
    }
  } catch (error) {
    console.error("Auth error:", {
      message: error instanceof Error ? error.message : "Unknown",
      stack: error instanceof Error ? error.stack : undefined,
    });
    return unauthorized("Authentication verification failed");
  }

  if (!userId) return unauthorized("No valid Clerk session");

  const env = pickWhitelistedEnv();
  if (Object.keys(env).length === 0) {
    return badRequest("ENV is empty or whitelist filtered everything");
  }

  return json({ ok: true, userId, env });
}
