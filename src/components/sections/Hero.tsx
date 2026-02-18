"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

const roles = [
  "Full-Stack Developer",
  "Product Engineer",
  "Digital Strategist",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32">
        {/* Available badge */}
        {profile.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-accent">
              Available for work
            </span>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-text-primary leading-[1.05] tracking-tight"
        >
          {profile.name}
        </motion.h1>

        {/* Cycling role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 h-10 flex items-center"
        >
          <span className="font-mono text-lg sm:text-xl text-accent">
            <AnimatedText texts={roles} interval={3000} />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-text-secondary text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#projects" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
