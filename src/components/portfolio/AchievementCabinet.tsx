import React from 'react';
import { Trophy, Medal, Award, Star, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS } from '../../data/achievements';
import { SpotlightCard } from '../ui/SpotlightCard';

const ICON_COMPONENTS = {
  Trophy: Trophy,
  Medal: Medal,
  Award: Award,
  Star: Star
};

export const AchievementCabinet: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6']
    });
  };

  return (
    <section id="achievements" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-800/50 text-amber-400 font-mono text-xs">
          <Trophy className="w-3.5 h-3.5" />
          <span>07 // ACHIEVEMENT CABINET</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Awards & <span className="text-amber-400">Distinctions</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Recognitions in hackathons, academic excellence, and technical presentation competitions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach) => {
          const IconComponent = ICON_COMPONENTS[ach.icon] || Trophy;

          return (
            <SpotlightCard 
              key={ach.id} 
              onClick={triggerConfetti}
              className="p-6 sm:p-8 space-y-4 border border-amber-500/20 hover:border-amber-500/50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300">
                  {ach.date}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  {ach.category}
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">{ach.title}</h3>
                <p className="text-xs font-mono text-slate-400 mt-1">{ach.issuer}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {ach.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Achievement</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
