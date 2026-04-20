import { LinkIcon, PlusIcon } from "./ui/Icons.jsx";
const DashboardHeader = ({ onCreateRoom, onJoinRoom }) => (
  <div className="fade-up" style={{ marginBottom: 28, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
    <div>
      <p className="font-mono" style={{ fontSize: "0.7rem", color: "#4B5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
        Good morning ☀️
      </p>
      <h1 className="font-display font-extrabold" style={{
        fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
        letterSpacing: "-0.03em", lineHeight: 1.15, color: "#F9FAFB",
      }}>
        Your rooms
      </h1>
    </div>
    {/* Quick actions */}
    <div style={{ display: "flex", gap: 8 }}>
      <button className="btn-ghost" onClick={onJoinRoom}
        style={{ padding: "8px 16px", borderRadius: 9, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 6 }}>
        <LinkIcon size={13} /> Join
      </button>
      <button className="btn-primary" onClick={onCreateRoom}
        style={{ padding: "8px 16px", borderRadius: 9, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 6 }}>
        <PlusIcon size={13} /> New room
      </button>
    </div>
  </div>
);
export default DashboardHeader;
