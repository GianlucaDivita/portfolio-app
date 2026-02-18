"use client";

import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { value: "4", label: "Deployed Apps" },
  { value: "5+", label: "Years Experience" },
  { value: "22", label: "Financial Calculators" },
  { value: "34", label: "Automated Tests" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="01" title="About" />
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            {profile.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-text-secondary leading-relaxed text-[17px]">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
            <FadeIn delay={0.3}>
              <div className="pt-4">
                <Button
                  href={profile.resumeUrl}
                  variant="secondary"
                  size="md"
                >
                  Download Resume
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl border border-border bg-surface"
                  >
                    <div className="font-display text-3xl font-light text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-text-muted mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
