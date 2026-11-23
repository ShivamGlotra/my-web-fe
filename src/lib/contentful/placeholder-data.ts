import type {
  About,
  ContactContent,
  EducationItem,
  Experience,
  Hero,
  Project,
  SiteSettings,
  SkillGroup,
} from "@/types/content";

export const siteSettings = {
  name: "Shivam Glotra",
  role: "Computer Science student · Full-stack developer",
  location: "Toronto, Canada",
  email: "shivam.glotra.43@gmail.com",
  availability: { open: true, label: "Open to new opportunities" },
  cvUrl: "/cv.pdf",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ShivamGlotra" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivamglotra" },
  ],
  footerTagline: "A Computer Science student building reliable, accessible software across web, mobile and backend.",
  seo: {
    title: "Shivam Glotra · Full-stack developer",
    description:
      "Third-year Computer Science student at York University building full-stack software with React, Next.js, Node.js, Flutter and PostgreSQL.",
  },
} satisfies SiteSettings;

export const hero = {
  headline: "I build full-stack software across web, mobile and backend.",
  intro:
    "Third-year Computer Science student with three developer roles since 2025. I work with React, Next.js, Node.js, Flutter and PostgreSQL, and care about reliable, accessible products. I'm looking for my next role, so if you're hiring or have a project in mind, say hello.",
  stats: [
    { value: "3", label: "developer roles" },
    { value: "12+", label: "REST APIs built" },
    { value: "2", label: "certifications" },
  ],
} satisfies Hero;

export const about = {
  lead: "I turn complex problems into working software, from full-stack web and mobile apps to backend systems and machine-learning pipelines.",
  paragraphs: [
    "I'm a third-year Computer Science student at York University. Outside coursework I learn by building: side projects, self-paced courses and hackathons.",
    "Before software I led a 15-person restaurant team serving 100+ guests a day, which taught me to communicate and solve problems under pressure. I now bring that to collaborative engineering teams.",
    "Next, I'm working on system design, cloud certifications (AWS and Azure) and contributing to open source.",
  ],
  services: [
    {
      title: "Web development",
      description: "Responsive, accessible apps with React and Next.js, built from reusable components.",
    },
    {
      title: "Mobile development",
      description: "Cross-platform iOS and Android apps in Flutter, backed by Firebase.",
    },
    {
      title: "Backend and data",
      description: "REST APIs with Node.js and Express on PostgreSQL, plus Python and Databricks for data and ML.",
    },
  ],
} satisfies About;

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C", "C#", "Dart", "SQL", "Bash", "HTML5", "CSS3"],
  },
  {
    label: "Libraries and frameworks",
    items: [
      "React",
      "Next.js",
      "Flutter",
      "Node.js",
      "Express",
      "RESTful APIs",
      "Stripe",
      "ORM",
      "Responsive UI",
      "Accessibility",
      "SEO",
    ],
  },
  {
    label: "Databases and cloud",
    items: ["PostgreSQL", "Firebase", "AWS", "Azure DevOps", "Vercel"],
  },
  {
    label: "Developer tools",
    items: [
      "Git / GitHub / GitLab",
      "CI/CD",
      "GitHub Actions",
      "Playwright",
      "Lighthouse",
      "Jira",
      "Figma",
      "Contentful",
      "Google Tag Manager",
    ],
  },
  {
    label: "AI tools",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Codex",
      "GitHub Copilot",
      "Microsoft Copilot (custom agents)",
      "Local AI (Ollama)",
    ],
  },
] satisfies SkillGroup[];

export const projects = [
  {
    slug: "e-commerce-web-app",
    title: "E-Commerce Web App",
    category: "web",
    status: "in-progress",
    stat: "29 commits",
    featured: true,
    summary: "A full-stack store with REST APIs, PostgreSQL and a Contentful-managed catalogue.",
    highlights: [
      "Reusable Next.js and TypeScript components",
      "Node.js REST APIs with PostgreSQL through an ORM",
      "Contentful as headless CMS, deployed on AWS",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Contentful", "AWS"],
  },
  {
    slug: "workout-app",
    title: "Workout App",
    category: "mobile",
    status: "in-progress",
    stat: "117 commits",
    summary: "Cross-platform fitness tracker for workout plans and progress.",
    highlights: [
      "Workout plans and exercise tracking",
      "Fitness progress monitoring",
      "Firebase authentication and data",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Node.js", "Express"],
  },
  {
    slug: "pdf-scanner-app",
    title: "PDF Scanner App",
    category: "mobile",
    status: "completed",
    date: "2025-11",
    summary: "Document scanner with image capture, processing and PDF generation.",
    highlights: ["Document capture and image processing", "PDF generation", "Simple management of scanned files"],
    stack: ["Flutter", "Dart"],
  },
  {
    slug: "employment-data-analyzer",
    title: "Employment Data Analyzer",
    category: "ml",
    status: "completed",
    date: "2026-05",
    summary: "Uses machine learning to read Excel files and pay stubs and generate risk reports.",
    highlights: [
      "Extracts data from Excel files and pay stubs with ML",
      "Pulls employment data from Canadian government sources",
      "Calculates risk factors and generates reports",
    ],
    stack: ["Python", "Databricks", "Pandas", "Machine Learning"],
  },
  {
    slug: "full-stack-portfolio-website",
    title: "Full-Stack Portfolio Website",
    category: "web",
    status: "completed",
    date: "2026-01",
    summary: "Responsive portfolio on Next.js and React, with Firebase for auth, data and hosting.",
    highlights: [
      "Reusable components, tuned for performance",
      "Firebase authentication, database and hosting",
      "Deployed on Vercel",
    ],
    stack: ["TypeScript", "React", "Next.js", "Firebase", "Vercel"],
  },
  {
    slug: "live-sports-app",
    title: "Live Sports App",
    category: "mobile",
    status: "in-progress",
    summary: "Real-time match updates, instant notifications and live news.",
    highlights: ["Real-time match updates", "Instant notifications", "Detailed match analytics and live news"],
    stack: ["Flutter", "Firebase", "Node.js", "Express"],
  },
  {
    slug: "ai-meal-finder",
    title: "AI Meal Finder",
    category: "desktop",
    status: "completed",
    date: "2025-06",
    summary: "Recommends meals from dietary preferences and ingredients using AI.",
    highlights: ["Recommends meals from dietary preferences", "Ingredient-based AI suggestions"],
    stack: ["C#", ".NET", "AI", "Python"],
  },
  {
    slug: "banking-e-commerce-app",
    title: "Banking E-Commerce App",
    category: "desktop",
    status: "completed",
    date: "2024-01",
    summary: "Manage bank accounts and e-commerce transactions with secure payments.",
    highlights: ["Account management and transactions", "User authentication", "Secure payments"],
    stack: ["JavaFX", "MySQL", "Java"],
  },
] satisfies Project[];

export const experience = [
  {
    id: "connect2network",
    role: "Software Developer (Contract)",
    company: "Connect2Network",
    location: "Toronto, ON",
    start: "2026-05",
    end: "2026-06",
    kind: "developer",
    highlights: [
      "Delivered reusable Next.js, React and TypeScript features in a 10-person team during a 1-month contract.",
      "Integrated frontend features with Node.js/Express REST APIs and Stripe payments for reliable full-stack communication.",
      "Managed application data in PostgreSQL through an ORM for efficient, maintainable database operations.",
      "Supported cloud deployments on AWS and Azure while collaborating on features, debugging and code quality.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Stripe", "PostgreSQL", "AWS", "Azure"],
  },
  {
    id: "goeasy",
    role: "Junior Software Developer Intern",
    company: "goeasy",
    location: "Mississauga, ON",
    start: "2025-09",
    end: "2026-04",
    kind: "developer",
    highlights: [
      "Delivered web and mobile interfaces over 10 months in a team of 6–10 using React, Next.js, TypeScript and Flutter.",
      "Integrated REST/JSON APIs in collaboration with backend teams to deliver seamless user experiences.",
      "Improved release reliability by building 5 end-to-end Playwright scenarios with 5+ mocked APIs for offline execution.",
      "Contributed to CI/CD pipelines and release workflows in Azure DevOps to streamline delivery.",
      "Helped resolve a page-performance issue using Lighthouse audits and applied Google SEO best practices.",
      "Integrated Google Tag Manager and accessiBe for analytics tracking and web accessibility improvements.",
      "Partnered with design using Figma, Jira and Contentful to deliver accessible, pixel-perfect interfaces.",
      "Enabled AI-assisted development by authoring markdown instruction files for coding agents.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Flutter",
      "Playwright",
      "Azure DevOps",
      "Lighthouse",
      "Figma",
      "Contentful",
    ],
  },
  {
    id: "soudelka",
    role: "Junior Software Developer Intern",
    company: "Soudelka Technologies",
    location: "Toronto, ON",
    start: "2025-05",
    end: "2025-08",
    kind: "developer",
    highlights: [
      "Developed 12+ modular RESTful APIs in 3 months using Node.js, Express and TypeScript to power frontend apps.",
      "Integrated Firebase for real-time data, authentication and cloud functions.",
      "Managed dependencies, scripts and environment-based configuration with NPM.",
      "Upheld code quality in an Agile team on GitLab with feature branches, merge requests and code reviews.",
      "Accelerated frontend integration by connecting APIs to the UI and fixing routes; debugged, refactored and unit-tested.",
    ],
    stack: ["Node.js", "Express", "TypeScript", "Firebase", "GitLab"],
  },
  {
    id: "restaurant",
    role: "Restaurant manager and server",
    company: "Goa Farm Kitchen and VIBO",
    location: "Toronto, ON",
    start: "2020-01",
    end: "2025-08",
    kind: "background",
    highlights: [
      "Led a 15-person team serving 100+ guests daily and improved efficiency by 10–15% through staffing and POS improvements.",
      "Deliver high-quality service to 200+ customers daily in a fast-paced environment, coordinating teams of up to 20 staff.",
    ],
    stack: [],
  },
] satisfies Experience[];

export const education = [
  {
    id: "york",
    kind: "degree",
    title: "Bachelor of Science, Computer Science",
    institution: "York University",
    location: "North York, ON",
    start: "2023-09",
    end: null,
    gpa: "3.8",
    coursework: [
      "Java",
      "Python",
      "C",
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
    ],
  },
  {
    id: "sheridan",
    kind: "degree",
    title: "Software Development Diploma",
    institution: "Sheridan College",
    location: "Brampton, ON",
    start: "2018-01",
    end: "2019-09",
    gpa: "3.76",
    coursework: ["Java", "JavaScript", "C", "C#", "Web Programming", "Database Systems", "Computer Architecture"],
  },
  {
    id: "react-coursera",
    kind: "certification",
    title: "React",
    institution: "Coursera",
    date: "2025-09",
  },
  {
    id: "flutter-coursera",
    kind: "certification",
    title: "Flutter",
    institution: "Coursera",
    date: "2025-09",
  },
] satisfies EducationItem[];

export const contact = {
  title: "Let's work together",
  body: "I'm always open to new opportunities to learn and collaborate. If you have a question or would like to connect, reach out.",
} satisfies ContactContent;
