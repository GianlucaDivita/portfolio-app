export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  availableForWork: boolean;
  resumeUrl: string;
  socials: Social[];
}

export interface Social {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "contract" | "fulltime" | "founder";
  period: { start: string; end: string | "Present" };
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  discipline: "development" | "marketing" | "hybrid";
}

export interface Skill {
  name: string;
  category: SkillCategory;
  featured: boolean;
}

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "infrastructure"
  | "data-analytics"
  | "design"
  | "ai-automation"
  | "marketing";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  featured: boolean;
  thumbnail: string;
  techStack: string[];
  liveUrl: string;
  repoUrl?: string;
  passcode?: string;
  challenge: string;
  approach: string;
  features: string[];
  outcome: string;
  metrics: ProjectMetric[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: "marketing" | "analytics" | "development";
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: { start: string; end: string };
  highlights: string[];
}
