import React from 'react';
import { Trophy, Medal, Award, Star, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS } from '../../data/achievements';

const ICON_COMPONENTS: Record<string, any> = {
  Trophy: Trophy,
  Medal: Medal,
  Award: Award,
  Star: Star
};

export const AchievementCabinet: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C25E34', '#D97706', '#8A5A36', '#4E7A5E', '#231C18']
    });
  };

  return (
    <section id="achievements" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <Trophy className="w-3.5 h-3.5" />
          <span>07 // HONORS & RECOGNITION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Awards & <span className="text-[#C25E34]">Distinctions</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          National and state-level competitive distinctions in technical hackathons and engineering poster presentations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach) => {
          const IconComponent = ICON_COMPONENTS[ach.icon] || Trophy;

          return (
            <div 
              key={ach.id} 
              onClick={triggerConfetti}
              className="parchment-card p-6 sm:p-7 rounded-2xl space-y-4 hover:border-[#D1C4AC] cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#F7ECE6] border border-[#E2B19A] text-[#C25E34]">
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-[#F8F5EE] border border-[#E5DDCB] font-mono text-xs text-[#6E5A4D] font-medium">
                  {ach.date}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#A94E27] font-bold uppercase tracking-wider">
                  {ach.category}
                </span>
                <h3 className="text-xl font-bold text-[#231C18] font-heading mt-1 group-hover:text-[#C25E34] transition-colors">
                  {ach.title}
                </h3>
                <p className="text-xs text-[#8C7464] font-mono mt-0.5">
                  {ach.issuer}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#483C33] leading-relaxed">
                {ach.description}
              </p>

              <div className="pt-2 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#8C7464]">
                <span className="flex items-center gap-1.5 text-[#3D624A]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  OFFICIALLY AWARDED
                </span>
                <span className="text-[10px] text-[#A94E27] font-semibold">
                  CLICK TO CELEBRATE ✦
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
