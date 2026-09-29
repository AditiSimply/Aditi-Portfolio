import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  Music, 
  Mic, 
  Utensils, 
  Cpu, 
  Heart, 
  Sparkles,
  Compass,
  Code2,
  Terminal
} from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const PersonalArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mindset' | 'focus' | 'interests'>('mindset');

  return (
    <section id="about" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/50 text-violet-400 font-mono text-xs">
          <Folder className="w-3.5 h-3.5" />
          <span>02 // PERSONAL ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          How I Think, Build & <span className="text-violet-400">Explore</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Digital dossier documenting engineering principles, academic trajectory, and personal pursuits.
        </p>
      </div>

      {/* Tab Navigation Dossier Folders */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { id: 'mindset', label: '01. Development Philosophy', icon: Code2 },
          { id: 'focus', label: '02. Current Direction & AI Focus', icon: Compass },
          { id: 'interests', label: '03. Personal Interests & Hobbies', icon: Heart },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs transition-all ${
                isActive
                  ? 'bg-violet-600/20 border border-violet-500/50 text-violet-300 shadow-lg shadow-violet-950/30'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-violet-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dossier Content Cards */}
      <AnimatePresence mode="wait">
        {activeTab === 'mindset' && (
          <motion.div
            key="mindset"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <SpotlightCard className="p-6 space-y-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">High-Efficiency Craft</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Building software shouldn't take months of boilerplate setup. I focus on fast, clean architecture using modern tools (React, Vite, Node, Tailwind) to ship functional products rapidly.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Practical Product First</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Technology is only useful when it solves real human problems. Platforms like Campus 1 and Jaal were designed to solve real institutional and hackathon challenges, not just showcase code snippets.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Continuous Experimentation</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Technology evolves daily. Whether it's prompt streaming, vector search, micro-animations, or state management patterns, I actively test and integrate emerging ideas.
              </p>
            </SpotlightCard>
          </motion.div>
        )}

        {activeTab === 'focus' && (
          <motion.div
            key="focus"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl glass-card space-y-6 border border-violet-500/30"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400">CURRENT DIRECTION</span>
                <h3 className="text-2xl font-bold text-white font-heading">Developer → AI/ML → Intelligent Software</h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300 font-mono text-xs">
                Active Exploration Phase
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  AI Systems Integration
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Leveraging LLMs and generative models (Gemini 2.0 API, RAG, prompt security) to inject contextual intelligence into web applications rather than simple text completion.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  Full-Stack Architecture & Security
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Combining robust backend services (Express, MongoDB) with secure multi-tenant role authorization and intuitive frontend UI.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'interests' && (
          <motion.div
            key="interests"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
                <Music className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Music & Guitar</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Playing acoustic and electric guitar, rhythm jam sessions, and exploring chord progressions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-rose-500/40 transition-all">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 w-fit">
                <Mic className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Singing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vocal practice, acoustic covers, and melody experimentation during downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-orange-500/40 transition-all">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit">
                <Utensils className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Cooking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Culinary experimentation, trying out fusion recipes, and precision cooking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition-all">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Tech Tinkering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluating new CLI utilities, AI agents, UI design libraries, and developer tools.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
