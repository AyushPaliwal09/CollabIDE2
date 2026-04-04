import { useState } from "react";
import Badge  from "./Badge";    


const Features = () => {
  const [active, setActive] = useState(0);
  const features = [
    {
      icon: "👥", title: "Live collaborative editing",
      desc: "Write and edit code together in real time with multiple colored cursors and instant updates across all participants.",
      preview: "multi-cursor"
    },
    {
      icon: "📁", title: "Shared development workspace",
      desc: "Work on the same files, environment, and projects without any setup or syncing headaches.",
      preview: "workspace"
    },
    {
      icon: "🔗", title: "Instant session sharing",
      desc: "Start collaborating in seconds — share a single link and your team joins instantly, no installs required.",
      preview: "sharing"
    },
    {
      icon: "💬", title: "Built-in communication",
      desc: "Discuss changes, leave inline comments, and collaborate without ever leaving your workspace.",
      preview: "chat"
    },
    {
      icon: "⚡", title: "Live code execution",
      desc: "Run and preview code instantly while collaborating. See output in real time alongside your teammates.",
      preview: "execution"
    },
    {
      icon: "💾", title: "Auto-save & version history",
      desc: "Every keystroke is saved continuously. Roll back to any version with full change history.",
      preview: "save"
    },
  ];
 
  const PreviewPanel = ({ type }) => {
    const panels = {
      "multi-cursor": (
        <div className="code-window h-full">
          <div className="code-window-bar">
            <div className="dot" style={{ background: "#ff5f57" }} /><div className="dot" style={{ background: "#febc2e" }} /><div className="dot" style={{ background: "#28c840" }} />
            <span className="font-mono text-xs ml-3" style={{ color: "#6B7280" }}>index.js — 3 collaborators</span>
          </div>
          <div className="p-4">
            {["const greet = (name) => {","  return `Hello, ${name}!`;","}","","greet('World');"].map((line, i) => (
              <div key={i} className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs w-4 text-right" style={{ color: "#3B4252" }}>{i + 1}</span>
                <span className="font-mono text-sm" style={{ color: i === 1 ? "#98c379" : i === 0 || i === 2 ? "#c678dd" : "#61afef" }}>
                  {line}
                  {i === 1 && <span className="cursor-blink" style={{ color: "#8B5CF6" }}>|</span>}
                  {i === 1 && <span style={{ fontSize: 9, background: "#8B5CF6", color: "#fff", borderRadius: 3, padding: "0 4px", marginLeft: 2 }}>Aman</span>}
                  {i === 4 && <span className="cursor-blink" style={{ color: "#EC4899" }}>|</span>}
                  {i === 4 && <span style={{ fontSize: 9, background: "#EC4899", color: "#fff", borderRadius: 3, padding: "0 4px", marginLeft: 2 }}>Sarah</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
      "workspace": (
        <div className="code-window h-full">
          <div className="code-window-bar"><div className="dot" style={{ background: "#ff5f57" }} /><div className="dot" style={{ background: "#febc2e" }} /><div className="dot" style={{ background: "#28c840" }} />
            <span className="font-mono text-xs ml-3" style={{ color: "#6B7280" }}>workspace</span></div>
          <div className="flex h-full" style={{ minHeight: 180 }}>
            <div style={{ width: 140, borderRight: "1px solid rgba(255,255,255,0.06)", padding: "12px 0" }}>
              {["📁 src","  📄 index.js","  📄 utils.js","📁 styles","  📄 main.css","📄 README"].map((f,i)=>(
                <div key={i} className="font-mono text-xs px-3 py-1" style={{ color: i===1 ? "#8B5CF6" : "#6B7280" }}>{f}</div>
              ))}
            </div>
            <div className="p-4 flex-1 font-mono text-xs" style={{ color: "#abb2bf" }}>
              {"// Shared across team\nconst API_URL = process.env.API_URL;\n\nexport const fetchData = async () => {\n  const res = await fetch(API_URL);\n  return res.json();\n};"}
            </div>
          </div>
        </div>
      ),
      "sharing": (
        <div className="p-6 flex flex-col items-center justify-center h-full gap-4">
          <div className="font-display font-bold text-xl" style={{ color: "#F9FAFB" }}>Invite your team</div>
          <div className="glass rounded-xl flex items-center gap-3 px-4 py-3 w-full" style={{ maxWidth: 360 }}>
            <span className="font-mono text-xs flex-1 truncate" style={{ color: "#8B5CF6" }}>collabide.dev/join/abc-xyz-123</span>
            <button className="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold text-white">Copy</button>
          </div>
          <div className="flex -space-x-2 mt-2">
            {["#8B5CF6","#EC4899","#22C55E"].map((c,i)=>(
              <div key={i} style={{ width:32,height:32,borderRadius:"50%",background:c,border:"2px solid #07090f",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:700 }}>
                {["A","S","R"][i]}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#6B7280" }}>3 collaborators joined</span>
        </div>
      ),
      "chat": (
        <div className="p-4 flex flex-col gap-3 h-full">
          {[
            { name: "Aman", color: "#8B5CF6", msg: "Should we use a map here instead?", time: "2m" },
            { name: "Sarah", color: "#EC4899", msg: "Yes! Way faster for lookups 🚀", time: "1m" },
            { name: "Raj", color: "#22C55E", msg: "Agreed. I'll refactor now.", time: "just now" },
          ].map((m, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div style={{ width:28,height:28,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",fontWeight:700,flexShrink:0 }}>{m.name[0]}</div>
              <div>
                <div className="flex gap-2 items-baseline">
                  <span style={{ fontSize:12,fontWeight:600,color:m.color }}>{m.name}</span>
                  <span style={{ fontSize:10,color:"#4B5563" }}>{m.time} ago</span>
                </div>
                <div className="glass mt-1 rounded-xl px-3 py-2 text-xs" style={{ color:"#D1D5DB" }}>{m.msg}</div>
              </div>
            </div>
          ))}
        </div>
      ),
      "execution": (
        <div className="code-window h-full">
          <div className="code-window-bar"><div className="dot" style={{ background: "#ff5f57" }} /><div className="dot" style={{ background: "#febc2e" }} /><div className="dot" style={{ background: "#28c840" }} />
            <span className="font-mono text-xs ml-3" style={{ color: "#6B7280" }}>terminal</span></div>
          <div className="p-4 font-mono text-xs" style={{ color: "#abb2bf" }}>
            <div style={{ color: "#6B7280" }}>$ node mergeSort.js</div>
            <div style={{ color: "#22C55E", marginTop: 4 }}>[3, 1, 4, 1, 5] → [1, 1, 3, 4, 5]</div>
            <div style={{ color: "#22C55E" }}>✓ Sort complete in 0.3ms</div>
            <div style={{ color: "#6B7280", marginTop: 8 }}>$ <span className="cursor-blink" style={{ color: "#8B5CF6" }}>|</span></div>
          </div>
        </div>
      ),
      "save": (
        <div className="p-6 flex flex-col items-center justify-center h-full gap-4">
          <div className="font-mono text-xs" style={{ color: "#22C55E" }}>✓ Auto-saved 2 seconds ago</div>
          <div className="glass rounded-xl w-full p-4" style={{ maxWidth: 320 }}>
            <div className="font-mono text-xs mb-3" style={{ color: "#6B7280" }}>Version history</div>
            {["v3 — just now","v2 — 5 min ago","v1 — 1 hour ago"].map((v,i)=>(
              <div key={i} className="flex justify-between items-center py-2" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span className="font-mono text-xs" style={{ color: i===0 ? "#8B5CF6" : "#6B7280" }}>{v}</span>
                {i===0 && <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ background:"rgba(34,197,94,0.12)",color:"#22C55E" }}>current</span>}
              </div>
            ))}
          </div>
        </div>
      ),
    };
    return panels[type] || null;
  };
 
  return (
    <section id="features" style={{ padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
 
        {/* ── Two-column layout: left = heading + tabs, right = demo ── */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
 
          {/* LEFT — heading + subtext + feature tabs */}
          <div className="lg:w-5/12 flex flex-col gap-6 lg:sticky" style={{ top: 120 }}>
            <div>
              <Badge>Core features</Badge>
              <h2 className="font-display font-extrabold mt-4"
                style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Everything you need to{" "}
                <span className="grad-text">collaborate on code</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6B7280", maxWidth: 400 }}>
                Powerful tools designed to help teams build, debug, and ship together — faster.
              </p>
            </div>
 
            {/* Feature tabs */}
            <div className="flex flex-col gap-1.5">
              {features.map((f, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`feature-tab text-left rounded-xl px-4 py-3.5 ${active === i ? "active" : ""}`}
                  style={{
                    border: active === i
                      ? "1px solid rgba(139,92,246,0.4)"
                      : "1px solid rgba(255,255,255,0.05)",
                    background: active === i
                      ? "rgba(139,92,246,0.08)"
                      : "rgba(255,255,255,0.02)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}>
                  <div className="flex items-start gap-3">
                    {/* Active indicator bar */}
                    <div style={{
                      width: 3, borderRadius: 99, flexShrink: 0, alignSelf: "stretch",
                      background: active === i
                        ? "linear-gradient(180deg,#8B5CF6,#EC4899)"
                        : "rgba(255,255,255,0.06)",
                      transition: "background 0.2s",
                      minHeight: 20,
                    }} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: 16 }}>{f.icon}</span>
                        <span className="font-display font-semibold text-sm"
                          style={{ color: active === i ? "#F9FAFB" : "#6B7280" }}>
                          {f.title}
                        </span>
                      </div>
                      {active === i && (
                        <p className="mt-2 text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                          {f.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
 
          {/* RIGHT — demo preview */}
          <div className="lg:w-7/12 w-full glass rounded-2xl overflow-hidden"
            style={{
              minHeight: 420,
              border: "1px solid rgba(139,92,246,0.18)",
              boxShadow: "0 0 60px rgba(139,92,246,0.08)",
            }}>
            <PreviewPanel type={features[active].preview} />
          </div>
 
        </div>
      </div>
    </section>
  );
};
export default Features;