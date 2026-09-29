export interface ProfileData {
  name: string;
  badgeId: string;
  role: string;
  headline: string;
  subheadline: string;
  careerObjective: string;
  location: string;
  phone: string;
  institution: string;
  degree: string;
  diploma: string;
  diplomaPercentage: number;
  sscPercentage: number;
  status: string;
  availability: string;
  bio: string[];
  softSkills: string[];
  languages: string[];
  socials: {
    email: string;
    phone: string;
  };
  metrics: {
    projectsCount: number;
    diplomaScore: number;
    sscScore: number;
    awardsCount: number;
  };
}

export const PROFILE_DATA: ProfileData = {
  name: "Aditi Singh",
  badgeId: "CE-2025-AS609",
  role: "Computer Engineering Graduate",
  headline: "Computer Engineering Graduate",
  subheadline: "Software Development • Problem Solving • Teamwork • Technology & Management",
  careerObjective:
    "Motivated and detail-oriented Computer Engineering student with a strong foundation in software development, problem-solving, and teamwork. Eager to contribute technical and communication skills in academic projects, internships, and future career opportunities, while continuing to grow knowledge in both technology and management domains.",
  location: "B5/304, Brahmand Phase 3, Azadnagar, Thane (W)",
  phone: "+91 704509771116",
  institution: "Vidyalankar Institute of Technology, Mumbai",
  degree: "B.Tech in Computer Engineering (2025 – 2028)",
  diploma: "Diploma in Computer Engineering – V.P.M's Polytechnic, Thane (91.40%)",
  diplomaPercentage: 91.40,
  sscPercentage: 90.40,
  status: "ACTIVE_OPPORTUNITY",
  availability: "Open for Software & Academic Opportunities",
  bio: [
    "Motivated and detail-oriented Computer Engineering student with a strong foundation in software development, problem-solving, and teamwork.",
    "Experienced in academic projects including full-stack web platforms (Studio Vyakhya) and mobile application development (Plant Caring App in Java/Android Studio), alongside web design internship experience at CareerRaiser.",
    "Eager to contribute technical and communication skills in academic projects, internships, and future career opportunities, while continuing to grow knowledge in both technology and management domains."
  ],
  softSkills: [
    "Communication Skills",
    "Teamwork & Collaboration",
    "Leadership",
    "Presentation Skills"
  ],
  languages: [
    "English",
    "Hindi"
  ],
  socials: {
    email: "aditi60911@gmail.com",
    phone: "+91 704509771116"
  },
  metrics: {
    projectsCount: 2,
    diplomaScore: 91.40,
    sscScore: 90.40,
    awardsCount: 2
  }
};
