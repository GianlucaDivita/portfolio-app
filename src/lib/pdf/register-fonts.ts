import { Font } from "@react-pdf/renderer";
import { join } from "node:path";

const fontsDir = join(process.cwd(), "src/assets/fonts");

Font.register({
  family: "Bricolage Grotesque",
  src: join(fontsDir, "BricolageGrotesque-Light.ttf"),
});

Font.register({
  family: "DM Sans",
  src: join(fontsDir, "DMSans-Regular.ttf"),
});

Font.register({
  family: "JetBrains Mono",
  src: join(fontsDir, "JetBrainsMono-Regular.ttf"),
});

// Disable hyphenation — looks bad on resumes
Font.registerHyphenationCallback((word) => [word]);
