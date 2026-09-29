export interface AcademicRecord {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  highlights: string[];
  coursework: string[];
  status: "Completed" | "In Progress";
  badgeColor: string;
}

export const EDUCATION_RECORDS: AcademicRecord[] = [
  {
    id: "btech-ce",
    degree: "B.Tech in Computer Engineering",
    institution: "Vidyalankar Institute of Technology (VIT)",
    location: "Mumbai, Maharashtra",
    period: "2025 – 2028",
    scoreLabel: "Academic Performance",
    scoreValue: "SGPA 9.19 (Sem 4) | SGPA 8.4 (Sem 3)",
    highlights: [
      "Specialization Direction: Artificial Intelligence & Machine Learning",
      "Architected Campus 1 AI platform for institution-wide deployment",
      "Consistent high academic performance across all semesters"
    ],
    coursework: [
      "Artificial Intelligence & ML",
      "Advanced Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems & Architecture",
      "Web Engineering & Cloud Services"
    ],
    status: "In Progress",
    badgeColor: "emerald"
  },
  {
    id: "diploma-it",
    degree: "Diploma in Information Technology",
    institution: "V.P.M's Polytechnic",
    location: "Thane, Maharashtra",
    period: "2022 – 2025",
    scoreLabel: "Final Distinction Score",
    scoreValue: "91.40%",
    highlights: [
      "Secured top academic distinction with 91.40% overall score",
      "Developed Android & Java based capstone software applications",
      "Mastered low-level algorithms in C and object-oriented programming in Java"
    ],
    coursework: [
      "Object-Oriented Programming (Java)",
      "Relational Database Systems (SQL)",
      "Software Engineering & Testing",
      "Data Communication & Networking",
      "GUI & Web Development"
    ],
    status: "Completed",
    badgeColor: "cyan"
  }
];
