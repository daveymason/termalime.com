import React from "react";
import { Shield, Leaf, ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "3rem" }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div className="brand-icon-box">
                <img src="/assets/key-icon.png" alt="Termalime icon" width="38" height="38" />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff" }}>Termalime</span>
              <span className="brand-tag">Soon Lime</span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", maxWidth: "340px", marginBottom: "1.2rem" }}>
              The high-performance desktop cockpit fusing an xterm PTY emulator with private local LLM intelligence. 100% open source and privacy first.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="https://github.com/daveymason/Termalime"
                target="_blank"
                rel="noopener noreferrer"
                className="badge-pill"
                style={{ textTransform: "none", fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}
              >
                <GithubIcon size={14} />
                <span>github.com/daveymason/Termalime</span>
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Product */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", marginBottom: "1rem" }}>
              Product
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li>
                <a href="#features" className="nav-link" style={{ fontSize: "0.88rem" }}>Features</a>
              </li>
              <li>
                <a href="#simulator" className="nav-link" style={{ fontSize: "0.88rem" }}>Interactive Cockpit</a>
              </li>
              <li>
                <a href="#context-bar" className="nav-link" style={{ fontSize: "0.88rem", color: "var(--lime-bright)" }}>
                  Context Bar Telemetry
                </a>
              </li>
              <li>
                <a href="#preflight" className="nav-link" style={{ fontSize: "0.88rem" }}>Preflight Guard</a>
              </li>
              <li>
                <a href="#gallery" className="nav-link" style={{ fontSize: "0.88rem" }}>Product Gallery</a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Tech & Eco */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", marginBottom: "1rem" }}>
              Ecosystem
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li>
                <a href="#eco-impact" className="nav-link" style={{ fontSize: "0.88rem" }}>Eco Calculator</a>
              </li>
              <li>
                <a href="#roadmap" className="nav-link" style={{ fontSize: "0.88rem" }}>Release Roadmap</a>
              </li>
              <li>
                <a
                  href="https://github.com/daveymason/Termalime/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  <span>Releases</span> <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/daveymason/Termalime/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  <span>Documentation</span> <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Principles */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", marginBottom: "1rem" }}>
              Principles
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                <Shield size={14} style={{ color: "var(--lime-bright)", flexShrink: 0, marginTop: "2px" }} />
                <span>Zero telemetry collected. Your prompts never leave your local machine.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                <Leaf size={14} style={{ color: "var(--lime-bright)", flexShrink: 0, marginTop: "2px" }} />
                <span>Eco-aware computing: spurning megawatt cloud data center cooling.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © 2026 Termalime. Created by Davey Mason &amp; open-source contributors. MIT License.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Google Material 3 surfaces meets Don Norman cognitive design.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
