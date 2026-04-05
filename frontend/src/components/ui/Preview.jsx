const Preview = () => {
  const codeLines = [
    { text: "function collaborate() {",       color: "#c678dd", indent: 0 },
    { text: "  const session = createRoom();", color: "#abb2bf", indent: 0 },
    { text: "  session.invite(team);",         color: "#e5c07b", indent: 0 },
    { text: "  session.onEdit((user, delta) => {", color: "#61afef", indent: 0 },
    { text: "  sync(delta);",               color: "#98c379", indent: 1 },
    { text: "  });",                           color: "#abb2bf", indent: 0 },
    { text: "}",                               color: "#c678dd", indent: 0 },
  ];
 
  const cursors = [
    { name: "Aman",  color: "#8B5CF6", line: 2 },
    { name: "Sarah", color: "#EC4899", line: 4 },
  ];
 
  return (
    <div style={{ width: "100%", maxWidth: 480, position: "relative" }}>
 
      {/* Floating activity badges */}
      <div className="activity-badge fade-up delay-1"
        style={{
          position: "absolute", top: -18, right: 16, zIndex: 10,
          animation: "float 5s ease-in-out infinite",
          color: "#22C55E",
        }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
        Session live · 3 devs
      </div>
 
      <div className="activity-badge fade-up delay-3"
        style={{
          position: "absolute", bottom: -16, left: 10, zIndex: 10,
          animation: "float 5s ease-in-out infinite",
          animationDelay: "2s",
          color: "#a78bfa",
        }}>
        ⚡ Synced in &lt;50ms
      </div>
 
      {/* Editor window */}
      <div className="editor-float code-window fade-up delay-2"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(139,92,246,0.1)" }}>
 
        {/* Title bar */}
        <div className="code-window-bar">
          <div className="dot" style={{ background: "#ff5f57" }} />
          <div className="dot" style={{ background: "#febc2e" }} />
          <div className="dot" style={{ background: "#28c840" }} />
          <span className="font-mono" style={{ fontSize: 11, color: "#6B7280", marginLeft: 10 }}>
            collaborate.js
          </span>
          {/* Collaborator avatars */}
          <div style={{ marginLeft: "auto", display: "flex", gap: -4 }}>
            {cursors.map(c => (
              <div key={c.name} style={{
                width: 20, height: 20, borderRadius: "50%",
                background: c.color,
                border: "2px solid #161b22",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, color: "#fff", fontWeight: 700,
                marginLeft: -4,
              }}>{c.name[0]}</div>
            ))}
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              background: "#22C55E",
              border: "2px solid #161b22",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 8, color: "#fff", fontWeight: 700,
              marginLeft: -4,
            }}>R</div>
          </div>
        </div>
 
        {/* File sidebar + code area */}
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div style={{
            width: 120,
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "10px 0",
            flexShrink: 0,
          }}>
            {["📁 src", "  collaborate.js", "  utils.js", "📁 hooks", "  useSync.js"].map((f, i) => (
              <div key={i} className="font-mono" style={{
                fontSize: 9.5, padding: "3px 10px",
                color: i === 1 ? "#8B5CF6" : "#4B5563",
                background: i === 1 ? "rgba(139,92,246,0.08)" : "transparent",
              }}>{f}</div>
            ))}
          </div>
 
          {/* Code */}
          <div style={{ padding: "12px 14px", flex: 1, minWidth: 0 }}>
            {codeLines.map((line, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center",
                marginBottom: 3,
                paddingLeft: line.indent * 12,
              }}>
                <span className="font-mono" style={{ fontSize: 10, color: "#3B4252", minWidth: 18, marginRight: 8, textAlign: "right" }}>
                  {i + 1}
                </span>
                <span className="font-mono" style={{ fontSize: 11, color: line.color, wordBreak: "break-all" }}>
                  {line.text}
                  {cursors.map(cur => cur.line === i && (
                    <span key={cur.name} style={{ display: "inline-flex", alignItems: "center", marginLeft: 2 }}>
                      <span className="cursor-blink" style={{ color: cur.color, fontWeight: 700 }}>|</span>
                      <span style={{
                        fontSize: 8, background: cur.color, color: "#fff",
                        borderRadius: 3, padding: "0 3px", marginLeft: 2,
                      }}>{cur.name}</span>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Chat panel */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "10px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}>
          {[
            { name: "Aman",  color: "#8B5CF6", msg: "Should we extract this to a hook?" },
            { name: "Sarah", color: "#EC4899", msg: "Yes! useSync would be perfect 🚀" },
          ].map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%", background: m.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, color: "#fff", fontWeight: 700, flexShrink: 0, marginTop: 1,
              }}>{m.name[0]}</div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 6, padding: "4px 9px",
                fontSize: 10, color: "#9CA3AF", fontFamily: "DM Sans, sans-serif",
              }}>{m.msg}</div>
            </div>
          ))}
        </div>
 
        {/* Status bar */}
        <div style={{
          background: "#0d1117",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "5px 14px",
          display: "flex", alignItems: "center", gap: 14,
          fontFamily: "JetBrains Mono, monospace", fontSize: 10,
        }}>
          <span style={{ color: "#22C55E" }}>● Saved</span>
          <span style={{ color: "#4B5563" }}>JavaScript</span>
          <span style={{ color: "#8B5CF6" }}>3 collaborators</span>
        </div>
      </div>
 
      {/* Feature blurbs below editor */}
      <div className="fade-up delay-4" style={{
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
      }}>
        {[
          { icon: "⚡", label: "Real-time sync", sub: "Under 50ms latency" },
          { icon: "🔒", label: "Secure sessions", sub: "End-to-end encrypted" },
          { icon: "🔗", label: "One-click share", sub: "Instant invite links" },
          { icon: "💾", label: "Auto-saved", sub: "Full version history" },
        ].map((f, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 10,
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            gap: 9,
          }}>
            <span style={{ fontSize: 16 }}>{f.icon}</span>
            <div>
              <div className="font-display" style={{ fontSize: 11, fontWeight: 600, color: "#E5E7EB" }}>{f.label}</div>
              <div style={{ fontSize: 10, color: "#6B7280", marginTop: 1 }}>{f.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Preview;