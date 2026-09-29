import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE_EVENTS } from '../../data/experience';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>05 // PROFESSIONAL CHRONOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Experience & <span className="text-[#C25E34]">Milestones</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Chronological record of internships, project deployments, hackathons, and engineering achievements.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-[#E5DDCB] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {TIMELINE_EVENTS.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Node Icon Circle */}
            <div 
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FCFAF6] border-2 border-[#C25E34] flex items-center justify-center shadow-soft-sm"
            >
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C25E34]" />
            </div>

            {/* Timeline Card */}
            <div className="parchment-card p-6 sm:p-7 rounded-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DDCB] pb-3">
                <span className="px-3 py-1 rounded-full bg-[#F8F5EE] border border-[#E5DDCB] font-mono text-xs text-[#5F5044] flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#C25E34]" />
                  {event.period}
                </span>

                <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-[#F7ECE6] text-[#A94E27] border border-[#E2B19A]">
                  {event.type.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#231C18] font-heading group-hover:text-[#C25E34] transition-colors">
                  {event.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-[#483C33]">
                  <span>{event.organization}</span>
                  <span className="text-[#D1C4AC]">•</span>
                  <span className="flex items-center gap-1 text-xs text-[#8C7464] font-mono">
                    <MapPin className="w-3 h-3 text-[#A94E27]" />
                    {event.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#483C33] leading-relaxed">
                {event.description}
              </p>

              {/* Achievements Checklist */}
              {event.achievements && event.achievements.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E5DDCB]">
                  {event.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#483C33]">
                      <CheckCircle2 className="w-4 h-4 text-[#4E7A5E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Applied */}
              {event.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {event.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[11px] font-mono text-[#5F5044]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
