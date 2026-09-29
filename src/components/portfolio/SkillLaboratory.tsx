import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Layers, 
  Server, 
  Database, 
  Binary, 
  GitBranch, 
  Box, 
  Code2,
  Workflow
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../../data/skills';
import type { SkillItem } from '../../data/skills';
import { SpotlightCard } from '../ui/SpotlightCard';

const ICON_MAP: Record<string, any> = {
  BrainCircuit,
  Sparkles,
  Workflow,
  Code2,
  Layers,
  FileCode2: Code2,
  Zap: Sparkles,
  Palette: Box,
  Activity: Sparkles,
  Server,
  Network: Server,
  KeyRound: Cpu,
  Database,
  TableProperties: Database,
  FileJson: Code2,
  Binary,
  Cpu,
  GitBranch,
  Terminal: Cpu,
  Cloud: Server,
  Box,
  Layout: Box
};

export const SkillLaboratory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 relative max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 font-mono text-xs">
          <Cpu className="w-3.5 h-3.5" />
          <span>04 // SKILL LABORATORY & TECH MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Technology <span className="text-cyan-400">Map & Tooling</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Categorized technical toolkit. Click or hover any technology node to reveal usage context and associated projects.
        </p>
      </div>

      {/* Skill Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-950/30'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconName] || Cpu;
            const isSelected = activeSkill?.id === skill.id;

            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveSkill(isSelected ? null : skill)}
              >
                <SpotlightCard className={`p-6 cursor-pointer space-y-4 border transition-all ${
                  isSelected 
                    ? 'border-cyan-500 bg-cyan-950/20 shadow-glow-cyan' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base font-heading">{skill.name}</h3>
                        <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                      </div>
                    </div>

                    {skill.featured && (
                      <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800 text-[10px] font-mono text-cyan-300">
                        CORE
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {skill.context}
                  </p>

                  {/* Associated Projects */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-500 mr-1">USED IN:</span>
                    {skill.relatedProjects.map((p) => (
                      <span key={p} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-300">
                        {p}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
