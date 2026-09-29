import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { EDUCATION_RECORDS } from '../../data/education';
import { SpotlightCard } from '../ui/SpotlightCard';

export const EducationArchive: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("btech-ce");

  return (
    <section id="education" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 font-mono text-xs">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>06 // ACADEMIC RECORDS ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Education & <span className="text-cyan-400">Academic Standing</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Verified academic transcripts and performance milestones from Vidyalankar Institute of Technology and V.P.M's Polytechnic.
        </p>
      </div>

      <div className="space-y-6">
        {EDUCATION_RECORDS.map((record) => {
          const isExpanded = expandedId === record.id;

          return (
            <SpotlightCard key={record.id} className="p-6 sm:p-8 space-y-6">
              <div 
                onClick={() => setExpandedId(isExpanded ? null : record.id)}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{record.degree}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-[11px] font-mono text-emerald-300">
                        {record.status}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-300 font-mono mt-0.5">
                      {record.institution}
                    </p>

                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {record.location} • {record.period}
                    </p>
                  </div>
                </div>

                {/* Score Badge & Expand Toggle */}
                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-right">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{record.scoreLabel}</div>
                    <div className="text-base font-extrabold text-amber-300 font-mono">{record.scoreValue}</div>
                  </div>

                  <div className={`p-2 rounded-full bg-slate-800 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Expandable Coursework & Highlights */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-6 border-t border-slate-800/80 space-y-6"
                  >
                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        Academic Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {record.highlights.map((h, i) => (
                          <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relevant Coursework */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5" />
                        Core Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {record.coursework.map((course) => (
                          <span key={course} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
