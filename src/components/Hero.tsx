import React from "react";
import { Download } from "lucide-react";
import confetti from "canvas-confetti";

export const Hero: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.55 },
      colors: ["#34d399", "#00ff91", "#a3e635", "#ffffff"],
    });
  };

  return (
    <section className="section" style={{ paddingTop: "3.5rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ textAlign: "center" }}>
        
        {/* Logo: Transparent Floating Keycap (no dark square container) */}
        <div style={{ marginBottom: "1.8rem" }}>
          <img
            src="/assets/icon.png"
            alt="Termalime Logo"
            style={{
              width: "135px",
              height: "135px",
              display: "inline-block",
              filter: "drop-shadow(0 14px 35px rgba(0, 255, 145, 0.35))",
            }}
          />
        </div>

        {/* Main Headline: Single Line on Desktop */}
        <h1
          style={{
            maxWidth: "1150px",
            margin: "0 auto 1.2rem",
            fontSize: "clamp(1.9rem, 3.7vw, 3.3rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
          }}
        >
          The Terminal with{" "}
          <span className="text-lime-gradient" style={{ whiteSpace: "nowrap" }}>
            Built-in Local AI
          </span>
        </h1>

        {/* Clear, Concise Description */}
        <p
          style={{
            maxWidth: "680px",
            margin: "0 auto 2.2rem",
            fontSize: "1.18rem",
            lineHeight: "1.65",
            color: "var(--text-secondary)",
          }}
        >
          Termalime pairs a high-performance, multi-tab terminal emulator with a private local AI assistant in a single split-pane workspace. 100% offline, zero cloud API fees, proactive command preflight safety, and real-time hardware telemetry.
        </p>

        {/* Primary Action Button */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          <a
            href="https://github.com/daveymason/Termalime/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="btn-tactile-key"
            style={{ fontSize: "1.1rem", padding: "0.95rem 2.2rem" }}
          >
            <Download size={19} />
            <span>Download v0.6.0</span>
          </a>
        </div>

        {/* Real Product Screenshot in Clean Frame */}
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="screenshot-hardware-frame">
            <div className="screenshot-titlebar">
              <div className="window-dots">
                <span className="window-dot window-dot--close" />
                <span className="window-dot window-dot--min" />
                <span className="window-dot window-dot--max" />
              </div>
              <span className="screenshot-title">Termalime — Split Terminal &amp; Local AI</span>
              <span style={{ fontSize: "0.7rem", color: "var(--lime-bright)", fontFamily: "var(--font-mono)" }}>
                TAURI 2.X • LINUX
              </span>
            </div>
            <img
              src="/assets/screenshot-main.png"
              alt="Termalime Split Terminal with Local AI Screenshot"
              className="screenshot-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
