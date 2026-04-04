import Badge  from "./Badge";    

const Hero = () => {
  const codeLines = [
    { indent: 0, text: "function mergeSort(arr) {", color: "#c678dd" },
    { indent: 1, text: "if (arr.length <= 1) return arr;", color: "#abb2bf" },
    { indent: 1, text: "const mid = Math.floor(arr.length / 2);", color: "#e5c07b" },
    { indent: 1, text: "const left = mergeSort(arr.slice(0, mid));", color: "#61afef" },
    { indent: 1, text: "const right = mergeSort(arr.slice(mid));", color: "#61afef" },
    { indent: 1, text: "return merge(left, right);", color: "#98c379" },
    { indent: 0, text: "}", color: "#c678dd" },
  ];
 
  const cursors = [
    { name: "Aman", color: "#8B5CF6", line: 3 },
    { name: "Sarah", color: "#EC4899", line: 5 },
  ];
 
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingTop: "100px" }}>
      {/* BG glows */}
      <div style={{
        position: "absolute", top: "10%", left: "15%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none"
      }} />
 
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* LEFT */}
        <div>
          <div className="fade-up delay-1 mb-6">
            <Badge>Live collaboration — no setup needed</Badge>
          </div>
 
          <h1 className="font-display font-extrabold fade-up delay-2"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            The collaborative<br />
            workspace for{" "}
            <span className="grad-text">real‑time coding</span>
          </h1>
 
          <p className="mt-6 text-base leading-relaxed fade-up delay-3"
            style={{ color: "#9CA3AF", maxWidth: 440 }}>
            CollabIDE lets developers write, edit, and debug code together instantly —
            multiple cursors, live sync, zero friction. Start in seconds.
          </p>
 
          <div className="flex flex-wrap items-center gap-4 mt-9 fade-up delay-4">
            <button className="btn-primary pulse-glow px-7 py-3.5 rounded-xl font-semibold text-white text-sm">
              Get Started Free
            </button>
            <button className="btn-ghost flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <polygon points="10,8 16,12 10,16" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
          </div>
 
          <div className="flex items-center gap-5 mt-7 fade-up delay-5">
            <div className="flex -space-x-2">
              {["#8B5CF6","#EC4899","#22C55E","#F59E0B"].map((c,i) => (
                <div key={i} style={{ width:28, height:28, borderRadius:"50%", background:c, border:"2px solid #07090f" }} />
              ))}
            </div>
            <span style={{ fontSize: "0.82rem", color: "#6B7280" }}>
              <span style={{ color: "#F9FAFB", fontWeight: 600 }}>1,200+</span> developers already collaborating
            </span>
          </div>
        </div>
 
        {/* RIGHT – fake editor */}
        <div className="relative fade-up delay-3">
          {/* Floating badges */}
          <div className="float-badge absolute -top-5 -left-4 glass px-3 py-2 rounded-xl flex items-center gap-2 z-10 text-xs font-mono"
            style={{ border: "1px solid rgba(139,92,246,0.3)" }}>
            <div style={{ width:7,height:7,borderRadius:"50%",background:"#22C55E" }} />
            <span style={{ color: "#22C55E" }}>Session live</span>
          </div>
          <div className="float-badge-2 absolute -bottom-4 -right-2 glass px-3 py-2 rounded-xl text-xs font-mono z-10"
            style={{ border: "1px solid rgba(236,72,153,0.3)", color: "#f9a8d4" }}>
            ⚡ Synced in &lt;50ms
          </div>
 
          <div className="code-window" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            {/* Window bar */}
            <div className="code-window-bar">
              <div className="dot" style={{ background: "#ff5f57" }} />
              <div className="dot" style={{ background: "#febc2e" }} />
              <div className="dot" style={{ background: "#28c840" }} />
              <span className="font-mono text-xs ml-4" style={{ color: "#6B7280" }}>mergeSort.js</span>
              {/* Collaborator avatars */}
              <div className="ml-auto flex -space-x-1.5">
                {cursors.map(c => (
                  <div key={c.name} style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: c.color, border: "2px solid #161b22",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, color: "#fff", fontWeight: 700
                  }}>{c.name[0]}</div>
                ))}
              </div>
            </div>
 
            {/* Code */}
            <div className="p-5" style={{ minHeight: 220 }}>
              {codeLines.map((line, i) => (
                <div key={i} className="flex items-center" style={{ marginBottom: 4, position: "relative" }}>
                  <span className="font-mono text-xs select-none mr-4" style={{ color: "#3B4252", minWidth: 20, textAlign: "right" }}>{i + 1}</span>
                  <span className="font-mono text-sm" style={{ color: line.color, paddingLeft: line.indent * 20 }}>
                    {line.text}
                    {/* Cursor */}
                    {cursors.map(cur => cur.line === i && (
                      <span key={cur.name} className="inline-flex items-end ml-1">
                        <span className="cursor-blink font-mono text-sm" style={{ color: cur.color }}>|</span>
                        <span style={{
                          fontSize: 9, background: cur.color, color: "#fff",
                          borderRadius: 3, padding: "0 4px", marginLeft: 2,
                          fontFamily: "DM Sans, sans-serif", fontWeight: 600
                        }}>{cur.name}</span>
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
 
            {/* Status bar */}
            <div style={{
              background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "6px 16px", display: "flex", alignItems: "center", gap: 16, fontSize: 11,
              fontFamily: "JetBrains Mono, monospace"
            }}>
              <span style={{ color: "#22C55E" }}>● Saved</span>
              <span style={{ color: "#6B7280" }}>JavaScript</span>
              <span style={{ color: "#8B5CF6" }}>2 collaborators</span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce opacity-40">
        <span style={{ fontSize: 11, color: "#6B7280", fontFamily: "DM Sans", letterSpacing: "0.1em", textTransform: "uppercase" }}>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
};
 
export default Hero;