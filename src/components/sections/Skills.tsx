"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export function Skills() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["languages"])
  );

  const toggle = (key: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

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

        <div className="space-y-2">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.key
            );
            if (categorySkills.length === 0) return null;

            const isOpen = openCategories.has(category.key);

            return (
              <FadeIn key={category.key} delay={catIndex * 0.05}>
                <div
                  className={cn(
                    "rounded-xl border bg-surface transition-all duration-300",
                    isOpen
                      ? "border-accent/30 shadow-[0_0_0_1px_var(--accent-glow)]"
                      : "border-border hover:border-text-muted"
                  )}
                >
                  {/* Accordion header */}
                  <button
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                    onClick={() => toggle(category.key)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                        {category.label}
                      </h3>
                      <span className="text-xs font-mono text-text-muted">
                        {categorySkills.length}
                      </span>
                    </div>
                    <svg
                      className={cn(
                        "w-4 h-4 text-text-muted transition-transform duration-200",
                        isOpen && "rotate-180"
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
                  </button>

                  {/* Accordion content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="flex flex-wrap gap-2">
                            {categorySkills.map((skill) => (
                              <Badge key={skill.name} variant="default">
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
