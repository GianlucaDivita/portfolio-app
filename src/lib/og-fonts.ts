import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadOGFonts() {
  const fontsDir = join(process.cwd(), "src/assets/fonts");

  const [bricolage, jetbrains] = await Promise.all([
    readFile(join(fontsDir, "BricolageGrotesque-Light.ttf")),
    readFile(join(fontsDir, "JetBrainsMono-Regular.ttf")),
  ]);

  return [
    { name: "Bricolage Grotesque", data: bricolage, weight: 300 as const, style: "normal" as const },
    { name: "JetBrains Mono", data: jetbrains, weight: 400 as const, style: "normal" as const },
  ];
}
