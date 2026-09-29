import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { EDUCATION_RECORDS } from '../../data/education';

export const EducationArchive: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("btech-ce");

  return (
    <section id="education" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>06 // ACADEMIC RECORDS ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Education & <span className="text-[#C25E34]">Academic Credentials</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Verified academic transcripts and performance milestones from Vidyalankar Institute of Technology, V.P.M's Polytechnic, and Lok Puram Public School.
        </p>
      </div>

      <div className="space-y-5">
        {EDUCATION_RECORDS.map((record) => {
          const isExpanded = expandedId === record.id;

          return (
            <div key={record.id} className="parchment-card p-6 sm:p-7 rounded-2xl space-y-5">
              <div 
                onClick={() => setExpandedId(isExpanded ? null : record.id)}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#F7ECE6] border border-[#E2B19A] text-[#C25E34] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#231C18] font-heading">{record.degree}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EAF2EC] border border-[#C5DAC9] text-[11px] font-mono text-[#3D624A] font-semibold">
                        {record.status}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-[#A94E27] font-mono mt-0.5">
                      {record.institution}
                    </p>

                    <p className="text-xs text-[#7B6A5C] mt-1 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#A94E27]" />
                      {record.location} • {record.period}
                    </p>
                  </div>
                </div>

                {/* Score Badge & Expand Toggle */}
                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E5DDCB]">
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#8C7464] block">{record.scoreLabel}</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#231C18]">
                      {record.scoreValue}
                    </span>
                  </div>

                  <div className={`p-2 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] text-[#5F5044] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Collapsible Details Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pt-4 border-t border-[#E5DDCB] space-y-4"
                  >
                    {/* Coursework & Specializations */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono font-semibold text-[#8C7464] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#C25E34]" />
                        <span>REPRESENTATIVE COURSEWORK</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {record.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-xs font-mono text-[#342B24]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Honors / Verified Milestones */}
                    <div className="space-y-1.5 pt-2">
                      {record.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#3D624A] font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A5E] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
