"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import type { ProjectScreenshot } from "@/types";

interface ImageCarouselProps {
  images: ProjectScreenshot[];
  priority?: boolean;
}

const SLIDE_OFFSET = 300;
const TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? SLIDE_OFFSET : -SLIDE_OFFSET,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -SLIDE_OFFSET : SLIDE_OFFSET,
    opacity: 0,
  }),
};

export function ImageCarousel({ images, priority }: ImageCarouselProps) {
  const [[current, direction], setState] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setState(([prev]) => {
        const next = prev + newDirection;
        if (next < 0 || next >= images.length) return [prev, 0];
        return [next, newDirection];
      });
    },
    [images.length]
  );

  const goTo = useCallback(
    (index: number) => {
      setState(([prev]) => [index, index > prev ? 1 : -1]);
    },
    []
  );

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1024px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Image container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-background">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={TRANSITION}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
              priority={priority && current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border">
          <span className="font-mono text-xs text-text-secondary">
            {current + 1} / {images.length}
          </span>
        </div>

        {/* Prev arrow */}
        {current > 0 && (
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-background/95 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {current < images.length - 1 && (
          <button
            onClick={() => paginate(1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-background/95 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Dots + alt text */}
      <div className="flex items-center justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => goTo(i)}
            aria-label={img.alt}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent w-6"
                : "bg-text-muted/30 hover:bg-text-muted/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
