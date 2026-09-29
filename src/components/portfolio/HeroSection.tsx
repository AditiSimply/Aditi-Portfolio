import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, User, FileText, Sparkles } from 'lucide-react';
import { Magnet } from '../ui/Magnet';
import { PROFILE_DATA } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Subtle warm atmospheric halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#E2D4BF]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[380px] h-[380px] bg-[#EFD4C7]/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 space-y-7">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FCFAF6] border border-[#E5DDCB] text-xs font-mono text-[#5F5044] shadow-soft-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4E7A5E]"></span>
          </span>
          <span className="tracking-wide font-medium text-[#231C18]">COMPUTER ENGINEERING GRADUATE</span>
          <span className="text-[#D1C4AC]">|</span>
          <span className="text-[#7B6A5C] font-sans">{PROFILE_DATA.availability}</span>
        </motion.div>

        {/* Main Title & Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#231C18] font-heading">
            ADITI <span className="text-[#C25E34]">SINGH</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#483C33] max-w-2xl mx-auto font-normal leading-relaxed">
            {PROFILE_DATA.headline}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-2.5 text-xs font-mono">
            <span className="px-3 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">
              SOFTWARE DEVELOPMENT
            </span>
            <span className="text-[#BDAF9F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">
              PROBLEM SOLVING
            </span>
            <span className="text-[#BDAF9F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">
              FULL-STACK WEB
            </span>
            <span className="text-[#BDAF9F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">
              MANAGEMENT & TECH
            </span>
          </div>
        </motion.div>

        {/* Career Objective Ledger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xs sm:text-sm font-sans text-[#483C33] max-w-2xl mx-auto parchment-card p-5 rounded-2xl leading-relaxed text-left relative"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER OBJECTIVE // MUMBAI, INDIA</span>
          </div>
          <p className="text-[#483C33] leading-relaxed">
            {PROFILE_DATA.careerObjective}
          </p>
        </motion.div>

        {/* Quick Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-3.5 pt-2"
        >
          <Magnet magnetStrength={0.25}>
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-xl bg-[#C25E34] hover:bg-[#A94E27] text-white font-semibold text-sm tracking-wide shadow-terracotta flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Code className="w-4 h-4" />
              Explore Projects
            </button>
          </Magnet>

          <Magnet magnetStrength={0.25}>
            <button
              onClick={() => scrollTo('identity')}
              className="px-6 py-3.5 rounded-xl bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-[#342B24] font-semibold text-sm tracking-wide shadow-soft-sm flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <User className="w-4 h-4 text-[#C25E34]" />
              View Credentials
            </button>
          </Magnet>

          <Magnet magnetStrength={0.25}>
            <button
              onClick={() => scrollTo('experience')}
              className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#EFE9DD]/60 border border-[#E5DDCB] text-[#5F5044] hover:text-[#231C18] font-medium text-sm flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-[#8C7464]" />
              Experience
            </button>
          </Magnet>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-6 flex justify-center"
        >
          <button
            onClick={() => scrollTo('identity')}
            className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-[#8C7464] hover:text-[#C25E34] transition-colors"
          >
            <span>DISCOVER ARCHIVE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
