import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  Compass, 
  Code2, 
  Languages, 
  Users, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const PersonalArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'focus' | 'competencies'>('profile');

  return (
    <section id="about" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <Folder className="w-3.5 h-3.5" />
          <span>02 // PERSONAL ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Background, Philosophy & <span className="text-[#C25E34]">Competencies</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          A structured ledger of technical capabilities, problem-solving methodologies, and engineering direction.
        </p>
      </div>

      {/* Tab Navigation Dossier Folders */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {[
          { id: 'profile', label: '01. Career Objective & Foundation', icon: Code2 },
          { id: 'focus', label: '02. Growth in Tech & Management', icon: Compass },
          { id: 'competencies', label: '03. Soft Skills & Languages', icon: Users },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl font-mono text-xs transition-all ${
                isActive
                  ? 'bg-[#C25E34] text-white shadow-sm border border-[#A94E27]'
                  : 'bg-[#FCFAF6] border border-[#E5DDCB] text-[#5F5044] hover:bg-[#F2EDE2]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#C25E34]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dossier Content Cards */}
      <AnimatePresence mode="wait">
        {activeTab === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>MISSION STATEMENT</span>
              </div>
              <h3 className="text-xl font-bold text-[#231C18] font-heading">
                Building Reliable, High-Utility Software
              </h3>
              <p className="text-sm text-[#483C33] leading-relaxed">
                Motivated and detail-oriented Computer Engineering student with a strong foundation in software development, problem-solving, and teamwork.
              </p>
              <p className="text-sm text-[#483C33] leading-relaxed">
                Eager to contribute technical skills and analytical mindset to innovative engineering projects while learning and growing in the organization.
              </p>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#3D624A]" />
                <span>CORE ENGINEERING PILLARS</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Software Engineering', desc: 'Object-oriented programming in C++, Java, and Python with focus on modular, maintainable architectures.' },
                  { title: 'Full-Stack Web Development', desc: 'Developing clean interfaces with HTML/CSS/JS and integrating responsive backends.' },
                  { title: 'Data & Persistence', desc: 'Designing structured relational SQL schemas and scalable NoSQL collections with MongoDB.' },
                ].map((pillar, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB]">
                    <div className="text-xs font-bold text-[#231C18] font-mono">{pillar.title}</div>
                    <div className="text-xs text-[#6E5A4D] mt-0.5">{pillar.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'focus' && (
          <motion.div
            key="focus"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <Compass className="w-4 h-4" />
                <span>CAREER ASPIRATION</span>
              </div>
              <h3 className="text-xl font-bold text-[#231C18] font-heading">
                Technology & Management Synergy
              </h3>
              <p className="text-sm text-[#483C33] leading-relaxed">
                Interested in growing in both technical software domains and management disciplines, combining hands-on technical competence with clear communication and team coordination.
              </p>
              <div className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] text-xs font-mono text-[#5F5044]">
                "Aiming to build technical solutions that create tangible real-world value while guiding cross-functional collaboration."
              </div>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>KEY LEARNING HIGHLIGHTS</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C25E34] mt-1.5" />
                  <div>
                    <strong className="text-[#231C18] block">Industry Web Development Experience</strong>
                    <span className="text-[#6E5A4D]">CareerRaiser internship focused on real client web deliverables.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C25E34] mt-1.5" />
                  <div>
                    <strong className="text-[#231C18] block">Hackathon Innovation Leadership</strong>
                    <span className="text-[#6E5A4D]">Smart India Hackathon 1st Prize Winner for high-speed technical problem resolution.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C25E34] mt-1.5" />
                  <div>
                    <strong className="text-[#231C18] block">Strong Academic Foundation</strong>
                    <span className="text-[#6E5A4D]">91.40% in Diploma and 90.40% in SSC CBSE examinations.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'competencies' && (
          <motion.div
            key="competencies"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <Users className="w-4 h-4" />
                <span>INTERPERSONAL & PROFESSIONAL STRENGTHS</span>
              </div>
              <h3 className="text-xl font-bold text-[#231C18] font-heading">
                Soft Skills & Teamwork
              </h3>
              <div className="space-y-3">
                {PROFILE_DATA.softSkills.map((skill, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#231C18]">{skill}</span>
                    <span className="text-[10px] font-mono text-[#3D624A] bg-[#EAF2EC] px-2 py-0.5 rounded border border-[#C5DAC9]">
                      VERIFIED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94E27] font-semibold">
                <Languages className="w-4 h-4" />
                <span>LANGUAGES & TELEMETRY</span>
              </div>
              <h3 className="text-xl font-bold text-[#231C18] font-heading">
                Language Proficiency
              </h3>
              <div className="space-y-3">
                {PROFILE_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-[#231C18]">{lang}</div>
                      <div className="text-xs text-[#6E5A4D]">Professional & Native Fluency</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-xs font-mono text-[#5F5044]">
                      VERIFIED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
