export type EnvConfig = Record<string, string>;

export async function fetchEnvConfig(signal?: AbortSignal): Promise<EnvConfig> {
  const res = await fetch("/api/token", {
    method: "GET",
    headers: { "Accept": "application/json" },
    cache: "no-store",
    signal,
  });

  // 401 veya 403 gibi durumları yakala
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const err = await res.json();
      msg = err?.error || msg;
    } catch {}
    throw new Error(msg);
  }

  const data = await res.json();
  return data.env ?? {};
}