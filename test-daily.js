// test-daily.mjs
const API_URL = process.env.API_URL || "http://localhost:3000/api/cron/daily";

async function callApi() {
  try {
    const res = await fetch(API_URL, { method: "GET", headers: { "Accept": "application/json" } });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    console.log("----", new Date().toLocaleTimeString(), "----");
    console.log("status:", res.status);
    console.log(typeof data === "string" ? data : JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Hata:", err && err.message ? err.message : err);
  }
}

(async () => {
  console.log("🚀 5 saniyede bir cron test başlıyor... (durdurmak için Ctrl+C)");
  while (true) {
    await callApi();
    // 5 saniye bekle
    await new Promise((r) => setTimeout(r, 5000));
  }
})();
