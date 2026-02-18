import { ImageResponse } from "next/og";
import { loadOGFonts } from "@/lib/og-fonts";

export const alt = "Gianluca Di Vita | Full Stack Developer & Digital Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
        {/* Subtle gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #64FFDA 0%, #4fd1c5 50%, #64FFDA 100%)",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 28,
            color: "#64FFDA",
            letterSpacing: "0.15em",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          GDV
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 64,
            fontWeight: 300,
            color: "#E8E8ED",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Gianluca Di Vita
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            color: "#64FFDA",
            marginTop: "20px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Full Stack Developer & Digital Strategist
        </div>

        {/* Location */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 16,
            color: "#8b8b9e",
            marginTop: "16px",
            display: "flex",
          }}
        >
          Toronto, ON
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            height: "1px",
            backgroundColor: "#1e1e2e",
            display: "flex",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "80px",
            fontFamily: "JetBrains Mono",
            fontSize: 14,
            color: "#4a4a5e",
            display: "flex",
          }}
        >
          gianlucadivita.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
