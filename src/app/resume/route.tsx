import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { DesignedResume } from "@/lib/pdf/DesignedResume";
import { ATSResume } from "@/lib/pdf/ATSResume";
import { getResumeContent } from "@/lib/resume-content";
import "@/lib/pdf/register-fonts";

export async function GET(request: NextRequest) {
  const variant = request.nextUrl.searchParams.get("variant");
  const isATS = variant === "ats";

  const content = getResumeContent();

  const document = isATS ? (
    <ATSResume content={content} />
  ) : (
    <DesignedResume content={content} />
  );

  const buffer = await renderToBuffer(document);

  const filename = isATS
    ? "Gianluca_Di_Vita_Resume_ATS.pdf"
    : "Gianluca_Di_Vita_Resume.pdf";

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control":
        "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
