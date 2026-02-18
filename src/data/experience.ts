import { Experience, Education } from "@/types";

export const experience: Experience[] = [
  {
    id: "district",
    company: "District Entertainment",
    role: "Founder & Creative Director",
    type: "founder",
    period: { start: "June 2025", end: "Present" },
    location: "Toronto, ON",
    description:
      "Founded and operate an electronic music brand covering GenAI content production, paid acquisition, event logistics, and P&L ownership. Sold out debut event (1,000+ tickets) and built a repeatable creative pipeline that scales without scaling headcount.",
    highlights: [
      "Generated $15,000+ in ticket revenue on debut event, achieving 5.8x ROAS on a self funded launch budget through structured Meta, TikTok, and YouTube campaigns with rigorous A/B testing on hooks, hold rate, and platform native formatting.",
      "Engineered a GenAI content pipeline (Midjourney, Runway, Kling) with standardized prompt libraries, QA SOPs, and asset versioning, producing broadcast quality creative at a fraction of traditional agency cost.",
      "Drove 200K+ organic cross platform impressions through data informed creative iteration: structured A/B tests on hooks, hold rate optimization, and platform native formatting across Meta, TikTok, and YouTube.",
      "Built and led a 4 person creative pod with weekly reviews, workback schedules, and a Notion based production system, delivering every asset on time across a compressed launch timeline.",
    ],
    tags: [
      "GenAI Pipeline",
      "Meta Ads",
      "TikTok Ads",
      "YouTube",
      "A/B Testing",
      "Creative Direction",
      "P&L Ownership",
      "Content Strategy",
    ],
    discipline: "hybrid",
  },
  {
    id: "metrohomes",
    company: "Metrohomes Design Build",
    role: "Lead Developer & Growth Strategist",
    type: "contract",
    period: { start: "January 2023", end: "Present" },
    location: "Toronto, ON",
    description:
      "Sole developer and growth strategist for a Toronto construction firm. Architected and shipped a 35 route Next.js production website with transactional email, address autocomplete, analytics, and a blog CMS, replacing a legacy Wix site and becoming the company's primary lead generation engine.",
    highlights: [
      "Architected and built the entire website solo: 35 routes, 35 components, 7 service landing pages, 6 project case studies, 6 blog posts, dual mode contact forms, and a subcontractor application system. All built in Next.js 16 (App Router) with TypeScript and Tailwind CSS v4.",
      "Implemented Resend transactional email with branded HTML templates, Google Places address autocomplete with postal code extraction, file upload with drag and drop, and cookie consented GA4 + Vercel Analytics.",
      "Achieved Lighthouse scores of 96 Accessibility / 100 Best Practices / 92 SEO. Built full keyboard navigation, ARIA roles, focus traps, and WCAG compliant color contrast across all routes.",
      "Owned multi channel growth ($20K/mo budget): reduced CPL 40% through structured A/B testing, scaled social from 1K to 20K+ followers, and built Looker dashboards for CAC/LTV attribution with 75% improved accuracy.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "react-hook-form",
      "Zod",
      "Framer Motion",
      "Resend",
      "Google Places API",
      "Vercel",
      "GA4",
      "SEO",
      "Design Systems",
    ],
    discipline: "development",
  },
  {
    id: "designedit",
    company: "DesignedIT",
    role: "Design Engineer & CRO Lead",
    type: "fulltime",
    period: { start: "August 2020", end: "January 2023" },
    location: "Toronto, ON",
    description:
      "Owned the intersection of design and engineering at a digital product company. Built component libraries, ran conversion experiments, and collaborated directly with frontend engineers on UI architecture. Drove +130% YoY traffic growth through systematic A/B testing and UX optimization.",
    highlights: [
      "Drove +130% YoY traffic growth and +28% conversion rate lift by building and operating a structured A/B testing framework across creative assets and landing pages, with 25% CTR improvement on core acquisition funnels.",
      "Built a modular Figma component library with tokenized design tokens, variant systems, and a naming and handoff SOP adopted by engineering, reducing design to code rework cycles and accelerating production velocity.",
      "Collaborated directly with product and UI engineering on component architecture, naming conventions, and handoff workflows. Contributed to a 20% user retention improvement through measurable UX updates.",
      "Authored experiment readouts and stakeholder decks combining Looker data and Figma prototypes, translating test results into prioritized creative briefs and a structured testing backlog.",
    ],
    tags: [
      "Design Systems",
      "Figma",
      "Component Libraries",
      "A/B Testing",
      "CRO",
      "UX Engineering",
      "Looker",
      "Design Tokens",
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
      "Built full stack dApps with MERN stack (MongoDB, Express, React, Node.js) and Solidity smart contracts. Integrated MetaMask and Web3 wallets for on chain transactions.",
      "Designed and consumed REST and GraphQL APIs with JWT authentication; deployed containerized applications with Docker Compose to cloud infrastructure.",
      "Implemented CI/CD pipelines with automated linting and testing; maintained clean Git workflows with feature branching and code review practices.",
      "Worked in agile sprints with cross functional teams; authored API specs, endpoint documentation, and deployment runbooks.",
    ],
  },
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Graphic Communication Management",
    institution: "Toronto Metropolitan University",
    location: "Toronto, ON",
    period: { start: "September 2020", end: "September 2022" },
    highlights: [
      "Produced brand identity, packaging, and marketing assets at production quality using Adobe Creative Cloud (Photoshop, Illustrator, InDesign, Premiere Pro).",
      "Planned and executed B2B and B2C campaigns end to end, covering positioning, messaging, channel mix, budgets, and performance dashboards with clear KPIs.",
      "Led a capstone product launch: developed positioning strategy, creative system, paid and owned media rollout, and measurement framework. Presented to industry panel.",
    ],
  },
];
