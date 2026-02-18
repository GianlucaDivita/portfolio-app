import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-md transition-colors",
        {
          "bg-surface border border-border text-text-secondary": variant === "default",
          "bg-accent/10 border border-accent/20 text-accent": variant === "accent",
          "border border-border text-text-muted hover:text-text-secondary hover:border-text-muted":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
