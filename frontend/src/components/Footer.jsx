const Footer = () => {
  const cols = [
    { title: "Product", links: ["Features", "Live Demo", "Pricing", "Updates", "Roadmap"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Resources", links: ["Documentation", "Help Center", "API", "Community"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] },
  ];
 
  const socials = [
    { name: "GitHub", icon: "⌘" },
    { name: "Twitter", icon: "✕" },
    { name: "LinkedIn", icon: "in" },
    { name: "Discord", icon: "◈" },
  ];
 
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 64, paddingBottom: 32 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div style={{ width:28,height:28,borderRadius:7,background:"linear-gradient(135deg,#8B5CF6,#EC4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#fff",fontFamily:"JetBrains Mono,monospace" }}>{"<>"}</div>
              <span className="font-display font-bold grad-text">CollabIDE</span>
            </div>
            <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, maxWidth: 200 }}>
              A real-time collaborative coding workspace built for modern developers.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(s => (
                <div key={s.name} className="glass rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ width:32,height:32,border:"1px solid rgba(255,255,255,0.08)",fontSize:13,color:"#6B7280",transition:"color 0.2s,border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color="#8B5CF6"; e.currentTarget.style.borderColor="rgba(139,92,246,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color="#6B7280"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; }}>
                  {s.icon}
                </div>
              ))}
            </div>
          </div>
 
          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div className="font-display font-semibold text-sm mb-4" style={{ color: "#F9FAFB" }}>{col.title}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => <li key={l}><a href="#" className="footer-link">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
 
        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span style={{ fontSize: 13, color: "#4B5563" }}>© 2026 CollabIDE. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "#374151", fontFamily: "JetBrains Mono, monospace" }}>
            Made with ❤️ for developers
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;