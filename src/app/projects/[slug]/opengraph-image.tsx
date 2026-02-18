import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { loadOGFonts } from "@/lib/og-fonts";

export const alt = "Project Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const accentColors: Record<string, string> = {
  ocra: "#34d399",
  mortgagemate: "#60a5fa",
  metrohomes: "#a3a3a3",
  budgetlens: "#a78bfa",
};

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A0A0F",
            color: "#E8E8ED",
            fontSize: 48,
          }}
        >
          Project Not Found
        </div>
      ),
      size
    );
  }

  const accent = accentColors[project.slug] || "#64FFDA";
  const fonts = await loadOGFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0F",
          position: "relative",
        }}
      >
        {/* Top accent bar in project color */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: accent,
            display: "flex",
          }}
        />

        {/* Category */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 14,
            color: accent,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 72,
            fontWeight: 300,
            color: "#E8E8ED",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          {project.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 28,
            color: "#8b8b9e",
            marginTop: "12px",
            display: "flex",
          }}
        >
          {project.subtitle}
        </div>

        {/* Tech stack pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "40px",
          }}
        >
          {project.techStack.slice(0, 5).map((tech) => (
            <div
              key={tech}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 13,
                color: "#8b8b9e",
                border: "1px solid #1e1e2e",
                borderRadius: "6px",
                padding: "6px 12px",
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e1e2e",
            paddingTop: "20px",
          }}
        >
          {/* Key metric */}
          {project.metrics[0] && (
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 28,
                  color: "#E8E8ED",
                }}
              >
                {project.metrics[0].value}
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 12,
                  color: "#4a4a5e",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {project.metrics[0].label}
              </span>
            </div>
          )}

          {/* Author */}
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 14,
              color: "#4a4a5e",
              display: "flex",
            }}
          >
            gianlucadivita.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
