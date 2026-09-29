export interface AchievementItem {
  id: string;
  title: string;
  category: "Hackathon" | "Academic" | "Design / Visual" | "Project Distinction";
  issuer: string;
  date: string;
  description: string;
  icon: "Trophy" | "Medal" | "Award" | "Star";
  accent: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "1st Prize — Internal SIH 2024",
    category: "Hackathon",
    issuer: "Smart India Hackathon (VIT Selection)",
    date: "2024",
    description: "Awarded First Place in the institutional Smart India Hackathon selection round for building Project Jaal—an emergency response network.",
    icon: "Trophy",
    accent: "from-amber-500/20 to-yellow-500/5"
  },
  {
    id: "ach-2",
    title: "Poster Making Competition Winner",
    category: "Design / Visual",
    issuer: "Institutional Cultural & Tech Fest",
    date: "2024",
    description: "Won First Place for visual storytelling, layout engineering, and poster design presentation.",
    icon: "Medal",
    accent: "from-cyan-500/20 to-blue-500/5"
  },
  {
    id: "ach-3",
    title: "Academic SGPA Milestone — 9.19",
    category: "Academic",
    issuer: "Vidyalankar Institute of Technology",
    date: "2026",
    description: "Achieved an impressive 9.19 SGPA in the 4th semester of B.Tech Computer Engineering.",
    icon: "Star",
    accent: "from-emerald-500/20 to-teal-500/5"
  },
  {
    id: "ach-4",
    title: "Diploma Distinction — 91.40%",
    category: "Academic",
    issuer: "V.P.M's Polytechnic",
    date: "2025",
    description: "Graduated with highest distinction (91.40%) in Diploma in Information Technology.",
    icon: "Award",
    accent: "from-purple-500/20 to-indigo-500/5"
  }
];
