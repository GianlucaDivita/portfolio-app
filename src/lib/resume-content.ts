import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ResumeProject {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface ResumeEducation {
  degree: string;
  field: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface ResumeSkillGroup {
  label: string;
  skills: string[];
}

export interface ResumeCertification {
  name: string;
  issuer: string;
}

export interface ResumeContent {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  summary: string;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  certifications: ResumeCertification[];
}

export function getResumeContent(): ResumeContent {
  return {
    name: profile.name,
    title: profile.title,
    location: profile.location,
    email: profile.email,
    phone: profile.phone,
    linkedIn: "linkedin.com/in/gianlucadivita",
    github: "github.com/GianlucaDivita",
    portfolio: "gianlucadivita.dev",
    summary:
      "Full stack developer in Toronto who ships complete products from architecture to deployment. Built a 60fps canvas rendering engine with spring physics, a 35 route Next.js production site for a real client, an EdTech platform with 22 financial calculators, and a glassmorphism finance tracker. Background in design, marketing, and business strategy means I think about conversion, accessibility, and user experience as naturally as component architecture.",
    experience: curateExperience(),
    projects: curateProjects(),
    education: curateEducation(),
    skills: curateSkills(),
    certifications: certifications.map((c) => ({
      name: c.name,
      issuer: c.issuer,
    })),
  };
}

// Resume-specific concise highlights (portfolio versions are full paragraphs)
const RESUME_HIGHLIGHTS: Record<string, string[]> = {
  district: [
    "Sold out debut event (1,000+ tickets), generating $15K+ revenue at 5.8x ROAS across Meta, TikTok, and YouTube campaigns.",
    "Built GenAI content pipeline (Midjourney, Runway, Kling) that drove 200K+ organic impressions.",
  ],
  metrohomes: [
    "Built 35 route Next.js production site solo: service pages, case studies, dual contact forms, Resend email, Google Places autocomplete, GA4.",
    "Scored 96 Accessibility / 100 Best Practices / 92 SEO on Lighthouse. Full ARIA, keyboard nav, WCAG contrast.",
    "Reduced CPL 40% on $20K/mo ad budget; scaled social 1K to 20K+ followers; built Looker CAC/LTV dashboards.",
  ],
  designedit: [
    "Drove +130% YoY traffic and +28% conversion lift through structured A/B testing on creative assets and landing pages.",
    "Built Figma component library with design tokens adopted by engineering; contributed to 20% retention improvement.",
  ],
};

function curateExperience(): ResumeExperience[] {
  return experience.map((exp) => ({
    role: exp.role,
    company: exp.company,
    location: exp.location,
    period: `${exp.period.start} – ${exp.period.end}`,
    description: exp.description,
    highlights: RESUME_HIGHLIGHTS[exp.id] ?? exp.highlights.slice(0, 2),
  }));
}

function curateProjects(): ResumeProject[] {
  // All 4 featured projects
  const slugs = ["ocra", "mortgagemate", "metrohomes", "budgetlens"];
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      subtitle: p!.subtitle,
      description: p!.description,
      techStack: p!.techStack.slice(0, 6),
      metrics: p!.metrics.slice(0, 2),
    }));
}

function curateEducation(): ResumeEducation[] {
  return education.map((edu) => ({
    degree: edu.degree,
    field: edu.field,
    institution: edu.institution,
    period: `${edu.period.start} – ${edu.period.end}`,
    highlights: edu.highlights.slice(0, 2),
  }));
}

function curateSkills(): ResumeSkillGroup[] {
  const featured = skills.filter((s) => s.featured);

  const groups: { label: string; categories: string[] }[] = [
    {
      label: "Languages & Frameworks",
      categories: ["languages", "frameworks"],
    },
    {
      label: "Tools & Infrastructure",
      categories: ["infrastructure", "data-analytics"],
    },
    { label: "Design", categories: ["design"] },
    {
      label: "Marketing & Analytics",
      categories: ["marketing", "ai-automation"],
    },
  ];

  return groups.map((group) => ({
    label: group.label,
    skills: featured
      .filter((s) => group.categories.includes(s.category))
      .map((s) => s.name),
  }));
}
