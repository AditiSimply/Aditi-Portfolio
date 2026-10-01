import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { BubbleMenu } from './BubbleMenu';

const NAV_ITEMS = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'achievements', label: 'achievements' },
  { id: 'contact', label: 'contact' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {/* Floating Desktop Navigation Header with Sliding Spring Pill */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border border-white/80 shadow-lg' 
            : 'bg-white/90 backdrop-blur-md border border-white/60 shadow-md'
        }`}>
          {/* Logo / Identity */}
          <button 
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider text-[#1E293B] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] rounded-full p-1"
          >
            <span className="w-7 h-7 rounded-full bg-[#F7ECE6] border border-[#E2B19A] flex items-center justify-center text-[#C25E34] shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="tracking-widest font-heading font-extrabold text-sm text-[#0F172A]">
              ADITI SINGH
            </span>
          </button>

          {/* Desktop Nav Links with Sliding Active Spring Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/80 border border-white/60 text-[13px] font-sans font-semibold text-[#0F172A] shadow-2xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-[#1E293B] hover:text-[#C25E34]'
                  }`}
                >
                  {/* Sliding Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#0F172A] rounded-full shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Magnetic Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton
              onClick={() => scrollTo('contact')}
              pullFactor={0.25}
              className="px-5 py-2 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-sans text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3 h-3 text-[#E2B19A] group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#F8F5EE] border border-[#E5DDCB] text-[#483C33] hover:text-[#0F172A]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-50 lg:hidden bg-[#FCFAF6]/98 backdrop-blur-2xl border border-[#E5DDCB] rounded-2xl p-4 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#0F172A] text-white border-[#0F172A]'
                        : 'bg-[#F8F5EE] border-[#E5DDCB] text-[#483C33] hover:bg-[#EFE9DD]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C25E34]" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-medium text-xs flex items-center justify-center gap-2"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E2B19A]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* React Bits GSAP BubbleMenu Floating Overlay */}
      <BubbleMenu
        useFixedPosition={true}
        menuBg="#0F172A"
        menuContentColor="#FAF8F5"
        logo={<span className="font-heading font-extrabold text-xs text-white tracking-wider">ADITI</span>}
        items={[
          { label: 'home', href: '#hero', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
          { label: 'about', href: '#about', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
          { label: 'projects', href: '#projects', rotation: -6, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
          { label: 'skills', href: '#skills', rotation: 6, hoverStyles: { bgColor: '#ec4899', textColor: '#ffffff' } },
          { label: 'experience', href: '#experience', rotation: -4, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } },
          { label: 'education', href: '#education', rotation: 8, hoverStyles: { bgColor: '#c25e34', textColor: '#ffffff' } },
          { label: 'achievements', href: '#achievements', rotation: -6, hoverStyles: { bgColor: '#eab308', textColor: '#ffffff' } },
          { label: 'contact', href: '#contact', rotation: 6, hoverStyles: { bgColor: '#06b6d4', textColor: '#ffffff' } },
        ]}
      />
    </>
  );
};
