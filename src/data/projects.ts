import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ocra",
    title: "OCRA",
    subtitle: "Deep Work Productivity App",
    description:
      "A canvas based productivity app with spring physics, immersive focus mode, habits/goals, and cloud sync.",
    category: "Full-Stack Web App",
    featured: true,
    thumbnail: "/images/projects/ocra-thumb.png",
    screenshots: [
      { src: "/images/projects/ocra-thumb.png", alt: "OCRA canvas with floating task bubbles and spring physics" },
      { src: "/images/projects/ocra-organize.png", alt: "OCRA organization mode with tasks sorted by duration in a grid layout" },
      { src: "/images/projects/ocra-focus.png", alt: "OCRA immersive focus session with full screen color and countdown timer" },
    ],
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
      "Most productivity apps feel like spreadsheets: rigid, lifeless, and designed around task lists rather than focused work. I wanted to build something that felt alive and intentional, where the interface itself encouraged deep concentration.",
    approach:
      "Built a custom canvas rendering engine with spring physics for organic bubble movement at 60fps. Each task is a floating bubble you hold to start, a 1.5 second deliberate action that signals commitment to focus. The immersive focus mode fills the screen with color, hides all distractions, and uses Web Audio API for ambient soundscapes. State management through Zustand with offline first localStorage, syncing to Supabase when authenticated.",
    features: [
      "60fps canvas based bubble rendering with custom spring physics (lava lamp movement, grid snapping, orbital clustering)",
      "Hold to start focus mode with immersive full screen experience and background timer that survives tab switches",
      "Habits and goals system with streak tracking, grace days, rest days, and timelocked scheduling",
      "Supabase authentication (email + Google OAuth) with bidirectional cloud sync and guest mode",
      "Multiple rooms with drag to reorder, task clustering, right click context menus, and voice input",
      "34 passing Playwright tests across auth flows, timer state, history persistence, and room management",
    ],
    outcome:
      "Shipped a production ready app with a calm, meditative aesthetic that proves complex interactive UIs can be built entirely in React + Canvas. The spring physics system, sync architecture, and test suite demonstrate full stack depth.",
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
    screenshots: [
      { src: "/images/projects/mortgagemate-thumb.png", alt: "MortgageMate study hub dashboard with mastery tracking and quiz scores" },
      { src: "/images/projects/mortgagemate-calculator.png", alt: "MortgageMate amortization schedule calculator with cumulative breakdown chart" },
      { src: "/images/projects/mortgagemate-exam.png", alt: "MortgageMate quiz mode with question, answer feedback, and progress tracking" },
      { src: "/images/projects/mortgagemate-dark.png", alt: "MortgageMate dark theme dashboard with radar chart and study streaks" },
    ],
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
      "Architected a modular feature system: Tools Engine (calculators), Study Engine (concepts, flashcards, quizzes), and Gamification Layer (streaks, achievements, mastery tracking). All financial calculations use Canadian semi annual compounding with a pure, tested math library. IndexedDB handles all persistence through an abstracted storage service designed for future Supabase migration. Code splitting via React.lazy ensures sub 120KB initial bundles.",
    features: [
      "22 interactive financial calculators covering LTV, amortization, affordability, stress testing, penalty break even analysis, and more",
      "Quiz engine with 161 questions across 8 categories, including calculation based questions with fuzzy answer matching",
      "Spaced repetition flashcard system using 5 box Leitner algorithm with 128 flashcards across 8 categories",
      "107 mortgage concepts with markdown rendering, read tracking, and cross linking to related calculators",
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
      "A production website for a Toronto design build firm with 35 routes, 35 components, dual mode contact forms with address autocomplete, transactional email, blog CMS, and a 12 color design system. Built solo to replace a legacy Wix site and serve as the company's primary lead generation engine.",
    category: "Client Website / Full-Stack",
    featured: true,
    thumbnail: "/images/projects/metrohomes-thumb.png",
    screenshots: [
      { src: "/images/projects/metrohomes-thumb.png", alt: "MetroHomes homepage hero with Where Vision Takes Form headline" },
      { src: "/images/projects/metrohomes-services.png", alt: "MetroHomes services page with Design, New Build, and Renovations cards" },
      { src: "/images/projects/metrohomes-contact.png", alt: "MetroHomes contact form with project type, budget, and timeline fields" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "react-hook-form",
      "Zod",
      "Framer Motion",
      "Resend",
      "Google Places API",
      "Vercel Analytics",
      "GA4",
    ],
    liveUrl: "https://metrohomesdesignbuild.ca",
    challenge:
      "MetroHomes had a broken Wix site with wrong contact info, inconsistent branding, and zero lead attribution. They needed a professional web presence that matched the quality of their construction work. One that could generate leads, showcase projects, and scale with the business.",
    approach:
      "Designed a complete brand aligned design system from scratch: 12 color grayscale palette, Cormorant Garamond + Montserrat typography pairing, and specs for every component. Built 35 routes in Next.js 16 (App Router) including 7 service landing pages, 6 project case studies with photo galleries, a 6 post blog with SEO optimized content, and dual mode contact forms (Design Build and Real Estate) with Google Places address autocomplete and file upload. Implemented Resend transactional email with branded HTML templates, GA4 analytics gated by cookie consent, and a privacy policy. Every page built at both desktop (1440px) and mobile (375px) viewports with full accessibility.",
    features: [
      "35 routes with 35 reusable components including 7 service landing pages, 6 project case studies, 6 blog posts, and dedicated Contact, About, Team, and Services hub pages",
      "Dual mode contact forms: Design Build (garden suites, multiplex, new build, renovations) and Real Estate (buying, selling, investing) with context aware field logic",
      "Google Places address autocomplete with automatic postal code extraction, file upload with drag and drop, and Resend transactional email with branded HTML templates",
      "Full SEO implementation: per page metadata, LocalBusiness JSON-LD schema, sitemap.xml, robots.txt, and Google Search Console verification",
      "12 color grayscale design system with Cormorant Garamond + Montserrat typography, scroll triggered Framer Motion animations, and WCAG compliant contrast ratios",
      "Cookie consented GA4 analytics, Vercel Analytics, keyboard navigable menus with focus traps, and ARIA roles across all interactive elements",
    ],
    outcome:
      "Replaced a broken legacy Wix site with a 35 route production application that generates real leads. This project demonstrates end to end capability: brand system design, full stack Next.js development, API integrations, transactional email, accessibility, SEO, and analytics, all built and deployed solo for a real client with real business requirements.",
    metrics: [
      { label: "Production Routes", value: "35" },
      { label: "Reusable Components", value: "35" },
      { label: "Accessibility Score", value: "96" },
      { label: "Best Practices", value: "100" },
    ],
  },
  {
    slug: "budgetlens",
    title: "BudgetLens",
    subtitle: "Personal Budget Tracker",
    description:
      "A privacy first personal finance tracker with glassmorphism UI, interactive charts, and pattern detection.",
    category: "Full-Stack Web App / FinTech",
    featured: true,
    thumbnail: "/images/projects/budgetlens-thumb.png",
    screenshots: [
      { src: "/images/projects/budgetlens-thumb.png", alt: "BudgetLens dashboard with spending chart, financial health score, and budget progress" },
      { src: "/images/projects/budgetlens-goals.png", alt: "BudgetLens savings goals page with progress bars for Vacation Fund, New Laptop, and more" },
      { src: "/images/projects/budgetlens-transactions.png", alt: "BudgetLens transaction list with search, category filters, and color coded entries" },
      { src: "/images/projects/budgetlens-dark.png", alt: "BudgetLens dark mode dashboard with spending donut chart and financial health widgets" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "IndexedDB",
    ],
    liveUrl: "https://budgetlens-app.vercel.app",
    challenge:
      "Personal finance apps either require giving up your data to a third party or are too basic to be useful. I wanted to build something beautiful and insightful that keeps all data on device. Zero accounts, zero servers, full privacy.",
    approach:
      "Designed a glassmorphism UI system with translucent layers, blur effects, and gradient mesh backgrounds that adapts seamlessly between light and dark themes. Built a pattern detection engine that surfaces smart insights from transaction history without any AI, using pure algorithmic analysis. All data persists in IndexedDB with full CSV/JSON import and export.",
    features: [
      "Full glassmorphism design system with light/dark themes, gradient mesh backgrounds, and animated transitions",
      "Interactive dashboard with spending pie charts, income vs expense bars, trend lines, and budget progress rings",
      "Deep analytics: category breakdowns, monthly comparisons, spending heatmaps, top merchants, and smart insights",
      "Budget limit system with visual progress tracking and overspend alerts",
      "Savings goals with visual progress and projected completion dates",
      "CSV and JSON import/export for data portability, fully private with no backend",
    ],
    outcome:
      "A showcase of UI design capability. The glassmorphism system proves I can build distinctive, polished interfaces, not just functional ones. Also demonstrates financial calculation logic and data visualization at depth.",
    metrics: [
      { label: "Chart Types", value: "6" },
      { label: "Analytics Views", value: "5" },
      { label: "Theme Modes", value: "2" },
      { label: "Backend Servers", value: "0" },
    ],
  },
];
