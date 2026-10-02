import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { MagneticButton } from '../ui/MagneticButton';
import { PROFILE_DATA } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const handleMouseMove = (_e: React.MouseEvent<HTMLDivElement>) => {
    // Parallax or glare interactions if needed
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] pt-28 sm:pt-32 pb-28 flex items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}bg/1.png)`,
      }}
    >
      {/* Bottom Vanishing Mist Transition */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10">
        
        {/* Left Column: Editorial Typography & Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 space-y-6 sm:space-y-7"
        >
          {/* Subtle Salutation with Sparkle */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-white/60 text-[#C25E34] text-xs sm:text-sm font-sans font-bold tracking-wide shadow-sm backdrop-blur-md cursor-default"
          >
            <span>Hi, I'm</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C25E34] animate-pulse" />
          </motion.div>

          {/* Large Editorial Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] font-serif leading-[1.08] drop-shadow-sm">
              Aditi Singh
            </h1>
            <p className="text-lg sm:text-2xl font-heading font-bold text-[#1E293B] tracking-tight drop-shadow-2xs">
              {PROFILE_DATA.role}
            </p>
          </div>

          {/* Resume Grounded Statement */}
          <p className="text-sm sm:text-base text-[#0F172A] font-medium leading-relaxed max-w-xl font-sans bg-white/60 p-4 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm">
            Building meaningful digital experiences with code, creativity and curiosity. Motivated by clean architectures, practical problem solving, and intuitive design.
          </p>

          {/* Badges / Competency Tags with hover springs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Software Development',
              'Problem Solving',
              'Web Development',
              'Teamwork',
              'Management & Tech'
            ].map((tag, idx) => (
              <motion.span
                key={idx}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-3.5 py-1.5 rounded-lg bg-white/90 border border-white/60 text-[#0F172A] text-xs font-sans font-bold shadow-xs hover:border-[#C25E34] hover:text-[#C25E34] transition-colors cursor-default backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action CTAs & Socials with Magnetic attraction */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            {/* Magnetic Main CTA */}
            <MagneticButton
              onClick={() => scrollTo('projects')}
              dataCursor="pointer"
              dataCursorText="EXPLORE"
              pullFactor={0.3}
              highlightColor="rgba(224, 99, 56, 0.4)"
              className="px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-xl transition-shadow group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E2B19A] group-hover:translate-x-1.5 transition-transform duration-300" />
            </MagneticButton>

            {/* Resume button with subtle magnetic hover */}
            <MagneticButton
              onClick={() => window.open('https://drive.google.com/file/d/10Gq3f0gR2NfLqTqM9b0xQpC8c1b2d3e4/view?usp=sharing', '_blank')}
              pullFactor={0.15}
              dataCursor="pointer"
              className="px-5 py-3 rounded-full bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-[#334155] hover:text-[#0F172A] font-sans text-xs sm:text-sm font-medium shadow-2xs hover:shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#7B6A5C]" />
              <span>View Resume</span>
            </MagneticButton>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-[#FCFAF6] hover:bg-[#0F172A] border border-[#E5DDCB] hover:border-[#0F172A] text-[#483C33] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-[#FCFAF6] hover:bg-[#0F172A] border border-[#E5DDCB] hover:border-[#0F172A] text-[#483C33] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={`mailto:${PROFILE_DATA.socials.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-full bg-[#FCFAF6] hover:bg-[#0F172A] border border-[#E5DDCB] hover:border-[#0F172A] text-[#483C33] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

