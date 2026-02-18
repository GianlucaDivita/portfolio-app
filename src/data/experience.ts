import { Experience, Education } from "@/types";

export const experience: Experience[] = [
  {
    id: "district",
    company: "District Entertainment",
    role: "Founder",
    type: "founder",
    period: { start: "June 2025", end: "Present" },
    location: "Toronto, ON",
    description:
      "Electronic music brand combining event production with a full-stack creative and marketing operation.",
    highlights: [
      "Built a GenAI content pipeline using Midjourney, Runway, and Kling — standardized prompt libraries and QA SOPs to maintain creative consistency at scale.",
      "Directed paid and organic campaigns across Meta, TikTok, and YouTube; iterated creatives with structured A/B tests to lift CTR and hold-rate, achieving 5.8x ROAS on launch budget.",
      "Sold out 1,000+ tickets and generated 200K+ cross-platform views on debut event.",
      "Led a small creative pod (design/video); instituted weekly reviews, workbacks, and asset versioning for on-time delivery.",
    ],
    tags: [
      "GenAI",
      "Content Pipeline",
      "Meta Ads",
      "TikTok",
      "YouTube",
      "A/B Testing",
      "Creative Direction",
    ],
    discipline: "hybrid",
  },
  {
    id: "metrohomes",
    company: "MetroHomes Group",
    role: "Marketing Director (Contract)",
    type: "contract",
    period: { start: "January 2023", end: "Present" },
    location: "Toronto, ON",
    description:
      "End-to-end marketing and web development for a Toronto-based design-build construction firm.",
    highlights: [
      "Designed and built a full responsive website (12+ pages) replacing a legacy Wix site — complete design system with custom typography, grayscale palette, and 6 service landing pages.",
      "Implemented GA4 + Google Tag Manager and built Looker dashboards; improved lead attribution accuracy by 75% and instrumented CAC/LTV reporting.",
      "Owned multi-channel growth (Meta/YouTube/Google Ads); managed $20K/mo budget with structured A/B tests, achieving 40% CPL reduction.",
      "Scaled social from 1K to 20K+ followers in 12 months; created brand-safe GenAI guidelines and trained design/copy teams on adoption.",
    ],
    tags: [
      "Web Development",
      "Design Systems",
      "GA4",
      "GTM",
      "Looker",
      "Meta Ads",
      "Google Ads",
      "A/B Testing",
    ],
    discipline: "hybrid",
  },
  {
    id: "designedit",
    company: "DesignEdit",
    role: "Creative Design Specialist",
    type: "fulltime",
    period: { start: "August 2020", end: "January 2023" },
    location: "Toronto, ON",
    description:
      "Performance creative and design systems for a digital product company.",
    highlights: [
      "Built A/B testing frameworks for creative and landing pages — drove +25% CTR, +28% conversion rate, contributing to +130% YoY traffic growth.",
      "Built a modular Figma component library with tokenized styles (components, variants, design tokens) and a file-naming/handoff SOP that reduced rework and accelerated production cycles.",
      "Collaborated with product and UI engineering on component naming, architecture, and handoff — drove a 20% retention improvement via measurable UX updates.",
      "Authored experiment readouts and stakeholder decks (Looker + Figma/Premiere mockups), turning results into prioritized creative briefs and a clear testing backlog.",
    ],
    tags: [
      "Design Systems",
      "Figma",
      "A/B Testing",
      "CRO",
      "Component Libraries",
      "UX",
      "Looker",
    ],
    discipline: "hybrid",
  },
];

export const education: Education[] = [
  {
    degree: "Postgraduate Certificate",
    field: "Blockchain Development",
    institution: "George Brown College",
    location: "Toronto, ON",
    period: { start: "September 2022", end: "September 2023" },
    highlights: [
      "Built full-stack dApps with MERN stack (MongoDB, Express, React, Node.js) and Solidity smart contracts; integrated Web3 wallets for on-chain reads/writes.",
      "Implemented REST and GraphQL APIs with authentication; versioned projects in Git with CI pipelines for linting and testing.",
      "Containerized applications with Docker/Compose and deployed to cloud infrastructure; documented endpoints and runbooks.",
      "Worked in agile sprints with design and product teams; authored API specs and handoff documentation.",
    ],
  },
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Graphic Communication Management",
    institution: "Toronto Metropolitan University",
    location: "Toronto, ON",
    period: { start: "September 2020", end: "September 2022" },
    highlights: [
      "Produced brand, packaging, and marketing assets in Adobe Creative Cloud (Photoshop, Illustrator, InDesign, Premiere Pro).",
      "Planned B2B and B2C campaigns end-to-end — messaging, channel mix, budgets — and built performance dashboards with clear KPIs.",
      "Led a capstone launch plan for a new product: positioning, creative system, paid/owned rollout, and measurement framework.",
    ],
  },
];
