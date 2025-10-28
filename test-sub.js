// test-subscription-expiry.mjs
import fetch from "node-fetch";

const API_URL =
  process.env.API_URL ||
  "http://localhost:3000/api/cron/subscription-expiry";

async function callApi() {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        title: "Abonelik Testi ⏳",
        body: "Bu bir test bildirimi — 2 gün içinde yenilemeyi unutma!",
        data: { type: "subscription_expiry_test", promo: "test123" },
        sound: "default",
        priority: "high",
      }),
    });
    const text = await res.text();
    let data; try { data = JSON.parse(text); } catch { data = text; }

    console.log("----", new Date().toLocaleTimeString(), "----");
    console.log("status:", res.status);
    console.log(typeof data === "string" ? data : JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Hata:", err?.message || err);
  }
}

(async () => {
  console.log("🚀 5 saniyede bir subscription-expiry DRY-RUN testi başlıyor... (Ctrl+C ile durdur)");
  while (true) {
    await callApi();
    await new Promise(r => setTimeout(r, 5000));
  }
})();
