import React, { useState } from "react";
import { Download, Terminal, ShieldAlert, Cpu, Sparkles, Check, Copy, Leaf } from "lucide-react";
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
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#34d399", "#00ff91", "#a3e635", "#ffffff"],
    });
  };

  return (
    <section className="section" style={{ paddingTop: "4.5rem", paddingBottom: "3rem" }}>
      <div className="container" style={{ textAlign: "center" }}>
        
        {/* Eyebrow Chip */}
        <div style={{ display: "inline-block", marginBottom: "1.5rem" }}>
          <div className="badge-pill">
            <span className="pulse-dot" />
            <span>TERMALIME v0.5.0 "ECO" RELEASE • TAURI 2.X &amp; RUST</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 style={{ maxWidth: "1050px", margin: "0 auto 1.5rem" }}>
          Where Terminal Muscle Meets{" "}
          <span className="text-lime-gradient">Local Intelligence.</span>
        </h1>

        {/* Subtitle */}
        <p style={{ maxWidth: "780px", margin: "0 auto 2.5rem", fontSize: "1.2rem", lineHeight: "1.7" }}>
          Stop alt-tabbing between your shell and cloud AI chat. <strong style={{ color: "#fff" }}>Termalime</strong> is a desktop cockpit that fuses an xterm PTY emulator with a zero-latency local LLM sidecar. Zero API keys. Zero cloud fees. Proactive preflight safety checks and real-time hardware telemetry.
        </p>

        {/* Primary CTA Row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          
          <div style={{ position: "relative" }}>
            <a
              href="https://github.com/daveymason/Termalime/releases"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="btn-tactile-key"
              style={{ fontSize: "1.1rem", padding: "1rem 2.2rem" }}
            >
              <Download size={20} />
              <span>Download Free v0.5.0</span>
            </a>
          </div>

          <a href="#simulator" className="btn-tactile-secondary" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
            <Terminal size={19} style={{ color: "var(--lime-bright)" }} />
            <span>Launch Cockpit Demo</span>
          </a>
        </div>

        {/* Quick Install Pill */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", margin: "0 auto 2.8rem" }}>
          <div className="code-pill">
            <span style={{ color: "var(--text-muted)", userSelect: "none" }}>$</span>
            <span>{installCommand}</span>
            <button
              onClick={handleCopyCommand}
              className="code-copy-btn"
              title="Copy installation command"
              aria-label="Copy installation command"
            >
              {copied ? <Check size={15} style={{ color: "var(--lime-bright)" }} /> : <Copy size={15} />}
            </button>
          </div>
        </div>

        {/* Trust & Spec Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.2rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <div className="badge-pill" style={{ textTransform: "none", color: "var(--text-secondary)", borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <Sparkles size={14} style={{ color: "var(--lime-bright)" }} />
            <span>100% Private (Ollama Local Inference)</span>
          </div>

          <div className="badge-pill" style={{ textTransform: "none", color: "var(--text-secondary)", borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <ShieldAlert size={14} style={{ color: "#38bdf8" }} />
            <span>Heuristic Preflight Safety Interceptor</span>
          </div>

          <div className="badge-pill" style={{ textTransform: "none", color: "var(--text-secondary)", borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <Cpu size={14} style={{ color: "#cffd53" }} />
            <span>Sub-Millisecond Rust PTY Streams</span>
          </div>

          <div className="badge-pill" style={{ textTransform: "none", color: "var(--text-secondary)", borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <Leaf size={14} style={{ color: "var(--lime-bright)" }} />
            <span>Eco-Impact: Real-time CO₂ &amp; Water Saved</span>
          </div>
        </div>

      </div>
    </section>
  );
};
