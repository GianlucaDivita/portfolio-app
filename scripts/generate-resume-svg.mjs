/**
 * Generates an editable SVG resume.
 * Run: node scripts/generate-resume-svg.mjs
 * Output: Gianluca_Di_Vita_Resume.svg (in project root)
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
    title: "OCRA",
    subtitle: "Deep Work Productivity App",
    tech: "React  ·  TypeScript  ·  Zustand  ·  Canvas API  ·  Supabase  ·  Playwright",
  },
  {
    title: "MortgageMate",
    subtitle: "Mortgage Education Companion",
    tech: "React  ·  TypeScript  ·  Tailwind CSS  ·  Recharts  ·  IndexedDB  ·  Vite",
  },
  {
    title: "Metrohomes Design Build",
    subtitle: "Construction Company Website",
    tech: "Next.js 16  ·  TypeScript  ·  Tailwind CSS v4  ·  react-hook-form  ·  Resend  ·  GA4",
  },
  {
    title: "BudgetLens",
    subtitle: "Personal Budget Tracker",
    tech: "React  ·  TypeScript  ·  Tailwind CSS  ·  Recharts  ·  IndexedDB",
  },
];

const skillGroups = [
  { label: "Languages & Frameworks", skills: "TypeScript, JavaScript, React, Next.js, Node.js, HTML, CSS, Tailwind CSS, Solidity" },
  { label: "Tools & Infrastructure", skills: "Git, Docker, Vercel, Supabase, PostgreSQL, MongoDB, GA4, Looker" },
  { label: "Design", skills: "Figma, Adobe Creative Cloud, Design Systems, Component Libraries" },
  { label: "Marketing & Analytics", skills: "Google Ads, Meta Ads, A/B Testing, SEO, CRO, GenAI Pipelines" },
];

const education = [
  {
    degree: "Postgraduate Certificate, Blockchain Development",
    institution: "George Brown College",
    period: "Sep 2022 – Sep 2023",
  },
  {
    degree: "BTech, Graphic Communication Management",
    institution: "Toronto Metropolitan University",
    period: "Sep 2020 – Sep 2022",
  },
];

const certifications = [
  "Google Ads Search Certification — Google",
  "Meta Certified Digital Marketing Associate — Meta Blueprint",
  "Google Analytics 4 (GA4) — Google Skillshop",
  "HubSpot Digital Marketing — HubSpot Academy",
  "Mortgage Agent Level 1 Licence — FSRA (Ontario)",
];

// ── SVG Constants ──
// US Letter: 8.5 x 11 inches = 612 x 792 points

const W = 612;
const H = 792;
const ML = 32; // margin left
const MR = 32; // margin right
const CONTENT_W = W - ML - MR;
const ACCENT = "#0D9488";
const TEXT_PRIMARY = "#1A1A2E";
const TEXT_SECONDARY = "#4A4A6A";
const TEXT_MUTED = "#8B8B9E";

// ── SVG Builder ──

let y = 0;
const elements = [];

function escXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function text(x, yPos, content, { font = "DM Sans", size = 8.5, color = TEXT_PRIMARY, weight = "normal", anchor = "start", letterSpacing = "" } = {}) {
  const ls = letterSpacing ? ` letter-spacing="${letterSpacing}"` : "";
  elements.push(`<text x="${x}" y="${yPos}" font-family="'${font}', sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}"${ls}>${escXml(content)}</text>`);
}

function line(x1, y1, x2, y2, color = ACCENT, width = 1.5) {
  elements.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"/>`);
}

function wrapText(x, yStart, content, maxWidth, { font = "DM Sans", size = 8.5, color = TEXT_PRIMARY, lineHeight = 12 } = {}) {
  // Approximate character width (varies by font, this is a rough estimate)
  const charWidth = size * 0.48;
  const maxChars = Math.floor(maxWidth / charWidth);
  const words = content.split(" ");
  let currentLine = "";
  let currentY = yStart;

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length > maxChars && currentLine) {
      text(x, currentY, currentLine, { font, size, color });
      currentLine = word;
      currentY += lineHeight;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    text(x, currentY, currentLine, { font, size, color });
    currentY += lineHeight;
  }
  return currentY;
}

function sectionHeading(label) {
  y += 14;
  text(ML, y, label.toUpperCase(), { font: "Bricolage Grotesque", size: 10, color: ACCENT, weight: "bold", letterSpacing: "1" });
  y += 3;
  line(ML, y, ML + CONTENT_W * 0.25, y, ACCENT, 0.75);
  y += 8;
}

// ── Build Resume ──

// Header
y = 34;
text(ML, y, profile.name, { font: "Bricolage Grotesque", size: 20, color: ACCENT, weight: "bold" });
// Contact info on the right
text(W - MR, y - 8, profile.location, { font: "JetBrains Mono", size: 7.5, color: TEXT_MUTED, anchor: "end" });
text(W - MR, y - 0, profile.phone, { font: "JetBrains Mono", size: 7.5, color: TEXT_MUTED, anchor: "end" });

y += 6;
text(ML, y, profile.title, { font: "DM Sans", size: 10, color: TEXT_SECONDARY });
text(W - MR, y - 2, profile.email, { font: "JetBrains Mono", size: 7.5, color: ACCENT, anchor: "end" });

y += 10;
text(W - MR, y - 6, profile.linkedIn, { font: "JetBrains Mono", size: 7.5, color: ACCENT, anchor: "end" });
text(W - MR, y + 2, profile.github, { font: "JetBrains Mono", size: 7.5, color: ACCENT, anchor: "end" });
text(W - MR, y + 10, profile.portfolio, { font: "JetBrains Mono", size: 7.5, color: ACCENT, anchor: "end" });

// Header divider
line(ML, y, W - MR, y, ACCENT, 1.5);
y += 4;

// Summary
sectionHeading("Summary");
y = wrapText(ML, y, summary, CONTENT_W, { size: 8.5, color: TEXT_SECONDARY, lineHeight: 11.5 });

// Experience
sectionHeading("Experience");
for (const exp of experience) {
  text(ML, y, exp.role, { font: "Bricolage Grotesque", size: 9.5, weight: "bold" });
  text(W - MR, y, exp.period, { font: "JetBrains Mono", size: 7, color: TEXT_MUTED, anchor: "end" });
  y += 10;
  text(ML, y, `${exp.company}  ·  ${exp.location}`, { size: 8, color: TEXT_SECONDARY });
  y += 10;
  for (const h of exp.highlights) {
    text(ML + 4, y, "›", { size: 8, color: ACCENT });
    y = wrapText(ML + 12, y, h, CONTENT_W - 12, { size: 8, lineHeight: 10.5 });
    y += 1;
  }
  y += 4;
}

// Projects
sectionHeading("Projects");
for (const proj of projects) {
  text(ML, y, proj.title, { font: "Bricolage Grotesque", size: 9.5, weight: "bold" });
  text(ML + proj.title.length * 5.5 + 8, y, proj.subtitle, { size: 8, color: TEXT_MUTED });
  y += 10;
  text(ML, y, proj.tech, { font: "JetBrains Mono", size: 7, color: ACCENT });
  y += 10;
}

// Skills
sectionHeading("Skills");
const skillColW = CONTENT_W / 2;
let skillY = y;
for (let i = 0; i < skillGroups.length; i++) {
  const col = i % 2;
  const xOff = ML + col * skillColW;
  if (col === 0 && i > 0) skillY += 0;
  text(xOff, skillY, skillGroups[i].label, { font: "JetBrains Mono", size: 7, color: ACCENT, letterSpacing: "0.5" });
  skillY += 9;
  y = wrapText(xOff, skillY, skillGroups[i].skills, skillColW - 10, { size: 8, lineHeight: 10 });
  if (col === 1) {
    skillY = y + 4;
  }
}
y = skillY;

// Education + Certifications side by side
y += 6;
const bottomY = y;
const leftColW = CONTENT_W * 0.5;
const rightColX = ML + CONTENT_W * 0.55;

// Education (left)
text(ML, y, "EDUCATION", { font: "Bricolage Grotesque", size: 10, color: ACCENT, weight: "bold", letterSpacing: "1" });
y += 3;
line(ML, y, ML + leftColW * 0.5, y, ACCENT, 0.75);
y += 10;
for (const edu of education) {
  text(ML, y, edu.degree, { font: "Bricolage Grotesque", size: 9, weight: "bold" });
  y += 10;
  text(ML, y, edu.institution, { size: 8, color: TEXT_SECONDARY });
  y += 9;
  text(ML, y, edu.period, { font: "JetBrains Mono", size: 7, color: TEXT_MUTED });
  y += 12;
}

// Certifications (right)
let certY = bottomY;
text(rightColX, certY, "CERTIFICATIONS", { font: "Bricolage Grotesque", size: 10, color: ACCENT, weight: "bold", letterSpacing: "1" });
certY += 3;
line(rightColX, certY, rightColX + leftColW * 0.5, certY, ACCENT, 0.75);
certY += 10;
for (const cert of certifications) {
  text(rightColX, certY, cert, { size: 8 });
  certY += 11;
}

// ── Assemble SVG ──

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="white"/>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;700&amp;family=DM+Sans&amp;family=JetBrains+Mono&amp;display=swap');
  </style>
${elements.join("\n")}
</svg>`;

writeFileSync("Gianluca_Di_Vita_Resume.svg", svg);
console.log("Generated: Gianluca_Di_Vita_Resume.svg");
