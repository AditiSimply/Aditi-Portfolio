export interface AchievementItem {
  id: string;
  title: string;
  category: "Hackathon" | "Competition";
  issuer: string;
  date: string;
  description: string;
  icon: "Trophy" | "Medal" | "Award" | "Star";
  accent: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "1st Prize – Internal SIH 2024",
    category: "Hackathon",
    issuer: "Internal Smart India Hackathon 2024",
    date: "2024",
    description: "Secured 1st Prize in Internal Smart India Hackathon (SIH 2024) competition.",
    icon: "Trophy",
    accent: "from-amber-500/20 to-yellow-500/5"
  },
  {
    id: "ach-2",
    title: "Poster Making Competition Winner",
    category: "Competition",
    issuer: "Poster Making Competition",
    date: "2024",
    description: "Winner of the Poster Making Competition, demonstrating visual design, layout creativity, and communication skills.",
    icon: "Medal",
    accent: "from-cyan-500/20 to-blue-500/5"
  }
];
