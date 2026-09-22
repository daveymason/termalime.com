import React from "react";
import {
  Columns,
  ShieldCheck,
  BookmarkCheck,
  Zap,
  Leaf,
  Layers,
  Lock
} from "lucide-react";

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Columns size={24} style={{ color: "var(--lime-bright)" }} />,
      title: "Split-Pane Cockpit",
      subtitle: "Zero Alt-Tabbing",
      desc: "Resizable panes keep your active shell sessions and AI assistant replies side-by-side in a single ergonomic window. PTY sessions stay alive while prompting.",
    },
    {
      icon: <Lock size={24} style={{ color: "#38bdf8" }} />,
      title: "100% Local & Private",
      subtitle: "Powered by Ollama",
      desc: "Zero API keys. Zero cloud fees. Zero telemetry. All intelligence runs directly on your local GPU/CPU via async Rust reqwest streams.",
    },
    {
      icon: <Zap size={24} style={{ color: "#cffd53" }} />,
      title: "Asynchronous PTY Engine",
      subtitle: "Sub-Millisecond Batching",
      desc: "Built on portable-pty and Tauri 2.x Rust. Asynchronous channel batching prevents thread contention even during high-throughput log streams.",
    },
    {
      icon: <ShieldCheck size={24} style={{ color: "#f87171" }} />,
      title: "Preflight Security Guard",
      subtitle: "Heuristic Tokenization",
      desc: "Catches catastrophic commands (like rm -rf /, dangling pipes, and unsafe chmod) with shell-aware heuristic parsing and AI escalation.",
    },
    {
      icon: <BookmarkCheck size={24} style={{ color: "#a7f3d0" }} />,
      title: "Saved Commands Drawer",
      subtitle: "Instant 1-Click Execution",
      desc: "Curate your everyday scripts and complex pipelines. Execute directly into your active PTY with a single click and export cleanly to .txt.",
    },
    {
      icon: <Leaf size={24} style={{ color: "var(--lime-bright)" }} />,
      title: "Eco Impact Telemetry",
      subtitle: "Quantify Carbon & Water",
      desc: "Track the real-time environmental dividend of local computing. Measure grams of CO₂ and milliliters of data-center cooling water saved.",
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Layers size={14} />
            <span>BUILT FOR TERMINAL POWER USERS</span>
          </div>
          <h2>
            Engineered with <span className="text-lime-gradient">Speed, Ergonomics &amp; Privacy</span>
          </h2>
          <p>
            Termalime rethinks the command line from first principles—bridging low-latency shell ergonomics with zero-cloud artificial intelligence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid-3">
          {features.map((f, i) => (
            <div key={i} className="m3-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(52, 211, 153, 0.08)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.2rem",
                  }}
                >
                  {f.icon}
                </div>

                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                    {f.subtitle}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", margin: "4px 0 0", color: "#fff" }}>{f.title}</h3>
                </div>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {f.desc}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--lime-bright)", fontFamily: "var(--font-mono)" }}>
                  ✓ Included in v0.5.0
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
