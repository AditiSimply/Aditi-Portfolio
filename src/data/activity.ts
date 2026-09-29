export interface ActivityDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface TechDistribution {
  language: string;
  percentage: number;
  color: string;
}

export const TECH_DISTRIBUTION: TechDistribution[] = [
  { language: "Java / Android", percentage: 32, color: "#b07219" },
  { language: "C / C++", percentage: 28, color: "#f34b7d" },
  { language: "HTML / CSS / Web", percentage: 22, color: "#e34c26" },
  { language: "Python", percentage: 10, color: "#3572A5" },
  { language: "SQL / Database", percentage: 8, color: "#336791" }
];

export const generateActivityGrid = (): ActivityDay[] => {
  const days: ActivityDay[] = [];
  const today = new Date();
  
  for (let i = 180; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let count = Math.floor(Math.random() * 4);
    if (isWeekend) {
      count = Math.floor(Math.random() * 2);
    }
    
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
