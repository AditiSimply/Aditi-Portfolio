import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2 
} from 'lucide-react';
import { FolderFloat } from '../ui/FolderFloat';
import { ScrollFloat } from '../ui/ScrollFloat';
import { SKILLS } from '../../data/skills';
import type { SkillItem } from '../../data/skills';

// Grouping skills into 4 categories
const PROGRAMMING_ITEMS = SKILLS.filter(s => s.category === 'Programming').map(s => ({
  label: s.name,
  value: s.id,
  id: s.id
}));

const WEB_ITEMS = SKILLS.filter(s => s.category === 'Web').map(s => ({
  label: s.name,
  value: s.id,
  id: s.id
}));

const DATABASE_SYSTEMS_ITEMS = SKILLS.filter(s => s.category === 'Database' || s.category === 'Operating Systems').map(s => ({
  label: s.name,
  value: s.id,
  id: s.id
}));

const SOFT_SKILLS_ITEMS = SKILLS.filter(s => s.category === 'Soft Skills').map(s => ({
  label: s.name,
  value: s.id,
  id: s.id
}));

export const SkillLaboratory: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS[0]);

  const handleSelectSkillId = (id: string) => {
    const found = SKILLS.find(s => s.id === id || s.name === id);
    if (found) {
      setActiveSkill(found);
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}bg/4.png)`,
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching reference Panel 4 */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white/60 text-xs font-mono font-bold text-[#0F172A] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
            <span>04. SKILL LABORATORY</span>
          </div>

          <ScrollFloat
            containerClassName="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight drop-shadow-sm"
            animationDuration={0.8}
            ease="back.inOut(2)"
            stagger={0.025}
          >
            Technical Competencies
          </ScrollFloat>

          <p className="text-sm sm:text-base text-[#0F172A] font-medium max-w-xl mx-auto font-sans leading-relaxed bg-white/60 p-3 rounded-xl backdrop-blur-md border border-white/40 shadow-xs">
            Interactive zero-gravity physics folders. Hover or click any folder below to float out technology pills, drag them in space, and inspect verified experience.
          </p>
        </div>

        {/* Podium Stage with React Bits FolderFloat Physics Cabinets */}
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/40 border border-white/70 shadow-[0_30px_70px_rgba(0,0,0,0.07),inset_0_1px_2px_rgba(255,255,255,0.9)] p-6 sm:p-10 lg:p-12 space-y-12">
          
          {/* 4 Interactive React Bits FolderFloat Physics Cabinets Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 items-end justify-items-center pt-28 pb-6">
            
            {/* Folder 1: Programming Languages */}
            <div className="flex flex-col items-center">
              <FolderFloat
                label="Programming"
                sublabel="4 core languages"
                items={PROGRAMMING_ITEMS}
                folderColor="#1E293B"
                frontColor="#0F172A"
                paperColor="#FFFDF9"
                itemColor="#FCFAF6"
                itemTextColor="#0F172A"
                labelColor="#FFFFFF"
                trigger="hover"
                physics={true}
                drift={0.6}
                width={220}
                height={156}
                spread={200}
                lift={28}
                onSelect={(val) => handleSelectSkillId(val)}
              />
            </div>

            {/* Folder 2: Web Technologies */}
            <div className="flex flex-col items-center">
              <FolderFloat
                label="Web &amp; UI"
                sublabel="3 web technologies"
                items={WEB_ITEMS}
                folderColor="#9A3412"
                frontColor="#C25E34"
                paperColor="#FFFDF9"
                itemColor="#FFFDF9"
                itemTextColor="#0F172A"
                labelColor="#FFFFFF"
                trigger="hover"
                physics={true}
                drift={0.6}
                width={220}
                height={156}
                spread={200}
                lift={28}
                onSelect={(val) => handleSelectSkillId(val)}
              />
            </div>

            {/* Folder 3: Database & Operating Systems */}
            <div className="flex flex-col items-center">
              <FolderFloat
                label="Data &amp; Systems"
                sublabel="4 platforms"
                items={DATABASE_SYSTEMS_ITEMS}
                folderColor="#065F46"
                frontColor="#047857"
                paperColor="#FFFDF9"
                itemColor="#F0FDF4"
                itemTextColor="#0F172A"
                labelColor="#FFFFFF"
                trigger="hover"
                physics={true}
                drift={0.6}
                width={220}
                height={156}
                spread={200}
                lift={28}
                onSelect={(val) => handleSelectSkillId(val)}
              />
            </div>

            {/* Folder 4: Soft Skills & Leadership */}
            <div className="flex flex-col items-center">
              <FolderFloat
                label="Leadership &amp; Soft"
                sublabel="4 disciplines"
                items={SOFT_SKILLS_ITEMS}
                folderColor="#3730A3"
                frontColor="#4338CA"
                paperColor="#FFFDF9"
                itemColor="#EEF2FF"
                itemTextColor="#0F172A"
                labelColor="#FFFFFF"
                trigger="hover"
                physics={true}
                drift={0.6}
                width={220}
                height={156}
                spread={200}
                lift={28}
                onSelect={(val) => handleSelectSkillId(val)}
              />
            </div>

          </div>

          {/* Context Dossier for Selected Technology */}
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              className="max-w-2xl mx-auto rounded-2xl backdrop-blur-xl bg-white/85 border border-white/90 p-5 sm:p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F7ECE6] text-[#A94E27] font-mono text-[11px] font-semibold border border-[#E2B19A]/40">
                    {activeSkill.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#0F172A]">
                    {activeSkill.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
                  {activeSkill.context}
                </p>
              </div>

              {/* Related Verified Work */}
              <div className="shrink-0 space-y-1">
                <span className="text-[10px] font-mono text-[#7B6A5C] uppercase tracking-wider block font-bold">
                  VERIFIED APPLICATION
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.relatedProjects.map((proj, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#C25E34]/40 text-[#0F172A] font-sans text-xs font-semibold shadow-2xs"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Interpersonal Summary */}
          <div className="border-t border-white/60 pt-6">
            <div className="text-center space-y-1 mb-4">
              <span className="text-xs font-mono text-[#A94E27] uppercase tracking-wider font-bold">
                PHYSICS LAB INSTRUCTION
              </span>
              <p className="text-xs text-[#475569] font-medium">
                Hover over any folder to launch technology pills. You can drag and throw pills in zero-gravity space!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { name: 'Communication', desc: 'Client interaction & presentations' },
                { name: 'Teamwork', desc: 'Collaborative development in sprints' },
                { name: 'Leadership', desc: 'Hackathon team coordination' },
                { name: 'Presentation', desc: 'Design walkthroughs & pitches' }
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl backdrop-blur-md bg-white/70 border border-white/80 text-center space-y-1 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3D624A] mx-auto" />
                  <div className="font-sans font-bold text-xs text-[#0F172A]">{skill.name}</div>
                  <div className="text-[10px] text-[#64748B] leading-tight font-medium">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

