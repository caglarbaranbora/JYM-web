// lib/firebaseAdmin.ts
import { getApps, initializeApp, cert, applicationDefault } from "firebase-admin/app";

export function initFirebaseAdmin() {
  if (getApps().length) return;

  // 1) GOOGLE_APPLICATION_CREDENTIALS varsa applicationDefault çalışır
  // 2) Yoksa SERVICE_ACCOUNT_JSON (stringified) kullan
  const svc = process.env.SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.SERVICE_ACCOUNT_JSON)
    : null;

  initializeApp(
    svc
      ? { credential: cert(svc) }
      : { credential: applicationDefault() }
  );
}
