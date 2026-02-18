import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main id="main" className="pt-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            Back to Projects
          </a>

          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-text-primary mt-2">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary mt-3">
            {project.subtitle}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button href={project.liveUrl} size="md">
              Live Site
              <svg
                className="w-3.5 h-3.5 ml-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Button>
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary" size="md">
                View Code
              </Button>
            )}
          </div>
          {project.passcode && (
            <p className="text-xs text-text-muted mt-3 font-mono">
              Passcode: {project.passcode}
            </p>
          )}
        </section>

        {/* Case Study Content */}
        <ProjectCaseStudy project={project} />

        {/* Navigation */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex justify-between">
            {prevProject ? (
              <a
                href={`/projects/${prevProject.slug}`}
                className="group text-text-muted hover:text-text-primary transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-wider">
                  Previous
                </span>
                <div className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
                  {prevProject.title}
                </div>
              </a>
            ) : (
              <div />
            )}
            {nextProject && (
              <a
                href={`/projects/${nextProject.slug}`}
                className="group text-right text-text-muted hover:text-text-primary transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-wider">
                  Next
                </span>
                <div className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
                  {nextProject.title}
                </div>
              </a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
