# Atari 2026

Two web projects in one repo.

## Projects

### 📱 Fit to Android — Microsoft Office Add-in

A taskpane add-in for Microsoft Word, Excel, and PowerPoint that adds a **"Fit to Android"** button alongside the existing *Fit to Desktop* workflow.

**Features**
- Device presets: Phone, Phone XL, Tablet, Tablet XL, Foldable, Custom
- Adjusts page margins, font sizes, and inline image widths for Android dp resolution
- Landscape / portrait toggle
- "Fit to Desktop" restore and "Reset to Original" actions
- Live mini device preview in the taskpane

**Files**
```
fit-to-android/
  manifest.xml      — Office Add-in manifest
  taskpane.html     — Taskpane UI
  taskpane.css      — Styles
  taskpane.js       — Logic (Office.js + Word API)
  commands.html     — Ribbon command placeholder
```

**Sideload** the add-in in Word (Desktop) via *Insert → Add-ins → Upload My Add-in* and select `fit-to-android/manifest.xml`.

---

### 🛸 Gitpals — GitHub AI Companions

Four floating orb AI companions designed to live on GitHub pages as a browser extension or GitHub App.

| Orb | Symbol | Role |
|-----|--------|------|
| **Gitpal**  | GP  | Session companion — follows you, suggests pinned content & professional moves |
| **Gitpub**  | 📡  | Publisher — checks repos are live, emits file signals, builds with tools |
| **Gitpro**  | 🛸  | Quantum mechanic — top-level page edits, styling, design & assimilations |
| **Gitpin**  | ∆   | Vector triangulator — ranks and pins the best issues, PRs, and content |

**Files**
```
gitpals/
  index.html    — Gitpals landing page & live orb demo
  gitpals.css   — Styles
  gitpals.js    — Orb interactions & simulated pal responses
```

---

## Root

`index.html` — Landing page that links to both projects.
