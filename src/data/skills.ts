export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Programming" | "AI / ML" | "Tools & DevOps" | "Design / UI";
  iconName: string;
  context: string;
  relatedProjects: string[];
  featured?: boolean;
}

export const SKILL_CATEGORIES = [
  "All",
  "AI / ML",
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Tools & DevOps",
  "Design / UI"
] as const;

export const SKILLS: SkillItem[] = [
  // AI / ML
  {
    id: "gemini-api",
    name: "Gemini 2.0 API & RAG",
    category: "AI / ML",
    iconName: "BrainCircuit",
    context: "Building grounded knowledge search, institutional AI assistants, prompt security, and context compression.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },
  {
    id: "llm-integration",
    name: "LLM Orchestration & Prompting",
    category: "AI / ML",
    iconName: "Sparkles",
    context: "Structuring micro-goal extractors, autonomous feedback loops, and intelligent recommendation pipelines.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },
  {
    id: "ai-matchmaking",
    name: "AI Mentor Matchmaking Algorithms",
    category: "AI / ML",
    iconName: "Workflow",
    context: "Developing weighted multi-vector scoring algorithms (goals, domain, dept, course) for automated matchmaking.",
    relatedProjects: ["Campus 1"],
    featured: true
  },

  // Frontend
  {
    id: "react",
    name: "React.js & Hooks",
    category: "Frontend",
    iconName: "Code2",
    context: "Primary frontend library for complex state management, custom hooks, dynamic dashboards, and modular UI components.",
    relatedProjects: ["Campus 1", "NeuroFlow", "Studio Vyakhya", "Jaal", "FitTrack Pro"],
    featured: true
  },
  {
    id: "nextjs",
    name: "Next.js & Server Components",
    category: "Frontend",
    iconName: "Layers",
    context: "Building high-performance SSR/SSG web applications, API routing, and optimized web platforms.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    iconName: "FileCode2",
    context: "Writing type-safe, maintainable component libraries, strict API contracts, and robust interfaces.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },
  {
    id: "vite",
    name: "Vite",
    category: "Frontend",
    iconName: "Zap",
    context: "Rapid bundling, HMR, custom Vite plugin configurations, and production build optimizations.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: false
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    iconName: "Palette",
    context: "Building modern responsive design systems, custom color tokens, glassmorphism, and utility-first styling.",
    relatedProjects: ["Campus 1", "NeuroFlow", "Studio Vyakhya", "Jaal"],
    featured: true
  },
  {
    id: "framer-motion",
    name: "Framer Motion & Micro-Animations",
    category: "Frontend",
    iconName: "Activity",
    context: "Crafting fluid spring physics, magnetic hover effects, 3D card tilts, and smooth layout transitions.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    iconName: "Server",
    context: "Developing asynchronous event-driven microservices, API gateways, and backend orchestration logic.",
    relatedProjects: ["Campus 1", "Studio Vyakhya", "Jaal", "FitTrack Pro"],
    featured: true
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    iconName: "Network",
    context: "Creating RESTful endpoints, role-based authorization middleware, rate limiting, and webhook integrations.",
    relatedProjects: ["Campus 1", "Studio Vyakhya", "Jaal", "FitTrack Pro"],
    featured: true
  },
  {
    id: "rest-apis",
    name: "REST APIs & Auth",
    category: "Backend",
    iconName: "KeyRound",
    context: "JWT authentication, session isolation, multi-tenant RBAC, and secure token lifecycle management.",
    relatedProjects: ["Campus 1", "Studio Vyakhya"],
    featured: false
  },

  // Database
  {
    id: "mongodb",
    name: "MongoDB & Mongoose",
    category: "Database",
    iconName: "Database",
    context: "NoSQL document modeling, indexing strategies, pipeline aggregations, and MongoDB Atlas cloud deployment.",
    relatedProjects: ["Campus 1", "Studio Vyakhya", "Jaal", "FitTrack Pro"],
    featured: true
  },
  {
    id: "sql-mysql",
    name: "SQL & MySQL / PostgreSQL",
    category: "Database",
    iconName: "TableProperties",
    context: "Relational database schema design, normalized joins, constraints, transaction safety, and query tuning.",
    relatedProjects: ["Academic Projects"],
    featured: false
  },

  // Programming
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Programming",
    iconName: "FileJson",
    context: "Core programming language for frontend logic, asynchronous promises, DOM manipulation, and Node runtime.",
    relatedProjects: ["All Web Projects"],
    featured: true
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    iconName: "Binary",
    context: "Data manipulation, script automation, AI/ML experimentation, fast prototyping, and algorithmic analysis.",
    relatedProjects: ["AI Experiments"],
    featured: true
  },
  {
    id: "c-lang",
    name: "C & C++",
    category: "Programming",
    iconName: "Cpu",
    context: "Low-level memory management, data structures & algorithms, pointers, and foundational computer engineering.",
    relatedProjects: ["Academic Core"],
    featured: false
  },

  // Tools & DevOps
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Tools & DevOps",
    iconName: "GitBranch",
    context: "Version control workflows, branching strategies, code reviews, GitHub Actions CI/CD automation.",
    relatedProjects: ["All Projects"],
    featured: true
  },
  {
    id: "linux-cli",
    name: "Linux & Terminal CLI",
    category: "Tools & DevOps",
    iconName: "Terminal",
    context: "Shell scripting, process management, environment setup, package management, and server administration.",
    relatedProjects: ["Dev Workflow"],
    featured: false
  },
  {
    id: "vercel",
    name: "Vercel & Cloud Deployment",
    category: "Tools & DevOps",
    iconName: "Cloud",
    context: "Deploying full-stack web platforms, configuring environment variables, continuous deployment, custom domains.",
    relatedProjects: ["Campus 1", "NeuroFlow", "Studio Vyakhya"],
    featured: false
  },

  // Design / UI
  {
    id: "interactive-ui",
    name: "Interactive UI & 3D Cards",
    category: "Design / UI",
    iconName: "Box",
    context: "Designing tactile digital objects, holographic ID badges, bookshelf cards, and micro-interactions.",
    relatedProjects: ["Campus 1", "NeuroFlow"],
    featured: true
  },
  {
    id: "ux-experimentation",
    name: "UX/UI Experimentation",
    category: "Design / UI",
    iconName: "Layout",
    context: "Crafting spatial rhythm, dark/light contrast discipline, WCAG accessibility, and visual storytelling.",
    relatedProjects: ["Portfolio OS"],
    featured: true
  }
];
