// ============================================================
// INEGI Daily Sync Script
// Run with: node scripts/sync-inegi.mjs
// Schedule with Windows Task Scheduler or cron
// ============================================================

const SITE_URL = process.env.SITE_URL || "http://localhost:9100";
const TOKEN = process.env.INEGI_API_TOKEN || "";

async function syncData() {
  console.log("🔄 Starting INEGI data sync...");
  console.log(`   Target: ${SITE_URL}/api/inegi/sync`);
  console.log(`   Time: ${new Date().toISOString()}`);

  try {
    const res = await fetch(`${SITE_URL}/api/inegi/sync`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(`✅ ${data.message}`);

    if (data.results) {
      const synced = data.results.filter((r) => r.status === "synced");
      const failed = data.results.filter((r) => r.status === "error");

      if (failed.length > 0) {
        console.log(`\n⚠️  Failed indicators:`);
        failed.forEach((f) => console.log(`   - ${f.id}: ${f.error}`));
      }

      console.log(`\n📊 Results: ${synced.length} synced, ${failed.length} failed`);
    }
  } catch (error) {
    console.error("❌ Sync failed:", error.message);
    process.exit(1);
  }
}

syncData();
