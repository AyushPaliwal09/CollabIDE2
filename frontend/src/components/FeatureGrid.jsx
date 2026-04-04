import { Card, CardTitle, CardDescription } from "./Card";

const FeatureGrid = () => {
  const cards = [
    {
      icon: "🔴", title: "Real-time collaboration",
      desc: "Multiple developers edit the same codebase simultaneously with zero conflicts.",
      demo: (
        <div style={{ background: "#0d1117", borderRadius: 8, padding: "10px", fontSize: 10, fontFamily: "JetBrains Mono, monospace" }}>
          <div style={{ color: "#6B7280", marginBottom: 4 }}>index.js</div>
          {["const x = 1;", "let y = x + 2;", "console.log(y);"].map((l, i) => (
            <div key={i} style={{ color: i === 1 ? "#98c379" : "#abb2bf", display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: "#3B4252", minWidth: 12 }}>{i+1}</span> {l}
              {i === 1 && <span style={{ background: "#8B5CF6", color: "#fff", borderRadius: 2, padding: "0 3px", fontSize: 8 }}>Aman</span>}
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: "🔗", title: "Instant session sharing",
      desc: "Share your workspace with a single link — no installs, no friction.",
      demo: (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ background: "#0d1117", borderRadius: 6, padding: "6px 10px", fontSize: 9, fontFamily: "JetBrains Mono, monospace", color: "#8B5CF6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>collabide.dev/join/abc</span>
            <span style={{ background: "linear-gradient(135deg,#8B5CF6,#EC4899)", color: "#fff", borderRadius: 4, padding: "2px 6px", fontSize: 8 }}>Copy</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["#8B5CF6","#EC4899","#22C55E"].map((c,i) => (
              <div key={i} style={{ width:20,height:20,borderRadius:"50%",background:c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#fff",fontWeight:700 }}>
                {["A","S","R"][i]}
              </div>
            ))}
            <span style={{ fontSize: 9, color: "#6B7280", alignSelf: "center" }}>3 joined</span>
          </div>
        </div>
      ),
    },
    {
      icon: "💬", title: "Built-in communication",
      desc: "Chat, comment, and review without ever switching apps.",
      demo: (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {[
            { name: "Aman", color: "#8B5CF6", msg: "Use a map here?" },
            { name: "Sarah", color: "#EC4899", msg: "Yes! Faster 🚀" },
          ].map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
              <div style={{ width:16,height:16,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"#fff",fontWeight:700,flexShrink:0 }}>{m.name[0]}</div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 5, padding: "3px 7px", fontSize: 9, color: "#D1D5DB" }}>{m.msg}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: "⚡", title: "Live code execution",
      desc: "Run and test code together in real time with instant terminal output.",
      demo: (
        <div style={{ background: "#0d1117", borderRadius: 8, padding: "10px", fontFamily: "JetBrains Mono, monospace", fontSize: 9 }}>
          <div style={{ color: "#6B7280" }}>$ node sort.js</div>
          <div style={{ color: "#22C55E", marginTop: 3 }}>[1,1,3,4,5]</div>
          <div style={{ color: "#22C55E" }}>✓ Done in 0.3ms</div>
          <div style={{ color: "#6B7280", marginTop: 4 }}>$ <span style={{ opacity: 0.7 }}>|</span></div>
        </div>
      ),
    },
    {
      icon: "💾", title: "Auto-save & version history",
      desc: "Every change is saved with full rollback capability.",
      demo: (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 9, color: "#22C55E", fontFamily: "JetBrains Mono, monospace" }}>
            <span>●</span> Saved 2s ago
          </div>
          {["v3 — just now", "v2 — 5m ago", "v1 — 1h ago"].map((v, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>
              <span style={{ color: i === 0 ? "#8B5CF6" : "#6B7280" }}>{v}</span>
              {i === 0 && <span style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", borderRadius: 3, padding: "0 4px", fontSize: 8 }}>current</span>}
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: "📁", title: "Shared workspace",
      desc: "One unified environment for files, terminals, and projects.",
      demo: (
        <div style={{ background: "#0d1117", borderRadius: 8, padding: "8px", fontFamily: "JetBrains Mono, monospace", fontSize: 9 }}>
          {["📁 src", "  📄 index.js", "  📄 utils.js", "📁 styles", "📄 README"].map((f, i) => (
            <div key={i} style={{ color: i === 1 ? "#8B5CF6" : "#6B7280", padding: "1.5px 0" }}>{f}</div>
          ))}
        </div>
      ),
    },
  ];
 
  return (
    <section style={{ padding: "0 0 100px" }}>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col gap-3">
          {cards.map((c, i) => (
            <Card key={i} hover style={{ background: "rgba(13,17,28,0.7)" }}>
              <div className="flex items-center gap-6 px-6 py-5">
                {/* Left — text */}
                <div className="flex-1 min-w-0">
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
                  <CardTitle className="mb-1.5">{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </div>
 
                {/* Divider */}
                <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
 
                {/* Right — mini demo */}
                <div style={{ width: 200, flexShrink: 0 }}>
                  {c.demo}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureGrid;

