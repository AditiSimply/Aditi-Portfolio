# Web Development, Design Mastery & Anti-AI-Slop Standard

Whenever creating, modifying, redesigning, or architecting ANY website or web application, Antigravity MUST adhere to this design doctrine and activate the relevant specialized design skills from the 429+ installed skills (`designskills.dev`, `nutlope/hallmark`, `Leonxlnx/taste-skill`).

---

## 1. Hallmark Anti-AI-Slop & Design Disciplines (`nutlope/hallmark`)
Hallmark enforces structural and visual variety, ensuring UIs look intentionally crafted rather than AI-generated:
- **Pre-Emit Self-Critique**: Score every UI against 6 weighted axes (Philosophy, Hierarchy, Execution, Specificity, Restraint, Variety). Any score < 3 triggers an immediate revision pass.
- **Honest Content & Zero Fabricated Metrics**: NEVER invent fake conversion rates (*"+47% conversion"*), imaginary user counts (*"trusted by 50,000+ teams"*), or fabricated client testimonials. Use real project data, a neutral dash `—`, or change the macrostructure to not rely on fake stats.
- **Locked Tokens (No Mid-Render Improvisation)**: Every color and font must reference a defined design token (`var(--color-accent)`, `var(--font-display)`). Inline hardcoded hex/OKLCH improvisation is prohibited.
- **Forbidden Re-drawn Fake Chrome**: Never draw mock browser address bars with traffic-light dots or fake phone/IDE borders. Let real content breathe inside clean `<figure>` framing with hairline borders.
- **Typography Purity (No Italic Headers)**: Headings and display titles must ALWAYS remain upright roman (`font-style: normal`). Italic words inside display titles are a telltale AI slop artifact. Reserve italics strictly for running body copy emphasis.
- **Mandatory 8-State Interactive Components**: Every interactive button, input, or control must implement distinct visual styling for all 8 states:
  1. Default
  2. `:hover`
  3. `:focus-visible`
  4. `:active`
  5. Disabled
  6. Loading (`data-state="loading"`)
  7. Error (`data-state="error"`)
  8. Success (`data-state="success"`)
- **Non-Negotiable Mobile Responsiveness**: Verified across `320px`, `375px`, `414px`, and `768px`. Set `overflow-x: clip` on `html` and `body` (never `hidden`), no two-line button text, and use `minmax(0, 1fr)` for image grid tracks.
- **Hallmark Verbs**:
  - `hallmark audit <target>`: Score target UI against anti-pattern checks and emit ranked punch list without modifying code.
  - `hallmark redesign <target>`: Surgically redesign the visual/interaction layer while strictly preserving existing business logic, routing, and data.
  - `hallmark study <screenshot | URL>`: Extract design DNA (macrostructure, typography pairing, color anchor) from reference material without pixel-copying.

---

## 2. Taste-Skill Suite Standards (`Leonxlnx/taste-skill`)
- **High-End Agency Craft (`high-end-visual-design`)**: Use restrained micro-borders (`border-white/10`, `border-black/5`), soft ambient halos, and deep neutral anchors (`#09090b`, `#0a0a0a`) instead of muddy drop shadows.
- **Full Output Enforcement (`full-output-enforcement`)**: Never truncate code with `// ... rest of code goes here`. Deliver complete, drop-in production files.
- **Surgical Redesign (`redesign-existing-projects`)**: When upgrading a project, audit the existing code, preserve user data structures, and elevate aesthetics without breaking functionality.
- **Brand Tokens & Assets (`brandkit`, `image-to-code`)**: Mirror brand identity with precision tokens and extract layout architecture from visual references.

---

## 3. Structural Variety & Macrostructures
Never fall into the standard AI rhythm (Hero → 3-Card Grid → CTA → Footer). Rotate intentionally across named macrostructures:
- **Bento Grid**: Asymmetric, modular information hierarchy with varied card spans.
- **Workbench / Split Studio**: Technical dual-pane layout, telemetry feeds, and interactive workspaces.
- **Editorial / Long Document**: Serif-led reading cadence, hanging marginalia, pull quotes, and chapter dividers.
- **Marquee Hero & Stat-Led**: Kinetic typography headers, real verified data strips, and edge-clipped media.
- **Framed Grid (`framed-grid-layout`)**: Thin guide lines, corner `+`/`L` brackets, and technical alignment.

---

## 4. Typography & Color Precision
- **Curated Google Font Pairings**:
  - *Tech / Density*: Plus Jakarta Sans + JetBrains Mono, Inter + Space Grotesk
  - *Editorial / Warmth*: Newsreader + Inter, Playfair Display + Outfit, Instrument Serif + Plus Jakarta Sans
  - *Futuristic*: Syne + Space Mono, Clash Display + Cabinet Grotesk
- **Harmonious Palettes**: Always use calibrated HSL / OKLCH color systems. Ban raw primary `#ff0000` / `#0000ff`. Ensure all text meets **WCAG 2.2 AA** contrast ratios (minimum 4.5:1 for body copy).

---

## 5. Motion, Physics & Micro-Interactions
- **Kinetic Feedback**: Magnetic cursor hover on primary buttons, 3D card tilt with mouse tracking, and fluid spring tabs.
- **Scroll Storytelling**: GSAP ScrollTrigger for pinned section reveals and word-by-word mask reveals.
- **3D & Canvas**: Three.js ambient environments, 3D Lanyard ID badges (`3d-lanyard-id-card`), WebGL lasers (`webgl-laser`), and interactive particle fields.
