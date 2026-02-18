# Portfolio App — Gianluca Di Vita

## Live Site
https://gianlucadivita.vercel.app

## Overview
Developer portfolio and interactive resume built to reposition from "Growth Marketer" to "Full Stack Developer & Digital Strategist." The site itself is a portfolio piece demonstrating design taste, technical skill, and attention to detail.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with CSS custom properties for theming
- **Animations:** Motion (formerly Framer Motion), scroll-triggered, reduced-motion aware
- **Theming:** next-themes (dark mode primary, light mode secondary)
- **Deployment:** Vercel

## Fonts (via next/font/google)
- **Bricolage Grotesque** display/headings (variable: `--font-display`)
- **DM Sans** body text (variable: `--font-sans`)
- **JetBrains Mono** monospace labels, tech tags (variable: `--font-mono`)

## Color System
Dark mode (primary): deep navy-black `#0A0A0F` background, teal/mint `#64FFDA` accent, warm off-white `#E8E8ED` text.
Light mode: warm white `#FAFAF9` background, darker teal `#0D9488` accent, deep navy `#1A1A2E` text.
Colors defined as CSS custom properties in `globals.css`, toggled via `[data-theme="light"]`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, ThemeProvider, metadata, JSON-LD Person schema
│   ├── page.tsx                # Homepage: single-page interactive resume
│   ├── globals.css             # Design system: CSS vars, grain overlay, scrollbar, Tailwind theme
│   ├── not-found.tsx           # Custom 404
│   ├── sitemap.ts              # Dynamic XML sitemap (homepage, /projects, all case study slugs)
│   ├── robots.ts               # robots.txt allowing all crawlers, links to sitemap
│   ├── opengraph-image.tsx     # Dynamic OG image: dark navy bg, mint accent, name/title/location
│   ├── twitter-image.tsx       # Re-exports root OG image for Twitter cards
│   ├── api/contact/route.ts    # Contact form POST handler (Resend email, sandbox sender, replyTo for direct replies)
│   ├── resume/
│   │   └── route.tsx           # Dynamic PDF generation: /resume (designed) and /resume?variant=ats (ATS-friendly)
│   └── projects/
│       ├── page.tsx            # /projects gallery page with category filtering, generateMetadata
│       ├── ProjectsGallery.tsx # Client component: category filter pills, AnimatePresence grid transitions
│       └── [slug]/
│           ├── page.tsx            # Case study page with screenshot carousel, generateStaticParams + generateMetadata
│           ├── ProjectCaseStudy.tsx # Client component: challenge, approach, features, metrics, outcome
│           ├── opengraph-image.tsx  # Per-project OG image with project-specific accent colors and tech stack
│           └── twitter-image.tsx    # Re-exports project OG image for Twitter cards
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, scroll-aware blur backdrop, mobile hamburger, GDV logo
│   │   ├── Footer.tsx          # Social links, copyright, "Built with Next.js + TypeScript"
│   │   ├── MobileMenu.tsx      # Full-screen overlay with AnimatePresence + staggered links
│   │   ├── ThemeProvider.tsx    # next-themes wrapper (attribute="data-theme", defaultTheme="dark")
│   │   └── ThemeToggle.tsx     # Sun/moon toggle with rotation/scale animation
│   ├── sections/
│   │   ├── Hero.tsx            # Gradient mesh bg, cycling role text, "Available for work" pill
│   │   ├── About.tsx           # Bio + 4 stats cards (2x2 grid), download resume button
│   │   ├── Skills.tsx          # 7 category accordion with expandable cards and badge groups
│   │   ├── Experience.tsx      # Vertical timeline, discipline-coded dots, expandable cards
│   │   ├── Projects.tsx        # 2x2 project cards with thumbnails and distinct hover colors per project
│   │   └── Contact.tsx         # Split layout: info + form with honeypot spam prevention
│   ├── ui/
│   │   ├── Button.tsx          # Variants: primary/secondary/ghost, sizes: sm/md/lg, optional href
│   │   ├── Badge.tsx           # Variants: default/accent/outline, monospace font
│   │   ├── SectionHeading.tsx  # Section number (mono) + title (display) + optional subtitle
│   │   ├── ImageCarousel.tsx   # Screenshot gallery with Motion slide animations, arrows, dots, keyboard nav
│   │   ├── ProjectCard.tsx     # Reusable project card: thumbnail, hover colors, metrics, tech badges, arrow CTA
│   │   ├── AnimatedText.tsx    # Cycling text with AnimatePresence vertical slide transitions
│   │   └── ScrollProgress.tsx  # Fixed 2px accent bar at top, scaleX tied to scrollYProgress
│   └── animations/
│       ├── FadeIn.tsx          # Directional fade (up/down/left/right), whileInView, once: true
│       └── StaggerChildren.tsx # Parent stagger container + StaggerItem child
├── data/
│   ├── profile.ts              # Name, title, bio, tagline, socials, availability
│   ├── experience.ts           # 3 work entries + 2 education entries (reframed for dev emphasis)
│   ├── skills.ts               # 7 categories, ~50 skills with `featured` boolean
│   ├── projects.ts             # 4 projects: case study content, tech stacks, URLs, metrics, screenshot galleries
│   └── certifications.ts       # 5 certifications (Google Ads, Meta, GA4, HubSpot, FSRA Mortgage Agent)
├── hooks/
│   └── useScrollSection.ts     # IntersectionObserver for active nav section highlighting
├── assets/
│   └── fonts/                  # Bundled TTFs for OG + PDF generation (Bricolage Grotesque, DM Sans, JetBrains Mono)
├── lib/
│   ├── utils.ts                # cn() — clsx + tailwind-merge
│   ├── animations.ts           # Shared Motion variants: fadeInUp, staggerContainer, scaleIn, etc.
│   ├── og-fonts.ts             # Loads local TTF fonts for next/og ImageResponse (readFile, no network)
│   ├── resume-content.ts       # Content curation layer: transforms data files into resume-ready structures
│   ├── pdf/
│   │   ├── register-fonts.ts   # Font.register() for @react-pdf/renderer (Bricolage, DM Sans, JetBrains)
│   │   ├── styles.ts           # Shared PDF constants (colors, fonts, spacing)
│   │   ├── DesignedResume.tsx   # 1-page designed PDF: teal accent, custom fonts, modern layout
│   │   └── ATSResume.tsx        # 2-page ATS PDF: Helvetica, single-column, no colors
│   └── constants.ts            # SITE_URL, NAV_ITEMS, SECTION_IDS
└── types/
    └── index.ts                # All shared interfaces: Profile, Experience, Skill, Project, etc.
```

## Projects Showcased
1. **OCRA** Deep work productivity app (React, TypeScript, Zustand, Canvas API, Supabase)
   - Live: https://ocrafocus.vercel.app | Repo: github.com/GianlucaDivita/ocra-app
2. **MortgageMate** Mortgage education companion (React, TypeScript, Recharts, IndexedDB)
   - Live: https://mortgagemate-app.vercel.app (passcode: 221801090201)
3. **Metrohomes Design Build** Construction company website (35 routes, full design system)
   - Live: https://metrohomesdesignbuild.ca
4. **BudgetLens** Personal budget tracker (React, TypeScript, Recharts, glassmorphism)
   - Live: https://budgetlens-app.vercel.app

## Design Decisions
- **Aesthetic:** "Editorial Swiss Design meets Developer Terminal." Swiss grid precision with monospace/code texture
- **Grain overlay:** CSS SVG noise filter at 3% opacity on background, prevents flat digital feel
- **Project cards:** Each has a distinct hover accent color reflecting its own design language (OCRA=emerald, MortgageMate=blue, Metrohomes=neutral, BudgetLens=purple). Cards include live screenshot thumbnails via Next.js `<Image>`
- **Experience timeline:** Color-coded discipline dots (teal=dev, violet=marketing, amber=hybrid)
- **Animations:** All respect `prefers-reduced-motion`, collapse to simple opacity fade
- **Typography hierarchy:** Display (Bricolage) for impact, Sans (DM Sans) for readability, Mono (JetBrains) for technical labels
- **Copy style:** No em dashes or compound hyphens in prose. Use colons, commas, or periods instead. Technical names (JSON-LD, react-hook-form) are exempt

## SEO
- JSON-LD Person schema in root layout
- Per-page metadata via generateMetadata on project and gallery pages
- Dynamic OG images via next/og: root (name/title/location) + per-project (title/tech/metrics) with project-specific accent colors
- Twitter card images (re-exported from OG images)
- XML sitemap (`/sitemap.xml`) with all routes including dynamic project slugs
- robots.txt allowing all crawlers with sitemap reference
- Semantic HTML with ARIA labels, skip-to-content link, focus-visible styles
- Fonts for OG images bundled locally in `src/assets/fonts/` to avoid Vercel build network timeouts

## Completed Work
- [x] Built complete portfolio site with interactive resume (all sections, animations, theming)
- [x] Content elevation: rewrote experience, profile, skills, and project descriptions for dev positioning
- [x] Redesigned Skills section from 3-col grid to expandable accordion
- [x] Removed all em dashes and compound hyphens from site copy
- [x] Captured live screenshots of all 4 project apps via Playwright (1440x900)
- [x] Integrated thumbnails into project cards (`Projects.tsx`) and case study hero sections
- [x] Removed MortgageMate passcode from case study page (kept private)
- [x] Captured 10 additional screenshots (org mode, focus session, calculators, quiz, dark themes, contact forms, services)
- [x] Built ImageCarousel component with Motion AnimatePresence, direction-aware slides, arrows, dots, keyboard nav
- [x] Added `screenshots` arrays (3-4 per project) and `ProjectScreenshot` type to data model
- [x] Replaced single hero image with interactive carousel on all case study pages
- [x] Integrated Resend API for contact form (sandbox sender `onboarding@resend.dev`, delivers to Gmail, replyTo for direct replies)
- [x] Fixed Contact.tsx form reset bug: saved `e.currentTarget` before async fetch to prevent React synthetic event nullification
- [x] Added sitemap.ts and robots.ts for SEO crawlability
- [x] Created dynamic OG images via next/og: root image + per-project images with distinct accent colors (ocra=emerald, mortgagemate=blue, metrohomes=neutral, budgetlens=purple)
- [x] Bundled Bricolage Grotesque + JetBrains Mono TTFs locally for OG image generation (avoids Vercel build network timeouts)
- [x] Extracted ProjectCard component from Projects.tsx for reuse across homepage and gallery
- [x] Built `/projects` gallery page with category filter pills, AnimatePresence transitions, and ProjectsGallery client component
- [x] Lighthouse accessibility audit: added aria-hidden on decorative SVGs, aria-expanded on toggles, aria-modal + Escape key on mobile menu, image priority on LCP images
- [x] Dynamic resume PDF generation via @react-pdf/renderer: designed variant (1-page, teal accent, custom fonts) + ATS-friendly variant (2-page, Helvetica, single-column). Served at /resume and /resume?variant=ats with CDN caching
- [x] Content curation layer (resume-content.ts) with resume-specific condensed highlights, curated skills, and manually authored summary
- [x] Added "ATS-friendly version" link to About section alongside Download Resume button
- [x] Fixed Resend lazy initialization to prevent build-time crash when API key is unavailable
- [x] Switched to static resume PDFs: user designed custom PDFs in Illustrator, served from `public/Gianluca_Di_Vita_Resume.pdf` and `public/Gianluca_Di_Vita_Resume_ATS.pdf`
- [x] Generated editable resume templates (DOCX + SVG + plain text) for user to customize in Illustrator
- [x] Renamed "MetroHomes" to "Metrohomes Design Build" across all data files, project pages, and CLAUDE.md
- [x] Renamed "DesignEdit" to "DesignedIT" in experience data (title kept as "Design Engineer & CRO Lead")
- [x] Added BudgetLens to resume projects (was missing from curated list)
- [x] Added Mortgage Agent Level 1 Licence (FSRA Ontario) to certifications; added "finance" to category union type
- [x] Fixed project page: separated "Back to Projects" link from category label, GDV logo now navigates to homepage on subpages
- [x] Removed "free" from MortgageMate project descriptions (licensing discussions underway)
- [x] Added password-protected disclaimer on case study pages when `project.passcode` exists (lock icon + contact link)

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
vercel           # Deploy to Vercel
```
