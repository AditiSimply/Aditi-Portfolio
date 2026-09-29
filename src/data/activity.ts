export interface ActivityDay {
  date: string;
  count: number; // 0 to 4 intensity level
  level: 0 | 1 | 2 | 3 | 4;
}

export interface TechDistribution {
  language: string;
  percentage: number;
  color: string;
}

export const TECH_DISTRIBUTION: TechDistribution[] = [
  { language: "TypeScript / React", percentage: 38, color: "#3178c6" },
  { language: "JavaScript / Node", percentage: 26, color: "#f7df1e" },
  { language: "Python / AI-ML", percentage: 18, color: "#3572A5" },
  { language: "HTML / Tailwind CSS", percentage: 12, color: "#06b6d4" },
  { language: "C / Java / Other", percentage: 6, color: "#b07219" }
];

// Helper to generate a realistic 52-week contribution heatmap
export const generateActivityGrid = (): ActivityDay[] => {
  const days: ActivityDay[] = [];
  const today = new Date();
  
  for (let i = 180; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    // Seed higher activity on weekdays and active build periods
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let count = Math.floor(Math.random() * 5);
    if (isWeekend) {
      count = Math.floor(Math.random() * 3);
    }
    
    // Boost recent activity
    if (i < 30) {
      count = Math.min(4, count + 1);
    }

    days.push({
      date: date.toISOString().split('T')[0],
      count: count,
      level: Math.min(4, count) as 0 | 1 | 2 | 3 | 4
    });
  }

  return days;
};
