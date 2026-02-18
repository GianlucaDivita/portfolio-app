"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const cardStyles: Record<string, string> = {
  ocra: "hover:border-emerald-500/30",
  mortgagemate: "hover:border-blue-500/30",
  metrohomes: "hover:border-neutral-400/30",
  budgetlens: "hover:border-purple-500/30",
};

const accentColors: Record<string, string> = {
  ocra: "text-emerald-400",
  mortgagemate: "text-blue-400",
  metrohomes: "text-neutral-400",
  budgetlens: "text-purple-400",
};

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300",
          cardStyles[project.slug]
        )}
      >
        {/* Category */}
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-wider",
            accentColors[project.slug] || "text-accent"
          )}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl font-light text-text-primary mt-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-text-muted mt-1">{project.subtitle}</p>

        {/* Thumbnail */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-4 bg-background">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 440px"
            priority={priority}
          />
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mt-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <div className="font-mono text-lg text-text-primary">
                {metric.value}
              </div>
              <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline">+{project.techStack.length - 5}</Badge>
          )}
        </div>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-sm text-text-muted group-hover:text-accent transition-colors">
          <span>View Case Study</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
