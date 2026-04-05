const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <div style={{
      width: 32, height: 32, borderRadius: 9,
      background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 700, color: "#fff",
      fontFamily: "JetBrains Mono, monospace",
      boxShadow: "0 0 16px rgba(139,92,246,0.45)",
    }}>{"<>"}</div>
    <span className="font-display font-bold grad-text" style={{ fontSize: "1.15rem", letterSpacing: "-0.01em" }}>
      CollabIDE
    </span>
  </div>
);

export default Logo;