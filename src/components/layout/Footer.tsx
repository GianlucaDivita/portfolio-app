import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {year} {profile.name}
        </p>
        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform !== "email" ? "_blank" : undefined}
              rel={social.platform !== "email" ? "noopener noreferrer" : undefined}
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-text-muted">
          Built with Next.js + TypeScript
        </p>
      </div>
    </footer>
  );
}
