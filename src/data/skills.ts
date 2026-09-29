export interface SkillItem {
  id: string;
  name: string;
  category: "Programming" | "Web" | "Database" | "Operating Systems" | "Soft Skills";
  iconName: string;
  context: string;
  relatedProjects: string[];
  featured?: boolean;
}

export const SKILL_CATEGORIES = [
  "All",
  "Programming",
  "Web",
  "Database",
  "Operating Systems",
  "Soft Skills"
] as const;

export const SKILLS: SkillItem[] = [
  // Programming
  {
    id: "c-lang",
    name: "C",
    category: "Programming",
    iconName: "Cpu",
    context: "Foundational programming language for low-level logic, procedural algorithms, and memory concepts.",
    relatedProjects: ["Academic Coursework"],
    featured: true
  },
  {
    id: "cpp-lang",
    name: "C++",
    category: "Programming",
    iconName: "Binary",
    context: "Object-oriented programming, data structures, and computational problem-solving.",
    relatedProjects: ["Academic Coursework"],
    featured: true
  },
  {
    id: "java",
    name: "Java",
    category: "Programming",
    iconName: "Code2",
    context: "Object-oriented architecture, Android mobile development, and core application development.",
    relatedProjects: ["Plant Caring App"],
    featured: true
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    iconName: "Sparkles",
    context: "Scripting, algorithm implementation, and software development fundamentals.",
    relatedProjects: ["Academic Coursework"],
    featured: true
  },

  // Web
  {
    id: "html",
    name: "HTML",
    category: "Web",
    iconName: "Layers",
    context: "Semantic web structuring, modern document formatting, and accessible content markup.",
    relatedProjects: ["Studio Vyakhya", "CareerRaiser Internship"],
    featured: true
  },
  {
    id: "css",
    name: "CSS",
    category: "Web",
    iconName: "Palette",
    context: "Responsive styling, modern layouts, visual presentation, and UI/UX alignment.",
    relatedProjects: ["Studio Vyakhya", "CareerRaiser Internship"],
    featured: true
  },
  {
    id: "js-basic",
    name: "JavaScript (basic)",
    category: "Web",
    iconName: "FileJson",
    context: "Client-side interactivity, DOM operations, and fundamental dynamic web logic.",
    relatedProjects: ["Studio Vyakhya"],
    featured: true
  },

  // Database
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    iconName: "TableProperties",
    context: "Relational database querying, structured data modeling, and schema normalization.",
    relatedProjects: ["Academic Coursework"],
    featured: true
  },
  {
    id: "mongodb-basic",
    name: "MongoDB (basic)",
    category: "Database",
    iconName: "Database",
    context: "Document database storage, NoSQL collections, and dynamic web application persistence.",
    relatedProjects: ["Studio Vyakhya"],
    featured: false
  },

  // Operating Systems
  {
    id: "linux-basic",
    name: "Linux (basic)",
    category: "Operating Systems",
    iconName: "Terminal",
    context: "Basic command line navigation, shell commands, and Unix file systems.",
    relatedProjects: ["Academic Environment"],
    featured: false
  },
  {
    id: "windows-os",
    name: "Windows",
    category: "Operating Systems",
    iconName: "Box",
    context: "Standard desktop operating environment, software tooling, and development configuration.",
    relatedProjects: ["General Workflow"],
    featured: false
  },

  // Soft Skills
  {
    id: "comm-skills",
    name: "Communication Skills",
    category: "Soft Skills",
    iconName: "Workflow",
    context: "Articulating ideas clearly, collaborating with stakeholders, and technical documentation.",
    relatedProjects: ["CareerRaiser Internship", "Team Projects"],
    featured: true
  },
  {
    id: "teamwork",
    name: "Teamwork & Collaboration",
    category: "Soft Skills",
    iconName: "Workflow",
    context: "Working cohesively in team environments, coordinating development efforts, and shared problem solving.",
    relatedProjects: ["CareerRaiser Internship", "Hackathons"],
    featured: true
  },
  {
    id: "leadership",
    name: "Leadership",
    category: "Soft Skills",
    iconName: "Workflow",
    context: "Initiative taking, organizing tasks, and guiding group project execution.",
    relatedProjects: ["Academic & Project Coordination"],
    featured: false
  },
  {
    id: "presentation-skills",
    name: "Presentation Skills",
    category: "Soft Skills",
    iconName: "Workflow",
    context: "Presenting project concepts, visual design layouts, and technical demonstrations effectively.",
    relatedProjects: ["Poster Making Competition", "Academic Demos"],
    featured: true
  }
];
