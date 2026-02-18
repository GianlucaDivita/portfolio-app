import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsGallery } from "./ProjectsGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full stack applications designed, built, and shipped to production. Explore case studies for each project.",
  openGraph: {
    title: "Projects | Gianluca Di Vita",
    description:
      "Full stack applications designed, built, and shipped to production.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-24">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            Back to Home
          </a>

          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-text-primary mt-2">
              All Projects
            </h1>
            <p className="text-text-secondary mt-3 max-w-xl">
              Full stack applications I&apos;ve designed, built, and shipped to
              production. Select a category to filter, or click any project for
              the full case study.
            </p>
          </div>

          <ProjectsGallery />
        </section>
      </main>
      <Footer />
    </>
  );
}
