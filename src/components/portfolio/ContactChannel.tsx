import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ArrowRight, 
  Check, 
  Send,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { MagneticButton } from '../ui/MagneticButton';
import { PROFILE_DATA } from '../../data/profile';
import { ReflectiveCard } from '../ui/ReflectiveCard';
import { ScrollFloat } from '../ui/ScrollFloat';

export const ContactChannel: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCallPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
    window.location.href = `tel:${PROFILE_DATA.phone}`;
  };

  const handleOpenMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Azadnagar+Thane+West+Maharashtra', '_blank');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setStatus('loading');
    
    // Construct real mailto protocol per user instruction
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
      const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`);
      window.location.href = `mailto:${PROFILE_DATA.socials.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus('idle');
        setShowNoteModal(false);
        setFormState({ name: '', email: '', message: '' });
      }, 2500);
    }, 700);
  };

  return (
    <section 
      id="contact" 
      className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/bg/8.png)',
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header matching reference Panel 8 */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white/60 text-xs font-mono font-bold text-[#0F172A] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
            <span>08. GET IN TOUCH</span>
          </div>

          <ScrollFloat
            containerClassName="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight drop-shadow-sm"
            animationDuration={0.8}
            ease="back.inOut(2)"
            stagger={0.025}
          >
            Let's Connect
          </ScrollFloat>

          <p className="text-sm sm:text-base text-[#0F172A] font-medium max-w-xl mx-auto font-sans leading-relaxed bg-white/60 p-2.5 rounded-xl backdrop-blur-md border border-white/40 shadow-xs">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        {/* Correspondence Desk Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Action Cards with spring hover */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              onClick={handleCopyEmail}
              data-cursor="copy"
              data-cursor-text="COPY"
              className="p-4 sm:p-5 rounded-2xl bg-white/95 hover:bg-white border border-[#E5DDCB] shadow-md hover:shadow-xl transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7ECE6] text-[#C25E34] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0F172A]">
                    {PROFILE_DATA.socials.email}
                  </h4>
                  <p className="text-xs text-[#7B6A5C] flex items-center gap-1 mt-0.5">
                    {copiedEmail ? (
                      <span className="text-[#3D624A] font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied to clipboard!
                      </span>
                    ) : (
                      'Click to copy & email'
                    )}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C25E34] group-hover:translate-x-1.5 transition-transform" />
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              onClick={handleCallPhone}
              data-cursor="pointer"
              data-cursor-text="CALL"
              className="p-4 sm:p-5 rounded-2xl bg-white/95 hover:bg-white border border-[#E5DDCB] shadow-md hover:shadow-xl transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7ECE6] text-[#C25E34] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#0F172A]">
                    {PROFILE_DATA.phone}
                  </h4>
                  <p className="text-xs text-[#7B6A5C] flex items-center gap-1 mt-0.5">
                    {copiedPhone ? (
                      <span className="text-[#3D624A] font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied phone number!
                      </span>
                    ) : (
                      'Click to call directly'
                    )}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C25E34] group-hover:translate-x-1.5 transition-transform" />
            </motion.div>

            {/* Location Card with Google Maps action */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              onClick={handleOpenMaps}
              data-cursor="pointer"
              data-cursor-text="MAPS"
              className="p-4 sm:p-5 rounded-2xl bg-white/95 hover:bg-white border border-[#E5DDCB] shadow-md hover:shadow-xl flex items-center justify-between group cursor-pointer transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7ECE6] text-[#C25E34] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#0F172A] leading-snug">
                    {PROFILE_DATA.location}
                  </h4>
                  <p className="text-[11px] text-[#7B6A5C] mt-0.5">
                    Maharashtra, India • Click to view map
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#7B6A5C] group-hover:text-[#C25E34] transition-colors" />
            </motion.div>

            {/* Social Pill Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center justify-center shadow-sm transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center justify-center shadow-sm transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center justify-center shadow-sm transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>

              <MagneticButton
                onClick={() => setShowNoteModal(true)}
                pullFactor={0.2}
                className="ml-auto px-4 py-2.5 rounded-full bg-[#FCFAF6] hover:bg-white border border-[#D1C4AC] text-xs font-sans font-medium text-[#334155] shadow-2xs hover:shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-[#C25E34]" />
                <span>Write a Direct Note</span>
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: Reflective Card from React Bits */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <ReflectiveCard
                overlayColor="rgba(15, 23, 42, 0.4)"
                blurStrength={6}
                glassDistortion={12}
                metalness={0.8}
                roughness={0.35}
                displacementStrength={18}
                noiseScale={1.5}
                specularConstant={2.0}
                grayscale={0.2}
                color="#ffffff"
                name="ADITI SINGH"
                role="COMPUTER ENGINEERING"
                idNumber="9140-2025-2028"
              />
              {/* Resume download overlay action below reflective card */}
              <div className="mt-4 w-full">
                <a
                  href="https://drive.google.com/file/d/10Gq3f0gR2NfLqTqM9b0xQpC8c1b2d3e4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#FCFAF6] hover:bg-white border-2 border-[#D1C4AC] text-[#0F172A] font-sans font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all"
                >
                  <Download className="w-4 h-4 text-[#C25E34]" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Real Mailto Direct Note Modal */}
      <AnimatePresence>
        {showNoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-[#FCFAF6] border border-[#E5DDCB] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
              <button
                onClick={() => setShowNoteModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white border border-[#D1C4AC] text-[#483C33] hover:text-[#0F172A]"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-[#0F172A]">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-[#6E5A4D]">
                  This opens your email client directly addressed to Aditi Singh.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#E2EDE5] text-[#3D624A] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Launching Email Client...</h4>
                  <p className="text-xs text-[#6E5A4D]">Aditi looks forward to reading your message.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-[#5F5044] mb-1">YOUR NAME</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D1C4AC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C25E34]/30 focus:border-[#C25E34] transition-all"
                      placeholder="e.g. Engineering Lead, Recruiter"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#5F5044] mb-1">YOUR EMAIL</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D1C4AC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C25E34]/30 focus:border-[#C25E34] transition-all"
                      placeholder="you@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#5F5044] mb-1">MESSAGE</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D1C4AC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C25E34]/30 focus:border-[#C25E34] transition-all"
                      placeholder="Let's build something together..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-sans text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E2B19A]" />
                    <span>{status === 'loading' ? 'Preparing email...' : 'Send Direct Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
