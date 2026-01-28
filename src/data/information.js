// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Vinayak Nandikole",
  title: "Full Stack Developer (MERN)",
  tagline:
    "Building scalable web applications, backend systems, and real-world solutions used in production.",
  github: "https://github.com/vinnu9112",
  linkedin: "https://www.linkedin.com/in/vinayak-nandikole",
  email: "vinayaknandikole2158@gmail.com",
  instagram: "https://www.instagram.com/vinayak.nandikole",
  twitter: "https://x.com/vinayak_9112",
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  desktopHeading: "Professional Overview",
  mobileHeading: "About Me",
  paragraphs: [
    "I am a Full Stack Developer with hands-on experience building and maintaining production-grade web applications using the MERN stack. Currently part of the Teach For India Technology Team, I work on systems that support large-scale recruitment, assessments, and operational workflows across multiple cities in India.",
    "My work involves designing scalable backend APIs, integrating third-party platforms like Salesforce, building secure media upload pipelines using AWS S3, and implementing video-based assessment and proctoring workflows. I focus strongly on clean architecture, performance optimization, and writing maintainable code that works reliably in real-world scenarios.",
  ],
  cvFileName: "Vinayak_Nandikole.pdf",
};

// ============================================
// EXPERIENCE DATA
// ============================================
export const experienceData = {
  heading: "Experience",
  subheading: "My professional journey",
  experiences: [
    {
      company: "Teach For India",
      role: "Associate, Web Development",
      period: "Aug 2023 - Present",
      location: "India",
      highlights: [
        "Revamped Application Portal (React, Node.js, MongoDB), improving load time by 20%",
        "Integrated Salesforce with bidirectional triggers, reducing recruiter effort by 30%",
        "Built video proctoring + transcription pipeline using AWS S3 & OpenAI Whisper",
        "Automated recurring database tasks, reducing human errors by 15%",
        "Fixed 50+ bugs and collaborated with 4 developers on code reviews",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "Associate Software Engineer",
      period: "Dec 2022 - Apr 2023",
      location: "India",
      highlights: [
        "Transferred PL/SQL packages to SQL format for Oracle to Snowflake migration",
        "Mastered collaborative software development using Git and GitHub",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "Graduate Engineer Trainee",
      period: "June 2022 - Dec 2022",
      location: "India",
      highlights: [
        "Engaged in comprehensive software development fundamentals training",
        "Received training in version control and best coding practices",
      ],
    },
  ],
};

// ============================================
// SKILLS DATA
// ============================================
export const skillsData = {
  heading: "Tech Stack",
  subheading: "Technologies I work with",
  skills: [
    { name: "React.js", iconKey: "react" },
    { name: "Node.js", iconKey: "nodejs" },
    { name: "MongoDB", iconKey: "mongodb" },
    { name: "JavaScript", iconKey: "javascript" },
    { name: "C++", iconKey: "cpp" },
    { name: "Java", iconKey: "java" },
    { name: "SQL", iconKey: "sql" },
    { name: "AWS", iconKey: "aws" },
    { name: "Git", iconKey: "git" },
    { name: "Salesforce", iconKey: "salesforce" },
  ],
};

// ============================================
// PROJECTS DATA
// ============================================
export const projectsData = {
  heading: "Projects",
  subheading: "Professional work and personal projects",
  professionalCategory: "Professional Projects",
  personalCategory: "Just for Fun",
  professionalProjects: [
    {
      title: "Fellowship Application Portal",
      company: "Teach For India",
      tech: "React • Node.js • MongoDB • MaterialUI",
      description:
        "Full-stack application portal with reusable components, PDF CV downloads, custom modals, Salesforce integration, and video proctoring with transcription pipeline.",
      highlights: [
        "20% faster load time",
        "Salesforce sync",
        "Video proctoring",
      ],
      link: "https://apply.teachforindia.org/",
    },
    {
      title: "Volunteer Management System",
      company: "Teach For India",
      tech: "React • Algolia • FormAssembly",
      description:
        "Serverless React app with Algolia integration for fast search and filtering of volunteer opportunities by city, cluster, availability, and subjects.",
      highlights: ["Fast search", "Pre-filled forms", "Real-time filtering"],
      link: "https://volunteer.teachforindia.org/",
    },
    {
      title: "Impacted Internship Program",
      company: "Teach For India",
      tech: "React • Node.js • MongoDB",
      description:
        "Referral-only application system where opportunities are accessible via special reference keys shared with referred candidates.",
      highlights: ["Secure access", "Role management", "Streamlined flow"],
      link: "https://impacted.teachforindia.org/?applicantID=1234",
    },
  ],
  personalProjects: [
    {
      title: "Text Utils",
      description:
        "Text analysis tool for word count, character count, and removing extra spaces.",
      link: "https://vinnu9112.github.io/text-utils/",
    },
    {
      title: "To Do List",
      description: "Task management React app for organizing incomplete tasks.",
      link: "https://vinnu9112.github.io/to-do-list/",
    },
    {
      title: "BMI Calculator",
      description:
        "Body Mass Index calculator relating measurements to health and fitness.",
      link: "https://vinnu9112.github.io/bmi-calculator/",
    },
  ],
};

// ============================================
// ACHIEVEMENTS DATA
// ============================================
export const achievementsData = {
  heading: "Achievements & Certifications",
  subheading: "Recognition and credentials",
  achievementsCategory: "Coding Achievements",
  certificationsCategory: "Certifications",
  achievements: [
    {
      iconKey: "hackerrank",
      title: "4 Star Coder",
      subtitle: "HackerRank C++",
      description: "Achieved 4-star rating in C++ problem solving",
      link: "https://www.hackerrank.com/profile/vinayaknandikol1",
    },
    {
      iconKey: "gfg",
      title: "Rank 15",
      subtitle: "GeeksForGeeks",
      description: "Institutional rank with 130+ problems solved",
      link: "https://www.geeksforgeeks.org/profile/vinayaknandikole2158",
    },
    {
      iconKey: "leetcode",
      title: "150+ Problems",
      subtitle: "LeetCode",
      description: "Proficiency in data structures and algorithms",
      link: "https://leetcode.com/vinnnu/",
    },
  ],
  certifications: [
    {
      iconKey: "awsCert",
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/d4fdaec9-c26c-4381-8706-92132d15a086/linked_in_profile",
    },
    {
      iconKey: "azure",
      name: "AZ-900: Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/55674b14-9c97-4eb2-bee4-331f3869ba0f/linked_in_profile",
    },
  ],
};

// ============================================
// NAVBAR DATA
// ============================================
export const navItems = [
  { to: "main", label: "Home" },
  { to: "features", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "services", label: "Projects" },
  { to: "achievements", label: "Achievements" },
  { to: "subscribe", label: "Contact" },
];

// ============================================
// CONTACT DATA
// ============================================
export const contactData = {
  heading: "Contact Me",
  socialLinks: [
    {
      name: "instagram",
      url: "https://www.instagram.com/vinayak.nandikole",
      iconKey: "instagram",
    },
    {
      name: "email",
      url: "mailto:vinayaknandikole2158@gmail.com",
      iconKey: "gmail",
    },
    {
      name: "twitter",
      url: "https://x.com/vinayak_9112",
      iconKey: "twitter",
    },
  ],
};
