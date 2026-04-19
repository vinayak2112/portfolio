// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Vinayak Nandikole",
  title: "Full-Stack Engineer - React, Node.js, MongoDB",
  tagline:
    "Shipping production web platforms serving up to 50K applicants/year at Teach For India — turning tangled enterprise workflows (Salesforce, OAuth, Algolia) into clean user-facing flows.",
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
    "I'm a Full-Stack Engineer on the Teach For India Technology Team, owning end-to-end development across three flagship portals — Fellowship (up to 50K applicants/year), Volunteer, and Internship — that drive nationwide recruitment and operations.",
    "My day-to-day is architecting async job pipelines with Bull + Redis, bidirectionally syncing Salesforce across 8+ objects, wiring multi-provider OAuth (Google/LinkedIn/OTP) via Passport.js, and building Algolia-powered search, video proctoring, and Whisper-based transcription workflows on top of AWS S3.",
    "I care about clean architecture, PM2 cluster-mode scalability for peak cycles, feature-flagged rollouts, and turning messy enterprise workflows into flows non-technical teams can actually operate.",
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
      location: "Pune, India",
      highlights: [
        "Owned full-stack development across three flagship portals — Fellowship (up to 50K applicants/year), Volunteer, and Internship; led the Volunteer Portal revamp end-to-end from UX design through production deployment",
        "Architected async job processing with Bull + Redis across 20+ job types (Salesforce syncs, assessment scoring, data synchronization) on dedicated PM2-clustered workers separated from the API for peak-cycle scalability",
        "Enhanced internal Kitchen admin tooling: automated Salesforce interview slot fetch with real-time capacity deduction; built a mock application system that exercises the full applicant waterfall for regression testing",
        "Integrated Salesforce bidirectionally across 8+ objects with multi-provider auth (Google/LinkedIn OAuth, OTP) via Passport.js; automated DB operations cutting error rate by 15% and resolved 50+ production bugs across a 4-engineer team",
        "Designed a feature-flag system (e.g., allowACOperations) governing runtime behavior of picklists and dashboard actions, enabling safe rollouts of operational changes without code deploys",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "Associate Software Engineer",
      period: "June 2022 - Apr 2023",
      location: "Pune, India",
      highlights: [
        "Migrated PL/SQL packages to SQL for the Oracle to Snowflake data warehouse transition, ensuring zero data loss across production schemas",
        "Collaborated in a cross-functional Git/GitHub workflow with code reviews, issue tracking, and release cadences on a multi-engineer data modernization team",
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
    { name: "React", iconKey: "react" },
    { name: "Redux", iconKey: "redux" },
    { name: "TypeScript", iconKey: "typescript" },
    { name: "JavaScript", iconKey: "javascript" },
    { name: "Node.js", iconKey: "nodejs" },
    { name: "Express", iconKey: "express" },
    { name: "MongoDB", iconKey: "mongodb" },
    { name: "Redis", iconKey: "redis" },
    { name: "SQL", iconKey: "sql" },
    { name: "Python", iconKey: "python" },
    { name: "Java", iconKey: "java" },
    { name: "C++", iconKey: "cpp" },
    { name: "AWS", iconKey: "aws" },
    { name: "Salesforce", iconKey: "salesforce" },
    { name: "Docker", iconKey: "docker" },
    { name: "Git", iconKey: "git" },
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
      tech: "React 18 • Node.js • MongoDB • Material UI • AWS S3 • Whisper",
      description:
        "Monorepo (Express server, React applicant portal, admin Kitchen dashboard) with cohort-scoped MongoDB collections for year-over-year data isolation. Includes COCO-based video proctoring, WebM recorder with Whisper transcription, and dynamic PDF generation for offer letters and CVs.",
      highlights: [
        "50K applicants / year",
        "20% faster load time",
        "Video proctoring + Whisper",
      ],
      link: "https://apply.teachforindia.org/",
    },
    {
      title: "Volunteer Management System",
      company: "Teach For India",
      tech: "React • Algolia • Salesforce • Bull Queue",
      description:
        "Re-architected with action-first UX — chips/cards replacing dropdowns, global search with auto-suggestions, step-wise auto-scroll. Built an Algolia-Salesforce sync microservice that auto-removes fulfilled, inactive, or referred opportunities from the index via queue-based processing.",
      highlights: ["36% fewer clicks", "Algolia sync", "Unified indices"],
      link: "https://volunteer.teachforindia.org/",
    },
    {
      title: "Impacted Internship Program",
      company: "Teach For India",
      tech: "React (CRA) • Node.js • Salesforce",
      description:
        "Sibling CRA app with referral-gated access via unique reference keys for invite-only onboarding and pre-filled application flows to reduce drop-off. Backend classification toggle distinguishes internship vs volunteer applicants, sharing infrastructure with the Volunteer Portal for zero-duplication sync.",
      highlights: ["Referral-gated", "Shared infra", "Pre-filled flow"],
      link: "https://impacted.teachforindia.org/?applicantID=1234",
    },
  ],
  personalProjects: [
    {
      title: "Text Utils",
      description:
        "Text analysis tool for word count, character count, and removing extra spaces.",
      link: "https://vinnu9112.github.io/text-utils/",
      image: "p1.png",
    },
    {
      title: "To Do List",
      description: "Task management React app for organizing incomplete tasks.",
      link: "https://vinnu9112.github.io/to-do-list/",
      image: "p2.png",
    },
    {
      title: "BMI Calculator",
      description:
        "Body Mass Index calculator relating measurements to health and fitness.",
      link: "https://vinnu9112.github.io/bmi-calculator/",
      image: "p3.png",
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
      name: "phone",
      url: "tel:+918830231912",
      iconKey: "phone",
    },
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
