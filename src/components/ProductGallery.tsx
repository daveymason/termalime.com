import React, { useState } from "react";
import { Eye, Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  tag: string;
  description: string;
}

export const ProductGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "control-room",
      title: "Control Room: Termalime Settings",
      subtitle: "Font Size, Preflight Safety, and Model Configuration",
      imgSrc: "/assets/screenshot-settings.png",
      tag: "SYSTEM CONFIG",
      description:
        "A sleek control center allowing instant adjustment of terminal font size, toggling distraction-free terminal mode, enabling automatic terminal tail snapshot context injection, and choosing which local model powers preflight checks.",
    },
    {
      id: "splash",
      title: "The Ambient Neon Splash Screen",
      subtitle: "Brewing Terminals & Models",
      imgSrc: "/assets/screenshot-splash.png",
      tag: "STARTUP HYDRATION",
      description:
        "Upon launch, Termalime initializes the underlying Tauri Rust PTY registry, checks local model daemon connectivity, and mounts session threads before fading seamlessly into the primary cockpit.",
    },
  ];

  return (
    <section id="gallery" className="section" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Eye size={14} />
            <span>APP SHOWCASE</span>
          </div>
          <h2>
            Built for Focused <span className="text-lime-gradient">Developer Workflows</span>
          </h2>
          <p>
            A closer look at Termalime's interface — from granular controls and model selection in the Control Room to rapid session startup.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid-2" style={{ gap: "2.5rem", maxWidth: "960px", margin: "0 auto" }}>
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
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {item.description}
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
                maxWidth: "1000px",
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
