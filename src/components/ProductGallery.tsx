import React, { useState } from "react";
import { Eye, Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  tag: string;
  description: string;
  donNormanConcept: string;
}

export const ProductGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "cockpit",
      title: "The Split-Pane Desktop Cockpit",
      subtitle: "Full PTY Terminal + Quick Access Commands + Lime Copilot",
      imgSrc: "/assets/screenshot-main.png",
      tag: "CORE WORKSPACE",
      description:
        "The primary workstation fuses an xterm-powered PTY terminal with a persistent local Ollama copilot. The left popover houses reusable saved commands with one-click play buttons, while the right panel streams assistant explanations in real time.",
      donNormanConcept:
        "Natural Mapping: Human commands and active terminal sessions on the left, machine reasoning on the right, keeping mental contexts separated but unified.",
    },
    {
      id: "control-room",
      title: "Control Room: Termalime Settings",
      subtitle: "Font Size, Preflight Safety, and Model Configuration",
      imgSrc: "/assets/screenshot-settings.png",
      tag: "SYSTEM CONFIG",
      description:
        "A sleek control center allowing instant adjustment of terminal font size, toggling distraction-free terminal mode, enabling automatic terminal tail snapshot context injection, and choosing which local Ollama model powers preflight checks.",
      donNormanConcept:
        "Affordance & Visibility: High-contrast toggle switches that clearly signify ON/OFF state and sliders with immediate numerical feedback.",
    },
    {
      id: "splash",
      title: "The Ambient Neon Splash Screen",
      subtitle: "Brewing Terminals & Models",
      imgSrc: "/assets/screenshot-splash.png",
      tag: "STARTUP HYDRATION",
      description:
        "Upon launch, Termalime initializes the underlying Tauri Rust PTY registry, checks local Ollama model daemon connectivity, and mounts session threads before fading seamlessly into the primary cockpit.",
      donNormanConcept:
        "System Status Feedback: Reassures the user that background services (PTY subsystem and Ollama bridge) are actively loading rather than hanging.",
    },
    {
      id: "context-bar",
      title: "High-Precision Context Bar",
      subtitle: "Vitals, Network, Hardware & Eco Impact",
      imgSrc: "/assets/screenshot-contextbar.png",
      tag: "MISSION CONTROL",
      description:
        "The anchor of the application. Provides at-a-glance host context (AVCompu @adman-voids), local network IP, shell type, CPU load, memory utilization, real-time CO2 / water savings, and one-click working directory copy.",
      donNormanConcept:
        "Signifiers: Low-cognitive-load icons paired with unambiguous telemetry values, placed where eyes naturally look for status.",
    },
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Eye size={14} />
            <span>REAL PRODUCT SHOWCASE</span>
          </div>
          <h2>
            Designed for <span className="text-lime-gradient">Speed, Safety &amp; Focus</span>
          </h2>
          <p>
            Inspect real screenshots of Termalime in production. Every pixel, toggle, and telemetry badge has been engineered according to Don Norman's principles of discoverability and tactile feedback.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid-2" style={{ gap: "2.5rem" }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="screenshot-hardware-frame"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#030805",
                borderColor: "rgba(52, 211, 153, 0.2)",
              }}
            >
              {/* Titlebar */}
              <div className="screenshot-titlebar">
                <div className="window-dots">
                  <span className="window-dot window-dot--close" />
                  <span className="window-dot window-dot--min" />
                  <span className="window-dot window-dot--max" />
                </div>
                <span className="screenshot-title">{item.title}</span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--lime-bright)",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "rgba(52, 211, 153, 0.1)",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Image Preview with Hover Overlay */}
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: "#010402",
                }}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "contain",
                    display: "block",
                    padding: "1rem",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.45)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <Maximize2 size={18} style={{ color: "var(--lime-bright)" }} />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Details & Copywriting */}
              <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem", color: "#fff" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: "0 0 1rem" }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    padding: "0.8rem",
                    borderRadius: "8px",
                    background: "rgba(52, 211, 153, 0.05)",
                    border: "1px solid rgba(52, 211, 153, 0.15)",
                  }}
                >
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--lime-bright)", margin: "0 0 4px", fontWeight: 700 }}>
                    Don Norman Principle
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                    {item.donNormanConcept}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(12px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              style={{
                maxWidth: "1100px",
                width: "100%",
                background: "#040b06",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                borderRadius: "16px",
                boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95), 0 0 60px rgba(0, 255, 145, 0.2)",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem 1.25rem",
                  background: "#060f09",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#fff" }}>{selectedImage.title}</h4>
                  <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {selectedImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#fff",
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: "1.5rem", background: "#010302", textAlign: "center" }}>
                <img
                  src={selectedImage.imgSrc}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                />
              </div>

              <div style={{ padding: "1.2rem 1.5rem", background: "#040c07" }}>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
