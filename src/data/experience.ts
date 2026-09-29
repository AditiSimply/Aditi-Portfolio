export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: "Education" | "Project Launch" | "Hackathon" | "Internship" | "Milestone";
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  highlightColor: string;
}

export const TIMELINE_EVENTS: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2025 – Present",
    role: "B.Tech in Computer Engineering (AI/ML Focus)",
    organization: "Vidyalankar Institute of Technology (VIT), Mumbai",
    type: "Education",
    location: "Mumbai, India",
    description: "Pursuing Computer Engineering with a core focus on Artificial Intelligence, Machine Learning, Full-Stack Architecture, and high-efficiency product development. Achieved 9.19 SGPA in Semester 4.",
    technologies: ["AI/ML", "React", "Node.js", "Python", "Data Structures", "Web Systems"],
    achievements: ["4th Sem SGPA: 9.19", "3rd Sem SGPA: 8.4", "Campus 1 Lead Developer"],
    highlightColor: "#06b6d4"
  },
  {
    id: "exp-2",
    period: "2026",
    role: "Full-Stack & AI Systems Architect",
    organization: "Campus 1 (Institutional Platform)",
    type: "Project Launch",
    location: "VIT Mumbai",
    description: "Architected and deployed Campus 1, an all-in-one AI platform for student ERP monitoring, faculty mentorship matchmaking, and grounded institutional policy search.",
    technologies: ["React 18", "TypeScript", "Node.js", "MongoDB", "Gemini 2.0 API"],
    achievements: ["Deployed Live on Vercel", "3 Role Portals (Student, Mentor, Admin)"],
    highlightColor: "#10b981"
  },
  {
    id: "exp-3",
    period: "2026",
    role: "Creator & AI Engineer",
    organization: "NeuroFlow Project",
    type: "Project Launch",
    location: "Open Source / Independent",
    description: "Created NeuroFlow, an AI-infused focus application utilizing generative micro-summarization and ambient focus cycles to reduce developer context switching.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Gemini API"],
    achievements: ["Open source GitHub release", "Live web deployment"],
    highlightColor: "#8b5cf6"
  },
  {
    id: "exp-4",
    period: "2024",
    role: "Team Developer & Hackathon Winner",
    organization: "Smart India Hackathon (SIH 2024 Internal)",
    type: "Hackathon",
    location: "Mumbai, India",
    description: "Led frontend development and real-time mapping for Project Jaal, a rapid emergency response and disaster resource dispatch platform.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "GeoJSON API"],
    achievements: ["1st Prize Winner – Internal SIH 2024", "Built 36-hour working prototype"],
    highlightColor: "#f43f5e"
  },
  {
    id: "exp-5",
    period: "2024",
    role: "Full-Stack Web Developer",
    organization: "Studio Vyakhya & Independent Web Projects",
    type: "Internship",
    location: "Mumbai, India",
    description: "Designed and developed Studio Vyakhya (interior exhibition platform with Razorpay and Cloudinary integration) and FitTrack Pro.",
    technologies: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Razorpay"],
    achievements: ["Delivered interactive exhibition portal", "Full payment gateway integration"],
    highlightColor: "#f59e0b"
  },
  {
    id: "exp-6",
    period: "2022 – 2025",
    role: "Diploma in Information Technology",
    organization: "V.P.M's Polytechnic",
    type: "Education",
    location: "Thane, India",
    description: "Completed Diploma in IT with distinction (91.40%), laying a rock-solid foundation in C, Java, SQL, Data Structures, and Web Development.",
    technologies: ["C", "C++", "Java", "HTML/CSS", "JavaScript", "SQL"],
    achievements: ["Scored 91.40% Distinction", "Top academic ranking"],
    highlightColor: "#3b82f6"
  }
];
