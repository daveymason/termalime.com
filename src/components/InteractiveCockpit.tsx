import React, { useState, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  Play,
  Copy,
  Send,
  Sparkles,
  Code2,
  Monitor,
  Network,
  Cpu,
  Droplets,
  Leaf,
  Check,
  ShieldAlert,
  X,
  FileText,
  Sliders,
  CornerDownLeft,
  RefreshCw,
  Plus
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  commandSuggestion?: string;
}

export const InteractiveCockpit: React.FC = () => {
  // Tabs State
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { id: 0, title: "1: bash (main)" },
    { id: 1, title: "2: ollama-tail" },
  ]);

  // Terminal Lines
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Termalime v0.5.0 (x86_64-unknown-linux-gnu)",
    "Type a command or click an interactive preset below...",
    "adman-voids@AVCompu:~$ git status",
    "On branch main, your branch is up to date with 'origin/main'.",
    "adman-voids@AVCompu:~$ ollama list",
    "NAME           ID              SIZE      MODIFIED",
    "k9/Doggo:3b    7f893e41        2.1 GB    2 hours ago",
    "llama3.2:3b    a239b001        2.0 GB    1 day ago",
  ]);

  const [inputCommand, setInputCommand] = useState("");
  const [copiedPath, setCopiedPath] = useState(false);
  const [copiedChatId, setCopiedChatId] = useState<string | null>(null);

  // Modals & Panels State
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [savedCommandsOpen, setSavedCommandsOpen] = useState(false);
  const [preflightOpen, setPreflightOpen] = useState(false);
  const [preflightCommand, setPreflightCommand] = useState("");

  // Settings mock state
  const [fontSize, setFontSize] = useState(14);
  const [showChatPanel, setShowChatPanel] = useState(true);
  const [attachSnapshot, setAttachSnapshot] = useState(true);
  const [preflightCheckEnabled, setPreflightCheckEnabled] = useState(true);
  const [selectedModel, setSelectedModel] = useState("k9/Doggo:3b");

  // Chat Messages State
  const [chatInput, setChatInput] = useState("");
  const [isBotStreaming, setIsBotStreaming] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Summarize content\nOffer suggestions\nEngage in simple conversations\nWhat would you like me to help with today?",
      timestamp: "10:24 PM",
    },
    {
      id: "2",
      sender: "user",
      text: "Who are you? Who built you? What tasks do you excel at?",
      timestamp: "10:24 PM",
    },
    {
      id: "3",
      sender: "bot",
      text: "I am Lime Copilot running 100% locally on your machine via Ollama! I excel at analyzing shell logs, generating secure bash scripts, explaining compiler errors, and watching your terminal context in real time.",
      timestamp: "10:24 PM",
      commandSuggestion: "lime context --vitals",
    },
  ]);

  // Telemetry Mock Realtime Updates
  const [cpuUsage, setCpuUsage] = useState(3);
  const memUsage = 52;
  const [co2Saved, setCo2Saved] = useState(55);
  const [waterSaved, setWaterSaved] = useState(0.3);

  // Periodic subtle fluctuation to look alive
  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage((prev) => Math.min(18, Math.max(2, prev + (Math.random() > 0.5 ? 1 : -1))));
      setCo2Saved((prev) => +(prev + 0.1).toFixed(1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Run Terminal Command handler
  const handleExecuteCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    // Check if command is dangerous
    if (cmd.includes("rm -rf") || cmd.includes(":(){ :|:& };:") || cmd.includes("mkfs") || cmd.includes("> /dev/sda")) {
      setPreflightCommand(cmd);
      setPreflightOpen(true);
      return;
    }

    setTerminalHistory((prev) => [
      ...prev,
      `adman-voids@AVCompu:~$ ${cmd}`,
      cmd === "clear"
        ? ""
        : cmd.startsWith("echo")
        ? cmd.replace("echo ", "")
        : `[Termalime PTY] Executed "${cmd}" successfully with zero latency (exit code 0).`,
    ]);
    setInputCommand("");
  };

  // Run command suggested by bot
  const handleRunInTerminal = (cmd: string) => {
    handleExecuteCommand(cmd);
  };

  // Send message to Lime Copilot
  const handleSendChat = () => {
    if (!chatInput.trim() || isBotStreaming) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: chatInput,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const prompt = chatInput;
    setChatInput("");
    setIsBotStreaming(true);

    // Simulate streaming response
    setTimeout(() => {
      let botResponse = "";
      let suggestion = "";

      if (prompt.toLowerCase().includes("docker")) {
        botResponse = "Here is an optimized docker command with healthcheck inspection enabled:";
        suggestion = "docker compose ps --format 'table {{.Name}}\t{{.Status}}'";
      } else if (prompt.toLowerCase().includes("git")) {
        botResponse = "Your working tree is clean. Here is a compact graph log of recent commits:";
        suggestion = "git log --oneline --graph --decorate -n 5";
      } else {
        botResponse = `Understood. Analyzing "${prompt}" with local model ${selectedModel}. System load is optimal (${cpuUsage}% CPU). Let me know if you want me to execute an automated shell pipeline.`;
        suggestion = "lime doctor --report";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          commandSuggestion: suggestion,
        },
      ]);
      setIsBotStreaming(false);
      setCo2Saved((prev) => +(prev + 4.2).toFixed(1));
      setWaterSaved((prev) => +(prev + 0.05).toFixed(2));
    }, 700);
  };

  const copyPath = () => {
    navigator.clipboard.writeText("/home/adman-voids");
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  const copyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedChatId(id);
    setTimeout(() => setCopiedChatId(null), 2000);
  };

  return (
    <section id="simulator" className="section" style={{ paddingTop: "2rem" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} />
            <span>DON NORMAN MEETS MATERIAL 3 • LIVE SIMULATOR</span>
          </div>
          <h2>
            Experience the <span className="text-lime-gradient">Dual Cockpit</span> in Action
          </h2>
          <p>
            Interact with our simulated Termalime workspace. Type in the terminal, prompt the local copilot, inspect live hardware telemetry, or trigger the Preflight safety interceptor.
          </p>
        </div>

        {/* The Cockpit Container */}
        <div
          className="m3-card"
          style={{
            padding: 0,
            background: "#020704",
            borderColor: "rgba(52, 211, 153, 0.22)",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 255, 145, 0.12)",
          }}
        >
          {/* OS Titlebar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 1.25rem",
              background: "#050b07",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="window-dot window-dot--close" />
              <span className="window-dot window-dot--min" />
              <span className="window-dot window-dot--max" />
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginLeft: "10px", fontFamily: "var(--font-mono)" }}>
                Termalime — Split Workspace (Active Session #1)
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="badge-pill" style={{ padding: "0.2rem 0.6rem", fontSize: "0.7rem", borderColor: "rgba(52, 211, 153, 0.3)" }}>
                <span className="pulse-dot" />
                <span>OLLAMA CONNECTED</span>
              </span>
            </div>
          </div>

          {/* Terminal Tabs Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0.5rem 1rem 0",
              background: "#030805",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              overflowX: "auto",
            }}
          >
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  background: activeTab === idx ? "rgba(52, 211, 153, 0.12)" : "rgba(0, 0, 0, 0.35)",
                  color: activeTab === idx ? "#bbf7d0" : "var(--text-secondary)",
                  border: activeTab === idx ? "1px solid rgba(52, 211, 153, 0.35)" : "1px solid rgba(255, 255, 255, 0.06)",
                  borderBottom: "none",
                  borderRadius: "8px 8px 0 0",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <TerminalIcon size={13} style={{ color: activeTab === idx ? "var(--lime-bright)" : "var(--text-muted)" }} />
                <span>{tab.title}</span>
              </button>
            ))}

            <button
              onClick={() => {
                const nextId = tabs.length;
                setTabs([...tabs, { id: nextId, title: `${nextId + 1}: zsh-tab` }]);
                setActiveTab(tabs.length);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "26px",
                background: "transparent",
                border: "1px dashed rgba(255, 255, 255, 0.15)",
                color: "var(--text-muted)",
                borderRadius: "6px",
                cursor: "pointer",
                marginBottom: "2px",
              }}
              title="Open new terminal tab"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Main Dual-Pane Cockpit */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: showChatPanel ? "62% 38%" : "1fr",
              minHeight: "440px",
              background: "#020503",
              position: "relative",
            }}
          >
            {/* LEFT PANE: PTY Terminal */}
            <div
              style={{
                padding: "1.2rem",
                display: "flex",
                flexDirection: "column",
                borderRight: showChatPanel ? "1px solid rgba(52, 211, 153, 0.1)" : "none",
                fontFamily: "var(--font-mono)",
                position: "relative",
              }}
            >
              {/* Preset Shortcuts */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", alignSelf: "center", marginRight: "4px" }}>
                  Try commands:
                </span>
                <button
                  onClick={() => handleExecuteCommand("git status")}
                  className="badge-pill"
                  style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", textTransform: "none", cursor: "pointer" }}
                >
                  git status
                </button>
                <button
                  onClick={() => handleExecuteCommand("docker compose ps")}
                  className="badge-pill"
                  style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", textTransform: "none", cursor: "pointer" }}
                >
                  docker compose ps
                </button>
                <button
                  onClick={() => handleExecuteCommand("rm -rf /* --no-preserve-root")}
                  className="badge-pill"
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.55rem",
                    textTransform: "none",
                    cursor: "pointer",
                    background: "rgba(239, 68, 68, 0.12)",
                    borderColor: "rgba(239, 68, 68, 0.35)",
                    color: "#fca5a5",
                  }}
                  title="Test Preflight Interceptor"
                >
                  ⚠️ rm -rf /* (Preflight Test)
                </button>
                <button
                  onClick={() => handleExecuteCommand("clear")}
                  className="badge-pill"
                  style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", textTransform: "none", cursor: "pointer" }}
                >
                  clear
                </button>
              </div>

              {/* Terminal Logs Output */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  fontSize: "0.85rem",
                  lineHeight: "1.55",
                  color: "#d1fae5",
                  maxHeight: "310px",
                  paddingRight: "0.5rem",
                }}
              >
                {terminalHistory.map((line, i) => (
                  <div key={i} style={{ marginBottom: "2px", wordBreak: "break-all" }}>
                    {line.startsWith("adman-voids@AVCompu:~$") ? (
                      <span>
                        <span style={{ color: "var(--lime-bright)", fontWeight: 700 }}>adman-voids@AVCompu</span>
                        <span style={{ color: "#38bdf8" }}>:~$ </span>
                        <span style={{ color: "#fff" }}>{line.replace("adman-voids@AVCompu:~$ ", "")}</span>
                      </span>
                    ) : line.includes("⚠️") ? (
                      <span style={{ color: "#f87171" }}>{line}</span>
                    ) : (
                      <span style={{ color: "rgba(209, 250, 229, 0.85)" }}>{line}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Terminal Input Prompt */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleExecuteCommand(inputCommand);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "0.8rem",
                  paddingTop: "0.6rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span style={{ color: "var(--lime-bright)", fontWeight: 700, fontSize: "0.85rem" }}>
                  adman-voids@AVCompu:~$
                </span>
                <input
                  type="text"
                  value={inputCommand}
                  onChange={(e) => setInputCommand(e.target.value)}
                  placeholder="type command & press Enter..."
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "rgba(52, 211, 153, 0.15)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    color: "var(--lime-bright)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                  }}
                >
                  <CornerDownLeft size={13} />
                </button>
              </form>

              {/* Quick Access Saved Commands Drawer (inside Cockpit) */}
              {savedCommandsOpen && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "15px",
                    width: "320px",
                    background: "#031109",
                    border: "1px solid rgba(52, 211, 153, 0.35)",
                    borderRadius: "12px",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 255, 145, 0.15)",
                    zIndex: 20,
                    padding: "1rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--lime-bright)", margin: 0 }}>
                        QUICK ACCESS
                      </p>
                      <h4 style={{ margin: 0, fontSize: "1rem" }}>Saved Commands</h4>
                    </div>
                    <button
                      onClick={() => setSavedCommandsOpen(false)}
                      style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "180px", overflowY: "auto" }}>
                    <div
                      style={{
                        padding: "0.6rem",
                        background: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", margin: 0 }}>Stop Ollama</p>
                        <code style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>sudo systemctl stop ollama</code>
                      </div>
                      <button
                        onClick={() => {
                          handleExecuteCommand("sudo systemctl stop ollama");
                          setSavedCommandsOpen(false);
                        }}
                        style={{
                          background: "rgba(52, 211, 153, 0.2)",
                          border: "none",
                          color: "var(--lime-bright)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        title="Run in terminal"
                      >
                        <Play size={12} />
                      </button>
                    </div>

                    <div
                      style={{
                        padding: "0.6rem",
                        background: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", margin: 0 }}>Start Ollama</p>
                        <code style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>sudo systemctl start ollama</code>
                      </div>
                      <button
                        onClick={() => {
                          handleExecuteCommand("sudo systemctl start ollama");
                          setSavedCommandsOpen(false);
                        }}
                        style={{
                          background: "rgba(52, 211, 153, 0.2)",
                          border: "none",
                          color: "var(--lime-bright)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        title="Run in terminal"
                      >
                        <Play size={12} />
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.8rem", paddingTop: "0.6rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>4 saved scripts</span>
                    <button
                      onClick={() => alert("Commands exported to saved-commands.txt!")}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--lime-bright)",
                        fontSize: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                      }}
                    >
                      <FileText size={12} /> Export (.txt)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT PANE: Lime Copilot AI Chat */}
            {showChatPanel && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#030a06",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Chat Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 1rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                    background: "#040d08",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Sparkles size={15} style={{ color: "var(--lime-bright)" }} />
                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Lime Copilot</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: "var(--lime-bright)" }}>
                      <span className="pulse-dot" style={{ width: "6px", height: "6px" }} /> Ready
                    </span>
                  </div>

                  {/* Model Selector */}
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(52, 211, 153, 0.25)",
                      borderRadius: "6px",
                      color: "#bbf7d0",
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.5rem",
                      outline: "none",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <option value="k9/Doggo:3b">k9/Doggo:3b</option>
                    <option value="llama3.2:3b">llama3.2:3b</option>
                    <option value="mistral:7b">mistral:7b</option>
                  </select>
                </div>

                {/* Chat Messages Body */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    maxHeight: "330px",
                  }}
                >
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                        maxWidth: "88%",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.75rem 0.9rem",
                          borderRadius: m.sender === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                          background:
                            m.sender === "user"
                              ? "linear-gradient(135deg, #1e40af, #2563eb)"
                              : "rgba(10, 25, 16, 0.85)",
                          border:
                            m.sender === "user"
                              ? "1px solid rgba(96, 165, 250, 0.3)"
                              : "1px solid rgba(52, 211, 153, 0.2)",
                          color: "#fff",
                          fontSize: "0.85rem",
                          lineHeight: "1.45",
                          whiteSpace: "pre-line",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", fontSize: "0.7rem", color: m.sender === "user" ? "#bfdbfe" : "var(--lime-bright)" }}>
                          <span>{m.sender === "user" ? "You" : selectedModel}</span>
                          <span>{m.timestamp}</span>
                        </div>
                        {m.text}

                        {m.commandSuggestion && (
                          <div
                            style={{
                              marginTop: "0.6rem",
                              paddingTop: "0.5rem",
                              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "8px",
                            }}
                          >
                            <code style={{ fontSize: "0.75rem", color: "var(--lime-bright)" }}>
                              {m.commandSuggestion}
                            </code>
                            <button
                              onClick={() => handleRunInTerminal(m.commandSuggestion!)}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: "rgba(52, 211, 153, 0.2)",
                                border: "1px solid rgba(52, 211, 153, 0.3)",
                                color: "var(--lime-bright)",
                                padding: "3px 7px",
                                borderRadius: "4px",
                                fontSize: "0.72rem",
                                cursor: "pointer",
                              }}
                              title="Run suggested command in terminal"
                            >
                              <Play size={10} /> Run
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Subtle hover controls */}
                      <div style={{ display: "flex", gap: "8px", marginTop: "3px", justifyContent: m.sender === "user" ? "flex-end" : "flex-start" }}>
                        <button
                          onClick={() => copyMessage(m.id, m.text)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--text-muted)",
                            fontSize: "0.7rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                          }}
                        >
                          {copiedChatId === m.id ? <Check size={11} style={{ color: "var(--lime-bright)" }} /> : <Copy size={11} />}
                          <span>{copiedChatId === m.id ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                    </div>
                  ))}

                  {isBotStreaming && (
                    <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "6px", color: "var(--lime-bright)", fontSize: "0.8rem" }}>
                      <RefreshCw size={13} className="spin" />
                      <span>Thinking with {selectedModel}...</span>
                    </div>
                  )}
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChat();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0.75rem 1rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    background: "#040b07",
                  }}
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask Lime..."
                    style={{
                      flex: 1,
                      background: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      padding: "0.55rem 0.8rem",
                      color: "#fff",
                      fontSize: "0.85rem",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      border: "none",
                      color: "#021208",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 0 10px rgba(0, 255, 145, 0.3)",
                    }}
                    title="Send to Lime Copilot"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* THE CONTEXT BAR (Bottom Telemetry Bar as requested) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.45rem 1rem",
              background: "#030805",
              borderTop: "1px solid rgba(52, 211, 153, 0.15)",
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {/* Left Action Buttons: Settings & Commands */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button
                onClick={() => setSettingsOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "0.25rem 0.6rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "6px",
                  color: "#e2e8f0",
                  cursor: "pointer",
                  fontSize: "0.78rem",
                }}
                title="Open Control Room Settings"
              >
                <Sliders size={13} style={{ color: "var(--lime-bright)" }} />
                <span>Settings</span>
              </button>

              <button
                onClick={() => setSavedCommandsOpen(!savedCommandsOpen)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "0.25rem 0.6rem",
                  background: savedCommandsOpen ? "rgba(52, 211, 153, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(52, 211, 153, 0.25)",
                  borderRadius: "6px",
                  color: "#e2e8f0",
                  cursor: "pointer",
                  fontSize: "0.78rem",
                }}
                title="Open Quick Access Saved Commands"
              >
                <Code2 size={13} style={{ color: "var(--lime-bright)" }} />
                <span>Commands</span>
              </button>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "16px", background: "rgba(255, 255, 255, 0.1)" }} />

            {/* System Context & Host Telemetry */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#38bdf8" }} title="Hostname">
                <Monitor size={13} />
                <span>AVCompu</span>
              </span>

              <span style={{ color: "var(--text-muted)" }} title="Active user">
                @adman-voids
              </span>

              <span style={{ display: "flex", alignItems: "center", gap: "5px" }} title="Local IP">
                <Network size={13} style={{ color: "var(--lime-bright)" }} />
                <span>192.168.0.12</span>
              </span>

              <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#a7f3d0" }} title="Shell">
                <TerminalIcon size={13} />
                <span>bash</span>
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "16px", background: "rgba(255, 255, 255, 0.1)" }} />

            {/* Hardware & Eco Telemetry Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#fbbf24" }} title="CPU Usage">
                <Cpu size={13} />
                <span>{cpuUsage}%</span>
              </span>

              <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#38bdf8" }} title="Memory Usage">
                <span>RAM {memUsage}%</span>
              </span>

              {/* CO2 Saved Telemetry */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "var(--lime-bright)",
                  background: "rgba(52, 211, 153, 0.1)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                }}
                title="CO₂ saved by running locally vs cloud API"
              >
                <Leaf size={12} />
                <span>{co2Saved} mg</span>
              </span>

              {/* Water Saved Telemetry */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#38bdf8",
                  background: "rgba(56, 189, 248, 0.1)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
                title="Water cooling spared in data centers"
              >
                <Droplets size={12} />
                <span>{waterSaved} mL</span>
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "16px", background: "rgba(255, 255, 255, 0.1)" }} />

            {/* CWD Path + 1-Click Clipboard */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }} title="Current Working Directory">
                /home/adman-voids
              </span>
              <button
                onClick={copyPath}
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedPath ? "var(--lime-bright)" : "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                title="Copy working directory"
              >
                {copiedPath ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
        </div>

        {/* MODAL 1: Control Room / Termalime Settings Replica */}
        {settingsOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                width: "460px",
                maxWidth: "100%",
                background: "#040e08",
                border: "1px solid rgba(52, 211, 153, 0.35)",
                borderRadius: "16px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 255, 145, 0.15)",
                padding: "1.8rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--lime-bright)", margin: 0 }}>
                    CONTROL ROOM
                  </p>
                  <h3 style={{ margin: "4px 0 0", fontSize: "1.3rem" }}>Termalime settings</h3>
                </div>
                <button
                  onClick={() => setSettingsOpen(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "none",
                    color: "var(--text-muted)",
                    width: "32px",
                    height: "32px",
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

              {/* Font Size Slider */}
              <div style={{ marginBottom: "1.4rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Terminal font size</span>
                  <span style={{ fontSize: "0.88rem", color: "var(--lime-bright)", fontFamily: "var(--font-mono)" }}>
                    {fontSize}px
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="22"
                  value={fontSize}
                  onChange={(e) => setFontSize(+e.target.value)}
                  style={{ width: "100%", accentColor: "var(--lime-bright)" }}
                />
              </div>

              {/* Toggles */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1.2rem" }}>
                {/* Show Chat Panel */}
                <div
                  style={{
                    padding: "0.85rem",
                    borderRadius: "10px",
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>Show chat</span>
                    <input
                      type="checkbox"
                      checked={showChatPanel}
                      onChange={(e) => setShowChatPanel(e.target.checked)}
                      style={{ accentColor: "var(--lime-bright)", width: "16px", height: "16px" }}
                    />
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: 0 }}>
                    Hide when you want a distraction-free shell.
                  </p>
                </div>

                {/* Attach Snapshot */}
                <div
                  style={{
                    padding: "0.85rem",
                    borderRadius: "10px",
                    background: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>Tail snapshot</span>
                    <input
                      type="checkbox"
                      checked={attachSnapshot}
                      onChange={(e) => setAttachSnapshot(e.target.checked)}
                      style={{ accentColor: "var(--lime-bright)", width: "16px", height: "16px" }}
                    />
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: 0 }}>
                    Auto-sends tail output so the AI has context.
                  </p>
                </div>
              </div>

              {/* Preflight Check Commands Toggle */}
              <div
                style={{
                  padding: "0.85rem",
                  borderRadius: "10px",
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  marginBottom: "1.4rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>Preflight check commands</span>
                  <input
                    type="checkbox"
                    checked={preflightCheckEnabled}
                    onChange={(e) => setPreflightCheckEnabled(e.target.checked)}
                    style={{ accentColor: "var(--lime-bright)", width: "16px", height: "16px" }}
                  />
                </div>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: 0 }}>
                  Intercepts risky commands, runs heuristics, and escalates to AI before execution.
                </p>
              </div>

              {/* Preflight Model Selector */}
              <div style={{ marginBottom: "1.4rem" }}>
                <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>
                  Preflight analyzer model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "8px",
                    color: "#fff",
                    padding: "0.6rem",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <option value="k9/Doggo:3b">k9/Doggo:3b (Ultra-fast 3B security scanner)</option>
                  <option value="llama3.2:3b">llama3.2:3b (Meta Llama lightweight)</option>
                  <option value="mistral:7b">mistral:7b (Mistral high-reasoning)</option>
                </select>
              </div>

              <button
                onClick={() => setSettingsOpen(false)}
                className="btn-tactile-key"
                style={{ width: "100%", padding: "0.75rem", fontSize: "0.95rem" }}
              >
                Save &amp; Apply
              </button>
            </div>
          </div>
        )}

        {/* MODAL 2: Preflight Security Scanner Interceptor (Don Norman Error Prevention) */}
        {preflightOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(10px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                width: "520px",
                maxWidth: "100%",
                background: "#0e0606",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                borderRadius: "16px",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.9), 0 0 35px rgba(239, 68, 68, 0.2)",
                padding: "1.8rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1.2rem" }}>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "#f87171",
                  }}
                >
                  <ShieldAlert size={26} />
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#f87171", margin: 0, fontWeight: 700 }}>
                    PREFLIGHT SECURITY CHECK
                  </p>
                  <h3 style={{ margin: "4px 0", fontSize: "1.25rem", color: "#fff" }}>
                    ⚠️ Command requires deliberate review
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                    Termalime intercepted a potentially destructive shell operation.
                  </p>
                </div>
              </div>

              <div style={{ background: "#050202", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "8px", padding: "0.85rem", marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", margin: "0 0 4px", textTransform: "uppercase" }}>Intercepted Command</p>
                <code style={{ fontSize: "0.85rem", color: "#fca5a5", fontFamily: "var(--font-mono)" }}>
                  {preflightCommand}
                </code>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f87171", margin: "0 0 4px" }}>Risk Reasoning</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                  Recursive root deletion (`rm -rf /*`) with `--no-preserve-root` bypasses Linux kernel protections and erases all mounted filesystems irreversibly.
                </p>
              </div>

              <div style={{ marginBottom: "1.5rem", background: "rgba(52, 211, 153, 0.08)", border: "1px solid rgba(52, 211, 153, 0.2)", borderRadius: "8px", padding: "0.8rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--lime-bright)", margin: "0 0 4px" }}>Safer Approach Recommended by AI</p>
                <code style={{ fontSize: "0.8rem", color: "#bbf7d0", fontFamily: "var(--font-mono)" }}>
                  rm -rf ./build/dist/* (Target explicit working directories only)
                </code>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  onClick={() => setPreflightOpen(false)}
                  style={{
                    padding: "0.75rem 1.4rem",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Cancel command (Safe)
                </button>
                <button
                  onClick={() => {
                    setPreflightOpen(false);
                    setTerminalHistory((prev) => [
                      ...prev,
                      `[PREFLIGHT BLOCKED] Execution aborted by security policy for "${preflightCommand}".`,
                    ]);
                  }}
                  style={{
                    padding: "0.75rem 1.4rem",
                    background: "linear-gradient(180deg, #dc2626, #991b1b)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Acknowledge Risk
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
