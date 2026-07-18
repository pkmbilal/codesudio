import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Codesudio — custom software for Saudi businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo-mark.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

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
          gap: 28,
          background: "linear-gradient(150deg,#0C1410,#13251A)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={112} height={90} />
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 72, fontWeight: 700, color: "#fff" }}>codesudio</span>
        </div>
        <span style={{ fontSize: 28, color: "#9fb0a7" }}>
          Custom software &amp; digital products, built for Saudi businesses.
        </span>
      </div>
    ),
    { ...size }
  );
}
