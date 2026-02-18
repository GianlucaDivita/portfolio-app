export const COLORS = {
  accent: "#0D9488",
  textPrimary: "#1A1A2E",
  textSecondary: "#4A4A6A",
  textMuted: "#8B8B9E",
  white: "#FFFFFF",
  black: "#000000",
  border: "#E5E5E5",
} as const;

export const FONTS = {
  designed: {
    display: "Bricolage Grotesque",
    body: "DM Sans",
    mono: "JetBrains Mono",
  },
  ats: {
    display: "Helvetica-Bold",
    body: "Helvetica",
    mono: "Courier",
  },
} as const;

export const SPACING = {
  page: { top: 36, right: 36, bottom: 36, left: 36 }, // 0.5in
  sectionGap: 10,
  itemGap: 4,
} as const;
