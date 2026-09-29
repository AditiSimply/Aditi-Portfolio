# Web Development & Design Mastery Standard

Whenever creating, modifying, redesigning, or architecting ANY website or web application, Antigravity MUST apply this design doctrine and activate the relevant specialized design skills from the 429 installed skills (`designskills.dev`).

---

## 1. Core Visual Taste & Anti-Slop Principles
- **No Generic AI Slop**: Never produce cookie-cutter, templated, or sterile interfaces (e.g. generic white cards with default drop shadows, centered purple gradient pill buttons, or boring 3-column feature grids).
- **Intentional Aesthetic Direction**: For every website, intentionally select and commit to an aesthetic style from the installed skills library:
  - *High-End Agency Craft* (`high-end-visual-design`, `taste-and-craft`)
  - *Dark Glass & Laser* (`dark-glass-clean-layout`, `blue-laser-clean-glass-layout`, `webgl-laser`)
  - *Editorial & Parchment* (`claude`, `book-serif-index`, `terracotta`, `editorial-tech`)
  - *Minimalist Density* (`codex`, `minimalist-ui`, `minimal`, `clean`)
  - *Tactile & Skeuomorphic* (`high-contrast-skeuomorphic-clean`, `skeuomorphic-ui`, `claymorphism`)
  - *Retro / Cyber* (`retro-ui`, `sega`, `matrix`, `dither-laser-dark-mode`)
  - *Brand Mirroring* (`SpaceZephyr/brand-design-md` for Apple, Stripe, Notion, Linear, Claude, Vercel)
- **Micro-Borders & Deliberate Lighting**: Use fine border treatments (`border-white/10`, `border-black/5`, or gradient border masks) instead of heavy solid borders or muddy drop shadows. Use restrained radial lighting or soft ambient halos.

---

## 2. Typography & Layout Hierarchy
- **Modern Curated Typography**: Never use browser default fonts or uninspired generic type. Always import premium fonts from Google Fonts:
  - *Tech / High-Density*: Inter, JetBrains Mono, Space Grotesk, Plus Jakarta Sans
  - *Editorial / Warmth*: Newsreader, Playfair Display, Cinzel, Instrument Serif
  - *Futuristic / Geometric*: Outfit, Syne, Clash Display, Cabinet Grotesk
- **Fluid Structural Framing**:
  - Implement modular **Bento Grids** (`bento`) with asymmetrical card spans.
  - Use **Framed Grid Layouts** (`framed-grid-layout`) with thin guide lines and corner bracket markers (`+` or `L`).
  - Use nested container shells (`nested-container-clean-agency`) for depth and rhythm.

---

## 3. Motion, Physics & Micro-Interactions
- **Smooth, Intentional Motion**: Every interactive element must feel alive, responsive, and tactile.
- **Scroll Storytelling**: Use GSAP ScrollTrigger (`gsap-scrolltrigger-storytelling`) or Lenis smooth scroll for pinned section transitions, masked word reveals, and progressive storytelling.
- **Micro-Animations**:
  - Magnetic hover pull on primary CTA buttons.
  - Interactive 3D tilt cards on cursor movement.
  - Fluid spring tabs and micro-switches.
  - Live pulse indicators on status badges.
- **Physics & 3D WebGL**:
  - Incorporate Three.js scenes, interactive WebGL lasers, particle fields, 3D ID lanyards (`3d-lanyard-id-card`), or interactive globes (`cobejs`, `globe-gl`) whenever visual impact is needed.

---

## 4. Color Calibration & Contrast
- Never use raw primary colors (pure red `#ff0000`, pure green `#00ff00`, pure blue `#0000ff`).
- Use curated HSL or OKLCH harmonious palettes with deep neutral anchors (`#09090b`, `#0f172a`, `#18181b` for dark modes; `#fbf9f5`, `#f8fafc` for warm light modes).
- Ensure all text and interactive elements satisfy **WCAG 2.2 AA** contrast ratios (minimum 4.5:1 for body copy, 3:1 for large display text and UI controls).

---

## 5. Engineering Standards & Zero-Placeholders
- **No Placeholders**: Never use "Lorem ipsum", "John Doe", or generic dummy data. Generate realistic, domain-specific copy and generate working graphics or icons via SVG / Lucide / AI images.
- **Responsive by Design**: Test and verify flawlessly across Mobile (375px+), Tablet (768px+), Laptop (1024px+), and Desktop (1440px+).
- **Accessible & Semantic**: Single `<h1>` per page, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), keyboard accessible focus rings, and proper ARIA attributes.
- **Production Validation**: Always test build correctness (`npm run build`), verify zero console errors, and ensure fluid performance (60fps, low layout shift).
