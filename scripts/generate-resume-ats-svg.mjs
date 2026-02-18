/**
 * Generates an editable ATS-friendly SVG resume.
 * Run: node scripts/generate-resume-ats-svg.mjs
 * Output: Gianluca_Di_Vita_Resume_ATS.svg (in project root)
 */

import { writeFileSync } from "node:fs";

// ── Resume Content ──

const profile = {
  name: "Gianluca Di Vita",
  title: "Full-Stack Developer & Digital Strategist",
  location: "Toronto, ON",
  email: "gianlucajdivita@gmail.com",
  phone: "+1 (647) 772-5765",
  linkedIn: "linkedin.com/in/gianlucadivita",
  github: "github.com/GianlucaDivita",
  portfolio: "gianlucadivita.dev",
};

const summary =
  "Full stack developer in Toronto who ships complete products from architecture to deployment. Built a 60fps canvas rendering engine with spring physics, a 35 route Next.js production site for a real client, an EdTech platform with 22 financial calculators, and a glassmorphism finance tracker. Background in design, marketing, and business strategy means I think about conversion, accessibility, and user experience as naturally as component architecture.";

const experience = [
  {
    role: "Founder & Creative Director",
    company: "District Entertainment",
    location: "Toronto, ON",
    period: "June 2025 – Present",
    highlights: [
      "Sold out debut event (1,000+ tickets), generating $15K+ revenue at 5.8x ROAS across Meta, TikTok, and YouTube campaigns.",
      "Built GenAI content pipeline (Midjourney, Runway, Kling) that drove 200K+ organic impressions.",
    ],
  },
  {
    role: "Lead Developer & Growth Strategist",
    company: "Metrohomes Design Build",
    location: "Toronto, ON",
    period: "January 2023 – Present",
    highlights: [
      "Built 35 route Next.js production site solo: service pages, case studies, dual contact forms, Resend email, Google Places autocomplete, GA4.",
      "Scored 96 Accessibility / 100 Best Practices / 92 SEO on Lighthouse. Full ARIA, keyboard nav, WCAG contrast.",
      "Reduced CPL 40% on $20K/mo ad budget; scaled social 1K to 20K+ followers; built Looker CAC/LTV dashboards.",
    ],
  },
  {
    role: "Design Engineer & CRO Lead",
    company: "DesignedIT",
    location: "Toronto, ON",
    period: "August 2020 – January 2023",
    highlights: [
      "Drove +130% YoY traffic and +28% conversion lift through structured A/B testing on creative assets and landing pages.",
      "Built Figma component library with design tokens adopted by engineering; contributed to 20% retention improvement.",
    ],
  },
];

const projects = [
  {
    title: "OCRA — Deep Work Productivity App",
    tech: "React, TypeScript, Zustand, Canvas API, Supabase, Playwright",
    description: "A canvas based productivity app with spring physics, immersive focus mode, habits/goals, and cloud sync.",
  },
  {
    title: "MortgageMate — Mortgage Education Companion",
    tech: "React, TypeScript, Tailwind CSS, Recharts, IndexedDB, Vite",
    description: "An interactive learning platform with 22 financial calculators, quiz engine, spaced repetition flashcards, and analytics dashboard.",
  },
  {
    title: "Metrohomes Design Build — Construction Company Website",
    tech: "Next.js 16, TypeScript, Tailwind CSS v4, react-hook-form, Resend, GA4",
    description: "A production website for a Toronto design build firm with 35 routes, dual mode contact forms, transactional email, and a 12 color design system.",
  },
  {
    title: "BudgetLens — Personal Budget Tracker",
    tech: "React, TypeScript, Tailwind CSS, Recharts, IndexedDB",
    description: "A privacy first personal finance tracker with glassmorphism UI, interactive charts, and pattern detection.",
  },
];

const skillGroups = [
  { label: "Languages & Frameworks:", skills: "TypeScript, JavaScript, React, Next.js, Node.js, HTML, CSS, Tailwind CSS, Solidity" },
  { label: "Tools & Infrastructure:", skills: "Git, Docker, Vercel, Supabase, PostgreSQL, MongoDB, GA4, Looker" },
  { label: "Design:", skills: "Figma, Adobe Creative Cloud, Design Systems, Component Libraries" },
  { label: "Marketing & Analytics:", skills: "Google Ads, Meta Ads, A/B Testing, SEO, CRO, GenAI Pipelines" },
];

const education = [
  {
    degree: "Postgraduate Certificate, Blockchain Development",
    institution: "George Brown College",
    period: "Sep 2022 – Sep 2023",
    highlights: [
      "Built full stack dApps with MERN stack and Solidity smart contracts.",
      "Designed REST and GraphQL APIs with JWT auth; deployed with Docker Compose.",
    ],
  },
  {
    degree: "BTech, Graphic Communication Management",
    institution: "Toronto Metropolitan University",
    period: "Sep 2020 – Sep 2022",
    highlights: [
      "Produced brand identity and marketing assets at production quality using Adobe Creative Cloud.",
      "Led capstone product launch with positioning strategy, creative system, and measurement framework.",
    ],
  },
];

const certifications = [
  "Google Ads Search Certification — Google",
  "Meta Certified Digital Marketing Associate — Meta Blueprint",
  "Google Analytics 4 (GA4) Certification — Google Skillshop",
  "HubSpot Digital Marketing Certification — HubSpot Academy",
  "Mortgage Agent Level 1 Licence — FSRA (Ontario)",
];

// ── SVG Constants (US Letter: 612 x 792) ──

const W = 612;
const H = 792;
const ML = 40;
const MR = 40;
const CONTENT_W = W - ML - MR;
const BLACK = "#000000";
const GRAY = "#444444";

const elements = [];
let y = 0;

function escXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function text(x, yPos, content, { size = 9.5, color = BLACK, weight = "normal", anchor = "start" } = {}) {
  elements.push(`<text x="${x}" y="${yPos}" font-family="Helvetica, Arial, sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${escXml(content)}</text>`);
}

function line(x1, y1, x2, y2) {
  elements.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${BLACK}" stroke-width="1"/>`);
}

function wrapText(x, yStart, content, maxWidth, { size = 9, color = BLACK, lineHeight = 12.5 } = {}) {
  const charWidth = size * 0.5;
  const maxChars = Math.floor(maxWidth / charWidth);
  const words = content.split(" ");
  let currentLine = "";
  let currentY = yStart;

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length > maxChars && currentLine) {
      text(x, currentY, currentLine, { size, color });
      currentLine = word;
      currentY += lineHeight;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    text(x, currentY, currentLine, { size, color });
    currentY += lineHeight;
  }
  return currentY;
}

function sectionHeading(label) {
  y += 16;
  text(ML, y, label.toUpperCase(), { size: 11, weight: "bold" });
  y += 4;
  line(ML, y, W - MR, y);
  y += 12;
}

// ── Build ATS Resume ──

// Header (centered)
y = 38;
text(W / 2, y, profile.name, { size: 20, weight: "bold", anchor: "middle" });
y += 16;
text(W / 2, y, profile.title, { size: 11, anchor: "middle" });
y += 14;
text(W / 2, y, `${profile.location}  |  ${profile.phone}  |  ${profile.email}`, { size: 9, color: GRAY, anchor: "middle" });
y += 12;
text(W / 2, y, `${profile.linkedIn}  |  ${profile.github}  |  ${profile.portfolio}`, { size: 9, color: GRAY, anchor: "middle" });

// Summary
sectionHeading("Professional Summary");
y = wrapText(ML, y, summary, CONTENT_W, { size: 9, lineHeight: 12 });

// Experience
sectionHeading("Experience");
for (const exp of experience) {
  text(ML, y, exp.role, { size: 10, weight: "bold" });
  text(W - MR, y, exp.period, { size: 9, anchor: "end" });
  y += 12;
  text(ML, y, `${exp.company}  |  ${exp.location}`, { size: 9, color: GRAY });
  y += 12;
  for (const h of exp.highlights) {
    text(ML + 8, y, "\u2022", { size: 9 });
    y = wrapText(ML + 18, y, h, CONTENT_W - 18, { size: 9, lineHeight: 11.5 });
    y += 2;
  }
  y += 6;
}

// Skills
sectionHeading("Skills");
for (const group of skillGroups) {
  text(ML, y, group.label, { size: 9, weight: "bold" });
  // Place skills text after the label
  const labelWidth = group.label.length * 4.8 + 8;
  y = wrapText(ML + 140, y, group.skills, CONTENT_W - 140, { size: 9, lineHeight: 11.5 });
  y += 2;
}

// Projects
sectionHeading("Projects");
for (const proj of projects) {
  text(ML, y, proj.title, { size: 10, weight: "bold" });
  y += 11;
  text(ML, y, proj.tech, { size: 8, color: GRAY });
  y += 11;
  y = wrapText(ML, y, proj.description, CONTENT_W, { size: 9, lineHeight: 11.5 });
  y += 6;
}

// Education
sectionHeading("Education");
for (const edu of education) {
  text(ML, y, edu.degree, { size: 10, weight: "bold" });
  text(W - MR, y, edu.period, { size: 9, anchor: "end" });
  y += 12;
  text(ML, y, edu.institution, { size: 9, color: GRAY });
  y += 12;
  for (const h of edu.highlights) {
    text(ML + 8, y, "\u2022", { size: 9 });
    y = wrapText(ML + 18, y, h, CONTENT_W - 18, { size: 9, lineHeight: 11.5 });
    y += 2;
  }
  y += 6;
}

// Certifications
sectionHeading("Certifications");
for (const cert of certifications) {
  text(ML, y, cert, { size: 9 });
  y += 12;
}

// ── Assemble SVG ──
// Determine height — use max of content or letter size
const finalH = Math.max(H, y + 40);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${finalH}" width="${W}" height="${finalH}">
  <rect width="${W}" height="${finalH}" fill="white"/>
${elements.join("\n")}
</svg>`;

writeFileSync("Gianluca_Di_Vita_Resume_ATS.svg", svg);
console.log(`Generated: Gianluca_Di_Vita_Resume_ATS.svg (${finalH}pt tall)`);
