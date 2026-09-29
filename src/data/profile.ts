export interface ProfileData {
  name: string;
  badgeId: string;
  role: string;
  headline: string;
  subheadline: string;
  location: string;
  institution: string;
  degree: string;
  diploma: string;
  sgpa3: number;
  sgpa4: number;
  diplomaPercentage: number;
  status: string;
  availability: string;
  bio: string[];
  interests: string[];
  hobbies: { icon: string; name: string; description: string }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
  metrics: {
    projectsCompleted: number;
    hackathonsEntered: number;
    codeCommits: number;
    currentSgpa: number;
  };
}

export const PROFILE_DATA: ProfileData = {
  name: "Krishna Singh",
  badgeId: "DEV-2026-KS942",
  role: "Computer Engineering Student • Developer • AI/ML • Full Stack",
  headline: "Building intelligent software with code, curiosity and AI.",
  subheadline: "Developer → AI/ML → Intelligent Software → Experimentation → Continuous Learning",
  location: "Mumbai, Maharashtra, India",
  institution: "Vidyalankar Institute of Technology (VIT), Mumbai",
  degree: "B.Tech in Computer Engineering (2025 – 2028)",
  diploma: "Diploma in Information Technology (V.P.M's Polytechnic) - 91.40%",
  sgpa3: 8.4,
  sgpa4: 9.19,
  diplomaPercentage: 91.40,
  status: "ACTIVE_BUILDING",
  availability: "Open for AI/ML & Full-Stack Projects",
  bio: [
    "I am a Computer Engineering student with a Diploma in Information Technology, specializing in Full-Stack Web Architecture, Interactive UI Design, and Artificial Intelligence.",
    "My engineering philosophy centers around speed, efficiency, and real-world applicability. I don't just build UI; I craft digital operating systems that integrate AI assistants, grounded knowledge bases, and intuitive workflows.",
    "From hackathon platforms like Campus 1 and Jaal to AI experimental software like NeuroFlow, I constantly bridge the gap between frontend craft, backend robustness, and emerging machine learning capabilities."
  ],
  interests: [
    "AI / AI-ML Systems",
    "Full-Stack Web Development",
    "Interactive UI & WebGL Animation",
    "Developer Tools & Efficiency",
    "Grounded AI Mentorship Engines",
    "Machine Learning Integration"
  ],
  hobbies: [
    { icon: "Music", name: "Music & Guitar", description: "Acoustic & Electric Guitar jamming" },
    { icon: "Mic", name: "Singing", description: "Vocal sessions and melody composition" },
    { icon: "Utensils", name: "Cooking", description: "Culinary experiments & fusion recipes" },
    { icon: "Cpu", name: "Tech Experimentation", description: "Testing new developer tools, models, & frameworks" }
  ],
  socials: {
    github: "https://github.com/krishna942007",
    linkedin: "https://linkedin.com/in/krishna942007",
    email: "krishnasd7869@gmail.com",
  },
  metrics: {
    projectsCompleted: 8,
    hackathonsEntered: 4,
    codeCommits: 450,
    currentSgpa: 9.19
  }
};
