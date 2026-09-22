import React from "react";
import { Tag, Shield, Sparkles, Leaf, Cpu, Layers } from "lucide-react";

export const ReleaseRoadmap: React.FC = () => {
  const releases = [
    {
      version: "v0.5.0",
      codename: "Eco",
      tag: "CURRENT RELEASE",
      isCurrent: true,
      icon: <Leaf size={18} style={{ color: "var(--lime-bright)" }} />,
      highlights: [
        "Eco Impact Engine: Live CO₂ and water savings telemetry in Context Bar and Settings.",
        "Lifetime eco totals with per-session tracking and reset functionality.",
        "Fixed terminal freeze on large data transfers with UTF-8 boundary batching.",
        "Eliminated chat streaming event duplication; massive speed boost on long model outputs.",
        "Optimized sysinfo context polling with background tick suppression.",
      ],
    },
    {
      version: "v0.4.0",
      codename: "Sustain",
      tag: "PERFORMANCE",
      isCurrent: false,
      icon: <Cpu size={18} style={{ color: "#38bdf8" }} />,
      highlights: [
        "Multi-tab terminal subsystem with portable-pty background threads.",
        "Optimized PTY lock contention using asynchronous channel batching.",
        "Hardened Preflight heuristic tokenization against command bypasses.",
        "Export saved commands directly to clean .txt files.",
        "Alpha preview binaries released for Windows and macOS.",
      ],
    },
    {
      version: "v0.3.0",
      codename: "Context",
      tag: "TELEMETRY",
      isCurrent: false,
      icon: <Layers size={18} style={{ color: "#cffd53" }} />,
      highlights: [
        "Introduced the bottom Context Bar for host and network identity.",
        "Added Quick Access panel to create, edit, run, and delete saved commands.",
        "Auto-reconnect bridge for local Ollama models (e.g. Ministral).",
      ],
    },
    {
      version: "v0.2.0",
      codename: "Pre Flight",
      tag: "SAFETY",
      isCurrent: false,
      icon: <Shield size={18} style={{ color: "#f87171" }} />,
      highlights: [
        "Introduced the first Preflight checker intercepting malicious pasted commands.",
        "Added Control Room settings drawer for font size and bot persona tweaking.",
      ],
    },
    {
      version: "Lime 1.0",
      codename: "Genesis",
      tag: "UPCOMING",
      isUpcoming: true,
      icon: <Sparkles size={18} style={{ color: "#a855f7" }} />,
      highlights: [
        "Full brand evolution: Termalime becomes 'Lime'.",
        "Plugin ecosystem for custom LLM prompts and shell automation hooks.",
        "Built-in one-click local model orchestrator and auto-pull.",
      ],
    },
  ];

  return (
    <section id="roadmap" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Tag size={14} />
            <span>RELEASE TRAIN &amp; EVOLUTION</span>
          </div>
          <h2>
            From <span className="text-lime-gradient">Termalime to Lime</span>
          </h2>
          <p>
            Track the iterative evolution of our desktop cockpit. Every release has focused on hardening performance, expanding safety heuristics, and reducing cognitive friction.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: "880px", margin: "0 auto", position: "relative" }}>
          
          {/* Vertical Track */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "24px",
              width: "2px",
              background: "linear-gradient(180deg, var(--lime-bright) 0%, rgba(52, 211, 153, 0.2) 80%, transparent 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {releases.map((rel, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", position: "relative" }}>
                
                {/* Node Dot */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: rel.isCurrent
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : rel.isUpcoming
                      ? "rgba(168, 85, 247, 0.2)"
                      : "rgba(15, 23, 42, 0.9)",
                    border: rel.isCurrent
                      ? "2px solid #fff"
                      : rel.isUpcoming
                      ? "2px dashed #a855f7"
                      : "2px solid rgba(52, 211, 153, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    boxShadow: rel.isCurrent ? "0 0 20px rgba(0, 255, 145, 0.4)" : "none",
                    flexShrink: 0,
                  }}
                >
                  {rel.icon}
                </div>

                {/* Release Card */}
                <div
                  className="m3-card"
                  style={{
                    flex: 1,
                    padding: "1.4rem",
                    borderColor: rel.isCurrent ? "rgba(52, 211, 153, 0.4)" : "rgba(255, 255, 255, 0.08)",
                    background: rel.isCurrent ? "rgba(4, 18, 10, 0.85)" : "var(--surface-glass)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <h3 style={{ fontSize: "1.25rem", margin: 0, color: "#fff" }}>
                        {rel.version}{" "}
                        <span style={{ fontSize: "0.95rem", color: "var(--lime-bright)", fontWeight: 500 }}>
                          Codename: {rel.codename}
                        </span>
                      </h3>
                    </div>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "999px",
                        background: rel.isCurrent
                          ? "rgba(52, 211, 153, 0.2)"
                          : rel.isUpcoming
                          ? "rgba(168, 85, 247, 0.2)"
                          : "rgba(255, 255, 255, 0.06)",
                        color: rel.isCurrent ? "var(--lime-bright)" : rel.isUpcoming ? "#d8b4fe" : "var(--text-muted)",
                        border: rel.isCurrent ? "1px solid rgba(52, 211, 153, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {rel.tag}
                    </span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", margin: 0, padding: 0 }}>
                    {rel.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--lime-bright)", userSelect: "none" }}>›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
