import { ImageResponse } from "next/og";

export const alt = "Startup Garage xizmatlari";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#5458FF", color: "#fff" }}>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>STARTUP GARAGE</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Xizmatlar</div>
          <div style={{ marginTop: 28, fontSize: 32, opacity: 0.85 }}>Diagnostic · Fundraising · Scouting · Venture Building · Soft Landing</div>
        </div>
      </div>
    ),
    size,
  );
}
