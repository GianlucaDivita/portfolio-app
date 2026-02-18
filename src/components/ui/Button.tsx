import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg",
    {
      "bg-accent text-background hover:bg-accent-hover": variant === "primary",
      "border border-border text-text-primary hover:bg-surface-hover":
        variant === "secondary",
      "text-text-secondary hover:text-text-primary": variant === "ghost",
    },
    {
      "px-3 py-1.5 text-xs": size === "sm",
      "px-5 py-2.5 text-sm": size === "md",
      "px-7 py-3 text-base": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
