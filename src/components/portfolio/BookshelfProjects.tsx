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
    'AI/ML Platform',
    'Full-Stack Web',
    'Hackathon Entry',
    'Engineering Tool',
    'Mobile App'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/40 border border-teal-800/50 text-teal-400 font-mono text-xs">
          <BookOpen className="w-3.5 h-3.5" />
          <span>03 // PROJECT ARCHIVE LIBRARY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          The Interactive <span className="text-teal-400">Bookshelf & Dossiers</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Projects represented as digital books and dossiers. Hover to inspect depth; click to open the case study.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              selectedCategory === cat
                ? 'bg-teal-500/20 border border-teal-500/50 text-teal-300 shadow-lg shadow-teal-950/30'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3D Editorial Bookshelf Grid */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl shadow-slate-950">
        {/* Bookshelf Wooden / Metallic Beam */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500/40 via-cyan-500/40 to-violet-500/40" />

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer"
              >
                {/* 3D Book / Dossier Container */}
                <div 
                  className="relative h-96 rounded-2xl p-6 flex flex-col justify-between overflow-hidden border border-white/10 transition-all duration-500 preserve-3d group-hover:-translate-y-4 group-hover:rotate-y-6 group-hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(145deg, ${project.spineColor}dd 0%, #0d111a 100%)`,
                    boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {/* Book Spine Left Highlight */}
                  <div className="absolute top-0 left-0 bottom-0 w-3 bg-white/10 border-r border-black/30 book-spine-left" />

                  {/* Bookmark Tag */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-300 pl-3">
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-cyan-300">
                      {project.year}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-75">
                      {project.metaphor}
                    </span>
                  </div>

                  {/* Title & Category Info */}
                  <div className="pl-3 space-y-3 z-10">
                    <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-wide uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-cyan-200 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Badges & Open Action */}
                  <div className="pl-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 2).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-950/60 text-[10px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-950/60 text-[10px] font-mono text-slate-400">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="p-2 rounded-full bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Book Shadow Base */}
                <div className="w-4/5 h-3 mx-auto mt-2 rounded-full bg-black/60 blur-md group-hover:w-full group-hover:bg-cyan-500/20 transition-all" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
