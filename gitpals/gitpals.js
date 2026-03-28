"use strict";

// ── Pal activation messages ───────────────────────────────────────────────────
const PAL_LABELS = {
  gitpal: { name: "Gitpal",  msg: "Gitpal is now following your GitHub session! 👋" },
  gitpub: { name: "Gitpub",  msg: "Gitpub is scanning your repos… 📡" },
  gitpro: { name: "Gitpro",  msg: "Gitpro is reviewing your pages for upgrades 🛸" },
  gitpin: { name: "Gitpin",  msg: "Gitpin is triangulating your best content to pin ∆" },
};

// ── Pal activate buttons ─────────────────────────────────────────────────────
document.querySelectorAll(".pal-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const pal  = btn.dataset.pal;
    const card = btn.closest(".pal-card");
    showPalActivation(pal, card, btn);
  });
});

function showPalActivation(palId, card, btn) {
  const info = PAL_LABELS[palId] || { name: palId, msg: "Pal activated!" };

  // Visual feedback
  btn.textContent = "✓ Active";
  btn.disabled    = true;
  btn.style.opacity = ".7";

  // Add activation badge to card
  if (!card.querySelector(".activated-badge")) {
    const badge = document.createElement("div");
    badge.className = "activated-badge";
    badge.style.cssText =
      "background:#d1fae5;color:#065f46;font-size:11px;font-weight:700;"
      + "border-radius:20px;padding:3px 10px;text-align:center;";
    badge.textContent = "● Active";
    card.insertBefore(badge, btn);
  }

  // Open orb panel with a greeting
  openOrbPanel(info.msg);
}

// ── Floating Orb ─────────────────────────────────────────────────────────────
const floatingOrb = document.getElementById("floatingOrb");
const orbPanel    = document.getElementById("orbPanel");
const orbClose    = document.getElementById("orbClose");
const orbInput    = document.getElementById("orbInput");
const orbSend     = document.getElementById("orbSend");
const orbMessages = document.getElementById("orbMessages");

floatingOrb?.addEventListener("click", toggleOrbPanel);
floatingOrb?.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") toggleOrbPanel();
});
orbClose?.addEventListener("click", () => orbPanel?.classList.remove("open"));
orbSend?.addEventListener("click", sendOrbMessage);
orbInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") sendOrbMessage();
});

function toggleOrbPanel() {
  orbPanel?.classList.toggle("open");
  if (orbPanel?.classList.contains("open")) orbInput?.focus();
}

function openOrbPanel(msg) {
  orbPanel?.classList.add("open");
  addOrbMessage(msg, "bot");
  orbInput?.focus();
}

function addOrbMessage(text, type) {
  if (!orbMessages) return;
  const bubble = document.createElement("div");
  bubble.className = `demo-bubble ${type}`;
  bubble.textContent = text;
  orbMessages.appendChild(bubble);
  orbMessages.scrollTop = orbMessages.scrollHeight;
}

// Simple static responses for demo
const GITPAL_RESPONSES = [
  "Got it! I'll keep an eye on that for you.",
  "Scanning your repos now… 📡",
  "Great question! Let me triangulate the best option.",
  "I noticed 3 PRs waiting for your review. Want me to prioritize them?",
  "On it! I'll surface the top recommendation shortly.",
  "Signal received. Updating your pin vector now ∆",
  "Your repos look healthy. One suggestion: add a README to your latest project.",
  "I'm tracking that. I'll notify you when the signal changes.",
];

let responseIndex = 0;

function sendOrbMessage() {
  const text = orbInput?.value.trim();
  if (!text) return;
  addOrbMessage(text, "user");
  if (orbInput) orbInput.value = "";

  // Simulate typing delay
  setTimeout(() => {
    const response = GITPAL_RESPONSES[responseIndex % GITPAL_RESPONSES.length];
    responseIndex++;
    addOrbMessage(response, "bot");
  }, 600);
}
