import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <span className="font-mono text-sm text-accent tracking-wider">
        {number}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-text-primary mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-3 max-w-xl text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
