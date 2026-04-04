import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["Features", "Demo", "Use Cases",  "FAQ"];
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ paddingTop: scrolled ? "8px" : "16px", transition: "padding 0.3s" }}>
      <div className="glass rounded-2xl flex items-center justify-between w-full max-w-6xl mx-4"
        style={{
          padding: scrolled ? "10px 24px" : "14px 24px",
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(7,9,15,0.7)" : "rgba(17,24,39,0.5)",
          backdropFilter: "blur(24px)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
        }}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "JetBrains Mono, monospace"
          }}>{"<>"}</div>
          <span className="font-display font-bold text-lg grad-text">CollabIDE</span>
        </div>
 
        {/* Center nav – desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>)}
        </div>
 
        {/* Right – desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost px-4 py-2 rounded-xl text-sm font-medium text-gray-300">Login</button>
          <button className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold text-white">Get Started</button>
        </div>
 
        {/* Hamburger */}
        <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
        </button>
      </div>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass absolute top-full left-4 right-4 mt-2 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          style={{ background: "rgba(7,9,15,0.7)" }}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link text-base py-1" onClick={() => setMenuOpen(false)}>{l}</a>)}
          <div className="divider" />
          <button className="btn-ghost px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 w-full">Login</button>
          <button className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white w-full">Get Started Free</button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
