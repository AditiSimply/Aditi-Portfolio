import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
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

const ICON_MAP: Record<string, any> = {
  Workflow,
  Code2,
  Layers,
  FileCode2: Code2,
  Server,
  Network: Server,
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
  const [, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>04 // SKILL LABORATORY & TECH MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Technical Competencies & <span className="text-[#C25E34]">Disciplines</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Proficiency matrix covering verified core programming languages, web architecture frameworks, databases, and developer tooling.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              selectedCategory === cat
                ? 'bg-[#C25E34] text-white border border-[#A94E27] shadow-sm'
                : 'bg-[#FCFAF6] border border-[#E5DDCB] text-[#5F5044] hover:bg-[#F2EDE2]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = ICON_MAP[skill.iconName] || Code2;

            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                className="parchment-card p-4.5 rounded-2xl flex flex-col justify-between space-y-4 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] text-[#C25E34] group-hover:bg-[#F7ECE6] group-hover:border-[#E2B19A] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8C7464] uppercase font-semibold">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#231C18] font-heading group-hover:text-[#C25E34] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#6E5A4D] mt-1 leading-relaxed">
                    {skill.context}
                  </p>
                </div>

                {/* Related Projects / Application Area */}
                <div className="pt-2 border-t border-[#E5DDCB] space-y-1">
                  <div className="text-[10px] font-mono text-[#8C7464]">APPLIED IN:</div>
                  <div className="flex flex-wrap gap-1">
                    {skill.relatedProjects.map((p, i) => (
                      <span key={i} className="text-[10px] font-mono bg-[#F2EDE2] text-[#5F5044] px-1.5 py-0.5 rounded border border-[#E3DAC7]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
