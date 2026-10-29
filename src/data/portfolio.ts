// All site content lives here. Edit this file to update text, links, projects,
// experience and skills without touching any component.

export type Accent = "pink" | "lavender" | "mint" | "peach";

export type LinkItem = { label: string; href: string };

export type ProjectCategory = "ai" | "web" | "mobile" | "ml";

export type Project = {
  slug: string; // image is served from /projects/<slug>.png
  name: string;
  short: string;
  categories: ProjectCategory[];
  tagline?: string;
  description: string;
  features: string[];
  stack: string[];
  links: LinkItem[];
};

export type WorkItem = {
  title: string;
  stack?: string[];
  bullets: string[];
  links?: LinkItem[];
};

export type Company = {
  name: string;
  role: string;
  dates: string;
  summary: string;
  color: Accent;
  stack: string[];
  work: WorkItem[];
};

export const site = {
  name: "Rida Malik",
  heroName: "RIDA MALIK",
  logo: "RM",
  title: "Rida Malik",
  shareTitle: "Rida Malik | AI & Automation Developer",
  description:
    "Rida Malik is an AI & Automation Developer building LLM-powered apps, workflow automations, and full-stack products with Python, Flask, Next.js, and Flutter.",
  url: "https://ridamalik.vercel.app",
  resume: "/Rida_Malik_CV.pdf",
  avatar: "/avatar.png",
  avatarAlt: "Illustrated portrait of Rida Malik",
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  badge: "Open to AI automation and full-stack roles",
  greeting: "Hi, I'm",
  gradientName: "Rida Malik",
  stats: [
    { icon: "rocket", label: "10+ Projects", color: "pink" },
    { icon: "building", label: "3 Teams", color: "lavender" },
    { icon: "code", label: "Python to Production", color: "mint" },
  ] as { icon: string; label: string; color: Accent }[],
  bubbles: ["Python", "Flask", "Next.js", "Flutter"],
  role: "AI Automation & Full-Stack Developer",
  motto: "Turning messy workflows into smart systems.",
  intro:
    "AI automation developer who also builds full-stack products: n8n workflows, CRM automations and LLM integrations, plus web and mobile apps with Flask, Next.js and Flutter.",
  primaryCta: "See My Work",
  secondaryCta: "Download Resume",
};

export const ticker = [
  "Python",
  "Flask",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Dart",
  "Groq",
  "Gemini",
  "LLaMA",
  "n8n",
  "GoHighLevel",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Docker",
  "scikit-learn",
];

export const about = {
  heading: "About",
  storyTitle: "The Story",
  story: [
    "I am a Software Engineering graduate from DHA Suffa University, Karachi (2026).",
    "I build AI-powered applications and automations, and I have worked on internal tools for an oil and gas company, products for a US-based automation startup, and cross-platform mobile apps.",
  ],
  offTitle: "When I'm Not Coding",
  off: [
    {
      icon: "tv",
      color: "pink",
      title: "Netflix nights",
      text: "Always halfway through a new series",
    },
    {
      icon: "users",
      color: "lavender",
      title: "Going out",
      text: "Catching up with friends and trying new places",
    },
    {
      icon: "coffee",
      color: "peach",
      title: "Café hopping",
      text: "Finding the best coffee spots in Karachi",
    },
    {
      icon: "car",
      color: "mint",
      title: "Long drives",
      text: "Music on, city lights, clear head",
    },
  ] as { icon: string; color: Accent; title: string; text: string }[],
};

export const experience: Company[] = [
  {
    name: "Cnergyico",
    role: "Software Engineering Intern",
    dates: "Sep 2026 to Present",
    summary:
      "Industrial monitoring, commodity pricing and project dashboards with an AI assistant.",
    color: "pink",
    stack: ["Flask", "Python", "Groq API", "LDAP", "SQLite", "JavaScript"],
    work: [
      {
        title: "Machine Condition Monitoring Dashboard",
        stack: ["Flask", "Python", "Groq API", "LDAP"],
        bullets: [
          "Built Machine Intelligence Chat, a Groq-powered AI assistant grounded in live machine data that predicts alarms, answers in English and Roman Urdu, and suggests prompts for each alarm or trip event",
          "Built monitoring for turbine, compressor, lube oil and pump and motor units with a 4-level setpoint system (Normal, Warning, Alarm, Trip)",
          "Added date-range playback, historian data uploads with automatic backups, and Active Directory login with audit logging",
        ],
      },
      {
        title: "Platts & IFEM Commodity Price Dashboard",
        stack: ["Flask", "SQLite", "JavaScript"],
        bullets: [
          "Integrated 3 live pricing APIs (Platts, Ex-Refinery PKR, Retail Price PKR) with an admin panel for testing, syncing and health monitoring",
          "Built role-based access so admins control which products each role can see",
          "Added price tables with filters, averages and candlestick charts, plus a gateway that routes multiple dashboards into one directory",
        ],
      },
      {
        title: "MI Advance (Market Intelligence)",
        stack: ["Flask", "Python"],
        bullets: [
          "Built an oil market dashboard tracking refinery production, OMC stocks, supply flow and tanker plans",
          "Fixed a production calculation error",
        ],
      },
      {
        title: "Project Management System",
        stack: ["Flask", "Python", "JavaScript"],
        bullets: [
          "Built a plan editor with prerequisite scheduling and circular dependency detection",
          "Added task assignments by org hierarchy and multi-level approval workflows",
        ],
      },
    ],
  },
  {
    name: "Arius Automation",
    role: "Full Stack Developer (Remote)",
    dates: "Apr 2026 to Sep 2026",
    summary:
      "n8n automations, a CRM dashboard and a multi-tenant database platform.",
    color: "lavender",
    stack: [
      "n8n",
      "Gemini",
      "GoHighLevel",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Docker",
    ],
    work: [
      {
        title: "n8n AI Video Pipeline",
        stack: ["n8n", "Gemini", "Text-to-Speech", "Shotstack"],
        bullets: [
          "Built an automated workflow that generates videos using Gemini, text-to-speech audio and Shotstack rendering",
        ],
      },
      {
        title: "n8n Call Management Workflow",
        stack: ["n8n", "GoHighLevel"],
        bullets: ["Built a GoHighLevel CRM workflow that automates call management"],
      },
      {
        title: "CRM Operations Dashboard for a US Client",
        stack: ["Next.js", "Supabase", "GoHighLevel", "GitHub Actions"],
        bullets: [
          "Automated an incremental GoHighLevel to Supabase sync on scheduled GitHub Actions",
          "Built a 10-screen operations dashboard with role-based admin access",
        ],
      },
      {
        title: "Clouzark Database Platform",
        stack: [
          "Express",
          "TypeScript",
          "React",
          "PostgreSQL 16",
          "Redis/BullMQ",
          "Docker",
          "Contabo",
        ],
        bullets: [
          "Built a multi-tenant database-as-a-service module for a Vercel-style hosting platform, provisioning an isolated PostgreSQL database and role per project",
          "Developed a Supabase-style dashboard with Table Editor, Monaco SQL Editor, schema visualizer, CSV import/export, saved queries and column constraints",
          "Implemented Row Level Security with a policy editor plus end-user auth (email, GitHub and Google OAuth, magic links, TOTP MFA)",
          "Auto-generated REST and GraphQL APIs per table with API key tiers, rate limiting and per-table API docs",
          "Added storage buckets with signed URLs and image resizing, realtime (Postgres changes, Broadcast, Presence), webhooks, cron jobs, queues and a secrets vault",
          "Set up and secured production PostgreSQL on a Contabo VPS (TLS, firewall, least-privilege roles) and a self-hosted GitHub Actions runner to cut CI costs",
          "Delivered 60+ GitHub issues through feature branches, pull requests and end-to-end testing",
        ],
      },
      {
        title: "Future Growth Readiness Audit",
        stack: ["Next.js", "TypeScript", "Supabase", "Airtable"],
        bullets: [
          "Built a CEO business assessment web app with 3 assessments, automated scoring, a live leaderboard and QR code access",
          "Saved every response to both Supabase and Airtable",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/ridamalik26/growth-readiness-audit",
          },
          {
            label: "Live Demo",
            href: "https://growth-readiness-audit.vercel.app",
          },
        ],
      },
      {
        title: "Company Landing Page",
        stack: ["GoHighLevel", "Calendly"],
        bullets: [
          "Built the company's lead-generation landing page on GoHighLevel with a lead form, Calendly booking for strategy calls and call functionality",
        ],
      },
    ],
  },
  {
    name: "Softgrid Solutions",
    role: "Mobile Application Development Intern (Remote)",
    dates: "Jun 2026 to Jul 2026",
    summary:
      "Cross-platform Flutter apps with local storage and Node.js backends.",
    color: "peach",
    stack: ["Flutter", "Dart", "Node.js", "MongoDB"],
    work: [
      {
        title: "Flutter Apps",
        bullets: [
          "Built cross-platform Flutter apps with local storage and Node.js backends, focused on clean UI and state management.",
        ],
      },
    ],
  },
];

export const experienceSection = {
  title: "Experience",
  cta: "View Full Experience",
};

export const experiencePage = {
  title: "Experience",
  intro:
    "Where I have worked and what I built there, from industrial dashboards to AI automations and mobile apps.",
};

export const projectsSection = {
  title: "Stuff I've Built",
  hint: "Tap a card to explore",
  maxTags: 4,
};

// Tag colors: AI tags lavender, backend mint, mobile peach, everything else pink.
export const tagCategories = {
  ai: [
    "Groq",
    "Groq API",
    "Gemini",
    "Gemini API",
    "LLaMA",
    "scikit-learn",
    "Text-to-Speech",
    "Plaid",
  ],
  backend: [
    "Flask",
    "Python",
    "Node.js",
    "Express",
    "PostgreSQL",
    "PostgreSQL 16",
    "Supabase",
    "SQLite",
    "MongoDB",
    "MongoDB Atlas",
    "JWT",
    "Cloudinary",
    "HubSpot API",
    "Redis/BullMQ",
    "LDAP",
  ],
  mobile: [
    "Flutter",
    "Flutter Web",
    "Dart",
    "Riverpod",
    "Provider",
    "Go Router",
    "Hive",
  ],
};

export const projects: Project[] = [
  {
    slug: "smart-solar-advisor",
    short: "AI solar sizing and vendor match",
    categories: ["ai", "ml", "mobile"],
    name: "Smart Solar Advisor",
    tagline: "Final Year Project",
    description:
      "An AI-powered solar recommendation app that tells users what solar system they need, what it will cost and which vendors to contact.",
    features: [
      "Solar system size prediction using a Gradient Boosting Regressor",
      "Cost estimation model",
      "K-Means clustering for user segmentation",
      "ML models served through a Flask API",
      "Groq/LLaMA 3.1 AI chatbot for solar guidance",
      "200-vendor directory",
      "Supabase backend",
      "Flutter app with a release Android build",
    ],
    stack: ["Flutter", "Flask", "Python", "scikit-learn", "Groq", "Supabase"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ridamalik26/Smart_Solar_Advisor_",
      },
    ],
  },
  {
    slug: "multi-vendor-ecommerce",
    short: "Customer, vendor, admin apps",
    categories: ["web", "mobile"],
    name: "Multi-Vendor E-Commerce Platform",
    description:
      "A complete marketplace with separate apps for customers, vendors and admins, all running on one Node.js backend.",
    features: [
      "Customer app with categories, banners, product details, reviews and ratings, cart, favorites, checkout, shipping address and order history",
      "Vendor app with product upload and Cloudinary image hosting, order management and an earnings dashboard",
      "Admin web panel to manage categories, subcategories, banners, buyers, vendors, products and orders",
      "Node.js and Express REST API with JWT authentication, bcrypt password hashing and MongoDB models for users, vendors, products, categories, orders and reviews",
    ],
    stack: [
      "Flutter",
      "Riverpod",
      "Flutter Web",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    links: [
      { label: "Customer App", href: "https://github.com/ridamalik26/shop_app" },
      { label: "Vendor App", href: "https://github.com/ridamalik26/vendor_app" },
      { label: "Admin Panel", href: "https://github.com/ridamalik26/shop_web" },
      { label: "Backend", href: "https://github.com/ridamalik26/Shop_backend" },
    ],
  },
  {
    slug: "compass",
    short: "AI coach for savings goals",
    categories: ["ai", "web"],
    name: "Compass",
    tagline: "AI Financial Goals Tracker",
    description:
      "A savings app with an AI coach that turns your real bank activity into personal savings tips.",
    features: [
      "AI savings coach with personalized tips using Groq and Gemini",
      "Plaid bank transaction sync",
      "6-month, 1-year and 5-year goals",
      "Pace indicators (Ahead, On Track, Behind)",
      "Supabase Auth with Google sign-in",
      "Deployed on Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Plaid", "Groq", "Gemini"],
    links: [
      { label: "GitHub", href: "https://github.com/ridamalik26/compass" },
      { label: "Live Demo", href: "https://compass-phi-one.vercel.app" },
    ],
  },
  {
    slug: "profolio",
    short: "AI job matching and tracking",
    categories: ["ai", "mobile"],
    name: "ProFolio",
    tagline: "AI Career Companion",
    description:
      "A mobile app that matches you with jobs using AI and keeps your whole job search organized.",
    features: [
      "Gemini-powered job matching with cached recommendations",
      "Application tracker with Pending, Applied, Accepted and Rejected statuses",
      "Resume and profile management with private signed URLs on Supabase Storage",
      "Local device notifications",
    ],
    stack: ["Flutter", "Riverpod", "Supabase", "Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/ridamalik26/profolio" }],
  },
  {
    slug: "answerdesk",
    short: "Client portal synced to HubSpot",
    categories: ["web", "ai"],
    name: "AnswerDesk",
    description:
      "A client portal for an answering service business, synced with HubSpot CRM.",
    features: [
      "Role-based client and admin access",
      "Automatic HubSpot CRM sync when a client is created",
      "Call logs with filters, search and CSV export",
      "Minute usage tracking with overage risk alerts",
      "Billing history",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "HubSpot API", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://answerdesk-portal.vercel.app" },
    ],
  },
  {
    slug: "mediremind",
    short: "Never miss a medicine dose",
    categories: ["mobile"],
    name: "MediRemind",
    description:
      "A medicine reminder app that makes sure you never miss a dose.",
    features: [
      "JWT login and registration with bcrypt",
      "Add medicines with dosage, category, frequency and custom times",
      "Daily dashboard with Taken, Pending and Missed status",
      "Mark doses as taken",
      "In-app and push notifications on Android and iOS",
      "7-day dose history",
    ],
    stack: [
      "Flutter",
      "Provider",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "JWT",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ridamalik26/MediRemind" },
    ],
  },
  {
    slug: "kharcha",
    short: "Offline expense tracker",
    categories: ["mobile"],
    name: "Kharcha",
    description:
      "An offline expense tracker with a clean fintech-style design.",
    features: [
      "Local login and registration",
      "Real-time balance dashboard",
      "Categorized expenses",
      "Income tracking",
      "Full transaction history",
      "Fully offline with SQLite",
    ],
    stack: ["Flutter", "Provider", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/ridamalik26/kharcha" }],
  },
  {
    slug: "taskflow",
    short: "Clean task manager",
    categories: ["mobile"],
    name: "TaskFlow",
    description: "A simple, clean task manager to organize your day.",
    features: [
      "Login and registration with validation and remember me",
      "Dashboard with completed and pending counts",
      "Search and categories",
      "Create, edit, delete and complete tasks",
      "Low, Medium and High priorities",
      "Due date picker",
      "Local storage with Hive",
    ],
    stack: ["Flutter", "Riverpod", "Go Router", "Hive"],
    links: [
      { label: "GitHub", href: "https://github.com/ridamalik26/taskflow" },
    ],
  },
];

export const doing = {
  title: "What I'm Doing",
  cards: [
    {
      icon: "workflow",
      color: "mint",
      title: "AI Automation",
      text: "n8n, GoHighLevel and LLM workflows",
    },
    {
      icon: "code",
      color: "pink",
      title: "Full-Stack Web",
      text: "Next.js, Flask and Supabase",
    },
    {
      icon: "smartphone",
      color: "peach",
      title: "Mobile Apps",
      text: "Flutter and Firebase",
    },
    {
      icon: "plug",
      color: "lavender",
      title: "CRM and API Integrations",
      text: "HubSpot, GHL and webhooks",
    },
  ] as { icon: string; color: Accent; title: string; text: string }[],
};

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Automation" },
  { id: "web", label: "Full-Stack Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ml", label: "ML" },
];

export type Level = "Expert" | "Advanced" | "Intermediate";

// Bar fill for each level label.
export const levelPercent: Record<Level, number> = {
  Expert: 95,
  Advanced: 80,
  Intermediate: 60,
};

export type SkillGroup = {
  name: string;
  icon: string;
  color: Accent;
  span?: 2;
  skills: { name: string; level: Level }[];
  rows?: { label: string; items: string[] }[];
};

export const skills = {
  title: "Skills",
  groups: [
    {
      name: "Backend",
      icon: "server",
      color: "mint",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Flask", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
      ],
    },
    {
      name: "AI & Automation",
      icon: "bot",
      color: "lavender",
      skills: [
        { name: "n8n", level: "Expert" },
        { name: "GoHighLevel", level: "Expert" },
        { name: "LLM integration (Groq, Gemini, LLaMA)", level: "Advanced" },
        { name: "Prompt engineering", level: "Advanced" },
        { name: "HubSpot API", level: "Advanced" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Webhooks", level: "Advanced" },
      ],
    },
    {
      name: "Frontend",
      icon: "code",
      color: "pink",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "React", level: "Intermediate" },
      ],
    },
    {
      name: "Mobile",
      icon: "smartphone",
      color: "peach",
      skills: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Expert" },
        { name: "Riverpod", level: "Advanced" },
        { name: "Provider", level: "Advanced" },
        { name: "Hive", level: "Intermediate" },
        { name: "Go Router", level: "Intermediate" },
        { name: "SQLite", level: "Advanced" },
      ],
    },
    {
      name: "Data & ML",
      icon: "chart",
      color: "mint",
      span: 2,
      skills: [
        { name: "scikit-learn", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Supabase", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Machine learning models", level: "Advanced" },
      ],
      rows: [
        {
          label: "Supervised Learning",
          items: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forest",
            "Gradient Boosting",
            "Support Vector Machines",
            "K-Nearest Neighbors",
          ],
        },
        {
          label: "Unsupervised Learning",
          items: ["K-Means Clustering", "Hierarchical Clustering", "PCA"],
        },
      ],
    },
  ] as SkillGroup[],
  certificationsTitle: "Certifications",
  certifications: [
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      platform: "Coursera",
    },
    {
      title: "Flutter and Dart: Developing iOS, Android and Mobile Apps",
      issuer: "IBM",
      platform: "Coursera",
    },
    {
      title: "Learn TypeScript",
      issuer: "Scrimba",
      platform: "Coursera",
    },
  ],
  toolsTitle: "Tools I Use",
  tools: [
    "VS Code",
    "Claude Code",
    "OpenCode",
    "n8n",
    "GoHighLevel",
    "Supabase",
    "Vercel",
    "GitHub",
  ],
};

export const contact = {
  heading: "Let's build something",
  form: {
    title: "Send a message",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell me about your project or role",
    submit: "Send Message",
    sending: "Sending",
    success: "Thanks! Your message was sent. I will get back to you soon.",
    error:
      "Something went wrong and your message was not sent. Please try again or email me directly.",
    notConfigured:
      "The contact form is not set up yet. Please email me directly.",
  },
  cards: [
    {
      id: "email",
      label: "Email",
      value: "malikrida406@gmail.com",
      href: "mailto:malikrida406@gmail.com",
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "rida-malik-softwareengineer",
      href: "https://linkedin.com/in/rida-malik-softwareengineer",
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: "ridamalik26",
      href: "https://github.com/ridamalik26",
      external: true,
    },
  ],
};

export const footer = {
  text: "© 2026 Rida Malik. Crafted with intent.",
};
