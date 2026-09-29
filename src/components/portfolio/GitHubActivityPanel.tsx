import React, { useMemo } from 'react';
import { GitBranch, GitCommit, Code, ExternalLink } from 'lucide-react';
import { generateActivityGrid, TECH_DISTRIBUTION } from '../../data/activity';
import { SpotlightCard } from '../ui/SpotlightCard';
import { PROFILE_DATA } from '../../data/profile';

export const GitHubActivityPanel: React.FC = () => {
  const activityDays = useMemo(() => generateActivityGrid(), []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-cyan-950 border-cyan-800';
      case 2: return 'bg-cyan-800 border-cyan-700';
      case 3: return 'bg-cyan-600 border-cyan-500';
      case 4: return 'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/50';
      default: return 'bg-slate-900/60 border-slate-800';
    }
  };

  return (
    <section id="activity" className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 font-mono text-xs">
          <GitCommit className="w-3.5 h-3.5" />
          <span>08 // DEVELOPER TELEMETRY & ACTIVITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Code Velocity & <span className="text-cyan-400">Activity</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Simulated active engineering telemetry, repository contributions, and primary language distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Activity Visualizer */}
        <SpotlightCard className="p-6 sm:p-8 space-y-6 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg font-heading">Commit Frequency Matrix</h3>
                <p className="text-xs font-mono text-slate-400">Recent Build & Deployment Cycles</p>
              </div>
            </div>

            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 hover:bg-slate-800 transition-all flex items-center gap-1.5"
            >
              <span>github.com/krishna942007</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="space-y-2">
            <div className="overflow-x-auto pb-2">
              <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[500px]">
                {activityDays.map((day, idx) => (
                  <div
                    key={idx}
                    title={`${day.date}: ${day.count} activities`}
                    className={`w-3.5 h-3.5 rounded-[3px] border transition-colors ${getLevelColor(day.level)}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map(lvl => (
                  <div key={lvl} className={`w-3 h-3 rounded-[2px] border ${getLevelColor(lvl)}`} />
                ))}
              </div>
              <span>More Active</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Technology Language Breakdown */}
        <SpotlightCard className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg font-heading">Language Mix</h3>
              <p className="text-xs font-mono text-slate-400">Production Code Distribution</p>
            </div>
          </div>

          <div className="space-y-4">
            {TECH_DISTRIBUTION.map((item) => (
              <div key={item.language} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">{item.language}</span>
                  <span className="text-slate-400 font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
