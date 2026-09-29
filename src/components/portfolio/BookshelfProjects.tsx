import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import type { ProjectCaseStudy } from '../../data/projects';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export const BookshelfProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'All',
    'Full-Stack Web',
    'Mobile App'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 relative max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>03 // PROJECT ARCHIVE LIBRARY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Featured Engineering <span className="text-[#C25E34]">Bookshelf</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Technical case studies bound as architectural volumes. Select any volume to inspect its system architecture and live implementation.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
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

      {/* Architectural Exhibition Shelf Container */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-[#FCFAF6] border border-[#D1C4AC] shadow-card">
        {/* Warm Walnut Top Shelf Accent Beam */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C25E34] via-[#D97706] to-[#794D2C] rounded-t-3xl" />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer"
              >
                {/* Book Card Container with Perspective and Realistic Spine */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#E5DDCB] shadow-soft group-hover:shadow-card-hover group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Left Spine Shadow Strip (Simulates a physical bound volume) */}
                  <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-[#231C18]/15 via-black/5 to-transparent z-20 pointer-events-none" />

                  {/* Top Cover Banner */}
                  <div className={`p-6 text-white relative overflow-hidden ${
                    project.id === 'studio-vyakhya' 
                      ? 'bg-gradient-to-br from-[#A94E27] to-[#71381B]' 
                      : 'bg-gradient-to-br from-[#3D624A] to-[#254231]'
                  }`}>
                    <div className="flex items-center justify-between text-xs font-mono mb-2.5 opacity-90">
                      <span className="tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full border border-white/30 text-[10px]">
                        {project.category}
                      </span>
                      <span>VOL. 0{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-1 font-sans">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Book Content Description & Stack */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-[#483C33] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#8C7464] uppercase font-semibold">Engineered With</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044] text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono font-semibold text-[#A94E27] group-hover:text-[#C25E34]">
                      <span className="flex items-center gap-1.5">
                        OPEN ARCHIVE CASE STUDY
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] text-[#8C7464] font-normal">
                        READ MORE →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Shelf Base Shadow */}
        <div className="mt-8 pt-4 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#8C7464]">
          <span>VERIFIED ENGINEERING ARTIFACTS</span>
          <span>CLICK CARD TO INSPECT ARCHITECTURE & CODE</span>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectCaseStudyModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
