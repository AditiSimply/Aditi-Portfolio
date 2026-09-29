import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  QrCode, 
  Cpu, 
  RotateCw, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

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

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="identity" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>01 // DIGITAL IDENTITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Developer ID & <span className="text-[#C25E34]">Credentials</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-lg mx-auto text-sm">
          Interactive identification badge verifying Aditi Singh's academic status, technical disciplines, and direct channels.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Physical 3D Lanyard ID Badge */}
        <div className="perspective-1000 w-full max-w-md">
          {/* Realistic Woven Lanyard Strap Hanging Above */}
          <div className="flex flex-col items-center">
            {/* Lanyard Fabric Ribbon */}
            <div className="w-12 h-14 bg-gradient-to-b from-[#8C5A3C] via-[#A94E27] to-[#71381B] rounded-t-sm shadow-md flex items-center justify-center relative border-x border-[#5F3014]/40">
              <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_4px)]" />
              <div className="absolute inset-y-0 w-2 bg-black/15" />
            </div>
            {/* Brass Metallic Buckle Clip */}
            <div className="w-14 h-5 bg-gradient-to-r from-[#CFC5A7] via-[#F0EAE0] to-[#B9A88C] rounded-md shadow-sm border border-[#A8987E] flex items-center justify-center relative -mt-1 z-20">
              <div className="w-3 h-2 rounded-sm bg-[#5F5044] border border-[#382C25]" />
            </div>
          </div>

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotateX, rotateY: rotateY }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="lanyard-card relative w-full rounded-2xl bg-[#FCFAF6] border border-[#D1C4AC] p-6 sm:p-7 preserve-3d cursor-pointer -mt-2"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Lanyard Slot Cutout in Badge */}
            <div className="w-14 h-2.5 mx-auto rounded-full bg-[#E5DDCB] border border-[#C5BBA6] mb-5 flex items-center justify-center">
              <div className="w-6 h-1 rounded-full bg-[#A8987E]" />
            </div>

            {/* Badge Header Strip */}
            <div className="flex items-center justify-between border-b border-[#E5DDCB] pb-3 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#F7ECE6] border border-[#E2B19A] text-[#C25E34]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#A94E27] tracking-wider font-semibold">ENGINEERING ARCHIVE</div>
                  <div className="text-xs font-bold text-[#231C18]">ACADEMIC CREDENTIAL</div>
                </div>
              </div>
              <div className="text-right font-mono text-[11px]">
                <div className="text-[#8C7464]">BADGE NO.</div>
                <div className="text-[#231C18] font-bold">{PROFILE_DATA.badgeId}</div>
              </div>
            </div>

            {/* Front of Card Content */}
            {!isFlipped ? (
              <div className="space-y-5">
                {/* Avatar & Core Title */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#F0EAE0] border-2 border-[#D1C4AC] p-1 shadow-soft-sm">
                      <div className="w-full h-full rounded-xl bg-[#231C18] flex items-center justify-center text-2xl font-extrabold text-[#F8F5EE] font-mono">
                        AS
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#4E7A5E] border-2 border-[#FCFAF6] flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#231C18] font-heading">{PROFILE_DATA.name}</h3>
                    <p className="text-xs text-[#C25E34] font-medium">{PROFILE_DATA.role}</p>
                    <p className="text-[11px] text-[#6E5A4D] mt-0.5">{PROFILE_DATA.institution}</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8C7464] mt-1">
                      <MapPin className="w-3 h-3 text-[#A94E27]" />
                      <span>{PROFILE_DATA.location}</span>
                    </div>
                  </div>
                </div>

                {/* Academic & Professional Specs */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB]">
                    <span className="text-[#8C7464] text-[10px] block">DEGREE PROGRAM</span>
                    <span className="font-semibold text-[#231C18] text-[11px]">B.Tech in CE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB]">
                    <span className="text-[#8C7464] text-[10px] block">ACADEMIC STANDING</span>
                    <span className="font-semibold text-[#231C18] text-[11px]">Diploma: {PROFILE_DATA.diplomaPercentage}%</span>
                  </div>
                </div>

                {/* Verified Discipline Badges */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-[#8C7464] font-medium">CORE CAPABILITIES</div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">C / C++</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">Java / Python</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">HTML / CSS / JS</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F2EDE2] border border-[#E3DAC7] text-[#5F5044]">SQL / MongoDB</span>
                  </div>
                </div>

                {/* Security Seal & Click to Flip Action */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E5DDCB] text-[11px] font-mono text-[#8C7464]">
                  <div className="flex items-center gap-1.5 text-[#3D624A]">
                    <Award className="w-3.5 h-3.5" />
                    <span>VERIFIED RECORD</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#A94E27] font-semibold hover:underline">
                    <span>FLIP REVERSE</span>
                    <RotateCw className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ) : (
              /* Back of Card Content */
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5DDCB] pb-2">
                  <span className="text-xs font-mono font-bold text-[#231C18]">COMMUNICATION ACCESS</span>
                  <span className="text-[10px] font-mono text-[#A94E27] bg-[#F7ECE6] px-2 py-0.5 rounded border border-[#E2B19A]">SECURE</span>
                </div>

                {/* Contact Channels */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
                    <span className="text-[#8C7464] flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C25E34]" /> Email:
                    </span>
                    <span className="text-[#231C18] font-bold text-[11px]">{PROFILE_DATA.socials.email}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
                    <span className="text-[#8C7464] flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C25E34]" /> Phone:
                    </span>
                    <span className="text-[#231C18] font-bold text-[11px]">{PROFILE_DATA.socials.phone}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center justify-between">
                    <span className="text-[#8C7464] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C25E34]" /> Location:
                    </span>
                    <span className="text-[#231C18] font-bold text-[11px]">{PROFILE_DATA.location}</span>
                  </div>
                </div>

                {/* Mock QR Verification Stamp */}
                <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB] flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg border border-[#D1C4AC] flex items-center justify-center p-1">
                    <QrCode className="w-10 h-10 text-[#231C18]" />
                  </div>
                  <div className="text-[11px] font-mono text-[#6E5A4D]">
                    <div className="font-bold text-[#231C18]">SCAN VERIFICATION</div>
                    <div className="text-[10px] text-[#8C7464]">Direct link to portfolio & credentials</div>
                  </div>
                </div>

                {/* Flip Back Action */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E5DDCB] text-[11px] font-mono text-[#8C7464]">
                  <span>OFFICIAL ARCHIVE</span>
                  <div className="flex items-center gap-1 text-[#A94E27] font-semibold hover:underline">
                    <span>FLIP FRONT</span>
                    <RotateCw className="w-3 h-3" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Identity Details Card & Narrative Summary */}
        <div className="w-full max-w-lg space-y-4">
          <div className="parchment-card p-6 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#231C18] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C25E34]" />
              Engineer Profile & Background
            </h3>
            <p className="text-sm text-[#483C33] leading-relaxed">
              Aditi Singh is a Computer Engineering graduate from <strong>Vidyalankar Institute of Technology (VIT) Mumbai</strong>, with a background anchored in systematic problem-solving, clean code development, and modern web architectures.
            </p>
            <p className="text-sm text-[#483C33] leading-relaxed">
              With hands-on experience in full-stack web applications and mobile engineering, Aditi blends analytical precision with practical product execution.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB]">
                <div className="text-[#8C7464] text-[10px]">CURRENT FOCUS</div>
                <div className="text-[#231C18] font-bold mt-0.5">Software & Web Development</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DDCB]">
                <div className="text-[#8C7464] text-[10px]">VERIFIED HONORS</div>
                <div className="text-[#C25E34] font-bold mt-0.5">Smart India Hackathon 1st Prize</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
