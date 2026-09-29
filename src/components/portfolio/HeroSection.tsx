import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, ShieldCheck, Code } from 'lucide-react';
import { DecryptedText } from '../ui/DecryptedText';
import { Magnet } from '../ui/Magnet';
import { PROFILE_DATA } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">COMPUTER ENGINEERING GRADUATE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-sans">{PROFILE_DATA.availability}</span>
        </motion.div>

        {/* Main Title & Decrypted Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-heading">
            ADITI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400">SINGH</span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            {PROFILE_DATA.headline}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-sm font-mono text-cyan-400">
            <span className="px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40">
              <DecryptedText text="SOFTWARE DEVELOPMENT" />
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 rounded-md bg-violet-950/40 border border-violet-800/40">
              <DecryptedText text="PROBLEM SOLVING" />
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/40">
              <DecryptedText text="TEAMWORK" />
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 rounded-md bg-amber-950/40 border border-amber-800/40">
              <DecryptedText text="TECH & MANAGEMENT" />
            </span>
          </div>
        </motion.div>

        {/* Career Objective Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm font-sans text-slate-300 max-w-3xl mx-auto bg-slate-900/50 p-4 rounded-2xl border border-slate-800 leading-relaxed"
        >
          {PROFILE_DATA.careerObjective}
        </motion.p>

        {/* Quick Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-2"
        >
          <Magnet magnetStrength={0.3}>
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95"
            >
              <Code className="w-4 h-4" />
              Explore Projects
            </button>
          </Magnet>

          <Magnet magnetStrength={0.3}>
            <button
              onClick={() => scrollTo('identity')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2.5 transition-all hover:border-cyan-500/40 hover:text-white"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Developer ID Card
            </button>
          </Magnet>

          <Magnet magnetStrength={0.3}>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-3.5 rounded-xl bg-violet-950/40 hover:bg-violet-900/40 border border-violet-800/60 text-violet-300 font-mono text-sm flex items-center gap-2 transition-all"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              Get in Touch
            </button>
          </Magnet>
        </motion.div>

        {/* Verified Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800/80"
        >
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              {PROFILE_DATA.metrics.projectsCount}
            </div>
            <div className="text-xs text-slate-400 font-sans mt-1">Core Projects</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              {PROFILE_DATA.diplomaPercentage}%
            </div>
            <div className="text-xs text-slate-400 font-sans mt-1">Diploma in CE</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono">
              {PROFILE_DATA.sscPercentage}%
            </div>
            <div className="text-xs text-slate-400 font-sans mt-1">SSC (CBSE)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              1st Prize
            </div>
            <div className="text-xs text-slate-400 font-sans mt-1">Internal SIH 2024</div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Prompt */}
      <motion.button
        onClick={() => scrollTo('identity')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};
