// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Vinayak Nandikole",
  title: "Full-Stack Engineer | AI-Assisted Development & Automation",
  tagline:
    "Building production web platforms serving up to 50K applicants/year at Teach For India, now growing into AI-assisted development and automation: Claude Code, agentic workflows, MCP, and CI/CD.",
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
    "I'm a Full-Stack Engineer on the Teach For India Technology Team and a primary contributor (2,000+ commits) across three flagship portals (Fellowship, up to 50K applicants/year; Volunteer; and Internship) that drive nationwide recruitment and operations.",
    "My core stack is React, Node.js, Express, MongoDB, Redis and Bull, with deep work in Salesforce integration (jsforce, bidirectional sync across 8+ objects), multi-provider OAuth via Passport.js, Algolia search, and an in-house assessment platform featuring video proctoring (TensorFlow.js) and Whisper transcription on AWS S3.",
    "I'm increasingly focused on AI-assisted development and automation: building Claude Code workflows (slash commands, subagents, MCP), CI/CD pipelines, and an agentic multi-agent mesh (LangGraph + Claude). I care about clean architecture, reliability, and turning messy enterprise workflows into automated, dependable products.",
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
        "Primary contributor (2,000+ commits) across three production portals (Fellowship up to 50K applicants/year, Volunteer, Internship); led the Volunteer matching-2.0 revamp end-to-end from UX design through production deployment",
        "Co-built an in-house test/assessment engine (online test, Critical Thinking, Problem Solving) that retired a paid third-party vendor (AMCAT); built Bull-queue scoring, automated test-regeneration approvals, and idempotent abort/submit recovery",
        "Owned the bidirectional Salesforce-MongoDB integration (jsforce) across 8+ objects with reusable picklist value-mapping, atomic upserts, and multi-provider OAuth (Google/LinkedIn, OTP) via Passport.js",
        "Drove AI-assisted developer tooling and DevEx: Claude Code slash commands and subagents, MCP integrations (incl. Sentry MCP), and multiple technical BRDs that fed into implementation",
        "Hardened production reliability under live traffic using Sentry, cutting error rate by 15% and resolving 50+ production bugs; enhanced the Kitchen admin dashboard (mock-application QA, interview-slot automation, feature-flag rollouts)",
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
      tech: "React 18 • Node.js • MongoDB • Bull/Redis • TensorFlow.js • Whisper • AWS S3",
      description:
        "A 3-app monorepo (Express REST API, React 18 applicant portal, React admin Kitchen) with cohort-scoped MongoDB collections for year-over-year isolation. Includes an in-house assessment engine, browser-based video proctoring with in-browser face verification (TensorFlow.js), a recorder with Whisper transcription, and dynamic PDF generation.",
      highlights: [
        "50K applicants / year",
        "In-house assessment engine",
        "Video proctoring (TensorFlow.js)",
      ],
      link: "https://apply.teachforindia.org/",
    },
    {
      title: "CATIA Agentic Mesh",
      company: "Freelance",
      tech: "Python • LangGraph • Claude API • MCP • FastAPI • Docker • Azure",
      description:
        "A multi-agent mesh that automates the SDLC for CATIA customizations across Jira, Confluence, HP-ALM, GitLab and ServiceNow, orchestrated with LangGraph and Claude (cost-aware Opus/Sonnet/Haiku routing). Structural human-in-the-loop with RBAC-gated approvals and 7 MCP servers; now in active use by the client's team.",
      highlights: ["Multi-agent / LangGraph", "7 MCP servers", "In active use"],
      link: "https://github.com/vinayak2112",
    },
    {
      title: "Salesforce Version Control & AI DevEx (CORE)",
      company: "Teach For India",
      tech: "GitHub Actions • Salesforce DX • sfdx-git-delta • Claude Code • MCP",
      description:
        "Built Git version control and CI/CD from scratch for a production Salesforce org used by a 3-developer non-Git team: delta-only deploys, JWT auth, and configurable Apex test strategies. Authored 10 Claude Code slash commands plus a deploy-impact-reviewer subagent and a Salesforce DX MCP integration so non-Git users ship safely.",
      highlights: ["10 slash commands", "Delta CI/CD", "Deploy-risk subagent"],
      link: "https://github.com/vinayak2112",
    },
    {
      title: "Volunteer Management System",
      company: "Teach For India",
      tech: "React • Material UI • Algolia • Salesforce • Bull Queue",
      description:
        "Led the matching-2.0 revamp (3,500+ line rebuild): an action-first wizard with chips/cards replacing dropdowns, global search with auto-suggestions, and step-wise auto-scroll. Engineered an Algolia search layer (filter-DSL adapter, query deduplication, faceted availability counts) over a queue-based Salesforce sync.",
      highlights: ["36% fewer clicks", "Algolia search", "matching-2.0 revamp"],
      link: "https://volunteer.teachforindia.org/",
    },
    {
      title: "Crossroads Integration Layer",
      company: "Teach For India",
      tech: "Node.js • Express • Google Directory API • OAuth2 • Algolia",
      description:
        "Built a Salesforce-driven Google Workspace Directory API microservice (bulk-assign REST endpoint, lazy OAuth2 client, parallel batching, idempotent conflict handling, RBAC) that auto-provisions fellow accounts into Google Groups, plus a recordType-aware Salesforce-to-Algolia sync unifying volunteer and internship search.",
      highlights: ["Google Groups automation", "OAuth2 + RBAC", "recordType sync"],
      link: "https://github.com/vinayak2112",
    },
    {
      title: "Student Achievement Tracker (SAT)",
      company: "Teach For India",
      tech: "TypeScript • Express • Prisma • PostgreSQL • React • Vite • BullMQ • AWS ECS",
      description:
        "Owning and extending SAT, an enterprise TypeScript monorepo tracking student assessment data across 8 cities (28,000+ students, 433 schools). Express + Prisma + PostgreSQL REST API with Zod validation, a Vite + React 18 frontend, a BullMQ worker, a Salesforce sync service, and AWS ECS + S3/CloudFront CI/CD.",
      highlights: ["28K+ students", "TypeScript monorepo", "AWS ECS CI/CD"],
      link: "https://saturn.teachforindia.org/",
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
      iconKey: "anthropic",
      name: "Claude 101",
      issuer: "Anthropic",
      link: "https://verify.skilljar.com/c/yg6mzekfwv5q",
    },
    {
      iconKey: "anthropic",
      name: "Claude Code 101",
      issuer: "Anthropic",
      link: "https://www.anthropic.com/",
    },
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
