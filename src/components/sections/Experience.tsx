"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const disciplineColors = {
  development: "border-accent",
  marketing: "border-violet-500",
  hybrid: "border-amber-500",
};

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            number="03"
            title="Experience"
            subtitle="From marketing strategy to full stack development, each role built on the last."
          />
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-0 md:left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 bg-background",
                      disciplineColors[exp.discipline]
                    )}
                  />

                  {/* Card */}
                  <div
                    className={cn(
                      "rounded-xl border bg-surface p-6 cursor-pointer transition-all duration-300",
                      expandedId === exp.id
                        ? "border-accent/30 shadow-[0_0_0_1px_var(--accent-glow)]"
                        : "border-border hover:border-text-muted"
                    )}
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedId(expandedId === exp.id ? null : exp.id);
                      }
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-normal text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-text-secondary mt-0.5">
                          {exp.company}
                          {exp.type === "contract" && (
                            <span className="text-text-muted"> · Contract</span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted font-mono shrink-0">
                        <span>
                          {exp.period.start} to {exp.period.end}
                        </span>
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            expandedId === exp.id && "rotate-180"
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-muted mt-2">
                      {exp.description}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-3">
                            {exp.highlights.map((highlight, j) => (
                              <li
                                key={j}
                                className="text-sm text-text-secondary leading-relaxed pl-4 border-l border-border"
                              >
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
