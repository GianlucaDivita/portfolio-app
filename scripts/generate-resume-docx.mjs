/**
 * Generates an editable DOCX resume from the portfolio data.
 * Run: node scripts/generate-resume-docx.mjs
 * Output: Gianluca_Di_Vita_Resume.docx (in project root)
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  TabStopPosition,
  TabStopType,
  BorderStyle,
  AlignmentType,
  HeadingLevel,
  Tab,
} from "docx";
import { writeFileSync } from "node:fs";

// ── Resume Content (mirrored from src/lib/resume-content.ts) ──

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
    techStack: ["React", "TypeScript", "Zustand", "Canvas API", "Supabase", "Playwright"],
    description: "A canvas based productivity app with spring physics, immersive focus mode, habits/goals, and cloud sync.",
  },
  {
    title: "MortgageMate",
    subtitle: "Mortgage Education Companion",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "IndexedDB", "Vite"],
    description: "An interactive learning platform with 22 financial calculators, quiz engine, spaced repetition flashcards, and analytics dashboard.",
  },
  {
    title: "Metrohomes Design Build",
    subtitle: "Construction Company Website",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "react-hook-form", "Resend", "GA4"],
    description: "A production website for a Toronto design build firm with 35 routes, dual mode contact forms, transactional email, and a 12 color design system.",
  },
  {
    title: "BudgetLens",
    subtitle: "Personal Budget Tracker",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "IndexedDB"],
    description: "A privacy first personal finance tracker with glassmorphism UI, interactive charts, and pattern detection.",
  },
];

const skills = [
  { label: "Languages & Frameworks", skills: "TypeScript, JavaScript, React, Next.js, Node.js, HTML, CSS, Tailwind CSS, Solidity" },
  { label: "Tools & Infrastructure", skills: "Git, Docker, Vercel, Supabase, PostgreSQL, MongoDB, GA4, Looker" },
  { label: "Design", skills: "Figma, Adobe Creative Cloud, Design Systems, Component Libraries" },
  { label: "Marketing & Analytics", skills: "Google Ads, Meta Ads, A/B Testing, SEO, CRO, GenAI Pipelines" },
];

const education = [
  {
    degree: "Postgraduate Certificate, Blockchain Development",
    institution: "George Brown College",
    period: "September 2022 – September 2023",
    highlights: [
      "Built full stack dApps with MERN stack and Solidity smart contracts.",
      "Designed REST and GraphQL APIs with JWT auth; deployed with Docker Compose.",
    ],
  },
  {
    degree: "BTech, Graphic Communication Management",
    institution: "Toronto Metropolitan University",
    period: "September 2020 – September 2022",
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

// ── Styling Constants ──

const ACCENT = "0D9488"; // teal
const TEXT = "1A1A2E";
const MUTED = "6B7280";
const FONT_DISPLAY = "Bricolage Grotesque";
const FONT_BODY = "DM Sans";
const FONT_MONO = "JetBrains Mono";

// ── Helper Functions ──

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FONT_DISPLAY,
        size: 22,
        color: ACCENT,
        bold: true,
      }),
    ],
  });
}

function bullet(text) {
  return new Paragraph({
    spacing: { after: 40 },
    indent: { left: 200 },
    children: [
      new TextRun({ text: "›  ", font: FONT_BODY, size: 17, color: ACCENT }),
      new TextRun({ text, font: FONT_BODY, size: 17, color: TEXT }),
    ],
  });
}

// ── Build Document ──

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT_BODY, size: 19, color: TEXT },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: { top: 600, bottom: 600, left: 720, right: 720 },
        },
      },
      children: [
        // ── Header ──
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: profile.name,
              font: FONT_DISPLAY,
              size: 40,
              color: ACCENT,
              bold: true,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: profile.title,
              font: FONT_BODY,
              size: 20,
              color: MUTED,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: `${profile.location}  |  ${profile.phone}  |  ${profile.email}`,
              font: FONT_MONO,
              size: 15,
              color: MUTED,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          border: {
            bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT },
          },
          children: [
            new TextRun({
              text: `${profile.linkedIn}  |  ${profile.github}  |  ${profile.portfolio}`,
              font: FONT_MONO,
              size: 15,
              color: ACCENT,
            }),
          ],
        }),

        // ── Summary ──
        sectionHeading("Summary"),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({ text: summary, font: FONT_BODY, size: 17, color: TEXT }),
          ],
        }),

        // ── Experience ──
        sectionHeading("Experience"),
        ...experience.flatMap((exp) => [
          new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            spacing: { before: 120, after: 20 },
            children: [
              new TextRun({ text: exp.role, font: FONT_DISPLAY, size: 19, bold: true, color: TEXT }),
              new TextRun({ children: [new Tab()] }),
              new TextRun({ text: exp.period, font: FONT_MONO, size: 14, color: MUTED }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({ text: `${exp.company}  ·  ${exp.location}`, font: FONT_BODY, size: 16, color: MUTED }),
            ],
          }),
          ...exp.highlights.map((h) => bullet(h)),
        ]),

        // ── Projects ──
        sectionHeading("Projects"),
        ...projects.flatMap((proj) => [
          new Paragraph({
            spacing: { before: 100, after: 20 },
            children: [
              new TextRun({ text: proj.title, font: FONT_DISPLAY, size: 19, bold: true, color: TEXT }),
              new TextRun({ text: `  —  ${proj.subtitle}`, font: FONT_BODY, size: 16, color: MUTED }),
            ],
          }),
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({ text: proj.techStack.join("  ·  "), font: FONT_MONO, size: 14, color: ACCENT }),
            ],
          }),
          new Paragraph({
            spacing: { after: 80 },
            children: [
              new TextRun({ text: proj.description, font: FONT_BODY, size: 16, color: TEXT }),
            ],
          }),
        ]),

        // ── Skills ──
        sectionHeading("Skills"),
        ...skills.map(
          (group) =>
            new Paragraph({
              spacing: { after: 60 },
              children: [
                new TextRun({ text: `${group.label}:  `, font: FONT_MONO, size: 15, color: ACCENT, bold: true }),
                new TextRun({ text: group.skills, font: FONT_BODY, size: 17, color: TEXT }),
              ],
            })
        ),

        // ── Education ──
        sectionHeading("Education"),
        ...education.flatMap((edu) => [
          new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            spacing: { before: 100, after: 20 },
            children: [
              new TextRun({ text: edu.degree, font: FONT_DISPLAY, size: 18, bold: true, color: TEXT }),
              new TextRun({ children: [new Tab()] }),
              new TextRun({ text: edu.period, font: FONT_MONO, size: 14, color: MUTED }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({ text: edu.institution, font: FONT_BODY, size: 16, color: MUTED }),
            ],
          }),
          ...edu.highlights.map((h) => bullet(h)),
        ]),

        // ── Certifications ──
        sectionHeading("Certifications"),
        ...certifications.map(
          (cert) =>
            new Paragraph({
              spacing: { after: 40 },
              children: [
                new TextRun({ text: cert, font: FONT_BODY, size: 17, color: TEXT }),
              ],
            })
        ),
      ],
    },
  ],
});

// ── Write File ──

const buffer = await Packer.toBuffer(doc);
const outputPath = "Gianluca_Di_Vita_Resume.docx";
writeFileSync(outputPath, buffer);
console.log(`Generated: ${outputPath}`);
