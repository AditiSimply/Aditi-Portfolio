import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { 
  Puzzle, 
  Users, 
  Lightbulb, 
  GraduationCap, 
  ArrowRight,
  IdCard,
  X,
  MapPin,
  RotateCw,
  ShieldCheck
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { ScrollFloat } from '../ui/ScrollFloat';
import { IdentityCard } from './IdentityCard';
import { MagneticButton } from '../ui/MagneticButton';

export const PersonalArchive: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showIdCardModal, setShowIdCardModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [glareCoords, setGlareCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth springs for 3D tilt
  const tiltX = useSpring(0, { stiffness: 280, damping: 22 });
  const tiltY = useSpring(0, { stiffness: 280, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tiltX.set(y * -14); // Rotate around X axis
    tiltY.set(x * 14);  // Rotate around Y axis

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareCoords({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const pillars = [
    { title: 'Problem Solver', icon: Puzzle, desc: 'Breaking down complex algorithmic and practical challenges into clean, structured solutions.' },
    { title: 'Team Player', icon: Users, desc: 'Empathetic collaborator with proven group coordination across hackathons and internships.' },
    { title: 'Creative Mindset', icon: Lightbulb, desc: 'Blending aesthetic layout sensibility with disciplined software engineering.' },
    { title: 'Always Learning', icon: GraduationCap, desc: 'Continuously expanding skills across systems, modern web tools, and technology management.' }
  ];

  return (
    <section 
      id="about" 
      className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/bg/2.png)',
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white/60 text-xs font-mono font-bold text-[#0F172A] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
            <span>02. ABOUT ME</span>
          </div>
          
          <ScrollFloat
            containerClassName="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F172A] tracking-tight drop-shadow-sm"
            animationDuration={0.8}
            ease="back.inOut(2)"
            stagger={0.02}
          >
            More Than Just A Developer
          </ScrollFloat>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Storytelling & Values */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base text-[#0F172A] font-medium leading-relaxed font-sans bg-white/60 p-5 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm">
              A motivated and detail-oriented Computer Engineering graduate with a strong foundation in software development, problem-solving, and teamwork. Eager to contribute technical and communication skills in academic projects, internships, and future career opportunities, while continuing to grow knowledge in both technology and management domains.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => setShowDetailsModal(true)}
                pullFactor={0.2}
                className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <span>Know Me Better</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2B19A]" />
              </MagneticButton>

              <button
                onClick={() => setShowIdCardModal(true)}
                className="px-5 py-3 rounded-full bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-[#334155] font-sans text-xs sm:text-sm font-medium transition-all shadow-2xs flex items-center gap-2 hover:-translate-y-0.5"
              >
                <IdCard className="w-4 h-4 text-[#C25E34]" />
                <span>3D Lanyard Pass</span>
              </button>
            </div>

            {/* Quick Facts Strip */}
            <div className="p-4 rounded-2xl bg-[#FCFAF6]/80 border border-[#E5DDCB] space-y-2.5 text-xs text-[#5F5044] font-sans">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#C25E34]" />
                <span>Location: {PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-[#C25E34]" />
                <span>Degree: {PROFILE_DATA.degree}</span>
              </div>
            </div>
          </div>

          {/* Center Column: Physical Flippable 3D Identity Card with Specular Reflection */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-4">
            
            {/* Lanyard Top Ring & Strap Hook */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-12 h-4 rounded-t-lg bg-gradient-to-r from-stone-700 via-stone-900 to-stone-700 shadow-sm" />
              <div className="w-6 h-3 bg-gradient-to-b from-stone-400 to-stone-600 rounded-sm shadow-inner" />
            </div>

            {/* 3D Flippable Card Perspective Wrapper */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              onClick={handleCardClick}
              data-cursor="card"
              data-cursor-text="FLIP"
              style={{ perspective: 1200 }}
              className="relative w-full max-w-[290px] sm:max-w-[310px] cursor-pointer select-none"
            >
              <motion.div
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 24,
                }}
                className="relative w-full min-h-[490px] rounded-2xl shadow-2xl transition-shadow duration-300"
              >
                {/* Dynamic Specular Light Reflection Layer */}
                <div
                  style={{
                    background: isHovered
                      ? `radial-gradient(circle 280px at ${glareCoords.x}% ${glareCoords.y}%, rgba(255,255,255,0.3) 0%, transparent 75%)`
                      : 'transparent',
                    transform: 'translateZ(1px)',
                  }}
                  className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-200"
                />

                {/* ================= CARD FRONT: Identity & Photo ================= */}
                <div 
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute inset-0 rounded-2xl p-4 sm:p-5 bg-[#FCFAF6] border-2 border-[#D1C4AC] flex flex-col justify-between shadow-xl"
                >
                  {/* Top Bar with Badge ID */}
                  <div className="flex items-center justify-between border-b border-[#E5DDCB] pb-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C25E34] animate-pulse" />
                      <span className="font-mono text-[11px] font-bold tracking-wider text-[#0F172A]">
                        {PROFILE_DATA.badgeId}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B6A5C] bg-[#F8F5EE] px-2 py-0.5 rounded border border-[#E5DDCB]">
                      STUDENT PASS
                    </span>
                  </div>

                  {/* Photo Section */}
                  <div className="flex-1 flex flex-col justify-center items-center py-2 space-y-2">
                    <div className="w-full h-[220px] rounded-xl overflow-hidden bg-stone-100 border border-[#E5DDCB] shadow-inner shrink-0">
                      <img
                        src="/assets/editorial/about_polaroid_hd.jpg"
                        alt="Aditi Singh student developer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="text-center space-y-0.5 w-full px-1">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight leading-tight">
                        Aditi Singh
                      </h3>
                      <p className="text-xs text-[#C25E34] font-sans font-semibold">
                        Computer Engineering Graduate
                      </p>
                      <p className="text-[11px] text-[#6E5A4D] font-sans truncate">
                        Vidyalankar Institute of Technology, Mumbai
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Note */}
                  <div className="pt-2 border-t border-[#E5DDCB] flex items-center justify-between text-[11px] font-mono text-[#7B6A5C] shrink-0">
                    <span className="flex items-center gap-1 text-[#3D624A] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="flex items-center gap-1 text-[#C25E34] font-semibold">
                      <RotateCw className="w-3 h-3" />
                      Click to Flip
                    </span>
                  </div>
                </div>

                {/* ================= CARD BACK: Academic & Resume Dossier ================= */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className="absolute inset-0 rounded-2xl p-4 sm:p-5 bg-[#0F172A] text-white border-2 border-[#D4AF37]/50 flex flex-col justify-between shadow-2xl"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-2 shrink-0">
                    <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                      VERIFIED DOSSIER
                    </span>
                    <span className="text-[10px] font-mono text-white/70">
                      TRANSCRIPT RECORD
                    </span>
                  </div>

                  {/* Academic Highlights */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-center py-2">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-white/90">Diploma in CE</span>
                        <span className="font-mono font-bold text-[#E2B19A]">91.40%</span>
                      </div>
                      <p className="text-[10px] text-white/70">V.P.M's Polytechnic, Thane (2022–2025)</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-white/90">Secondary School (CBSE)</span>
                        <span className="font-mono font-bold text-[#E2B19A]">90.40%</span>
                      </div>
                      <p className="text-[10px] text-white/70">Lok Puram Public School (2022)</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase block font-bold">CURRENT DEGREE</span>
                      <p className="text-xs font-semibold text-white">B.Tech in Computer Engineering</p>
                      <p className="text-[10px] text-white/70">Vidyalankar Institute of Tech (2025–2028)</p>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-white/80 font-mono">
                      <span>Status:</span>
                      <span className="text-[#34D399] font-semibold">Active Opportunity</span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-white/60 shrink-0">
                    <span>SECURITY HASH // OK</span>
                    <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                      <RotateCw className="w-3 h-3" />
                      Click to Flip
                    </span>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Click to Flip Helper Pill */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCardClick}
              className="mt-4 px-4 py-2 rounded-full bg-[#FCFAF6] hover:bg-white border border-[#E5DDCB] text-xs font-mono font-semibold text-[#7B6A5C] flex items-center gap-2 shadow-sm hover:text-[#C25E34] transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#C25E34]" />
              <span>{isFlipped ? 'Show Identity Front' : 'Flip to View Credentials'}</span>
            </motion.button>
          </div>

          {/* Right Column: Stacked Tactile Pills & Notepad Notes */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tactile Identity Pills matching reference */}
            <div className="space-y-3">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="p-3.5 rounded-2xl bg-[#FCFAF6] hover:bg-white border border-[#E5DDCB] shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F7ECE6] group-hover:bg-[#EFD4C7] text-[#C25E34] flex items-center justify-center transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-[#0F172A]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#6E5A4D] font-sans leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tactile Lined Notepad Paper with Spring hover */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DEC9] shadow-md rotate-1 text-[#483C33] space-y-2 cursor-default"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#A94E27] font-semibold border-b border-[#E8DEC9] pb-1 flex items-center justify-between">
                <span>NOTES // CORE PILLARS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D624A]" />
              </div>
              <ul className="font-handwriting text-xl sm:text-2xl text-stone-700 space-y-1 pt-1 leading-snug">
                <li>• Ideas that solve everyday challenges</li>
                <li>• Design focused on usability & clarity</li>
                <li>• Development with clean modular code</li>
                <li>• Growth through perpetual curiosity</li>
              </ul>
            </motion.div>

          </div>

        </div>

      </div>

      {/* 3D Student ID Card Physics Modal */}
      <AnimatePresence>
        {showIdCardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-[#F8F5EE] border border-[#E5DDCB] rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowIdCardModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#D1C4AC] text-[#483C33] hover:text-[#0F172A]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-4 text-center">
                <span className="px-3 py-1 rounded-full bg-[#F7ECE6] text-[#A94E27] font-mono text-xs font-semibold">
                  INTERACTIVE STUDENT ID PASS
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0F172A] mt-1">
                  Aditi Singh // Physical ID Pass
                </h3>
              </div>

              {/* Lanyard ID Card Component Embedded */}
              <div className="h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
                <IdentityCard />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Dossier Modal */}
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-[#FCFAF6] border border-[#E5DDCB] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#D1C4AC] text-[#483C33] hover:text-[#0F172A]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#F7ECE6] text-[#A94E27] font-mono text-xs font-semibold">
                  ACADEMIC & CAREER PROFILE
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#0F172A]">
                  Aditi Singh
                </h3>
                <p className="text-xs font-mono text-[#6E5A4D]">
                  {PROFILE_DATA.institution} • {PROFILE_DATA.degree}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#483C33] font-sans leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">Career Objective:</h4>
                  <p>{PROFILE_DATA.careerObjective}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">Languages:</h4>
                  <div className="flex gap-2">
                    {PROFILE_DATA.languages.map((l, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#F8F5EE] border border-[#E5DDCB] text-xs">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">Soft Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {PROFILE_DATA.softSkills.map((s, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#F8F5EE] border border-[#E5DDCB] text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
