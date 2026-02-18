"use client";

import type { Project } from "@/types";
import { FadeIn } from "@/components/animations/FadeIn";

interface Props {
  project: Project;
}

export function ProjectCaseStudy({ project }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* The Problem */}
      <FadeIn>
        <section className="py-12 border-t border-border">
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
            The Challenge
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </section>
      </FadeIn>

      {/* The Approach */}
      <FadeIn>
        <section className="py-12 border-t border-border">
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
            The Approach
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
            {project.approach}
          </p>
        </section>
      </FadeIn>

      {/* Key Features */}
      <FadeIn>
        <section className="py-12 border-t border-border">
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border bg-surface"
              >
                <div className="font-mono text-xs text-text-muted mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <FadeIn>
          <section className="py-12 border-t border-border">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-3xl font-light text-text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-text-muted mt-1 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* Outcome */}
      <FadeIn>
        <section className="py-12 border-t border-border">
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
            The Outcome
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
            {project.outcome}
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
