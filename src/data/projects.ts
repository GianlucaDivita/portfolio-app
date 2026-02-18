import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ocra",
    title: "OCRA",
    subtitle: "Deep Work Productivity App",
    description:
      "A canvas-based productivity app with spring physics, immersive focus mode, habits/goals, and cloud sync.",
    category: "Full-Stack Web App",
    featured: true,
    thumbnail: "/images/projects/ocra-thumb.png",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Canvas API",
      "Supabase",
      "Web Audio API",
      "Playwright",
    ],
    liveUrl: "https://ocrafocus.vercel.app",
    repoUrl: "https://github.com/GianlucaDivita/ocra-app",
    challenge:
      "Most productivity apps feel like spreadsheets — rigid, lifeless, and designed around task lists rather than focused work. I wanted to build something that felt alive and intentional, where the interface itself encouraged deep concentration.",
    approach:
      "Built a custom canvas rendering engine with spring physics for organic bubble movement at 60fps. Each task is a floating bubble you hold to start — a 1.5-second deliberate action that signals commitment to focus. The immersive focus mode fills the screen with color, hides all distractions, and uses Web Audio API for ambient soundscapes. State management through Zustand with offline-first localStorage, syncing to Supabase when authenticated.",
    features: [
      "60fps canvas-based bubble rendering with custom spring physics (lava-lamp movement, grid snapping, orbital clustering)",
      "Hold-to-start focus mode with immersive full-screen experience and background timer that survives tab switches",
      "Habits and goals system with streak tracking, grace days, rest days, and timelocked scheduling",
      "Supabase authentication (email + Google OAuth) with bi-directional cloud sync and guest mode",
      "Multiple rooms with drag-to-reorder, task clustering, right-click context menus, and voice input",
      "34 passing Playwright tests across auth flows, timer state, history persistence, and room management",
    ],
    outcome:
      "Shipped a production-ready app with a calm, meditative aesthetic that proves complex interactive UIs can be built entirely in React + Canvas. The spring physics system, sync architecture, and test suite demonstrate full-stack depth.",
    metrics: [
      { label: "Playwright Tests", value: "34" },
      { label: "Frame Rate", value: "60fps" },
      { label: "Auth Modes", value: "3" },
      { label: "Keyboard Shortcuts", value: "12" },
    ],
  },
  {
    slug: "mortgagemate",
    title: "MortgageMate",
    subtitle: "Mortgage Education Companion",
    description:
      "An interactive learning platform with 22 financial calculators, quiz engine, spaced repetition flashcards, and analytics dashboard.",
    category: "Full-Stack Web App / EdTech",
    featured: true,
    thumbnail: "/images/projects/mortgagemate-thumb.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "IndexedDB",
      "Vite",
    ],
    liveUrl: "https://mortgagemate-app.vercel.app",
    passcode: "221801090201",
    challenge:
      "People preparing for their Canadian mortgage licence exam need interactive practice tools, not more static PDFs. Existing resources are expensive and passive. I wanted to build a free, interactive companion that makes financial math visual and engaging.",
    approach:
      "Architected a modular feature system: Tools Engine (calculators), Study Engine (concepts, flashcards, quizzes), and Gamification Layer (streaks, achievements, mastery tracking). All financial calculations use Canadian semi-annual compounding with a pure, tested math library. IndexedDB handles all persistence through an abstracted storage service designed for future Supabase migration. Code splitting via React.lazy ensures sub-120KB initial bundles.",
    features: [
      "22 interactive financial calculators covering LTV, amortization, affordability, stress testing, penalty break-even analysis, and more",
      "Quiz engine with 161 questions across 8 categories, including calculation-based questions with fuzzy answer matching",
      "Spaced repetition flashcard system using 5-box Leitner algorithm with 128 flashcards across 8 categories",
      "107 mortgage concepts with markdown rendering, read tracking, and cross-linking to related calculators",
      "8 interactive visual study guides with 10 section renderer types (flow diagrams, hierarchies, timelines, formulas)",
      "Analytics dashboard with exam readiness scoring, category breakdowns, and study activity heatmaps",
    ],
    outcome:
      "Built the most comprehensive free mortgage education tool available. The architecture demonstrates complex state management, data visualization at scale, and the ability to ship a massive feature set (22 tools, 161 questions, 107 concepts) with clean code organization.",
    metrics: [
      { label: "Financial Calculators", value: "22" },
      { label: "Quiz Questions", value: "161" },
      { label: "Study Concepts", value: "107" },
      { label: "Flashcards", value: "128" },
    ],
  },
  {
    slug: "metrohomes",
    title: "MetroHomes",
    subtitle: "Construction Company Website",
    description:
      "A full website redesign for a Toronto design-build firm — 12+ pages, complete design system, and SEO optimization.",
    category: "Client Website / Design + Development",
    featured: true,
    thumbnail: "/images/projects/metrohomes-thumb.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Google Fonts",
    ],
    liveUrl: "https://metrohomesdesignbuild.ca",
    challenge:
      "MetroHomes had an outdated Wix site with broken pages, wrong contact info, and an inconsistent brand identity. They needed a professional web presence that matched the quality of their construction work and generated leads.",
    approach:
      "Designed a complete brand-aligned design system from scratch: 12-color grayscale palette, Cormorant Garamond + Montserrat typography pairing, and detailed specs for every component. Built 12+ pages including 6 dedicated service landing pages, a portfolio gallery with project detail pages, and a contact system with a quote request form. Every page was designed at both desktop (1440px) and mobile (375px) viewports.",
    features: [
      "Complete design system: 12-color grayscale palette, 2-font pairing, component specs for buttons, cards, navigation, FAQ accordions",
      "6 dedicated service landing pages (Garden Suites, Multiplex, New Build, Renovations, Property Management, Real Estate)",
      "Project portfolio gallery with 6 detailed case study pages including photo galleries",
      "Responsive across all breakpoints — desktop, tablet, mobile — with distinct layout adaptations",
      "SEO-optimized with proper meta tags, heading hierarchy, and semantic HTML",
      "Contact system with quote request form and subcontractor application form",
    ],
    outcome:
      "Replaced a broken legacy site with a professional, brand-aligned web presence. This project demonstrates end-to-end design and development capability — from brand system design through responsive implementation to deployment.",
    metrics: [
      { label: "Pages Built", value: "18+" },
      { label: "Service Pages", value: "6" },
      { label: "Design System Colors", value: "12" },
      { label: "Viewports Designed", value: "2" },
    ],
  },
  {
    slug: "budgetlens",
    title: "BudgetLens",
    subtitle: "Personal Budget Tracker",
    description:
      "A privacy-first personal finance tracker with glassmorphism UI, interactive charts, and pattern detection.",
    category: "Full-Stack Web App / FinTech",
    featured: true,
    thumbnail: "/images/projects/budgetlens-thumb.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "IndexedDB",
    ],
    liveUrl: "https://budgetlens-app.vercel.app",
    challenge:
      "Personal finance apps either require giving up your data to a third party or are too basic to be useful. I wanted to build something beautiful and insightful that keeps all data on-device — zero accounts, zero servers, full privacy.",
    approach:
      "Designed a glassmorphism UI system with translucent layers, blur effects, and gradient mesh backgrounds that adapts seamlessly between light and dark themes. Built a pattern detection engine that surfaces smart insights from transaction history without any AI — pure algorithmic analysis. All data persists in IndexedDB with full CSV/JSON import and export.",
    features: [
      "Full glassmorphism design system with light/dark themes, gradient mesh backgrounds, and animated transitions",
      "Interactive dashboard with spending pie charts, income vs expense bars, trend lines, and budget progress rings",
      "Deep analytics: category breakdowns, monthly comparisons, spending heatmaps, top merchants, and smart insights",
      "Budget limit system with visual progress tracking and overspend alerts",
      "Savings goals with visual progress and projected completion dates",
      "CSV and JSON import/export for data portability — fully private, no backend",
    ],
    outcome:
      "A showcase of UI design capability — the glassmorphism system proves I can build distinctive, polished interfaces, not just functional ones. Also demonstrates financial calculation logic and data visualization at depth.",
    metrics: [
      { label: "Chart Types", value: "6" },
      { label: "Analytics Views", value: "5" },
      { label: "Theme Modes", value: "2" },
      { label: "Backend Servers", value: "0" },
    ],
  },
];
