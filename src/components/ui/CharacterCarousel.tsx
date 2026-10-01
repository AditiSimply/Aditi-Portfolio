import { useEffect, useMemo, useRef, type CSSProperties } from "react";

export type CharacterCarouselVariant = "filmstrip" | "wave";

export type CharacterCarouselProps = {
  variant?: CharacterCarouselVariant;
  speed?: number;
  scale?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
  onSelectMilestone?: (id: string) => void;
};

export const CHARACTER_CAROUSEL_DEFAULTS = {
  variant: "filmstrip",
  speed: 1,
  scale: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const satisfies Required<Pick<CharacterCarouselProps, "variant" | "speed" | "scale" | "opacity" | "hue" | "saturation" | "brightness">>;

// Canonical ThreeUI HTML source for character filmstrip with Academic records
const CHARACTER_FILMSTRIP_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Academic Character Filmstrip</title>
  <style>
    :root {
      color-scheme: light;
      font-family: "Arial Narrow", "Helvetica Neue", Arial, sans-serif;
      background: #d8c9ad;
    }
    * { box-sizing: border-box; }
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background: #d8c9ad;
      user-select: none;
    }
    .stage {
      --pointer-x: 50%;
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 400px;
      overflow: hidden;
      isolation: isolate;
      perspective: 1450px;
      cursor: ew-resize;
      touch-action: none;
      background:
        linear-gradient(90deg, rgba(80, 58, 31, 0.08) 1px, transparent 1px) 50% 0 / 25% 100%,
        repeating-linear-gradient(0deg, transparent 0, transparent 109px, rgba(72, 52, 30, 0.13) 110px, transparent 111px),
        radial-gradient(circle at var(--pointer-x) 48%, rgba(255, 246, 220, 0.78), transparent 34%),
        #d8c9ad;
    }
    .stage::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 5;
      pointer-events: none;
      opacity: 0.27;
      background:
        repeating-radial-gradient(circle at 12% 18%, rgba(71, 51, 30, 0.17) 0 0.5px, transparent 0.7px 4px),
        repeating-radial-gradient(circle at 78% 71%, rgba(255, 255, 255, 0.35) 0 0.5px, transparent 0.8px 5px);
      mix-blend-mode: multiply;
    }
    .stage::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 4;
      pointer-events: none;
      background: linear-gradient(90deg, rgba(84, 58, 29, 0.19), transparent 14%, transparent 86%, rgba(84, 58, 29, 0.19));
    }
    .deck {
      position: absolute;
      inset: 0;
      z-index: 2;
      transform-style: preserve-3d;
    }
    .card {
      --focus: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      width: clamp(160px, 20vw, 240px);
      aspect-ratio: 0.72;
      padding: 7px;
      overflow: hidden;
      border: 1px solid rgba(47, 34, 19, 0.42);
      border-radius: 6px;
      color: #f3e7ce;
      background: #e7d9bd;
      box-shadow:
        0 calc(10px + var(--focus) * 24px) calc(18px + var(--focus) * 36px) rgba(57, 38, 19, calc(0.2 + var(--focus) * 0.26)),
        inset 0 0 0 1px rgba(255, 255, 255, 0.64);
      appearance: none;
      outline: none;
      transform-style: preserve-3d;
      will-change: transform, opacity, filter;
      cursor: pointer;
    }
    .card::before {
      content: "";
      position: absolute;
      inset: 5px;
      z-index: 3;
      border: 1px solid rgba(28, 22, 14, calc(0.12 + var(--focus) * 0.12));
      pointer-events: none;
    }
    .portrait {
      position: absolute;
      inset: 7px 7px 25%;
      overflow: hidden;
      background: #171612;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px;
      text-align: center;
    }
    .portrait-badge {
      font-size: 28px;
      margin-bottom: 6px;
    }
    .portrait-title {
      color: #faf7f2;
      font-family: Georgia, serif;
      font-size: 13px;
      font-weight: bold;
      line-height: 1.2;
    }
    .portrait-score {
      margin-top: 6px;
      display: inline-block;
      padding: 3px 8px;
      background: #ce5d20;
      color: #ffffff;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      font-family: monospace;
    }
    .footer {
      position: absolute;
      right: 7px;
      bottom: 7px;
      left: 7px;
      height: calc(25% - 7px);
      display: grid;
      grid-template-columns: 32px 1fr;
      align-items: center;
      gap: 8px;
      padding: 8px;
      color: #f0dfc2;
      background: #171612;
      text-align: left;
    }
    .index {
      display: grid;
      width: 28px;
      aspect-ratio: 1;
      place-items: center;
      border: 1px solid #ce5d20;
      border-radius: 50%;
      color: #d86724;
      font: 700 10px/1 ui-monospace, monospace;
    }
    .meta { min-width: 0; }
    .name, .role {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .name {
      color: #f3e6cc;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    .role {
      margin-top: 3px;
      color: #d46a27;
      font-size: 8px;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
  </style>
</head>
<body>
  <main class="stage" id="stage">
    <div class="deck" id="deck"></div>
  </main>
  <script>
    (function() {
      var records = [
        { id: "ssc-school", idx: "01", name: "CBSE SSC", role: "Lok Puram Public • 2022", score: "90.40%", icon: "🏫", title: "Secondary School Certificate" },
        { id: "vpm-diploma", idx: "02", name: "DIPLOMA CE", role: "V.P.M's Poly • 2022-2025", score: "91.40%", icon: "🎓", title: "Diploma in Computer Eng." },
        { id: "btech-ce", idx: "03", name: "B.TECH CE", role: "VIT Mumbai • 2025-2028", score: "Active", icon: "🏛️", title: "B.Tech in Computer Eng." }
      ];

      var deck = document.getElementById("deck");
      var stage = document.getElementById("stage");
      var offset = 0;
      var targetOffset = 0;
      var isDragging = false;
      var startX = 0;

      function render() {
        deck.innerHTML = "";
        var total = records.length;
        records.forEach(function(rec, i) {
          var btn = document.createElement("button");
          btn.className = "card";
          
          var diff = (i - offset + total * 10) % total;
          if (diff > total / 2) diff -= total;
          
          var dist = Math.abs(diff);
          var focus = Math.max(0, 1 - dist * 0.8);
          var rotY = diff * -35;
          var transX = diff * 180;
          var transZ = -dist * 160;

          btn.style.transform = "translate(-50%, -50%) translateX(" + transX + "px) translateZ(" + transZ + "px) rotateY(" + rotY + "deg)";
          btn.style.setProperty("--focus", focus);
          btn.style.opacity = Math.max(0.2, 1 - dist * 0.4);

          btn.innerHTML = '<div class="portrait">' +
            '<div class="portrait-badge">' + rec.icon + '</div>' +
            '<div class="portrait-title">' + rec.title + '</div>' +
            '<div class="portrait-score">' + rec.score + '</div>' +
            '</div>' +
            '<div class="footer">' +
            '<div class="index">' + rec.idx + '</div>' +
            '<div class="meta">' +
            '<span class="name">' + rec.name + '</span>' +
            '<span class="role">' + rec.role + '</span>' +
            '</div></div>';

          btn.onclick = function() {
            targetOffset = i;
            window.parent.postMessage({ type: "select-milestone", milestoneId: rec.id }, "*");
          };

          deck.appendChild(btn);
        });
      }

      function loop() {
        offset += (targetOffset - offset) * 0.12;
        render();
        requestAnimationFrame(loop);
      }

      stage.onpointerdown = function(e) {
        isDragging = true;
        startX = e.clientX;
      };

      stage.onpointermove = function(e) {
        if (!isDragging) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 40) {
          targetOffset += dx > 0 ? -1 : 1;
          if (targetOffset < 0) targetOffset = records.length - 1;
          if (targetOffset >= records.length) targetOffset = 0;
          startX = e.clientX;
        }
      };

      stage.onpointerup = function() { isDragging = false; };
      loop();
    })();
  </script>
</body>
</html>`;

function buildFocusedDocument() {
  const focusStyles = `<style data-character-carousel-focus>
:root { --character-carousel-scale: 1; }
html, body, .stage { width: 100%; height: 100%; margin: 0; overflow: hidden; }
.stage { min-height: 0 !important; }
.deck { transform: scale(var(--character-carousel-scale)); transform-origin: 50% 50%; }
</style>`;

  return CHARACTER_FILMSTRIP_HTML.replace("</head>", `${focusStyles}</head>`);
}

export function CharacterCarousel({
  opacity = CHARACTER_CAROUSEL_DEFAULTS.opacity,
  hue = CHARACTER_CAROUSEL_DEFAULTS.hue,
  saturation = CHARACTER_CAROUSEL_DEFAULTS.saturation,
  brightness = CHARACTER_CAROUSEL_DEFAULTS.brightness,
  className = "",
  style,
  onSelectMilestone,
}: CharacterCarouselProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const source = useMemo(() => buildFocusedDocument(), []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "select-milestone") {
        onSelectMilestone?.(event.data.milestoneId);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSelectMilestone]);

  return (
    <div
      className={`threeui-background character-carousel character-carousel--filmstrip ${className}`}
      style={{
        position: "relative",
        width: "100%",
        height: "440px",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#d8c9ad",
        pointerEvents: "auto",
        ...style,
      }}
    >
      <iframe
        ref={iframeRef}
        title="Interactive character filmstrip"
        srcDoc={source}
        sandbox="allow-scripts"
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#d8c9ad",
          opacity: Math.min(1, Math.max(0.05, opacity)),
          filter: `hue-rotate(${hue}deg) saturate(${saturation}) brightness(${brightness})`,
        }}
      />
    </div>
  );
}

export function CharacterFilmstrip(props: CharacterCarouselProps) {
  return <CharacterCarousel {...props} variant="filmstrip" />;
}
