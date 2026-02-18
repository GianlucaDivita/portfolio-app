"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    // Honeypot check
    if (formData.get("website")) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            number="05"
            title="Get in Touch"
            subtitle="Have a project in mind? Let's talk about what we can build together."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info */}
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                  Availability
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m currently available for freelance projects, contract
                  work, and full-time opportunities. I typically respond within
                  24 hours.
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                  Connect
                </h3>
                <div className="space-y-2">
                  {profile.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target={
                        social.platform !== "email" ? "_blank" : undefined
                      }
                      rel={
                        social.platform !== "email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group"
                    >
                      <span className="text-sm">{social.label}</span>
                      <svg
                        className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                  Location
                </h3>
                <p className="text-text-secondary">{profile.location}</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                className="absolute opacity-0 -z-10"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-text-secondary mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-text-secondary mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-text-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
                {status === "error" && "Try Again"}
              </Button>

              {status === "sent" && (
                <p className="text-sm text-accent text-center">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
