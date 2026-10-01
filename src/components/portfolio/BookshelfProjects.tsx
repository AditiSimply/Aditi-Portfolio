import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  X, 
  Copy, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { ScrollFloat } from '../ui/ScrollFloat';
import type { ProjectCaseStudy } from '../../data/projects';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

interface BookMediaAsset {
  volNum: string;
  fieldManual: string;
  subtitleTag: string;
  videoUrl: string;
  imageUrl: string;
  accent: string;
  steps: { label: string; detail: string }[];
  commandPrompt: string;
}

const BOOK_ASSETS: Record<string, BookMediaAsset> = {
  'studio-vyakhya': {
    volNum: 'VOL. I',
    fieldManual: 'FIELD MANUAL - I',
    subtitleTag: 'The Agentic Engineer',
    videoUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/6b3318cc6a7da610e3a55369131b20a2419cda826d558da09da284f09582956d.mp4',
    imageUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/eafc13621b9605d30356b7d4396072b2593a46e0c47c96d17ba60ca03d98f925.jpg',
    accent: '#c3a47b',
    steps: [
      { label: '01. Architecture', detail: 'MERN stack with Cloudinary media storage & Razorpay webhooks.' },
      { label: '02. UI/UX Workflow', detail: '3D Exhibition Explorer & interactive design catalogue.' },
      { label: '03. Deployment', detail: 'Production-ready cloud API & secure payment gateway integration.' }
    ],
    commandPrompt: 'npx create-vyakhya-platform --template mern-interiors'
  },
  'plant-caring-app': {
    volNum: 'VOL. II',
    fieldManual: 'FIELD MANUAL - II',
    subtitleTag: 'The Quiet Terminal',
    videoUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/76a7b0b20e4992f91bb5febf2fa8edd2d33fd4b7bb0cda5f8ae0fffdff9d5a7e.mp4',
    imageUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/99df6a45ad1f9dd7e47b65c064df0ae58c7c22069fadd9aa896754c3bad27123.jpg',
    accent: '#e06338',
    steps: [
      { label: '01. Native Core', detail: 'Java & XML Android app for automated plant hydration schedules.' },
      { label: '02. Alert Engine', detail: 'Background notification service with custom interval timers.' },
      { label: '03. Species DB', detail: 'Botanical database with species-specific care guides.' }
    ],
    commandPrompt: 'adb install plant-care-v2.1.apk'
  },
  'aditi-portfolio': {
    volNum: 'VOL. III',
    fieldManual: 'FIELD MANUAL - III',
    subtitleTag: 'The Augmented Editor',
    videoUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/aabcdc51e4d9f6c4cbf6656bbd3447d6b50814507395f9e5bd0efecd7c1b22b3.mp4',
    imageUrl: 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/5f73c2c9094bbeef04fdc241909a4672235142882112ec15c6d130f89bf5fd16.jpg',
    accent: '#4ade80',
    steps: [
      { label: '01. ThreeUI 3D', detail: 'Bestsellers book showcase with mouse parallax & page fanning.' },
      { label: '02. Dynamic BG', detail: 'Vanishing mist transitions over custom background images.' },
      { label: '03. Matrix Agent', detail: 'Interactive terminal simulator with CLI command execution.' }
    ],
    commandPrompt: 'git clone https://github.com/aditi/portfolio.git'
  }
};

export const BookshelfProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedBookForDrawer, setSelectedBookForDrawer] = useState<ProjectCaseStudy | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mouse tilt tracking per book card
  const [tiltMap, setTiltMap] = useState<Record<string, { rotateX: number; rotateY: number }>>({});

  const categories = ['All', 'Full-Stack Web', 'Mobile App'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12; // tilt max 12deg
    const rotateX = -((y - centerY) / centerY) * 12;
    setTiltMap(prev => ({ ...prev, [id]: { rotateX, rotateY } }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltMap(prev => ({ ...prev, [id]: { rotateX: 0, rotateY: 0 } }));
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyPrompt = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(true);
    triggerToast('Command copied to clipboard!');
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <section 
      id="projects" 
      className="relative py-28 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center text-white min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: 'url(/bg/3.png)',
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#1c1917] border border-[#c3a47b]/40 text-[#f5f5f4] text-xs font-mono font-medium shadow-2xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#c3a47b]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* ThreeUI Signature Oversized Editorial Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono font-bold text-[#f5f5f4] backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c3a47b] animate-pulse" />
            <span>THREEUI BESTSELLERS SHOWCASE</span>
          </div>

          <ScrollFloat
            containerClassName="text-4xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight text-[#FAF7F2] drop-shadow-lg"
            animationDuration={0.8}
            ease="back.inOut(2)"
            stagger={0.03}
          >
            Field Manuals
          </ScrollFloat>

          <p className="text-sm sm:text-base text-stone-200 font-sans max-w-2xl mx-auto leading-relaxed bg-black/50 p-4 rounded-2xl border border-white/15 backdrop-blur-md shadow-md">
            Interactive 3D hardcover showcase. Hover over any volume for mouse parallax tilt, click to inspect execution steps, or launch the complete case study dossier.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all shadow-md ${
                    isActive
                      ? 'bg-[#c3a47b] text-[#1c1917] shadow-lg scale-105'
                      : 'bg-black/60 hover:bg-black/80 border border-white/20 text-stone-300 backdrop-blur-md'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Books Showcase Grid Container (Exact ThreeUI Parallax & Fanned Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto pt-4">
          {filteredProjects.map((project) => {
            const asset = BOOK_ASSETS[project.id] || BOOK_ASSETS['studio-vyakhya'];
            const tilt = tiltMap[project.id] || { rotateX: 0, rotateY: 0 };
            const isDrawerOpen = selectedBookForDrawer?.id === project.id;

            return (
              <div
                key={project.id}
                className="relative group cursor-pointer"
                style={{ perspective: '1200px' }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onClick={() => setSelectedBookForDrawer(project)}
              >
                {/* 3D Book Volume Shell */}
                <motion.div
                  animate={{
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                    scale: isDrawerOpen ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="relative w-full aspect-[3/4.2] rounded-2xl shadow-2xl bg-[#141210] border border-[#c3a47b]/30 overflow-hidden flex flex-col justify-between"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 30px rgba(195, 164, 123, 0.15)'
                  }}
                >
                  {/* Background Video Loop with Image Fallback */}
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-100 contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                      poster={asset.imageUrl}
                    >
                      <source src={asset.videoUrl} type="video/mp4" />
                      <img src={asset.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-100 contrast-105 brightness-105" />
                    </video>
                    {/* Subtle Scrim for Pristine Text Legibility without Fading Cover Art */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 z-1 pointer-events-none" />
                  </div>

                  {/* Fanned Paper Page Stack Edge Effect (Right Edge) */}
                  <div className="absolute right-0 top-3 bottom-3 w-3 flex flex-col justify-between py-1 z-10 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-l from-[#faf7f2] via-[#e2d5c3] to-transparent rounded-r-xs shadow-md border-r border-[#c3a47b]/40 opacity-90" />
                  </div>

                  {/* Spine Foil Line (Left Edge) */}
                  <div className="absolute left-0 inset-y-0 w-2.5 bg-gradient-to-r from-[#c3a47b] via-[#8c6b43] to-transparent z-10 shadow-lg" />

                  {/* Book Cover Typography Content (ThreeUI Replica) */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full text-center">
                    
                    {/* Header Spec Tag */}
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#F59E0B] border-b border-white/20 pb-3 bg-black/40 backdrop-blur-xs rounded-t-lg px-2">
                      <span className="font-bold text-[#F59E0B] drop-shadow-sm">{asset.fieldManual}</span>
                      <span className="px-2.5 py-0.5 rounded bg-black/80 border border-[#F59E0B]/50 text-white font-bold shadow-sm">
                        {project.year}
                      </span>
                    </div>

                    {/* Book Main Title & Emblem */}
                    <div className="my-auto py-4 space-y-3 bg-black/40 backdrop-blur-xs p-4 rounded-2xl border border-white/10 shadow-lg">
                      <div className="w-14 h-14 mx-auto rounded-full border border-[#F59E0B]/80 bg-black/80 backdrop-blur-md flex items-center justify-center text-[#F59E0B] shadow-lg group-hover:scale-110 group-hover:border-white transition-all duration-300">
                        <BookOpen className="w-7 h-7" />
                      </div>

                      <h3 
                        className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-md group-hover:text-[#F59E0B] transition-colors"
                        style={{ fontFamily: "'Iowan Old Style', 'Playfair Display', Georgia, serif" }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs font-sans text-stone-100 max-w-[220px] mx-auto line-clamp-2 leading-relaxed font-medium drop-shadow-sm">
                        {asset.subtitleTag} — {project.subtitle}
                      </p>
                    </div>

                    {/* Footer Badging */}
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono text-stone-200 bg-black/40 backdrop-blur-xs rounded-b-lg px-2">
                      <span className="flex items-center gap-1 text-[#F59E0B] font-bold group-hover:translate-x-1 transition-transform drop-shadow-sm">
                        INSPECT <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] tracking-wider text-white font-mono font-bold">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Drawer Panel (Right-Side Floating Drawer as in ThreeUI) */}
      <AnimatePresence>
        {selectedBookForDrawer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBookForDrawer(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-[#141210] border-l border-[#c3a47b]/40 z-50 text-white p-6 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#c3a47b]/30 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c3a47b]">
                    <Sparkles className="w-4 h-4" />
                    <span>{BOOK_ASSETS[selectedBookForDrawer.id]?.fieldManual}</span>
                  </div>
                  <button
                    onClick={() => setSelectedBookForDrawer(null)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-stone-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#faf7f2] mb-2">
                    {selectedBookForDrawer.title}
                  </h3>
                  <p className="text-sm font-sans text-stone-300 leading-relaxed">
                    {selectedBookForDrawer.summary}
                  </p>
                </div>

                {/* Step-by-Step Architecture Specs */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-[#c3a47b] uppercase">
                    Execution Workflow Steps
                  </h4>
                  <div className="space-y-2.5">
                    {BOOK_ASSETS[selectedBookForDrawer.id]?.steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c3a47b] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-mono font-bold text-stone-200">{step.label}</div>
                          <div className="text-xs font-sans text-stone-400 leading-normal">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-[#c3a47b] uppercase">
                    Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBookForDrawer.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/15 text-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CLI Command Bar */}
                <div className="p-4 rounded-xl bg-black border border-[#c3a47b]/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>CLI REPOSITORY EXECUTION</span>
                    <button
                      onClick={() => copyPrompt(BOOK_ASSETS[selectedBookForDrawer.id]?.commandPrompt || '')}
                      className="flex items-center gap-1 text-[#c3a47b] hover:underline"
                    >
                      {copiedCommand ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCommand ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <code className="block text-xs font-mono text-amber-200 break-all bg-stone-900/80 p-2 rounded border border-white/10">
                    {BOOK_ASSETS[selectedBookForDrawer.id]?.commandPrompt}
                  </code>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-8 border-t border-[#c3a47b]/30 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const prj = selectedBookForDrawer;
                    setSelectedBookForDrawer(null);
                    setActiveProject(prj);
                  }}
                  className="w-full py-3 px-6 rounded-xl bg-[#c3a47b] hover:bg-[#b08e64] text-[#1c1917] font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <span>Read Full Case Study Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full Case Study Modal */}
      {activeProject && (
        <ProjectCaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </section>
  );
};
