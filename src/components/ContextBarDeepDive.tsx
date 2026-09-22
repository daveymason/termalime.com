import React, { useState } from "react";
import {
  Cpu,
  Leaf,
  Monitor,
  Settings2,
  Copy,
  Zap
} from "lucide-react";

export const ContextBarDeepDive: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 0,
      title: "Eco-Impact Engine",
      badge: "World's First Terminal Metric",
      icon: <Leaf size={20} style={{ color: "var(--lime-bright)" }} />,
      desc: "Every time you prompt Lime locally via Ollama instead of a cloud API, you keep carbon emissions and data center cooling water out of hyper-scale server farms. The Context Bar continuously tracks grams of CO₂ and milliliters of water spared in real time, with per-session and all-time lifetime totals.",
      telemetrySnippet: "Leaf 55 mg • Droplets 0.3 mL",
      techNote: "Rust sysinfo IPC engine with per-token local inference carbon models.",
    },
    {
      id: 1,
      title: "Real-time Hardware Vitals",
      badge: "Smart Battery-Aware Polling",
      icon: <Cpu size={20} style={{ color: "#fbbf24" }} />,
      desc: "Monitor your machine's exact CPU load % and Memory utilization % at a single glance. Polling runs via native asynchronous Rust channels every 5 seconds and automatically halts when the window is minimized or hidden, ensuring zero battery drain.",
      telemetrySnippet: "Cpu 3% • Memory 52%",
      techNote: "Backgrounded tick skipping prevents rogue CPU burning when Termalime is minimized.",
    },
    {
      id: 2,
      title: "Deep System Identity & Network",
      badge: "Host & Shell Telemetry",
      icon: <Monitor size={20} style={{ color: "#38bdf8" }} />,
      desc: "Instantaneous situational awareness. The Context Bar displays your local hostname (e.g. AVCompu), active shell user (@adman-voids), LAN IP address (192.168.0.12), and running shell binary (bash, zsh, fish). Never accidentally run a production command on the wrong machine again.",
      telemetrySnippet: "AVCompu • @adman-voids • 192.168.0.12 • bash",
      techNote: "Fast network interface query without external DNS latency.",
    },
    {
      id: 3,
      title: "CWD Sync & 1-Click Clipboard",
      badge: "Zero-Friction Ergonomics",
      icon: <Copy size={20} style={{ color: "#cffd53" }} />,
      desc: "Termalime automatically extracts the active terminal session's current working directory in real time. Need the full path for a script, docker volume mount, or colleague? Tap the copy icon for an instantaneous clipboard copy.",
      telemetrySnippet: "/home/adman-voids [Copy Button]",
      techNote: "Direct PTY process CWD introspection via procfs and macOS/Windows equivalents.",
    },
    {
      id: 4,
      title: "Quick-Access Cockpit Drawers",
      badge: "Don Norman Signifiers",
      icon: <Settings2 size={20} style={{ color: "var(--lime-bright)" }} />,
      desc: "Tactile buttons for Settings (Control Room) and Commands (Saved Snippets) anchored directly at the bottom-left. Adjust font size, toggle chat panel visibility, inspect preflight heuristic thresholds, or execute saved multi-line shell pipelines without cluttering terminal output.",
      telemetrySnippet: "[Settings] [Commands]",
      techNote: "Persistent local SQLite/JSON config storage with zero cloud sync leaks.",
    },
  ];

  return (
    <section id="context-bar" className="section" style={{ background: "rgba(3, 8, 5, 0.6)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Zap size={14} />
            <span>DEEP DIVE: SYSTEM TELEMETRY</span>
          </div>
          <h2>
            The <span className="text-lime-gradient">Context Bar</span>: Mission Control at the Base
          </h2>
          <p>
            Traditional terminals leave you blind to your system status. Termalime anchors an omnipresent, low-overhead telemetry bar at the base of your cockpit, giving you immediate visibility of machine vitals, network state, and environmental impact.
          </p>
        </div>

        {/* Real Product Screenshot Showcase */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="screenshot-hardware-frame" style={{ maxWidth: "1050px", margin: "0 auto" }}>
            <div className="screenshot-titlebar">
              <div className="window-dots">
                <span className="window-dot window-dot--close" />
                <span className="window-dot window-dot--min" />
                <span className="window-dot window-dot--max" />
              </div>
              <span className="screenshot-title">
                Product Screenshot — Real Context Bar Vitals (Termalime v0.5.0)
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--lime-bright)", fontFamily: "var(--font-mono)" }}>
                ACTIVE TELEMETRY BUS
              </span>
            </div>

            <div style={{ padding: "1.2rem", background: "#010402" }}>
              <img
                src="/assets/screenshot-contextbar.png"
                alt="Termalime Context Bar Real Screenshot"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  border: "1px solid rgba(52, 211, 153, 0.25)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Interactive Feature Deep Dive Grid */}
        <div className="grid-2" style={{ alignItems: "stretch" }}>
          {/* Feature List Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveFeature(idx)}
                style={{
                  padding: "1.25rem 1.4rem",
                  borderRadius: "14px",
                  background: activeFeature === idx ? "rgba(10, 25, 17, 0.85)" : "rgba(8, 14, 11, 0.5)",
                  border: activeFeature === idx ? "1px solid rgba(52, 211, 153, 0.4)" : "1px solid rgba(255, 255, 255, 0.06)",
                  boxShadow: activeFeature === idx ? "0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 145, 0.08)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "10px",
                    background: activeFeature === idx ? "rgba(52, 211, 153, 0.15)" : "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "1.05rem", margin: 0, color: activeFeature === idx ? "var(--lime-bright)" : "#fff" }}>
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "999px",
                        background: "rgba(52, 211, 153, 0.1)",
                        color: "var(--lime-bright)",
                        border: "1px solid rgba(52, 211, 153, 0.2)",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.88rem", margin: 0, color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Inspection Showcase Card */}
          <div
            className="m3-card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(145deg, #05140b, #030805)",
              borderColor: "rgba(52, 211, 153, 0.3)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(52, 211, 153, 0.15)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {features[activeFeature].icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--lime-bright)", margin: 0 }}>
                    FEATURE SPECIFICATION
                  </p>
                  <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{features[activeFeature].title}</h3>
                </div>
              </div>

              <div style={{ background: "rgba(0, 0, 0, 0.6)", borderRadius: "10px", padding: "1.2rem", border: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 8px", letterSpacing: "0.06em" }}>
                  Live Telemetry Appearance
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    color: "var(--lime-bright)",
                    padding: "0.75rem 1rem",
                    background: "#020704",
                    borderRadius: "6px",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                >
                  {features[activeFeature].telemetrySnippet}
                </div>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                {features[activeFeature].desc}
              </p>
            </div>

            <div
              style={{
                paddingTop: "1.2rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="pulse-dot" style={{ width: "8px", height: "8px" }} />
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {features[activeFeature].techNote}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
