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
  { id: 'achievements', label: 'Honors', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

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
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled 
              ? 'bg-[#FCFAF6]/90 backdrop-blur-xl border-[#D1C4AC] shadow-card' 
              : 'bg-[#FCFAF6]/75 backdrop-blur-md border-[#E5DDCB] shadow-soft'
          }`}
        >
          {/* Wordmark Pill */}
          <button 
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full bg-[#F7ECE6] text-[#A94E27] border border-[#E2B19A] hover:bg-[#EFD4C7] transition-all font-mono text-xs font-semibold mr-1"
          >
            <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
            ADITI SINGH
          </button>

          {/* Dock Links */}
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <Magnet key={item.id} magnetStrength={0.2}>
                <div className="relative">
                  <button
                    onClick={() => scrollTo(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    aria-label={item.label}
                    className={`relative flex items-center justify-center p-2.5 rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'text-[#FFFFFF]' 
                        : 'text-[#6E5A4D] hover:text-[#231C18] hover:bg-[#EFE9DD]/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 relative z-10" />

                    {/* Active Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDockIndicator"
                        className="absolute inset-0 bg-[#C25E34] rounded-full shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>

                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#231C18] border border-[#483C33] text-[#FAF8F5] text-[11px] font-mono tracking-wide whitespace-nowrap shadow-lg pointer-events-none z-50"
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

      {/* Mobile Top Header */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden px-4 py-3 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#E5DDCB] flex items-center justify-between shadow-soft-sm">
        <button 
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 font-mono text-sm font-bold text-[#231C18]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C25E34]" />
          ADITI SINGH <span className="text-[#8C7464] text-xs font-normal">/ PORTFOLIO</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] text-[#483C33] hover:text-[#231C18]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-0 top-[53px] z-40 md:hidden bg-[#FCFAF6]/95 backdrop-blur-2xl border-b border-[#E5DDCB] p-4 shadow-xl"
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
                        ? 'bg-[#C25E34] text-white border-[#A94E27]'
                        : 'bg-[#F8F5EE] border-[#E5DDCB] text-[#483C33] hover:bg-[#EFE9DD]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#C25E34]'}`} />
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
