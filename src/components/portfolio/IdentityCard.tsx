import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  QrCode, 
  Sparkles,
  Cpu,
  RotateCw
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const IdentityCard: React.FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="identity" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 font-mono text-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>01 // DIGITAL IDENTITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Developer ID & <span className="text-cyan-400">Credentials</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Interactive holographic identification card representing Krishna's academic & technical credentials.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Holographic 3D ID Badge Card */}
        <div className="perspective-1000 w-full max-w-md">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotateX, rotateY: rotateY }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="holo-card relative w-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0b1329] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 preserve-3d cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Lanyard Top Slot */}
            <div className="w-16 h-3 mx-auto rounded-full bg-slate-950 border border-slate-800 mb-6 flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-cyan-500/40" />
            </div>

            {/* Header / Security Hologram */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 tracking-wider">DEV OPERATING SYSTEM</div>
                  <div className="text-xs font-bold text-slate-200">IDENTIFICATION BADGE</div>
                </div>
              </div>
              <div className="text-right font-mono text-[11px]">
                <div className="text-slate-500">BADGE ID</div>
                <div className="text-cyan-300 font-bold">{PROFILE_DATA.badgeId}</div>
              </div>
            </div>

            {/* Front of Card Content */}
            {!isFlipped ? (
              <div className="space-y-6">
                {/* Avatar & Core Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-violet-600 p-0.5 shadow-lg shadow-cyan-500/20">
                      <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-2xl font-extrabold text-cyan-300 font-mono">
                        KS
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">{PROFILE_DATA.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono font-medium mt-0.5">Computer Engineering Student</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      {PROFILE_DATA.location}
                    </p>
                  </div>
                </div>

                {/* Academic & Role Badges */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">INSTITUTION:</span>
                    <span className="text-cyan-200 font-semibold truncate ml-2">VIT Mumbai (B.Tech)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">DIPLOMA IT:</span>
                    <span className="text-emerald-300 font-semibold">{PROFILE_DATA.diplomaPercentage}% Distinction</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">CURRENT SGPA:</span>
                    <span className="text-amber-300 font-semibold">9.19 (4th Sem)</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["React", "Next.js", "Node.js", "Python", "MongoDB", "AI/ML", "TypeScript"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/40 text-[11px] font-mono text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer with QR Visual & Flip Prompt */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-white text-slate-950">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      <div>VERIFIED PORTFOLIO</div>
                      <div className="text-cyan-400">STATUS: AUTHORIZED</div>
                    </div>
                  </div>

                  <button className="flex items-center gap-1.5 text-[11px] font-mono text-violet-400 hover:text-violet-300 transition-colors">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip for Details</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Back of Card Content */
              <div className="space-y-6 py-2">
                <div className="text-xs font-mono text-cyan-400 border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>TECHNICAL MINDSET & CONTACT</span>
                  <span className="text-slate-500">[BACK SIDE]</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
                  <p className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    "Driven by high-efficiency software engineering, AI integration, and responsive user experiences."
                  </p>

                  <div className="space-y-2 font-mono">
                    <a 
                      href={PROFILE_DATA.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        GitHub Profile
                      </span>
                      <span className="text-slate-500">github.com/krishna942007</span>
                    </a>

                    <a 
                      href={PROFILE_DATA.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                        LinkedIn Profile
                      </span>
                      <span className="text-slate-500">krishna942007</span>
                    </a>

                    <a 
                      href={`mailto:${PROFILE_DATA.socials.email}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        Direct Email
                      </span>
                      <span className="text-slate-500">{PROFILE_DATA.socials.email}</span>
                    </a>
                  </div>
                </div>

                <button 
                  onClick={() => setIsFlipped(false)}
                  className="w-full py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 hover:bg-cyan-900/60 transition-all"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  Flip Back
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Identity Overview / Key Attributes Panel */}
        <div className="w-full max-w-lg space-y-6">
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Core Technical Identity
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Krishna Singh is a Computer Engineering developer with a Diploma in IT, specializing in AI-ML integration, responsive web applications, and fast product development.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-cyan-400">FOCUS AREA</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">AI/ML & Intelligent Software</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-emerald-400">BUILD STYLE</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Fast, Responsive, Practical</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-violet-400">ACADEMIC RECORD</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">SGPA 9.19 | Diploma 91.4%</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-amber-400">DIRECTION</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Continuous Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
