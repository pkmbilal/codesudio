import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Codesudio — custom software for Saudi businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo-mark.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;
  // ImageResponse only bundles a regular-weight font, so load a bold one explicitly.
  const boldFont = await readFile(
    join(process.cwd(), "app/fonts/space-grotesk-latin-700-normal.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background: "#FFFFFF",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={400} height={324} />
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span
            style={{ fontSize: 150, fontWeight: 700, fontFamily: "Space Grotesk", color: "#0C1410" }}
          >codesudio</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: boldFont, weight: 700, style: "normal" }],
    }
  );
}
