import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  UserCheck, 
  Layers, 
  Sparkles,
  Calendar
} from 'lucide-react';
import type { ProjectCaseStudy } from '../../data/projects';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Open Book / Case Study Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Book Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-3">
              <span 
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="font-mono text-xs font-semibold text-cyan-400">
                CASE STUDY // {project.category.toUpperCase()}
              </span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-500" />
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Book Content Body (Scrollable) */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
            {/* Project Header Banner */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs font-mono flex items-center gap-2 transition-all border border-slate-700"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-lg text-cyan-300 font-light leading-relaxed">
                {project.subtitle}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                {project.summary}
              </p>
            </div>

            {/* Problem & Idea Dual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                  <Lightbulb className="w-4 h-4" />
                  <span>THE SOLUTION / IDEA</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.idea}
                </p>
              </div>
            </div>

            {/* My Role & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2 md:col-span-1">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                  <UserCheck className="w-4 h-4" />
                  <span>MY ROLE</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {project.role}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3 md:col-span-2">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold">
                  <Layers className="w-4 h-4" />
                  <span>TECHNOLOGY STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Key Architectural Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Challenges Overcome
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-mono">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Key Learnings
                </h4>
                <ul className="space-y-2">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Modal Bar */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              STATUS: <span className="text-emerald-400 font-bold">{project.status}</span>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium transition-all"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
