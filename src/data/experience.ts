export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: "Internship" | "Education" | "Project";
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  highlightColor: string;
}

export const TIMELINE_EVENTS: TimelineItem[] = [
  {
    id: "intern-1",
    period: "July - 2024",
    role: "Web & Design Intern",
    organization: "CareerRaiser",
    type: "Internship",
    location: "Thane / Remote",
    description: "Designed digital posters for events and campaigns, built and customized websites using Divi (WordPress page builder), learned UI/UX design and visual presentation, and collaborated with team members to enhance creativity, communication, and teamwork.",
    technologies: ["Divi (WordPress)", "UI/UX Design", "Digital Poster Design", "Web Layouts"],
    achievements: [
      "Designed and created digital posters for events and campaigns",
      "Built and customized websites using Divi (WordPress page builder)",
      "Learned about UI/UX design, website layout, and visual presentation",
      "Collaborated with team members, improving creativity, communication, and teamwork skills"
    ],
    highlightColor: "#06b6d4"
  }
];
