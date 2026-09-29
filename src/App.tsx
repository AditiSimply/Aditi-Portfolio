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
    <div className="relative min-h-screen bg-[#F8F5EE] text-[#231C18] selection:bg-[#C25E34]/20 selection:text-[#794D2C]">
      {/* Background Ambient Warm Particle Canvas */}
      <ThreeBackground />

      {/* Architectural Fine Guide Grid */}
      <div className="fixed inset-0 architect-guide pointer-events-none opacity-60 z-0" />

      {/* Floating Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col space-y-6">
        {/* 01. Hero Section */}
        <HeroSection />

        {/* 02. Identity Holographic Lanyard Card */}
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
      <footer className="relative z-10 border-t border-[#E5DDCB] bg-[#FCFAF6]/90 backdrop-blur-md py-12 px-4 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#6E5A4D]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4E7A5E]" />
            <span className="font-bold text-[#231C18]">
              ADITI SINGH <span className="text-[#A94E27]">//</span> PORTFOLIO ARCHIVE
            </span>
          </div>

          <div className="text-center sm:text-right space-y-1">
            <p className="font-medium text-[#483C33]">Designed & Engineered for High-Craft Digital Storytelling</p>
            <p className="text-[11px] text-[#8C7464]">
              Vidyalankar Institute of Technology, Mumbai • All Credentials Verified
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#F8F5EE] border border-[#D1C4AC] text-[#483C33] hover:text-[#C25E34] hover:bg-[#FFFFFF] transition-all shadow-soft-sm"
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
