import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  BookOpen, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Mail, 
  Code,
  Menu,
  X
} from 'lucide-react';
import { Magnet } from './Magnet';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'identity', label: 'Identity', icon: User },
  { id: 'about', label: 'Archive', icon: Code },
  { id: 'projects', label: 'Projects', icon: BookOpen },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Desktop Navigation Dock */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled 
              ? 'bg-[#0b0f19]/85 backdrop-blur-xl border-slate-800 shadow-2xl shadow-cyan-950/20' 
              : 'bg-[#0f172a]/60 backdrop-blur-md border-white/10'
          }`}
        >
          {/* Logo Pill */}
          <button 
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all font-mono text-xs font-semibold mr-1"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            KS.OS
          </button>

          {/* Dock Links */}
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <Magnet key={item.id} magnetStrength={0.25}>
                <div className="relative">
                  <button
                    onClick={() => scrollTo(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    aria-label={item.label}
                    className={`relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-cyan-400 bg-cyan-500/15 shadow-inner' 
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 relative z-10" />

                    {/* Active Pill Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDockIndicator"
                        className="absolute inset-0 bg-cyan-500/20 rounded-full border border-cyan-500/40 shadow-glow-cyan"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-cyan-300 text-[11px] font-mono tracking-wide whitespace-nowrap shadow-xl pointer-events-none z-50"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Magnet>
            );
          })}
        </motion.nav>
      </div>

      {/* Mobile Top Header & Drawer Toggle */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden px-4 py-3 bg-[#07090e]/90 backdrop-blur-lg border-b border-slate-800 flex items-center justify-between">
        <button 
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 font-mono text-sm font-bold text-slate-100"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          KRISHNA SINGH <span className="text-cyan-400 text-xs">/ OS</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[53px] z-40 md:hidden bg-[#0a0e1a]/95 backdrop-blur-2xl border-b border-slate-800 p-4 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 px-3.5 py-3 rounded-xl border text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
