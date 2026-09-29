export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "AI/ML Platform" | "Full-Stack Web" | "Mobile App" | "Engineering Tool" | "Hackathon Entry";
  metaphor: "book" | "dossier" | "blueprint" | "polaroid" | "device";
  spineColor: string; // Tailored HSL/Hex for book representation
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
  status: "Live & Deployed" | "Active Development" | "Prototype";
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "campus-1",
    title: "Campus 1",
    subtitle: "AI-Powered Institutional ERP & Student Mentorship System",
    category: "AI/ML Platform",
    metaphor: "book",
    spineColor: "#0f766e", // Deep Cyan / Emerald Teal
    coverGradient: "from-teal-900 via-slate-900 to-slate-950",
    accentColor: "#14b8a6",
    year: "2026",
    demoUrl: "https://campus1-vit.vercel.app/",
    summary: "Next-generation institutional ecosystem unifying ERP attendance monitoring, AI faculty mentor matching, and grounded GEMINI 2.0 institutional policy search for VIT Mumbai.",
    problem: "Traditional academic ERPs are fragmented—attendance alerts are detached from faculty mentorship, and academic ordinances remain buried in dense PDFs.",
    idea: "Build a single responsive portal with role-tailored dashboards (Student, Mentor, Admin) and an automated 4-tier compatibility matching algorithm for mentorship.",
    role: "Lead Full-Stack & AI Systems Developer",
    techStack: ["React 18", "Vite", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Gemini 2.0 API", "Tailwind CSS"],
    keyFeatures: [
      "Role-Based Access Control (Student, Mentor, Admin portals)",
      "Automated Student-Faculty Mentor Matchmaking (40% goals, 25% domain, 10% course, 10% dept)",
      "Live ERP Attendance Compliance Engine with makeup hour calculator",
      "Institutional Grounded RAG Chat Assistant for college regulations",
      "Dynamic Career Skill-Gap Roadmaps comparing student repositories with industry roles"
    ],
    challenges: [
      "Implementing multi-tenant role privacy across chat sessions and mentor allocations",
      "Optimizing RAG vector search latency for fast document retrieval"
    ],
    learnings: [
      "Mastered multi-portal state management in React TypeScript",
      "Learned fine-grained access control and API boundary isolation in Express/MongoDB"
    ],
    status: "Live & Deployed"
  },
  {
    id: "neuroflow",
    title: "NeuroFlow",
    subtitle: "AI-Driven Cognitive Workflow & Neural Focus Application",
    category: "AI/ML Platform",
    metaphor: "book",
    spineColor: "#6d28d9", // Deep Violet / Indigo
    coverGradient: "from-purple-950 via-slate-900 to-indigo-950",
    accentColor: "#8b5cf6",
    year: "2026",
    demoUrl: "https://neuroflow-gilt.vercel.app/",
    githubUrl: "https://github.com/krishna942007/neuroflow",
    summary: "AI-infused focus workflow environment designed to help developers and students structure cognitive sessions, summarize complex research, and maintain state.",
    problem: "Context switching and cognitive fatigue reduce software development throughput and study retention.",
    idea: "Combine adaptive focus timers with generative micro-summarization to maintain mental momentum during intense technical sprints.",
    role: "Creator & Frontend/AI Engineer",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Google Gemini API", "Web Audio API"],
    keyFeatures: [
      "AI-Assisted Micro-Goal Extraction",
      "Interactive Visual Focus Cycles & Ambient Audio Synthesis",
      "Instant Code/Notes Context Compression",
      "Minimalist Dark Mode Interface with Micro-Animations"
    ],
    challenges: [
      "Minimizing AI response latency so focus flows are uninterrupted",
      "Designing a zero-distraction dark aesthetic with accessible contrast"
    ],
    learnings: [
      "Gained deep expertise in Framer Motion spring physics and tactile UI design",
      "Explored prompt streaming and micro-task decomposition"
    ],
    status: "Live & Deployed"
  },
  {
    id: "jaal",
    title: "Jaal",
    subtitle: "Smart India Hackathon (SIH) Emergency & Security Network",
    category: "Hackathon Entry",
    metaphor: "dossier",
    spineColor: "#b91c1c", // Crimson Red
    coverGradient: "from-rose-950 via-slate-900 to-red-950",
    accentColor: "#f43f5e",
    year: "2024",
    summary: "Hackathon project built for SIH 2024 solving rapid emergency response, resource allocation, and alert dispatch during critical events.",
    problem: "Communication delays during crisis management lead to slow emergency response times and poor resource distribution.",
    idea: "Construct a real-time mesh reporting network that aggregates emergency alerts, geographical tags, and team dispatch routing.",
    role: "Team Developer / Frontend Lead",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "GeoJSON / Maps API"],
    keyFeatures: [
      "Instant SOS & Location Broadcast",
      "Live Incident Mapping & Alert Triage",
      "Real-time Emergency Response Coordinator Dashboard",
      "Offline-first resilient data caching strategy"
    ],
    challenges: [
      "Building a fully functional prototype within the high-pressure 36-hour hackathon timeline",
      "Ensuring map rendering remained responsive under simultaneous simulated alerts"
    ],
    learnings: [
      "Rapid prototyping, quick decision-making, and teamwork under strict time limits",
      "Secured 1st Prize in Internal SIH 2024 selection"
    ],
    status: "Prototype"
  },
  {
    id: "drawcheck",
    title: "DrawCheck",
    subtitle: "Engineering Drawing Verification & Inspection Utility",
    category: "Engineering Tool",
    metaphor: "blueprint",
    spineColor: "#1d4ed8", // Blueprint Royal Blue
    coverGradient: "from-blue-950 via-slate-900 to-cyan-950",
    accentColor: "#3b82f6",
    year: "2025",
    summary: "Technical engineering tool built for Computer & Mechanical engineering drawing validation, dimension checking, and precision analysis.",
    problem: "Manual checking of engineering drawing projections and isometric dimensions is time-consuming and error-prone.",
    idea: "Develop a digital inspection suite that lets students overlay reference projections, verify scale ratios, and audit line accuracy.",
    role: "Developer",
    techStack: ["JavaScript", "HTML5 Canvas API", "React", "CSS Grid/Flexbox"],
    keyFeatures: [
      "Canvas-based Vector Line & Dimension Measurement",
      "Orthographic to Isometric Grid Projections",
      "Automated Angle & Scale Verification",
      "Exportable Graded Inspection Sheets"
    ],
    challenges: [
      "Handling dynamic canvas coordinate transformations smoothly on high-DPI displays",
      "Calculating exact pixel-to-millimeter ratio conversions"
    ],
    learnings: [
      "Deep understanding of HTML5 2D Canvas rendering loops and geometric math",
      "Applied computer engineering principles to technical drawing validation"
    ],
    status: "Active Development"
  },
  {
    id: "studio-vyakhya",
    title: "Studio Vyakhya",
    subtitle: "Interactive Interior Design & Exhibition Workshop Platform",
    category: "Full-Stack Web",
    metaphor: "polaroid",
    spineColor: "#c2410c", // Burnt Terracotta
    coverGradient: "from-amber-950 via-slate-900 to-orange-950",
    accentColor: "#f97316",
    year: "2024",
    summary: "Comprehensive platform allowing users to explore interior designs, book interactive workshops, and reserve exhibition spaces online.",
    problem: "Interior design studios lack centralized platforms for showcasing interactive exhibition portfolios while accepting seamless workshop bookings.",
    idea: "A visual, high-end e-commerce & exhibition platform backed by Cloudinary image management and Razorpay payment integration.",
    role: "Full-Stack Developer",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary API", "Razorpay"],
    keyFeatures: [
      "Interactive Exhibition Gallery with high-res media optimization",
      "Workshop Seat Reservation & Live Razorpay Payment Gateway",
      "Cloudinary Powered Image Asset Pipeline",
      "Admin Panel for Workshop Management and Booking Audits"
    ],
    challenges: [
      "Integrating secure payment verification hooks with Express backend",
      "Optimizing media loading performance across mobile networks"
    ],
    learnings: [
      "Mastered third-party API integrations (Razorpay & Cloudinary)",
      "Enhanced database schema design for booking transactions"
    ],
    status: "Live & Deployed"
  },
  {
    id: "fittrack-pro",
    title: "FitTrack Pro",
    subtitle: "Personalized Fitness & Activity Analytics Suite",
    category: "Full-Stack Web",
    metaphor: "device",
    spineColor: "#15803d", // Emerald / Forest Green
    coverGradient: "from-emerald-950 via-slate-900 to-teal-950",
    accentColor: "#22c55e",
    year: "2024",
    summary: "Web application for tracking workout routines, calorie metrics, progressive overload data, and fitness goals with visual charts.",
    problem: "Existing fitness apps are clogged with advertisements or hide historical workout analytical charts behind paywalls.",
    idea: "Create a streamlined, privacy-centric fitness tracking dashboard with intuitive data entry and clear progress visualizers.",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Recharts / Chart.js", "Tailwind CSS"],
    keyFeatures: [
      "Custom Workout Routine Logger",
      "Visual Weight & Volume Progression Graphs",
      "Caloric & Macro Nutrients Daily Breakdown",
      "Personal Milestone & Streak Counter"
    ],
    challenges: [
      "Designing intuitive mobile touch controls for quick gym data entry",
      "Constructing responsive multi-axis analytical charts"
    ],
    learnings: [
      "Gained confidence in data visualization techniques and time-series aggregation",
      "Optimized MongoDB indexing for date-filtered analytical queries"
    ],
    status: "Active Development"
  },
  {
    id: "plant-caring-app",
    title: "Plant Caring App",
    subtitle: "Android Mobile Companion for Botanical Care & Watering Reminders",
    category: "Mobile App",
    metaphor: "book",
    spineColor: "#047857", // Deep Green
    coverGradient: "from-green-950 via-slate-900 to-emerald-950",
    accentColor: "#10b981",
    year: "2023",
    summary: "Native Android mobile app offering botanical care guides, customizable watering schedules, and diagnostic tips for houseplant maintenance.",
    problem: "Plant owners frequently forget watering schedules or misdiagnose light and soil requirements.",
    idea: "Build a clean mobile companion with local notification reminders and categorized botanical care cards.",
    role: "Android Developer",
    techStack: ["Java (Android Studio)", "XML UI Layouts", "SQLite / Room DB", "Android AlarmManager"],
    keyFeatures: [
      "Automated Local Push Notifications for Plant Watering",
      "Botanical Species Catalog & Lighting Requirements Guide",
      "Custom Plant Profile Creation with Photo Attachments",
      "Offline-capable SQLite Data Persistence"
    ],
    challenges: [
      "Managing Android AlarmManager background services reliably across different OS power-saving modes",
      "Crafting flexible XML layouts for varying screen densities"
    ],
    learnings: [
      "Solidified mobile app fundamentals, Java object-oriented design, and native UI lifecycles",
      "Understood local DB persistence and native notification triggers"
    ],
    status: "Live & Deployed"
  }
];
