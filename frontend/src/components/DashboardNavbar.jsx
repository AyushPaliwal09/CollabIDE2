import { useState } from "react";
import Logo from "./ui/Logo.jsx";
import {SearchIcon, PlusIcon, LinkIcon, SettingsIcon} from "./ui/Icons.jsx";
import ProfileDropdown from "./ProfileDropdown.jsx";
const DashboardNavbar = ({ onCreateRoom, onJoinRoom, onSettings }) => {
  const [searchVal, setSearchVal] = useState("");
  const [showProfile, setShowProfile] = useState(false);
 
  return (
    <>
      {/* ── Main bar ── */}
      <nav className="db-navbar">
        {/* Logo */}
        <Logo />
 
        {/* Search — desktop */}
        <div className="db-search-desktop" style={{ flex: 1, maxWidth: 360, position: "relative" }}>
          <span style={{
            position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
            color: "#374151", pointerEvents: "none",
          }}>
            <SearchIcon />
          </span>
          <input
            className="db-search-input"
            placeholder="Search rooms…"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
          />
        </div>
 
        {/* Spacer */}
        <div style={{ flex: 1 }} />
 
        {/* Action icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Create room */}
          <button className="db-icon-btn" title="Create Room" onClick={onCreateRoom}>
            <PlusIcon />
          </button>
 
          {/* Join room */}
          <button className="db-icon-btn" title="Join Room" onClick={onJoinRoom}>
            <LinkIcon />
          </button>
 
          {/* Settings */}
          <button className="db-icon-btn" title="Settings" onClick={onSettings}>
            <SettingsIcon />
          </button>
 
          {/* Divider */}
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.07)", margin: "0 4px" }} />
 
          {/* Avatar + dropdown */}
          <div style={{ position: "relative" }}>
            <div
              className="db-avatar"
              onClick={() => setShowProfile(v => !v)}
              style={{ background: "linear-gradient(135deg,#8B5CF6,#EC4899)", color: "#fff" }}
            >A</div>
            {showProfile && <ProfileDropdown onClose={() => setShowProfile(false)} />}
          </div>
        </div>
      </nav>
 
      {/* ── Mobile search row (shows below navbar on sm screens) ── */}
      <div className="db-mobile-search" style={{ paddingTop: 56 }}>
        <div style={{ position: "relative", paddingTop: 10 }}>
          <span style={{
            position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
            color: "#374151", pointerEvents: "none", marginTop: 5,
          }}>
            <SearchIcon />
          </span>
          <input className="db-search-input" placeholder="Search rooms…" style={{ paddingTop: 9, paddingBottom: 9 }} />
        </div>
      </div>
    </>
  );
};
export default DashboardNavbar;