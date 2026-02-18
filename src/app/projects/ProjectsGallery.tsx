"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function ProjectsGallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter pills */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200",
                active === cat
                  ? "bg-accent/10 border border-accent/30 text-accent"
                  : "border border-border text-text-muted hover:text-text-secondary hover:border-text-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Project grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted mt-12">
          No projects in this category.
        </p>
      )}
    </>
  );
}
