import { TERMINAL_LINES } from "../data/MockData";

const Terminal = ({ height, termTab, onTermTab }) => (
  <div className="ws-terminal slide-up" style={{ height }}>
    {/* Terminal header */}
    <div className="ws-terminal-header">
      {["Terminal", "Output", "Problems"].map(t => (
        <div key={t}
          className={`ws-terminal-tab ${termTab === t ? "active" : ""}`}
          onClick={() => onTermTab(t)}>
          {t}
        </div>
      ))}
      <div style={{ flex: 1 }} />
      {/* Clear + close */}
      <button className="ws-icon-btn" title="Clear" style={{ width: 26, height: 26 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
 
    {/* Terminal body */}
    <div className="ws-terminal-body">
      {TERMINAL_LINES.map((line, i) => (
        <div key={i} style={{ color: line.color, fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>
          {line.text || "\u00A0"}
        </div>
      ))}
      {termTab === "Terminal" && (
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
          <span style={{ color: "#8B5CF6", fontFamily: "JetBrains Mono", fontSize: 12 }}>$</span>
          <span className="cursor-blink" style={{ color: "#a78bfa", fontFamily: "JetBrains Mono", fontSize: 12 }}>|</span>
        </div>
      )}
      {termTab === "Problems" && (
        <div style={{ color: "#22C55E", fontFamily: "JetBrains Mono", fontSize: 12 }}>✓ No problems found</div>
      )}
    </div>
  </div>
);
export default Terminal;