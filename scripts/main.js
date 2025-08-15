const d = document;
const byId = (id) => d.getElementById(id);

const dEl = byId("d"), hEl = byId("h"), mEl = byId("m"), sEl = byId("s");
const target = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000);

function pad(n) { return n.toString().padStart(2, "0"); }

function tick() {
    const now = new Date();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    dEl.textContent = pad(days);
    hEl.textContent = pad(hours);
    mEl.textContent = pad(mins);
    sEl.textContent = pad(secs);
}

setInterval(tick, 1000);
tick();

byId("year").textContent = new Date().getFullYear();

// --- Toast logic ---
const toast = byId("toast");
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
}

// --- SQLite (SQL.js) for waitlist ---
let db;
async function initDb() {
    const SQL = await initSqlJs({ locateFile: () => "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm" });
    const savedDb = localStorage.getItem("medidesh_db");
    db = savedDb ? new SQL.Database(new Uint8Array(JSON.parse(savedDb))) : new SQL.Database();
    db.run(`CREATE TABLE IF NOT EXISTS waitlist (email TEXT PRIMARY KEY, created_at TEXT);`);
}

function saveDb() {
    const data = db.export();
    localStorage.setItem("medidesh_db", JSON.stringify([...data]));
}

// --- DOM Elements ---
const emailInput = byId("email");
const joinBtn = byId("join");
const notifyBtn = byId("notifyBtn");
const demoBtn = byId("demoBtn");

// --- Event listeners ---
initDb().then(() => {
    notifyBtn.addEventListener("click", () => { emailInput.focus(); });
    demoBtn.addEventListener("click", () => { showToast("Preview coming soon"); });

    joinBtn.addEventListener("click", () => {
        const v = (emailInput.value || "").trim().toLowerCase();
        const ok = /^\S+@\S+\.\S+$/.test(v);
        if (!ok) { emailInput.focus(); emailInput.select(); showToast("Enter a valid email"); return; }

        try {
            db.run("INSERT INTO waitlist (email, created_at) VALUES (?, ?)", [v, new Date().toISOString()]);
            saveDb();
            emailInput.value = "";
            showToast("Subscribed. We’ll keep you posted.");
        } catch (e) {
            if (e.message.includes("UNIQUE constraint failed")) showToast("Email already subscribed");
            else showToast("Error saving email");
        }
    });

    d.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && d.activeElement === emailInput) joinBtn.click();
    });
});
