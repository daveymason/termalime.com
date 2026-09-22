import React, { useState } from "react";
import { Download, Check, Copy, Package, Apple, Monitor } from "lucide-react";
import confetti from "canvas-confetti";

export const DownloadCTA: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"deb" | "appimage" | "rpm" | "source">("deb");
  const [copied, setCopied] = useState(false);

  const releaseUrl = "https://github.com/daveymason/Termalime/releases";

  const commands = {
    deb: "sudo apt install ./Termalime_0.5.0_amd64.deb",
    appimage: "chmod +x Termalime_0.5.0_amd64.AppImage && ./Termalime_0.5.0_amd64.AppImage",
    rpm: "sudo rpm -i Termalime-0.5.0-1.x86_64.rpm",
    source: "git clone https://github.com/daveymason/Termalime.git\ncd Termalime\nnpm install\nnpm run tauri build",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.7 },
      colors: ["#34d399", "#00ff91", "#96ff3f", "#cffd53", "#ffffff"],
    });
  };

  return (
    <section id="download" className="section" style={{ background: "linear-gradient(180deg, rgba(2, 6, 4, 0.4), #010402)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Download size={14} />
            <span>GET STARTED IN SECONDS</span>
          </div>
          <h2>
            Ready to Upgrade Your <span className="text-lime-gradient">Daily Cockpit?</span>
          </h2>
          <p>
            Download the latest release for Linux, macOS, or Windows. Free, 100% open source, zero telemetry, and zero subscription fees.
          </p>
        </div>

        {/* Primary Download Card */}
        <div
          className="m3-card"
          style={{
            maxWidth: "880px",
            margin: "0 auto 3rem",
            padding: "2.5rem 2rem",
            background: "linear-gradient(145deg, #051a0e, #020b06)",
            borderColor: "rgba(52, 211, 153, 0.35)",
            boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 255, 145, 0.15)",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
            <img src="/assets/key-icon.png" alt="Termalime icon" width="48" height="48" style={{ borderRadius: "10px" }} />
            <div style={{ textAlign: "left" }}>
              <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#fff" }}>Termalime v0.5.0 "Eco"</h3>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--lime-bright)" }}>
                Latest Stable Release • Linux, macOS &amp; Windows
              </p>
            </div>
          </div>

          <div style={{ margin: "1.5rem 0 2rem" }}>
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="btn-tactile-key"
              style={{ fontSize: "1.2rem", padding: "1.1rem 2.8rem" }}
            >
              <Download size={22} />
              <span>Download Termalime on GitHub Releases</span>
            </a>
          </div>

          {/* Quick Platform Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.8rem", marginBottom: "2rem" }}>
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "0.82rem",
              }}
            >
              <Package size={14} style={{ color: "var(--lime-bright)" }} />
              <span>.deb (Ubuntu/Debian)</span>
            </a>

            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "0.82rem",
              }}
            >
              <Package size={14} style={{ color: "var(--lime-bright)" }} />
              <span>.AppImage (Portable)</span>
            </a>

            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "0.82rem",
              }}
            >
              <Package size={14} style={{ color: "var(--lime-bright)" }} />
              <span>.rpm (Fedora/RHEL)</span>
            </a>

            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "0.82rem",
              }}
            >
              <Apple size={14} style={{ color: "#38bdf8" }} />
              <span>macOS DMG</span>
            </a>

            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "0.82rem",
              }}
            >
              <Monitor size={14} style={{ color: "#38bdf8" }} />
              <span>Windows x64</span>
            </a>
          </div>

          {/* Tabbed Installation Instructions */}
          <div style={{ textAlign: "left", background: "#010402", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", overflow: "hidden" }}>
            <div style={{ display: "flex", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "#030805" }}>
              <button
                onClick={() => setActiveTab("deb")}
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.82rem",
                  background: activeTab === "deb" ? "rgba(52, 211, 153, 0.15)" : "transparent",
                  color: activeTab === "deb" ? "var(--lime-bright)" : "var(--text-muted)",
                  border: "none",
                  borderBottom: activeTab === "deb" ? "2px solid var(--lime-bright)" : "none",
                  cursor: "pointer",
                }}
              >
                Ubuntu / Debian (.deb)
              </button>
              <button
                onClick={() => setActiveTab("appimage")}
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.82rem",
                  background: activeTab === "appimage" ? "rgba(52, 211, 153, 0.15)" : "transparent",
                  color: activeTab === "appimage" ? "var(--lime-bright)" : "var(--text-muted)",
                  border: "none",
                  borderBottom: activeTab === "appimage" ? "2px solid var(--lime-bright)" : "none",
                  cursor: "pointer",
                }}
              >
                AppImage
              </button>
              <button
                onClick={() => setActiveTab("rpm")}
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.82rem",
                  background: activeTab === "rpm" ? "rgba(52, 211, 153, 0.15)" : "transparent",
                  color: activeTab === "rpm" ? "var(--lime-bright)" : "var(--text-muted)",
                  border: "none",
                  borderBottom: activeTab === "rpm" ? "2px solid var(--lime-bright)" : "none",
                  cursor: "pointer",
                }}
              >
                Fedora / RHEL (.rpm)
              </button>
              <button
                onClick={() => setActiveTab("source")}
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.82rem",
                  background: activeTab === "source" ? "rgba(52, 211, 153, 0.15)" : "transparent",
                  color: activeTab === "source" ? "var(--lime-bright)" : "var(--text-muted)",
                  border: "none",
                  borderBottom: activeTab === "source" ? "2px solid var(--lime-bright)" : "none",
                  cursor: "pointer",
                }}
              >
                Build from Source
              </button>
            </div>

            <div style={{ padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
              <pre style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#a7f3d0", whiteSpace: "pre-wrap" }}>
                {commands[activeTab]}
              </pre>
              <button
                onClick={handleCopy}
                style={{
                  background: "rgba(52, 211, 153, 0.12)",
                  border: "1px solid rgba(52, 211, 153, 0.25)",
                  color: "var(--lime-bright)",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.78rem",
                  flexShrink: 0,
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
