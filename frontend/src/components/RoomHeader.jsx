import { USERS } from "../data/MockData.js";
import { ChevronLeft, ChevronRight, LinkIcon, PlayIcon, PowerIcon } from "./ui/Icons.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import toast  from "react-hot-toast";

const RoomHeader = ({ sidebarOpen,socket, onToggleSidebar, chatOpen, onToggleChat, room, handleLeave, onlineUsers, getAvatarColor, getFirstLetter, userId, language, setLanguage, showDropdown, setShowDropdown }) => {
  const navigate = useNavigate()
const { user } = useAuth()

  const handleInvite = () => {
    try {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl);
      toast.success("Room URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
      toast.error("Failed to copy URL");
    }
  }
const languages = [
  "javascript",
  "typescript",
  "python",
  "java",
  "c",
  "cpp",
  "c#",
  "go",
  "rust",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "dart",
  "scala",
  "perl",
  "r",
  "sql",
  "bash",
  "html",
  "css",
  "json",
  "yaml",
];
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
          {room?.roomName}
        </span>
        {/* <span style={{
          fontSize: "9px", padding: "2px 7px", borderRadius: 999,
          background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.22)",
          color: "#a78bfa", fontFamily: "JetBrains Mono, monospace", whiteSpace: "nowrap",
        }}>{room?.language}</span> */}
         {/* <div className="relative">
  
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="px-3 py-1 rounded-md border border-purple-500 text-sm text-purple-300 bg-[#1e1e1e]"
  >
    {language}
  </button>

  {showDropdown && (
    <div className="absolute top-10 left-0 w-40 bg-[#1e1e1e] border border-gray-700 rounded-md shadow-lg z-50">
      
      {languages.map((lang) => (
        <div
          key={lang}
          onClick={() => {
            setLanguage(lang);
            setShowDropdown(false);
          }}
          className="px-3 py-2 text-sm text-gray-200 hover:bg-[#2a2a2a] cursor-pointer"
        >
          {lang}
        </div>
      ))}

    </div>
  )}

</div> */}<div className="relative">

  {/* Language Button */}
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="
      flex items-center gap-1
      px-3 py-[3px]
      rounded-md
      border border-[#5b3fd1]
      bg-[#1a1625]
      text-[#b69cff]
      text-xs
      font-medium
      hover:bg-[#241d35]
      transition-all
    "
  >
    {language}

    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>

  {/* Dropdown */}
  {showDropdown && (
    <div
      className="
        absolute top-9 left-0
        w-44
        max-h-64
        overflow-y-auto
        bg-[#111827]
        border border-[#2a2a40]
        rounded-lg
        shadow-2xl
        z-50

        scrollbar-thin
        scrollbar-thumb-[#5b3fd1]
        scrollbar-track-[#111827]
      "
    >
      {languages.map((lang) => (
        <div
          key={lang}
          onClick={() => {
            setLanguage(lang);
            setShowDropdown(false);
          }}
          className={`
            px-3 py-2
            text-sm
            cursor-pointer
            transition-all
            capitalize

            ${
              language === lang
                ? "bg-[#241d35] text-[#b69cff]"
                : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
            }
          `}
        >
          {lang}
        </div>
      ))}
    </div>
  )}
</div>
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
        {onlineUsers.map((u, i) => (
          <div key={u.id} title={u.name + (u.id === userId ? " (You)" : "")}
            className="ws-user-avatar"
            style={{ background: getAvatarColor(u.id), marginLeft: i > 0 ? -6 : 0, zIndex: onlineUsers.length - i }}>
            {getFirstLetter(u.name)}
          </div>
        ))}
        <span style={{ fontSize: 10, color: "#4B5563", marginLeft: 6, whiteSpace: "nowrap", fontFamily: "JetBrains Mono, monospace" }}>
          {onlineUsers?.length} online
        </span>
      </div>

      <div className="ws-sep" />

      {/* Action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        {/* <button className="ws-run-btn">
          <PlayIcon /> Run
        </button> */}
        <button className="ws-invite-btn" onClick={handleInvite}>
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