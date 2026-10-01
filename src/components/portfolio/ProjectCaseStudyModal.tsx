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
  Calendar
} from 'lucide-react';
import type { ProjectCaseStudy } from '../../data/projects';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
          className="fixed inset-0 bg-[#231C18]/60 backdrop-blur-sm"
        />

        {/* Open Dossier / Case Study Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-[#FCFAF6] border border-[#D1C4AC] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DDCB] bg-[#F8F5EE]">
            <div className="flex items-center gap-3">
              <span 
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="font-mono text-xs font-semibold text-[#A94E27]">
                CASE STUDY // {project.category.toUpperCase()}
              </span>
              <span className="text-[#D1C4AC]">|</span>
              <span className="font-mono text-xs text-[#6E5A4D] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8C7464]" />
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#EFE9DD] hover:bg-[#E5DDCB] text-[#5F5044] hover:text-[#231C18] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-7 flex-1">
            {/* Title & Headline */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#231C18] font-heading tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-[#C25E34] font-medium mt-1">
                {project.subtitle}
              </p>
              <p className="text-sm text-[#483C33] mt-3 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Problem & Solution Split Dossier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Problem Statement */}
              <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5DDCB] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#8A3D1C]">
                  <AlertCircle className="w-4 h-4 text-[#C25E34]" />
                  <span>THE CHALLENGE</span>
                </div>
                <p className="text-xs sm:text-sm text-[#483C33] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Overview */}
              <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5DDCB] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3D624A]">
                  <Lightbulb className="w-4 h-4 text-[#4E7A5E]" />
                  <span>ENGINEERING CONCEPT</span>
                </div>
                <p className="text-xs sm:text-sm text-[#483C33] leading-relaxed">
                  {project.idea}
                </p>
              </div>
            </div>

            {/* Architectural Highlights / Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#A94E27]">
                <Layers className="w-4 h-4" />
                <span>CORE CAPABILITIES & SYSTEM HIGHLIGHTS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4E7A5E] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#342B24] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Employed */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono font-semibold text-[#8C7464]">
                TECHNOLOGY ECOSYSTEM
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#F2EDE2] border border-[#E3DAC7] text-xs font-mono text-[#342B24] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Contribution & Role */}
            <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-[#C25E34] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#231C18] font-mono mr-2">ROLE & CONTRIBUTION:</span>
                <span className="text-[#483C33]">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="px-6 py-4 border-t border-[#E5DDCB] bg-[#F8F5EE] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#8C7464]">
              OFFICIAL PROJECT RECORD // VERIFIED
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-xs font-mono text-[#231C18] flex items-center gap-2 transition-all shadow-soft-sm font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C25E34] hover:bg-[#A94E27] text-xs font-mono text-white flex items-center gap-2 transition-all shadow-terracotta font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
