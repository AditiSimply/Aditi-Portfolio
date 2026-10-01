import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_RECORDS } from '../../data/education';
import { CharacterCarousel } from '../ui/CharacterCarousel';
import { ScrollFloat } from '../ui/ScrollFloat';

export const EducationArchive: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>('vpm-diploma');
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const activeRecord = EDUCATION_RECORDS.find(r => r.id === selectedMilestone) || EDUCATION_RECORDS[1];

  return (
    <section 
      id="education" 
      className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/bg/6.png)',
      }}
    >
      {/* Top & Bottom Vanishing Transitions */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header matching reference Panel 6 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white/60 text-xs font-mono font-bold text-[#0F172A] shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
              <span>06. ACADEMIC RECORDS</span>
            </div>

            <ScrollFloat
              containerClassName="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight drop-shadow-sm"
              animationDuration={0.8}
              ease="back.inOut(2)"
              stagger={0.025}
            >
              Education Journey
            </ScrollFloat>

            <p className="text-sm sm:text-base text-[#0F172A] font-medium max-w-xl font-sans leading-relaxed bg-white/60 p-3 rounded-xl backdrop-blur-md border border-white/40 shadow-xs">
              Key milestones in my academic path. Tap any milestone card to inspect verified course highlights and honors.
            </p>
          </div>

          <button
            onClick={() => setShowCertificateModal(true)}
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-[#FCFAF6] hover:bg-white border border-[#D1C4AC] text-[#0F172A] font-sans text-xs font-semibold tracking-wide transition-all shadow-2xs flex items-center gap-2 hover:-translate-y-0.5"
          >
            <span>View Verification Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C25E34]" />
          </button>
        </div>

        {/* Campus Journey Stage */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D1C4AC] bg-[#F3EDE2] p-4 sm:p-8 lg:p-12 space-y-8">
          
          {/* Panoramic Campus Environment Background */}
          <div className="relative rounded-2xl overflow-hidden min-h-[440px] flex flex-col justify-between p-4 sm:p-6">
            <img 
              src="/assets/editorial/education_campus.jpg" 
              alt="Architectural university campus landscape and pathway"
              className="absolute inset-0 w-full h-full object-cover object-bottom brightness-[0.94] contrast-[1.02]"
            />
            {/* Soft gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/80 pointer-events-none" />

            {/* ThreeUI CharacterCarousel Filmstrip Deck */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-xl border border-[#D1C4AC]">
              <CharacterCarousel 
                variant="filmstrip"
                speed={1.00}
                scale={1.00}
                opacity={1.00}
                hue={0}
                saturation={1.00}
                brightness={1.00}
                onSelectMilestone={(id) => setSelectedMilestone(id)}
              />
            </div>

          </div>

          {/* Expanded Selected Milestone Highlights Drawer with spring animation */}
          {activeRecord && (
            <motion.div
              key={activeRecord.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E5DDCB] p-6 sm:p-7 shadow-lg space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EFE9DC] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#A94E27]">
                      {activeRecord.scoreLabel}: {activeRecord.scoreValue}
                    </span>
                    <span className="text-[#D1C4AC]">•</span>
                    <span className="text-xs font-mono text-[#6E5A4D]">{activeRecord.period}</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#0F172A]">
                    {activeRecord.degree}
                  </h4>
                  <p className="text-xs text-[#5F5044]">{activeRecord.institution} • {activeRecord.location}</p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#FCFAF6] border border-[#E5DDCB] text-xs font-mono text-[#3D624A] font-semibold self-start sm:self-auto">
                  ✓ {activeRecord.status}
                </div>
              </div>

              {/* Highlights & Coursework */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0F172A] mb-2 uppercase tracking-wider font-mono">
                    Academic Highlights
                  </h5>
                  <div className="space-y-1.5">
                    {activeRecord.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#483C33]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3D624A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0F172A] mb-2 uppercase tracking-wider font-mono">
                    Curriculum & Coursework
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRecord.coursework.map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-[#F8F5EE] border border-[#E5DDCB] text-[11px] font-sans text-[#483C33]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* Certificates & Transcripts Verification Modal */}
      <AnimatePresence>
        {showCertificateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-[#FCFAF6] border border-[#E5DDCB] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
              <div className="flex items-center justify-between border-b border-[#EFE9DC] pb-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#F7ECE6] text-[#A94E27] font-mono text-xs font-semibold">
                    VERIFIED ACADEMIC RECORDS
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#0F172A] mt-1">
                    Academic Transcripts & Verification
                  </h3>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-2 rounded-full bg-white border border-[#D1C4AC] text-[#483C33] hover:text-[#0F172A]"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {EDUCATION_RECORDS.map((rec) => (
                  <div key={rec.id} className="p-4 rounded-2xl bg-white border border-[#E5DDCB] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#0F172A]">{rec.degree}</h4>
                      <span className="font-mono text-xs font-bold text-[#C25E34]">{rec.scoreValue}</span>
                    </div>
                    <p className="text-xs text-[#6E5A4D]">{rec.institution} • {rec.period}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {rec.highlights.map((h, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#F8F5EE] text-[11px] text-[#483C33]">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
