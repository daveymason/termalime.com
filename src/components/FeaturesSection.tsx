import React from "react";
import {
  Columns,
  Lock,
  Cpu,
  ShieldAlert,
  BookmarkCheck,
  Leaf,
  Layers,
  Monitor,
  Copy,
  Sliders,
  Play,
  Terminal,
  Search,
  Sparkles,
} from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const mainFeatures = [
    {
      icon: <Columns size={22} style={{ color: "var(--lime-bright)" }} />,
      title: "Split-Pane Cockpit",
      desc: "Resizable panes keep your active shell sessions and AI assistant replies side-by-side in a unified window. PTY sessions stay alive while prompting.",
    },
    {
      icon: <Lock size={22} style={{ color: "#38bdf8" }} />,
      title: "100% Private Local LLMs",
      desc: "Powered by Lime, a tailor-made local model trained for terminal commands, or any local Ollama model. Zero cloud API fees, zero prompt logging, and zero network latency.",
    },
    {
      icon: <ShieldAlert size={22} style={{ color: "#f87171" }} />,
      title: "Preflight Security Checker",
      desc: "Intercepts destructive or risky shell commands (like rm -rf /, dangling pipes, and unsafe chmod) before they touch your terminal, with AI-backed risk reasoning.",
    },
    {
      icon: <BookmarkCheck size={22} style={{ color: "#cffd53" }} />,
      title: "Saved Commands Drawer",
      desc: "Save recurring commands and multi-line snippets into a quick-access panel. Run directly into the terminal with a single click and export to clean .txt files.",
    },
    {
      icon: <Leaf size={22} style={{ color: "var(--lime-bright)" }} />,
      title: "Eco Impact Telemetry",
      desc: "Measure the environmental savings of running models locally. The Context Bar continuously tracks grams of CO₂ and milliliters of cooling water spared from cloud data centers.",
    },
    {
      icon: <Cpu size={22} style={{ color: "#fbbf24" }} />,
      title: "Rust & Tauri 2.x Speed",
      desc: "Sub-millisecond input response with portable-pty and asynchronous channel batching. Handles heavy log output without UI lockups or memory leaks.",
    },
  ];

  return (
    <section id="features" className="section" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <div className="badge-pill" style={{ marginBottom: "0.8rem" }}>
            <Layers size={13} />
            <span>FEATURES</span>
          </div>
          <h2>
            Engineered for <span className="text-lime-gradient">Speed &amp; Control</span>
          </h2>
          <p>
            Standard terminal muscle paired with private local intelligence. No bloat, no cloud tracking.
          </p>
        </div>

        {/* Feature Spotlight: v0.6 Codename Bridge */}
        <div
          className="m3-card"
          style={{
            marginBottom: "3.5rem",
            padding: "2rem",
            background: "linear-gradient(145deg, #071911, #020b06)",
            borderColor: "rgba(52, 211, 153, 0.35)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 255, 145, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 1.8rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--lime-bright)",
                padding: "3px 10px",
                borderRadius: "999px",
                background: "rgba(52, 211, 153, 0.15)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
              }}
            >
              NEW IN V0.6 • CODENAME: BRIDGE
            </span>
            <h3 style={{ fontSize: "1.8rem", margin: "10px 0 10px", color: "#fff" }}>
              Fusing Terminal Muscle with AI Flow
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0 }}>
              Version 0.6 eliminates copy-paste friction with interactive execution actions, 1-click terminal error explanation, and instant buffer search.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
            }}
          >
            <div style={{ padding: "1.2rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "10px", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--lime-bright)" }}>
                <Play size={18} />
                <strong style={{ fontSize: "1rem" }}>Interactive Code Blocks</strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                Every shell snippet generated in chat includes <strong>Run in Terminal</strong> (safeguarded by Preflight), <strong>Insert at Prompt</strong>, and <strong>Copy</strong> actions.
              </p>
            </div>

            <div style={{ padding: "1.2rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "10px", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#38bdf8" }}>
                <Sparkles size={18} />
                <strong style={{ fontSize: "1rem" }}>1-Click Error Explainer</strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                Press <strong>Ctrl+Shift+E</strong> or click <strong>Explain</strong> in the Context Bar. Termalime captures recent tracebacks and diagnoses errors with proposed fixes.
              </p>
            </div>

            <div style={{ padding: "1.2rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "10px", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#fbbf24" }}>
                <Search size={18} />
                <strong style={{ fontSize: "1rem" }}>In-Buffer Search (Ctrl+F)</strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                Native floating search bar over the xterm buffer supporting incremental find, case toggling, and match cycling.
              </p>
            </div>

            <div style={{ padding: "1.2rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "10px", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#cffd53" }}>
                <Terminal size={18} />
                <strong style={{ fontSize: "1rem" }}>Smart Tabs &amp; Truecolor</strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                New tabs automatically inherit current directory (CWD), tabs support in-place double-click renaming, and truecolor enables modern CLI themes.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Spotlight: The Rich Context Bar */}
        <div
          className="m3-card"
          style={{
            marginBottom: "3.5rem",
            padding: "2rem",
            background: "linear-gradient(145deg, #05140b, #030805)",
            borderColor: "rgba(52, 211, 153, 0.3)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 1.5rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--lime-bright)",
              }}
            >
              SPOTLIGHT: THE CONTEXT BAR
            </span>
            <h3 style={{ fontSize: "1.6rem", margin: "6px 0 10px", color: "#fff" }}>
              Mission Control Telemetry at the Base
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0 }}>
              The bottom Context Bar is packed with features, providing real-time situational awareness without cluttering your command output.
            </p>
          </div>

          {/* Context Bar Real Screenshot */}
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(52, 211, 153, 0.25)",
              background: "#010402",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
              marginBottom: "1.8rem",
            }}
          >
            <img
              src="/assets/screenshot-contextbar.png"
              alt="Termalime Context Bar Real Screenshot"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Context Bar Features: 5 Items Matching Exact Left-to-Right Order of the Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {/* 1. Far Left: Settings & Commands */}
            <div style={{ padding: "0.85rem", background: "rgba(0, 0, 0, 0.35)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "var(--lime-bright)" }}>
                <Sliders size={15} />
                <strong style={{ fontSize: "0.85rem" }}>1. Quick Launchers</strong>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                One-click access to Settings control room and Saved Commands drawer.
              </p>
            </div>

            {/* 2. System & Host: AVCompu, @user, IP, Shell */}
            <div style={{ padding: "0.85rem", background: "rgba(0, 0, 0, 0.35)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#38bdf8" }}>
                <Monitor size={15} />
                <strong style={{ fontSize: "0.85rem" }}>2. System &amp; Network</strong>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                Live hostname (AVCompu), username, LAN IP address, and shell binary.
              </p>
            </div>

            {/* 3. Hardware Pulse: CPU % & Memory % */}
            <div style={{ padding: "0.85rem", background: "rgba(0, 0, 0, 0.35)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fbbf24" }}>
                <Cpu size={15} />
                <strong style={{ fontSize: "0.85rem" }}>3. Hardware Pulse</strong>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                Low-overhead CPU and Memory load %, automatically paused when minimized.
              </p>
            </div>

            {/* 4. Eco Telemetry: CO2 & Water Saved */}
            <div style={{ padding: "0.85rem", background: "rgba(0, 0, 0, 0.35)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "var(--lime-bright)" }}>
                <Leaf size={15} />
                <strong style={{ fontSize: "0.85rem" }}>4. Eco Tracking</strong>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                Quantifies real-time CO₂ emissions and water cooling spared vs cloud LLMs.
              </p>
            </div>

            {/* 5. Far Right: CWD & 1-Click Copy */}
            <div style={{ padding: "0.85rem", background: "rgba(0, 0, 0, 0.35)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#cffd53" }}>
                <Copy size={15} />
                <strong style={{ fontSize: "0.85rem" }}>5. CWD Clipboard</strong>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>
                Displays active working directory with instantaneous 1-click clipboard copy.
              </p>
            </div>
          </div>
        </div>

        {/* Standard 6-Card Features Grid */}
        <div className="grid-3" style={{ gap: "1.8rem" }}>
          {mainFeatures.map((f, i) => (
            <div
              key={i}
              className="m3-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1.8rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(52, 211, 153, 0.08)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {f.icon}
              </div>

              <h3 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem", color: "#fff" }}>{f.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
