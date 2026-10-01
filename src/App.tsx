import React from 'react';
import { Navigation } from './components/ui/Navigation';
import { HeroSection } from './components/portfolio/HeroSection';
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
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#1E293B] selection:bg-[#C25E34]/20 selection:text-[#0F172A] overflow-x-clip">
      {/* Floating Modern Header Navigation matching reference */}
      <Navigation />

      {/* Main Content Flow: Each Section is a Distinct Editorial Chapter */}
      <main className="relative z-10 flex flex-col">
        {/* Chapter 01: Hero Section (Split Editorial Workspace Scene) */}
        <HeroSection />

        {/* Chapter 02: About Me (Identity Spread with Tilted Polaroid & Tactile Notepad) */}
        <PersonalArchive />

        {/* Chapter 03: Project Archive (Physical Bookshelf Library) */}
        <BookshelfProjects />

        {/* Chapter 04: Skill Laboratory (Illuminated Marble Podium with 3D Glossy Badges) */}
        <SkillLaboratory />

        {/* Chapter 05: Experience (Editorial Internship Timeline on Agency Studio Desk) */}
        <ExperienceTimeline />

        {/* Chapter 06: Academic Records (Interconnected Campus Landscape Journey) */}
        <EducationArchive />

        {/* Chapter 07: Honors & Recognition (Museum Spotlight Award Pedestals) */}
        <AchievementCabinet />

        {/* Chapter 08: Code Telemetry & Activity Rhythm */}
        <GitHubActivityPanel />

        {/* Chapter 09: Correspondence Desk (Stationery Letter & Direct Channels) */}
        <ContactChannel />
      </main>

      {/* Editorial Footer */}
      <footer className="relative z-10 border-t border-[#E5DDCB] bg-[#FCFAF6] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-sans text-[#6E5A4D]">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D624A]" />
            <span className="font-heading font-bold text-sm tracking-wider text-[#0F172A]">
              ADITI SINGH <span className="text-[#C25E34]">//</span> PORTFOLIO
            </span>
          </div>

          <div className="text-center sm:text-right space-y-1">
            <p className="font-medium text-[#334155]">
              Computer Engineering Graduate • Vidyalankar Institute of Technology, Mumbai
            </p>
            <p className="text-[11px] text-[#8C7464] font-mono">
              Designed & Engineered with Editorial Craft • Zero Fabricated Data
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#FFFDF9] border border-[#D1C4AC] text-[#334155] hover:text-[#C25E34] hover:bg-white transition-all shadow-sm hover:shadow"
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
