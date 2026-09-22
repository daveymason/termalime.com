import React, { useState } from "react";
import { Download, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = "sudo apt install ./Termalime_0.5.0_amd64.deb";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        
        {/* Prominent Large Logo */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              height: "150px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0 16px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 255, 145, 0.25)",
              border: "2px solid rgba(52, 211, 153, 0.35)",
              background: "#031409",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src="/assets/icon.png"
              alt="Termalime (Lime) Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Clean Headline */}
        <h1 style={{ maxWidth: "860px", margin: "0 auto 1.2rem", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
          The Local AI <span className="text-lime-gradient">Terminal Cockpit</span>
        </h1>

        {/* Concise Description */}
        <p style={{ maxWidth: "680px", margin: "0 auto 2.2rem", fontSize: "1.18rem", lineHeight: "1.65", color: "var(--text-secondary)" }}>
          Termalime is an open source desktop terminal that fuses a high-performance, multi-tab PTY emulator with a private local LLM sidecar powered by Ollama. Zero cloud latency, zero API keys, proactive command preflight safety, and real-time hardware telemetry.
        </p>

        {/* Primary Action Button */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <a
            href="https://github.com/daveymason/Termalime/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="btn-tactile-key"
            style={{ fontSize: "1.1rem", padding: "0.95rem 2.2rem" }}
          >
            <Download size={19} />
            <span>Download v0.5.0</span>
          </a>
        </div>

        {/* Copyable Quick Install */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", margin: "0 auto 4rem" }}>
          <div className="code-pill">
            <span style={{ color: "var(--text-muted)", userSelect: "none" }}>$</span>
            <span>{installCommand}</span>
            <button
              onClick={handleCopyCommand}
              className="code-copy-btn"
              title="Copy installation command"
              aria-label="Copy installation command"
            >
              {copied ? <Check size={14} style={{ color: "var(--lime-bright)" }} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Real Product Screenshot in Clean Minimal Frame */}
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="screenshot-hardware-frame">
            <div className="screenshot-titlebar">
              <div className="window-dots">
                <span className="window-dot window-dot--close" />
                <span className="window-dot window-dot--min" />
                <span className="window-dot window-dot--max" />
              </div>
              <span className="screenshot-title">Termalime — Split Workspace &amp; Saved Commands</span>
              <span style={{ fontSize: "0.7rem", color: "var(--lime-bright)", fontFamily: "var(--font-mono)" }}>
                TAURI 2.X • LINUX
              </span>
            </div>
            <img
              src="/assets/screenshot-main.png"
              alt="Termalime Main Split Cockpit Screenshot"
              className="screenshot-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
