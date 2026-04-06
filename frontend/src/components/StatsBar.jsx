const StatsBar = () => (
  <div className="fade-up delay-1" style={{
    display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap",
  }}>
    {[
      { label: "Total rooms", val: "6", color: "#8B5CF6" },
      { label: "Live now",    val: "3", color: "#22C55E" },
      { label: "Members",     val: "17", color: "#EC4899" },
    ].map((s, i) => (
      <div key={i} style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "7px 14px", borderRadius: 8,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.055)",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
        <span style={{ fontSize: "0.72rem", color: "#6B7280" }}>{s.label}</span>
        <span className="font-display font-bold" style={{ fontSize: "0.82rem", color: "#E5E7EB" }}>{s.val}</span>
      </div>
    ))}
  </div>
);
export default StatsBar;