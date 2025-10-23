import { NextRequest, NextResponse } from "next/server";
import { getAuth, clerkClient as _clerkClientFn } from "@clerk/nextjs/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ====== ENV AYARLARI ======
const ENV_WHITELIST =
  (process.env.ENV_WHITELIST?.split(",").map((s) => s.trim()).filter(Boolean)) ??
  [""];
const ENV_WHITELIST_SET = new Set(ENV_WHITELIST);

const ALLOWED_ORIGINS =
  process.env.ALLOWED_ORIGINS?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];
const ALLOW_NO_ORIGIN = (process.env.ALLOW_NO_ORIGIN ?? "true").toLowerCase() === "true";

function pickEnvFromSet() {
  const obj: Record<string, string> = {};
  for (const key of ENV_WHITELIST_SET) {
    const v = process.env[key];
    if (typeof v === "string") obj[key] = v;
  }
  return obj;
}

function json(data: any, init?: ResponseInit) {
  const res = NextResponse.json(data, init);
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  res.headers.set("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none';");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  res.headers.set("Vary", "Origin, Authorization");
  return res;
}

function unauthorized(message = "Unauthorized") { return json({ ok: false, error: message }, { status: 401 }); }
function forbidden(message = "Forbidden") { return json({ ok: false, error: message }, { status: 403 }); }
function methodNotAllowed() { return json({ ok: false, error: "Method Not Allowed" }, { status: 405, headers: { "Allow": "GET" } }); }
function badRequest(message = "Bad Request") { return json({ ok: false, error: message }, { status: 400 }); }

function isHttps(req: NextRequest) {
  const proto = req.headers.get("x-forwarded-proto") || req.nextUrl.protocol.replace(":", "");
  return proto.toLowerCase() === "https";
}

function checkOrigin(req: NextRequest) {
  if (ALLOWED_ORIGINS.length === 0) return { ok: true };
  const origin = req.headers.get("origin") || "";
  if (!origin) return { ok: ALLOW_NO_ORIGIN, reason: "no-origin" };
  return { ok: ALLOWED_ORIGINS.includes(origin), origin };
}

export async function GET(req: NextRequest) {
  if (req.method !== "GET") return methodNotAllowed();
  if (!isHttps(req) && process.env.NODE_ENV === "production") return forbidden("HTTPS required");

  const originCheck = checkOrigin(req);
  if (!originCheck.ok) return forbidden("Origin not allowed");

  let auth;
  try { auth = getAuth(req); } catch { return unauthorized("Authentication middleware error"); }
  const { userId } = auth;
  if (!userId) return unauthorized("No valid Clerk session");

  const data = pickEnvFromSet();
  if (Object.keys(data).length === 0) return badRequest("Empty ENV_WHITELIST or keys missing");

  return json({ ok: true, env: data });
}

/* Örnek kullanım:

1. Cookie Tabanlı (Tavsiye Edilen):
await fetch("/api/token");

2. Bearer Token Tabanlı:
const token = await getToken();
await fetch("/api/token", { headers: { Authorization: `Bearer ${token}` } });

*/