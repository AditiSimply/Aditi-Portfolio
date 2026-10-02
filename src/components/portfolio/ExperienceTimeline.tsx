import React from 'react';
import PaperCrumple from '../ui/PaperCrumple';
import { ScrollFloat } from '../ui/ScrollFloat';

// High-resolution crisp SVG generator for CareerRaiser Internship Sheet
const createInternshipSvg = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900" shape-rendering="crispEdges" text-rendering="geometricPrecision">
    <rect width="700" height="900" rx="28" fill="#FFFDF9" stroke="#C3A47B" stroke-width="8"/>
    <rect x="24" y="24" width="652" height="852" rx="20" fill="none" stroke="#D1C4AC" stroke-width="2.5" stroke-dasharray="10 7"/>
    
    <!-- Top Watermark / Header -->
    <text x="56" y="86" font-family="ui-monospace, monospace" font-size="17" font-weight="800" fill="#C25E34">📅 JULY 2024 — PRESENT</text>
    <rect x="500" y="58" width="144" height="40" rx="20" fill="#E2EDE5" stroke="#3D624A" stroke-width="2.5"/>
    <text x="572" y="83" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#3D624A" text-anchor="middle">INTERNSHIP</text>
    
    <!-- Role Title -->
    <text x="56" y="152" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#0F172A">Web &amp; Design Intern</text>
    <text x="56" y="196" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#C25E34">@ CareerRaiser <tspan fill="#6E5A4D" font-weight="600">• Thane / Remote</tspan></text>
    
    <line x1="56" y1="230" x2="644" y2="230" stroke="#E5DDCB" stroke-width="3"/>
    
    <!-- Bullet Points -->
    <g transform="translate(0, 20)">
      <circle cx="70" cy="270" r="7" fill="#C25E34"/>
      <text x="96" y="276" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">Designed and created digital posters for events</text>
      <text x="96" y="306" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">and marketing campaigns.</text>
      
      <circle cx="70" cy="370" r="7" fill="#C25E34"/>
      <text x="96" y="376" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">Built and customized websites using Divi</text>
      <text x="96" y="406" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">(WordPress page builder).</text>
      
      <circle cx="70" cy="470" r="7" fill="#C25E34"/>
      <text x="96" y="476" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">Learned UI/UX design principles, website</text>
      <text x="96" y="506" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">layouts, and visual presentation.</text>
      
      <circle cx="70" cy="570" r="7" fill="#C25E34"/>
      <text x="96" y="576" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">Collaborated with team members, improving</text>
      <text x="96" y="606" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#0F172A">creativity, communication &amp; teamwork skills.</text>
    </g>
    
    <line x1="56" y1="675" x2="644" y2="675" stroke="#E5DDCB" stroke-width="3"/>
    
    <!-- Skills Chips -->
    <g transform="translate(56, 705)">
      <rect x="0" y="0" width="170" height="42" rx="12" fill="#FAF7F2" stroke="#C3A47B" stroke-width="2"/>
      <text x="85" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#0F172A" text-anchor="middle">Divi (WordPress)</text>
      
      <rect x="186" y="0" width="150" height="42" rx="12" fill="#FAF7F2" stroke="#C3A47B" stroke-width="2"/>
      <text x="261" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#0F172A" text-anchor="middle">UI/UX Design</text>
      
      <rect x="352" y="0" width="200" height="42" rx="12" fill="#FAF7F2" stroke="#C3A47B" stroke-width="2"/>
      <text x="452" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#0F172A" text-anchor="middle">Digital Poster Design</text>
    </g>

    <!-- Bottom Action Prompt -->
    <text x="350" y="820" font-family="ui-monospace, monospace" font-size="15" font-weight="800" fill="#C25E34" text-anchor="middle">✋ CLICK / HOLD / DRAG TO CRUMPLE THIS SHEET</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}bg/5.png)`,
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white/60 text-xs font-mono font-bold text-[#0F172A] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
            <span>05. EXPERIENCE</span>
          </div>

          <ScrollFloat
            containerClassName="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight drop-shadow-sm"
            animationDuration={0.8}
            ease="back.inOut(2)"
            stagger={0.025}
          >
            Internship Experience
          </ScrollFloat>

          <p className="text-sm sm:text-base text-[#0F172A] font-medium max-w-xl mx-auto font-sans leading-relaxed bg-white/60 p-2.5 rounded-xl backdrop-blur-md border border-white/40 shadow-xs">
            Professional learning and real-world exposure. Interactive 3D paper crumple — hold or drag to crumple and unfold the document.
          </p>
        </div>

        {/* Crisp Large PaperCrumple Document (Clean, No blurry background card) */}
        <div className="w-full flex justify-center items-center py-4">
          <PaperCrumple
            src={createInternshipSvg()}
            alt="CareerRaiser Web & Design Intern Dossier"
            width={520}
            height={660}
            sceneHeight={740}
            releaseBehavior="restore"
            crumpleAmount={0.85}
            crumpleDuration={0.55}
            releaseDuration={0.4}
            foldCount={6}
            foldSharpness={0.6}
            wrinkleDepth={0.65}
            creaseStrength={0.18}
            paperColor="#faf7f2"
            paperTexture={0.08}
            draggable
            returnToOrigin
          />
        </div>

      </div>
    </section>
  );
};

