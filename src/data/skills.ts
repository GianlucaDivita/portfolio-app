import { Skill, SkillCategory } from "@/types";

export const skillCategories: {
  key: SkillCategory;
  label: string;
}[] = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks & Libraries" },
  { key: "infrastructure", label: "Infrastructure & DevOps" },
  { key: "data-analytics", label: "Data & Analytics" },
  { key: "design", label: "Design" },
  { key: "ai-automation", label: "AI & Automation" },
  { key: "marketing", label: "Marketing & Growth" },
];

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "languages", featured: true },
  { name: "TypeScript", category: "languages", featured: true },
  { name: "HTML", category: "languages", featured: true },
  { name: "CSS", category: "languages", featured: true },
  { name: "Solidity", category: "languages", featured: false },
  { name: "SQL", category: "languages", featured: false },

  // Frameworks & Libraries
  { name: "React", category: "frameworks", featured: true },
  { name: "Next.js", category: "frameworks", featured: true },
  { name: "Node.js", category: "frameworks", featured: true },
  { name: "Express", category: "frameworks", featured: true },
  { name: "Tailwind CSS", category: "frameworks", featured: true },
  { name: "Zustand", category: "frameworks", featured: false },
  { name: "Recharts", category: "frameworks", featured: false },
  { name: "Motion", category: "frameworks", featured: false },
  { name: "Vite", category: "frameworks", featured: false },
  { name: "Playwright", category: "frameworks", featured: false },

  // Infrastructure & DevOps
  { name: "Supabase", category: "infrastructure", featured: true },
  { name: "Vercel", category: "infrastructure", featured: true },
  { name: "Docker", category: "infrastructure", featured: false },
  { name: "Git", category: "infrastructure", featured: true },
  { name: "CI/CD", category: "infrastructure", featured: false },
  { name: "MongoDB", category: "infrastructure", featured: false },
  { name: "IndexedDB", category: "infrastructure", featured: false },
  { name: "REST APIs", category: "infrastructure", featured: false },
  { name: "GraphQL", category: "infrastructure", featured: false },

  // Data & Analytics
  { name: "Canvas API", category: "data-analytics", featured: true },
  { name: "GA4", category: "data-analytics", featured: true },
  { name: "Google Tag Manager", category: "data-analytics", featured: true },
  { name: "Looker", category: "data-analytics", featured: false },
  { name: "Web Audio API", category: "data-analytics", featured: false },
  { name: "Web Speech API", category: "data-analytics", featured: false },

  // Design
  { name: "Figma", category: "design", featured: true },
  { name: "Photoshop", category: "design", featured: false },
  { name: "Illustrator", category: "design", featured: false },
  { name: "Premiere Pro", category: "design", featured: false },
  { name: "After Effects", category: "design", featured: false },
  { name: "Design Systems", category: "design", featured: true },

  // AI & Automation
  { name: "LLM APIs (GPT-4, Claude)", category: "ai-automation", featured: true },
  { name: "Prompt Engineering", category: "ai-automation", featured: true },
  { name: "Zapier", category: "ai-automation", featured: false },
  { name: "n8n", category: "ai-automation", featured: false },
  { name: "Make", category: "ai-automation", featured: false },
  { name: "Google Apps Script", category: "ai-automation", featured: false },

  // Marketing & Growth
  { name: "Meta Ads", category: "marketing", featured: true },
  { name: "Google Ads", category: "marketing", featured: false },
  { name: "A/B Testing", category: "marketing", featured: true },
  { name: "CRO", category: "marketing", featured: false },
  { name: "Email/CRM", category: "marketing", featured: false },
  { name: "CAC/LTV Analysis", category: "marketing", featured: false },
];
