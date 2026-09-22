import React from "react";
import { Download } from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon } from "./GithubIcon";

export const Navbar: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.9 },
      colors: ["#34d399", "#00ff91", "#96ff3f", "#ffffff"],
    });
  };

  return (
    <header className="header-glass">
      <nav
        className="nav-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
        }}
        aria-label="Main Navigation"
      >
        {/* Simple Text Brand (No Logo in nav as requested) */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>Termalime</span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              padding: "2px 7px",
              borderRadius: "999px",
              background: "rgba(52, 211, 153, 0.12)",
              color: "var(--lime-bright)",
              border: "1px solid rgba(52, 211, 153, 0.25)",
            }}
          >
            Soon Lime
          </span>
        </a>

        {/* Minimal Nav Actions: Just GitHub and Download */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://github.com/daveymason/Termalime"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-secondary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.88rem" }}
            title="View Termalime on GitHub"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://github.com/daveymason/Termalime/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="btn-tactile-key"
            style={{ padding: "0.55rem 1.15rem", fontSize: "0.9rem" }}
          >
            <Download size={15} />
            <span>Download</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
