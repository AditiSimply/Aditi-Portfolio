import React, { useMemo } from 'react';
import { GitBranch, GitCommit, Code } from 'lucide-react';
import { generateActivityGrid, TECH_DISTRIBUTION } from '../../data/activity';

export const GitHubActivityPanel: React.FC = () => {
  const activityDays = useMemo(() => generateActivityGrid(), []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-[#EFD4C7] border-[#E2B19A]';
      case 2: return 'bg-[#D38A6A] border-[#C25E34]';
      case 3: return 'bg-[#C25E34] border-[#A94E27]';
      case 4: return 'bg-[#8A3D1C] border-[#71381B]';
      default: return 'bg-[#F2EDE2] border-[#E3DAC7]';
    }
  };

  return (
    <section id="activity" className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECE6] border border-[#E2B19A] text-[#A94E27] font-mono text-xs font-semibold">
          <GitCommit className="w-3.5 h-3.5" />
          <span>08 // CODE REPOSITORY & TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#231C18] font-heading tracking-tight">
          Development Velocity & <span className="text-[#C25E34]">Activity</span>
        </h2>
        <p className="text-[#6E5A4D] max-w-xl mx-auto text-sm">
          Active coding rhythms, repository commit frequency, and language technology distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Activity Visualizer */}
        <div className="parchment-card p-6 sm:p-7 rounded-2xl space-y-6 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DDCB] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F7ECE6] text-[#C25E34]">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#231C18] text-lg font-heading">Commit Frequency Matrix</h3>
                <p className="text-xs font-mono text-[#8C7464]">Development cycles and academic project pushes</p>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-[#F8F5EE] border border-[#E5DDCB] text-xs font-mono text-[#3D624A] font-semibold">
              ● Active Repository Status
            </div>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="space-y-3">
            <div className="overflow-x-auto pb-2">
              <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[500px]">
                {activityDays.map((day, idx) => (
                  <div
                    key={idx}
                    title={`${day.date}: ${day.count} activities`}
                    className={`w-3.5 h-3.5 rounded-[3px] border transition-all duration-150 hover:scale-125 ${getLevelColor(day.level)}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#8C7464] pt-2">
              <span>Less Active</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-[2px] bg-[#F2EDE2] border border-[#E3DAC7]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#EFD4C7] border border-[#E2B19A]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#D38A6A] border border-[#C25E34]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#C25E34] border border-[#A94E27]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#8A3D1C] border border-[#71381B]" />
              </div>
              <span>More Active</span>
            </div>
          </div>
        </div>

        {/* Language Distribution Breakdown */}
        <div className="parchment-card p-6 sm:p-7 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#E5DDCB] pb-4">
            <div className="p-2.5 rounded-xl bg-[#F7ECE6] text-[#C25E34]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#231C18] text-lg font-heading">Language Weights</h3>
              <p className="text-xs font-mono text-[#8C7464]">Codebase distribution</p>
            </div>
          </div>

          {/* Progress Stack */}
          <div className="h-3 w-full rounded-full overflow-hidden flex bg-[#EFE9DD]">
            {TECH_DISTRIBUTION.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                title={`${item.language}: ${item.percentage}%`}
              />
            ))}
          </div>

          {/* List of Languages */}
          <div className="space-y-2.5 text-xs font-mono">
            {TECH_DISTRIBUTION.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[#342B24] font-medium">{item.language}</span>
                </div>
                <span className="text-[#8C7464] font-bold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
