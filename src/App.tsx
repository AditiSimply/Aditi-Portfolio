import React from 'react';
import { Navigation } from './components/ui/Navigation';
import { ThreeBackground } from './components/three/ThreeBackground';
import { HeroSection } from './components/portfolio/HeroSection';
import { IdentityCard } from './components/portfolio/IdentityCard';
import { PersonalArchive } from './components/portfolio/PersonalArchive';
import { BookshelfProjects } from './components/portfolio/BookshelfProjects';
import { SkillLaboratory } from './components/portfolio/SkillLaboratory';
import { ExperienceTimeline } from './components/portfolio/ExperienceTimeline';
import { EducationArchive } from './components/portfolio/EducationArchive';
import { AchievementCabinet } from './components/portfolio/AchievementCabinet';
import { GitHubActivityPanel } from './components/portfolio/GitHubActivityPanel';
import { ContactChannel } from './components/portfolio/ContactChannel';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Neural Canvas */}
      <ThreeBackground />

      {/* Grid Mesh Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Floating Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col space-y-12">
        {/* 01. Hero Section */}
        <HeroSection />

        {/* 02. Identity Holographic ID Section */}
        <IdentityCard />

        {/* 03. Personal Archive & Mindset */}
        <PersonalArchive />

        {/* 04. 3D Project Bookshelf & Case Studies */}
        <BookshelfProjects />

        {/* 05. Skill Laboratory & Technology Map */}
        <SkillLaboratory />

        {/* 06. Experience Timeline */}
        <ExperienceTimeline />

        {/* 07. Education & Academic Records */}
        <EducationArchive />

        {/* 08. Achievement Cabinet */}
        <AchievementCabinet />

        {/* 09. Code Activity & Language Telemetry */}
        <GitHubActivityPanel />

        {/* 10. Direct Contact Channel */}
        <ContactChannel />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              KRISHNA SINGH <span className="text-slate-600">//</span> PORTFOLIO OS v2.6
            </span>
          </div>

          <div className="text-center sm:text-right space-y-1">
            <p>Designed & Engineered for High-Efficiency Digital Storytelling</p>
            <p className="text-[11px] text-slate-500">
              Vidyalankar Institute of Technology, Mumbai • All Credentials Verified
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-lg"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
