import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS } from '../../data/achievements';
import type { AchievementItem } from '../../data/achievements';
import { FlipCard } from '../ui/FlipCard';
import { ScrollFloat } from '../ui/ScrollFloat';

export const AchievementCabinet: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  const triggerTastefulCelebration = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 75,
      origin: { x, y },
      colors: ['#D4AF37', '#E06338', '#FFFFFF', '#60A5FA', '#34D399'],
      disableForReducedMotion: true,
    });
  };

  return (
    <section 
      id="achievements" 
      className="relative py-36 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url(/bg/7.png)',
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching reference Panel 7 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-medium text-[#E5D7BF] backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06338] animate-pulse" />
              <span>07. HONORS & RECOGNITION</span>
            </div>

            <ScrollFloat
              containerClassName="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF8F5] tracking-tight"
              animationDuration={0.8}
              ease="back.inOut(2)"
              stagger={0.025}
            >
              Achievements
            </ScrollFloat>

            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-sans leading-relaxed">
              Recognitions that motivate me to keep growing. Click or drag any 3D card below to flip and reveal full verification details.
            </p>
          </div>

          <button
            onClick={() => setSelectedAchievement(ACHIEVEMENTS[0])}
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-2 hover:-translate-y-0.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E06338]" />
          </button>
        </div>

        {/* Exhibition Museum Gallery Stage */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/10 bg-[#0B0F1A]/80 backdrop-blur-sm p-6 sm:p-10 lg:p-12">
          
          {/* Twin Illuminated Glass Showcase Pedestals with React Bits 3D FlipCard */}
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10 py-6">
            
            {/* ================= Showcase 1: Internal SIH 2024 ================= */}
            <FlipCard
              width={340}
              height={440}
              radius={24}
              axis="y"
              flipOnClick={true}
              draggable={true}
              tilt={true}
              tiltMax={14}
              glare={true}
              glareOpacity={0.25}
              hoverScale={1.04}
              perspective={1200}
              background="#111827"
              color="#FAF8F5"
              shadow={true}
              shadowColor="#000000"
              shadowOpacity={0.6}
              ariaLabel="1st Prize Internal SIH 2024 Flip Card"
              front={
                <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090D16] border border-amber-500/30 rounded-[24px]">
                  {/* Spotlight beam effect */}
                  <div className="absolute top-0 inset-x-8 h-28 bg-gradient-to-b from-amber-400/20 to-transparent blur-md pointer-events-none" />

                  {/* Header */}
                  <div className="relative z-10 flex justify-between items-center text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 text-[10px] tracking-wider">
                      HACKATHON
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                      2024
                    </span>
                  </div>

                  {/* Gold Medallion 3D Graphic */}
                  <div className="relative z-10 flex flex-col items-center my-2">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-300/30 via-yellow-500/10 to-transparent blur-xl absolute -inset-2" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#FFE27D] via-[#D4AF37] to-[#8C6D1F] p-1.5 shadow-[0_10px_25px_rgba(212,175,55,0.4)] border-2 border-amber-200 flex items-center justify-center">
                      <div className="w-full h-full rounded-full border border-amber-900/40 bg-gradient-to-br from-[#F5D77F] to-[#B8860B] flex flex-col items-center justify-center text-[#2A1E00] shadow-inner">
                        <Medal className="w-10 h-10 text-[#422C00] filter drop-shadow-sm" />
                        <span className="text-[9px] font-mono font-black tracking-widest mt-0.5">1ST PRIZE</span>
                      </div>
                    </div>
                    {/* Plinth */}
                    <div className="w-28 h-4 rounded-md bg-gradient-to-r from-[#2B1B14] via-[#4A2E1F] to-[#2B1B14] border-t border-amber-500/40 shadow-lg mt-2 flex items-center justify-center">
                      <div className="w-14 h-1 rounded-full bg-amber-300/40" />
                    </div>
                  </div>

                  {/* Card Title & Flip Hint */}
                  <div className="relative z-10 space-y-2 border-t border-white/15 pt-3">
                    <h3 className="font-serif font-bold text-xl text-white">
                      1st Prize — Internal SIH 2024
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Internal Smart India Hackathon
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Verified Award
                      </span>
                      <span className="flex items-center gap-1 text-white/70">
                        <RotateCcw className="w-3 h-3 animate-spin-slow" /> Flip Card
                      </span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-amber-400/40 rounded-[24px]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold tracking-wider border border-amber-500/30">
                        INTERNAL SIH 2024
                      </span>
                      <span className="text-xs font-mono text-amber-400 font-bold">★ 1ST PLACE</span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-white">
                      Smart India Hackathon 2024
                    </h4>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                      Secured 1st Prize in Internal Smart India Hackathon (SIH 2024) competition. Built an innovative problem-solving software prototype recognized for technical architecture, user experience, and impact.
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                        Key Competencies Demonstrated
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Rapid Prototyping', 'System Architecture', 'UI/UX Design', 'Problem Solving'].map((skill, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/90 border border-white/15">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerTastefulCelebration(e);
                        setSelectedAchievement(ACHIEVEMENTS[0]);
                      }}
                      className="px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold transition-all"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              }
            />

            {/* ================= Showcase 2: Poster Making Winner ================= */}
            <FlipCard
              width={340}
              height={440}
              radius={24}
              axis="y"
              flipOnClick={true}
              draggable={true}
              tilt={true}
              tiltMax={14}
              glare={true}
              glareOpacity={0.25}
              hoverScale={1.04}
              perspective={1200}
              background="#111827"
              color="#FAF8F5"
              shadow={true}
              shadowColor="#000000"
              shadowOpacity={0.6}
              ariaLabel="Poster Making Competition Winner Flip Card"
              front={
                <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090D16] border border-cyan-500/30 rounded-[24px]">
                  {/* Spotlight beam effect */}
                  <div className="absolute top-0 inset-x-8 h-28 bg-gradient-to-b from-cyan-400/20 to-transparent blur-md pointer-events-none" />

                  {/* Header */}
                  <div className="relative z-10 flex justify-between items-center text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30 text-[10px] tracking-wider">
                      CREATIVE DESIGN
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold">
                      2024
                    </span>
                  </div>

                  {/* Golden Trophy 3D Graphic */}
                  <div className="relative z-10 flex flex-col items-center my-2">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300/30 via-blue-500/10 to-transparent blur-xl absolute -inset-2" />
                    <div className="relative flex items-end justify-center gap-3">
                      <div className="relative w-20 h-24 rounded-2xl bg-gradient-to-br from-[#FFE27D] via-[#D4AF37] to-[#8C6D1F] p-1.5 shadow-[0_10px_25px_rgba(212,175,55,0.4)] border-2 border-amber-200 flex flex-col items-center justify-center text-[#2A1E00]">
                        <Trophy className="w-10 h-10 text-[#422C00] filter drop-shadow-sm mb-1" />
                        <span className="text-[8px] font-mono font-black tracking-widest uppercase">WINNER</span>
                      </div>
                      <div className="w-8 h-14 rounded-lg bg-white/20 border border-white/30 backdrop-blur-md flex flex-col items-center justify-center p-1 text-[11px] shadow-sm">
                        <span className="text-sm">🎨</span>
                        <span className="text-[8px] font-mono text-cyan-200">ART</span>
                      </div>
                    </div>
                    {/* Plinth */}
                    <div className="w-28 h-4 rounded-md bg-gradient-to-r from-[#2B1B14] via-[#4A2E1F] to-[#2B1B14] border-t border-cyan-500/40 shadow-lg mt-2 flex items-center justify-center">
                      <div className="w-14 h-1 rounded-full bg-cyan-300/40" />
                    </div>
                  </div>

                  {/* Card Title & Flip Hint */}
                  <div className="relative z-10 space-y-2 border-t border-white/15 pt-3">
                    <h3 className="font-serif font-bold text-xl text-white">
                      Poster Making Winner
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Creative Visual Design Award
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Verified Award
                      </span>
                      <span className="flex items-center gap-1 text-white/70">
                        <RotateCcw className="w-3 h-3 animate-spin-slow" /> Flip Card
                      </span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-cyan-400/40 rounded-[24px]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold tracking-wider border border-cyan-500/30">
                        DESIGN COMPETITION
                      </span>
                      <span className="text-xs font-mono text-cyan-400 font-bold">🏆 1ST PLACE</span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-white">
                      Poster Making Competition Winner
                    </h4>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                      Awarded 1st Place in Poster Making Competition for outstanding graphic visual layout, typographic composition, color harmony, and creative communication skills.
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                        Design Disciplines
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Visual Design', 'Typography', 'Poster Art', 'Graphic Composition'].map((skill, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/90 border border-white/15">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerTastefulCelebration(e);
                        setSelectedAchievement(ACHIEVEMENTS[1]);
                      }}
                      className="px-3 py-1 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              }
            />

          </div>

        </div>

      </div>

      {/* Verified Achievement Dossier Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-[#FCFAF6] border border-[#E5DDCB] text-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#D1C4AC] text-[#483C33] hover:text-[#0F172A]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#F7ECE6] text-[#A94E27] font-mono text-xs font-semibold">
                  HONOR & DISTINCTION
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">
                  {selectedAchievement.title}
                </h3>
                <p className="text-xs font-mono text-[#6E5A4D]">
                  {selectedAchievement.issuer} • {selectedAchievement.date}
                </p>
              </div>

              <p className="text-sm text-[#483C33] leading-relaxed font-sans">
                {selectedAchievement.description}
              </p>

              <div className="pt-2 border-t border-[#EFE9DC] flex items-center gap-2 text-xs font-mono text-[#3D624A]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Resume Credential</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
