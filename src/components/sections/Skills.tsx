"use client";

import { skills, skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            number="02"
            title="Skills"
            subtitle="Development at the core, with design and marketing depth that most developers don't have."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.key
            );
            if (categorySkills.length === 0) return null;

            return (
              <FadeIn key={category.key} delay={catIndex * 0.05}>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                    {category.label}
                  </h3>
                  <StaggerChildren className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <Badge
                          variant={skill.featured ? "default" : "outline"}
                        >
                          {skill.name}
                        </Badge>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
