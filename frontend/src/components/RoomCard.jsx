import { UsersIcon } from "./ui/Icons.jsx";

const RoomCard = ({ room, delay }) => (
  <div className={`db-card fade-up delay-${delay}`} style={{ position: "relative", zIndex: 1 }}>
    {/* Top row */}
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: `${room.color}18`,
          border: `1px solid ${room.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16,
        }}>
          {room.emoji}
        </div>
        <div>
          <div className="font-display font-semibold" style={{ fontSize: "0.88rem", color: "#F9FAFB", lineHeight: 1.2 }}>
            {room.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
            <UsersIcon />
            <span style={{ fontSize: "0.7rem", color: "#6B7280" }}>{room.members} members</span>
          </div>
        </div>
      </div>
      {/* Live badge */}
      {room.live && (
        <span className="db-tag live" style={{ flexShrink: 0 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
          live
        </span>
      )}
    </div>
 
    {/* Description */}
    <p style={{
      fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.55,
      marginBottom: 14,
      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}>
      {room.desc}
    </p>
 
    {/* Footer */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span className={`db-tag ${room.langClass}`}>{room.lang}</span>
        <span style={{ fontSize: "0.68rem", color: "#374151" }}>{room.lastActive}</span>
      </div>
      <button className="db-card-btn">
        {room.live ? "Open" : "Resume"}
      </button>
    </div>
  </div>
);
 
export default RoomCard;