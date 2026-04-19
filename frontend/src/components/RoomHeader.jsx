import { USERS } from "../data/MockData.js";
import { ChevronLeft, ChevronRight, LinkIcon, PlayIcon, PowerIcon } from "./ui/Icons.jsx";
import { useNavigate } from "react-router-dom";

const RoomHeader = ({ sidebarOpen, onToggleSidebar, chatOpen, onToggleChat }) => {
  const navigate = useNavigate()
  const handleLeave = ()=>{
    navigate("/dashboard")
  }
return (
  <header className="ws-room-header">
    {/* Logo + toggle */}
    <button className="ws-icon-btn" onClick={onToggleSidebar} title="Toggle sidebar">
      {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
    </button>
 
    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
      <div style={{
        width: 22, height: 22, borderRadius: 6,
        background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 9, fontWeight: 700, color: "#fff",
        fontFamily: "JetBrains Mono, monospace",
      }}>{"<>"}</div>
      <span className="font-display font-bold grad-text" style={{ fontSize: "0.82rem" }}>CollabIDE</span>
    </div>
 
    <div className="ws-sep" />
 
    {/* Room name + tag */}
    <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
      <span className="font-display font-semibold" style={{ fontSize: "0.82rem", color: "#E5E7EB", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 160 }}>
        auth-refactor
      </span>
      <span style={{
        fontSize: "9px", padding: "2px 7px", borderRadius: 999,
        background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.22)",
        color: "#a78bfa", fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap",
      }}>TypeScript</span>
      {/* Live dot */}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <div className="pulse-dot" style={{
          width: 6, height: 6, borderRadius: "50%", background: "#22C55E",
        }} />
        <span style={{ fontSize: 10, color: "#22C55E", fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap" }}>Live</span>
      </div>
    </div>
 
    {/* Spacer */}
    <div style={{ flex: 1 }} />
 
    {/* Active user avatars */}
    <div style={{ display: "flex", alignItems: "center" }}>
      {USERS.map((u, i) => (
        <div key={u.name} title={u.name + (u.you ? " (You)" : "")}
          className="ws-user-avatar"
          style={{ background: u.color, marginLeft: i > 0 ? -6 : 0, zIndex: USERS.length - i }}>
          {u.initial}
        </div>
      ))}
      <span style={{ fontSize: 10, color: "#4B5563", marginLeft: 6, whiteSpace: "nowrap", fontFamily: "JetBrains Mono, monospace" }}>
        {USERS.length} online
      </span>
    </div>
 
    <div className="ws-sep" />
 
    {/* Action buttons */}
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <button className="ws-run-btn">
        <PlayIcon /> Run
      </button>
      <button className="ws-invite-btn">
        <LinkIcon /> Invite
      </button>
      <button className="ws-leave-btn" onClick={handleLeave}>
        <PowerIcon /> Leave
      </button>
    </div>
  </header>
)
}
 
export default RoomHeader;