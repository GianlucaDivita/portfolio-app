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
│   ├── api/contact/route.ts    # Contact form POST handler (currently console.log, TODO: Resend)
│   └── projects/[slug]/
│       ├── page.tsx            # Case study page with hero screenshot, generateStaticParams + generateMetadata
│       └── ProjectCaseStudy.tsx # Client component: challenge, approach, features, metrics, outcome
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
│   │   ├── AnimatedText.tsx    # Cycling text with AnimatePresence vertical slide transitions
│   │   └── ScrollProgress.tsx  # Fixed 2px accent bar at top, scaleX tied to scrollYProgress
│   └── animations/
│       ├── FadeIn.tsx          # Directional fade (up/down/left/right), whileInView, once: true
│       └── StaggerChildren.tsx # Parent stagger container + StaggerItem child
├── data/
│   ├── profile.ts              # Name, title, bio, tagline, socials, availability
│   ├── experience.ts           # 3 work entries + 2 education entries (reframed for dev emphasis)
│   ├── skills.ts               # 7 categories, ~50 skills with `featured` boolean
│   ├── projects.ts             # 4 projects: full case study content, tech stacks, URLs, metrics
│   └── certifications.ts       # 4 certifications (Google Ads, Meta, GA4, HubSpot)
├── hooks/
│   └── useScrollSection.ts     # IntersectionObserver for active nav section highlighting
├── lib/
│   ├── utils.ts                # cn() — clsx + tailwind-merge
│   ├── animations.ts           # Shared Motion variants: fadeInUp, staggerContainer, scaleIn, etc.
│   └── constants.ts            # SITE_URL, NAV_ITEMS, SECTION_IDS
└── types/
    └── index.ts                # All shared interfaces: Profile, Experience, Skill, Project, etc.
```

## Projects Showcased
1. **OCRA** Deep work productivity app (React, TypeScript, Zustand, Canvas API, Supabase)
   - Live: https://ocrafocus.vercel.app | Repo: github.com/GianlucaDivita/ocra-app
2. **MortgageMate** Mortgage education companion (React, TypeScript, Recharts, IndexedDB)
   - Live: https://mortgagemate-app.vercel.app (passcode: 221801090201)
3. **MetroHomes** Construction company website (35 routes, full design system)
   - Live: https://metrohomesdesignbuild.ca
4. **BudgetLens** Personal budget tracker (React, TypeScript, Recharts, glassmorphism)
   - Live: https://budgetlens-app.vercel.app

## Design Decisions
- **Aesthetic:** "Editorial Swiss Design meets Developer Terminal." Swiss grid precision with monospace/code texture
- **Grain overlay:** CSS SVG noise filter at 3% opacity on background, prevents flat digital feel
- **Project cards:** Each has a distinct hover accent color reflecting its own design language (OCRA=emerald, MortgageMate=blue, MetroHomes=neutral, BudgetLens=purple). Cards include live screenshot thumbnails via Next.js `<Image>`
- **Experience timeline:** Color-coded discipline dots (teal=dev, violet=marketing, amber=hybrid)
- **Animations:** All respect `prefers-reduced-motion`, collapse to simple opacity fade
- **Typography hierarchy:** Display (Bricolage) for impact, Sans (DM Sans) for readability, Mono (JetBrains) for technical labels
- **Copy style:** No em dashes or compound hyphens in prose. Use colons, commas, or periods instead. Technical names (JSON-LD, react-hook-form) are exempt

## SEO
- JSON-LD Person schema in root layout
- Per-page metadata via generateMetadata on project pages
- OpenGraph + Twitter card metadata
- Semantic HTML with ARIA labels, skip-to-content link, focus-visible styles

## Completed Work
- [x] Built complete portfolio site with interactive resume (all sections, animations, theming)
- [x] Content elevation: rewrote experience, profile, skills, and project descriptions for dev positioning
- [x] Redesigned Skills section from 3-col grid to expandable accordion
- [x] Removed all em dashes and compound hyphens from site copy
- [x] Captured live screenshots of all 4 project apps via Playwright (1440x900)
- [x] Integrated thumbnails into project cards (`Projects.tsx`) and case study hero sections (`projects/[slug]/page.tsx`)
- [x] Removed MortgageMate passcode from case study page (kept private)

## TODO / Future Enhancements
- [ ] Integrate Resend API for contact form (currently console.log in `api/contact/route.ts`)
- [ ] Generate updated resume PDF matching rewritten content
- [ ] Add `/projects` gallery page with category filtering
- [ ] Add dynamic OG images via next/og (opengraph-image.tsx)
- [ ] Add sitemap.ts and robots.ts
- [ ] Performance audit, target Lighthouse 90+ all categories

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
vercel           # Deploy to Vercel
```
