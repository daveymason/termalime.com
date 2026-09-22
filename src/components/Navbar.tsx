import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon } from "./GithubIcon";

interface NavbarProps {
  onDownloadClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.15, x: 0.85 },
      colors: ["#34d399", "#00ff91", "#96ff3f", "#ffffff"],
    });

    if (onDownloadClick) {
      onDownloadClick();
    }
  };

  return (
    <header className="header-glass">
      <nav className="nav-container" aria-label="Main Navigation">
        <a href="#" className="brand-link" title="Termalime (Lime)">
          <div className="brand-icon-box">
            <img src="/assets/key-icon.png" alt="Termalime tactile keycap logo" width="38" height="38" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#fff", fontWeight: 800 }}>Termalime</span>
              <span className="brand-tag">Evolving to Lime</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <a href="#features" className="nav-link">Features</a>
          </li>
          <li>
            <a href="#simulator" className="nav-link">Interactive Demo</a>
          </li>
          <li>
            <a href="#context-bar" className="nav-link" style={{ color: "var(--lime-bright)" }}>
              Context Bar ✨
            </a>
          </li>
          <li>
            <a href="#preflight" className="nav-link">Preflight Safety</a>
          </li>
          <li>
            <a href="#gallery" className="nav-link">App Gallery</a>
          </li>
          <li>
            <a href="#eco-impact" className="nav-link">Eco Impact</a>
          </li>
          <li>
            <a href="#roadmap" className="nav-link">Releases</a>
          </li>
        </ul>

        {/* Action Group */}
        <div className="nav-cta-group">
          <a
            href="https://github.com/daveymason/Termalime"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-secondary"
            style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}
            title="Star Termalime on GitHub"
          >
            <GithubIcon size={16} />
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              GitHub
            </span>
          </a>

          <a
            href="https://github.com/daveymason/Termalime/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="btn-tactile-key"
            style={{ padding: "0.65rem 1.25rem", fontSize: "0.92rem" }}
          >
            <Download size={16} />
            <span>Download v0.5.0</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="menu">
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)}>Interactive Demo</a>
          <a href="#context-bar" onClick={() => setMobileMenuOpen(false)}>Context Bar Telemetry</a>
          <a href="#preflight" onClick={() => setMobileMenuOpen(false)}>Preflight Safety Guard</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>App Gallery</a>
          <a href="#eco-impact" onClick={() => setMobileMenuOpen(false)}>Eco Impact Tracker</a>
          <a href="#roadmap" onClick={() => setMobileMenuOpen(false)}>Release History</a>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <a
              href="https://github.com/daveymason/Termalime/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-key"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Download size={16} /> Download v0.5.0
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
