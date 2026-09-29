export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Web" | "Mobile App";
  metaphor: "book" | "dossier";
  spineColor: string;
  coverGradient: string;
  accentColor: string;
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  summary: string;
  problem: string;
  idea: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  learnings: string[];
  status: "Completed" | "Active";
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "studio-vyakhya",
    title: "Studio Vyakhya",
    subtitle: "Interactive Interior Design & Exhibition Workshop Platform",
    category: "Full-Stack Web",
    metaphor: "book",
    spineColor: "#c2410c", // Burnt Terracotta
    coverGradient: "from-amber-950 via-slate-900 to-orange-950",
    accentColor: "#f97316",
    year: "2024",
    summary: "Developed an innovative platform for interior design and workshops, allowing users to explore designs and exhibitions interactively.",
    problem: "Interior design studios require an engaging digital platform to showcase aesthetic design portfolios and manage workshop registrations with digital payments.",
    idea: "Created an interactive platform for interior design exhibitions and hands-on workshops with cloud-hosted media and seamless checkout.",
    role: "Full-Stack Developer",
    techStack: ["React.js", "Node.js & Express.js", "MongoDB", "Cloudinary", "Razorpay"],
    keyFeatures: [
      "Interactive Interior Design & Exhibition Explorer",
      "Workshop Booking & Registration Flow",
      "Secure Online Transactions with Razorpay",
      "Cloud-Hosted Digital Asset Management with Cloudinary",
      "Dynamic Product & Gallery Catalog"
    ],
    challenges: [
      "Coordinating multi-tier state between frontend exhibition views and backend payment webhooks",
      "Optimizing media delivery for high-resolution design renders"
    ],
    learnings: [
      "Implemented full-stack MERN workflows with secure payment integration",
      "Strengthened database schema design and responsive UI engineering"
    ],
    status: "Completed"
  },
  {
    id: "plant-caring-app",
    title: "Plant Caring App",
    subtitle: "Botanical Care Guides & Watering Reminders Mobile App",
    category: "Mobile App",
    metaphor: "book",
    spineColor: "#047857", // Deep Botanical Green
    coverGradient: "from-green-950 via-slate-900 to-emerald-950",
    accentColor: "#10b981",
    year: "2023",
    summary: "Developed a mobile application that provides care tips and watering reminders to help users maintain healthy plants.",
    problem: "Home gardeners and plant owners often lose track of species-specific watering schedules and optimal care routines.",
    idea: "Engineered a native Android mobile application offering structured botanical care tips, customized watering intervals, and timely alerts.",
    role: "Android Developer",
    techStack: ["Java (Android Studio)", "XML (UI)", "Android SDK"],
    keyFeatures: [
      "Botanical Care Tips & Species Maintenance Guides",
      "Scheduled Watering Reminders & Alerts",
      "Clean XML-Based Mobile UI Architecture",
      "Categorized Plant Inventory & Status Tracking"
    ],
    challenges: [
      "Structuring responsive XML UI layouts for multiple Android screen densities",
      "Configuring persistent notification reminder loops"
    ],
    learnings: [
      "Solidified Java OOP design patterns and native Android lifecycle methods",
      "Designed clean, human-centered mobile user interfaces"
    ],
    status: "Completed"
  }
];
