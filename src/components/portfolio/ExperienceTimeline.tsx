import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE_EVENTS } from '../../data/experience';
import { SpotlightCard } from '../ui/SpotlightCard';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 font-mono text-xs">
          <Briefcase className="w-3.5 h-3.5" />
          <span>05 // DEVELOPER JOURNEY TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Milestones & <span className="text-emerald-400">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Chronological developer journey tracking academic progress, project deployments, hackathons, and software engineering roles.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {TIMELINE_EVENTS.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Node Icon Circle */}
            <div 
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 flex items-center justify-center transition-all shadow-lg"
              style={{ borderColor: event.highlightColor }}
            >
              <div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: event.highlightColor }}
              />
            </div>

            {/* Timeline Card */}
            <SpotlightCard className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {event.period}
                </span>

                <span 
                  className="px-3 py-1 rounded-full font-mono text-xs font-bold"
                  style={{ 
                    backgroundColor: `${event.highlightColor}15`, 
                    color: event.highlightColor,
                    borderColor: `${event.highlightColor}40`,
                    borderWidth: '1px'
                  }}
                >
                  {event.type}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{event.role}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mt-1">
                  <span className="text-cyan-300 font-semibold">{event.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {event.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {event.description}
              </p>

              {/* Achievements Bullet List */}
              {event.achievements && event.achievements.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  {event.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {event.technologies.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
