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
  status: "In Progress" | "Completed";
  badgeColor: string;
}

export const EDUCATION_RECORDS: AcademicRecord[] = [
  {
    id: "btech-ce",
    degree: "B.Tech in Computer Engineering",
    institution: "Vidyalankar Institute of Technology",
    location: "Mumbai",
    period: "2025 – 2028",
    scoreLabel: "Academic Trajectory",
    scoreValue: "2025 – 2028",
    highlights: [
      "Pursuing B.Tech in Computer Engineering at Vidyalankar Institute of Technology, Mumbai",
      "Focusing on software development, problem-solving, and technology management",
      "Building practical academic projects across web and mobile platforms"
    ],
    coursework: [
      "Computer Engineering Core",
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Development",
      "Object-Oriented Programming"
    ],
    status: "In Progress",
    badgeColor: "emerald"
  },
  {
    id: "diploma-ce",
    degree: "Diploma in Computer Engineering",
    institution: "V.P.M's Polytechnic",
    location: "Thane",
    period: "2022 – 2025",
    scoreLabel: "Percentage Score",
    scoreValue: "91.40%",
    highlights: [
      "Graduated with 91.40% distinction score",
      "Built strong foundation in C, C++, Java, and Web Technologies",
      "Developed Plant Caring mobile application and academic software systems"
    ],
    coursework: [
      "C & C++ Programming",
      "Java Application Development",
      "Relational Databases & SQL",
      "Operating Systems (Linux, Windows)",
      "Web Technologies (HTML, CSS, JavaScript)"
    ],
    status: "Completed",
    badgeColor: "cyan"
  },
  {
    id: "ssc-cbse",
    degree: "Secondary School Certificate (CBSE)",
    institution: "Lok Puram Public School",
    location: "Thane",
    period: "2022",
    scoreLabel: "Board Percentage",
    scoreValue: "90.40%",
    highlights: [
      "Scored 90.40% in CBSE Secondary School Certificate",
      "Demonstrated strong analytical and problem-solving aptitude",
      "Active participant in extracurricular competitions and teamwork initiatives"
    ],
    coursework: [
      "Mathematics & Science",
      "Computer Applications",
      "English & Hindi"
    ],
    status: "Completed",
    badgeColor: "violet"
  }
];
