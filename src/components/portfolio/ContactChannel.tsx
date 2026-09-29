import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { Magnet } from '../ui/Magnet';

export const ContactChannel: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 4500);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>09 // COMMUNICATION GATEWAY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Direct Channels & <span className="text-[#C25E34]">Contact</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Connect directly for software engineering opportunities, collaborative builds, and technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Info Ledger */}
        <div className="parchment-card p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5DDCB] pb-4">
            <span className="font-mono text-xs font-bold text-[#231C18] tracking-wider uppercase">
              VERIFIED CHANNELS
            </span>
            <span className="font-mono text-xs text-[#3D624A] bg-[#EAF2EC] px-2.5 py-0.5 rounded-full border border-[#C5DAC9] font-semibold">
              ● AVAILABLE FOR ROLES
            </span>
          </div>

          <div className="space-y-4">
            {/* Direct Email with Quick Copy */}
            <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#8C7464] block">PRIMARY EMAIL</span>
                <span className="text-sm font-bold font-mono text-[#231C18] break-all">
                  {PROFILE_DATA.socials.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-[#5F5044] hover:text-[#C25E34] transition-all shadow-soft-sm shrink-0 ml-3"
                title="Copy Email Address"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#3D624A]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Phone */}
            <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#8C7464] block">PHONE LINE</span>
                <span className="text-sm font-bold font-mono text-[#231C18]">
                  {PROFILE_DATA.socials.phone}
                </span>
              </div>

              <a
                href={`tel:${PROFILE_DATA.socials.phone}`}
                className="p-2 rounded-lg bg-[#FCFAF6] hover:bg-[#FFFFFF] border border-[#D1C4AC] text-[#5F5044] hover:text-[#C25E34] transition-all shadow-soft-sm shrink-0 ml-3"
                aria-label="Call phone number"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#8C7464] block">BASE LOCATION</span>
                <span className="text-sm font-bold font-mono text-[#231C18]">
                  {PROFILE_DATA.location}
                </span>
              </div>

              <div className="p-2 rounded-lg bg-[#FCFAF6] border border-[#E5DDCB] text-[#A94E27] shrink-0 ml-3">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <span className="text-xs font-mono text-[#8C7464] block mb-2 font-semibold">
              DIRECT REACH
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="px-4 py-2 rounded-xl bg-[#F8F5EE] hover:bg-[#FCFAF6] border border-[#E5DDCB] hover:border-[#D1C4AC] text-xs font-mono text-[#231C18] font-semibold transition-all shadow-soft-sm"
              >
                Send Email Directly →
              </a>

              <a
                href={`tel:${PROFILE_DATA.socials.phone}`}
                className="px-4 py-2 rounded-xl bg-[#F8F5EE] hover:bg-[#FCFAF6] border border-[#E5DDCB] hover:border-[#D1C4AC] text-xs font-mono text-[#231C18] font-semibold transition-all shadow-soft-sm"
              >
                Direct Call →
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Message Form */}
        <div className="parchment-card p-6 sm:p-8 rounded-2xl space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#231C18] border-b border-[#E5DDCB] pb-3">
            <MessageSquare className="w-4 h-4 text-[#C25E34]" />
            <span>TRANSMIT DISPATCH MESSAGE</span>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-xl bg-[#EAF2EC] border border-[#C5DAC9] text-center space-y-3"
              >
                <CheckCircle2 className="w-8 h-8 text-[#3D624A] mx-auto" />
                <h4 className="font-bold text-[#231C18] text-base font-heading">Dispatch Received!</h4>
                <p className="text-xs text-[#3D624A]">
                  Thank you for reaching out. Aditi will respond directly to your provided email address.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-[#483C33] block font-semibold">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] focus:border-[#C25E34] focus:outline-none focus:ring-1 focus:ring-[#C25E34] text-[#231C18] text-sm placeholder:text-[#BDAF9F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-[#483C33] block font-semibold">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] focus:border-[#C25E34] focus:outline-none focus:ring-1 focus:ring-[#C25E34] text-[#231C18] text-sm placeholder:text-[#BDAF9F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#483C33] block font-semibold">
                    MESSAGE / INQUIRY
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discuss opportunities, projects, or collaborations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] focus:border-[#C25E34] focus:outline-none focus:ring-1 focus:ring-[#C25E34] text-[#231C18] text-sm placeholder:text-[#BDAF9F] transition-all resize-none"
                  />
                </div>

                <Magnet magnetStrength={0.2}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#C25E34] hover:bg-[#A94E27] active:bg-[#8A3D1C] disabled:opacity-70 text-white font-semibold text-sm tracking-wide shadow-terracotta flex items-center justify-center gap-2 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Sending Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </Magnet>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
