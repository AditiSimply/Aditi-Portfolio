import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Phone,
  MapPin
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Magnet } from '../ui/Magnet';

export const ContactChannel: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/50 text-violet-400 font-mono text-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>09 // COMMUNICATION GATEWAY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Get in Touch & <span className="text-violet-400">Contact</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Reach out directly via email, phone, or send a message regarding projects, internships, and opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Terminal / Channel Info Card */}
        <SpotlightCard className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-slate-500">contact::aditi.sh</span>
          </div>

          <div className="space-y-4 font-mono text-xs text-slate-300">
            <p className="text-slate-400">
              # Verified contact details for Aditi Singh:
            </p>

            {/* Email */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-slate-500">$ echo $EMAIL</div>
              <div className="text-cyan-300 font-bold text-sm sm:text-base flex items-center justify-between">
                <span>{PROFILE_DATA.socials.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all ml-2"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[10px] text-emerald-400">
                  ✓ Copied to clipboard successfully!
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-slate-500">$ echo $PHONE</div>
              <a 
                href={`tel:${PROFILE_DATA.socials.phone}`}
                className="text-emerald-300 font-bold text-sm sm:text-base flex items-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>{PROFILE_DATA.socials.phone}</span>
              </a>
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-slate-500">$ echo $LOCATION</div>
              <div className="text-slate-300 text-xs flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Message Dispatch Panel */}
        <SpotlightCard className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg font-heading">Send a Message</h3>
              <p className="text-xs font-mono text-slate-400">Direct Inquiries & Opportunities</p>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Message Sent</h4>
              <p className="text-xs text-slate-300">
                Thank you! Your message has been received. I will get back to you promptly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message regarding opportunities, project inquiries, or collaboration..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 font-sans custom-scrollbar resize-none"
                />
              </div>

              <Magnet magnetStrength={0.2}>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-violet-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </Magnet>
            </form>
          )}
        </SpotlightCard>
      </div>
    </section>
  );
};
