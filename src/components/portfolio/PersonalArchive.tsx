import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  Cpu, 
  Sparkles,
  Compass,
  Code2,
  Terminal,
  Languages,
  Users,
  Award
} from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const PersonalArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'focus' | 'competencies'>('profile');

  return (
    <section id="about" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/50 text-violet-400 font-mono text-xs">
          <Folder className="w-3.5 h-3.5" />
          <span>02 // PERSONAL ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Background, Mindset & <span className="text-violet-400">Competencies</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Overview of software development foundation, problem-solving abilities, teamwork, and career objective.
        </p>
      </div>

      {/* Tab Navigation Dossier Folders */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
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
        {activeTab === 'profile' && (
          <motion.div
            key="profile"
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
              <h3 className="text-xl font-bold text-white font-heading">Software Development</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Strong engineering foundation in C, C++, Java, and Python alongside web technologies (HTML, CSS, basic JavaScript).
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Problem Solving</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Structured, detail-oriented approach to resolving technical challenges, optimizing database queries with SQL and MongoDB, and developing practical solutions.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Teamwork & Collaboration</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Collaborative mindset demonstrated across academic group projects, the CareerRaiser web internship, and hackathon team achievements.
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
                <span className="text-xs font-mono text-cyan-400">CAREER OBJECTIVE</span>
                <h3 className="text-2xl font-bold text-white font-heading">Continuous Growth in Technology & Management</h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300 font-mono text-xs">
                Academic & Industry Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  Academic Excellence & Practical Projects
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Secured 91.40% distinction in Diploma in Computer Engineering and 90.40% in CBSE Secondary Certificate. Built practical applications including Studio Vyakhya and Plant Caring App.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  Technology & Management Domains
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Eager to contribute technical expertise and communication capabilities in software development and management roles, continuously broadening industry knowledge.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'competencies' && (
          <motion.div
            key="competencies"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition-all">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Communication Skills</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear verbal and written articulation, presentation ability, and effective cross-functional dialogue.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Teamwork & Leadership</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Active collaborator, team coordination, taking initiative during project deadlines, and peer support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-violet-500/40 transition-all">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Presentation Skills</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Visual presentation and layout design, demonstrated by winning the Poster Making Competition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
                <Languages className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-lg font-heading">Languages</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fluent in English and Hindi for professional, technical, and academic communication.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
