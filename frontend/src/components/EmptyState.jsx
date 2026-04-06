import SettingsModal from "./SettingModal.jsx";
import JoinRoomModal from "./JoinRoomModal.jsx";
import CreateRoomModal from "./CreateRoomModal.jsx";
const EmptyState = ({ onCreateRoom, onJoinRoom }) => (
  <div className="fade-up" style={{
    display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "center", textAlign: "center",
    padding: "80px 24px",
    minHeight: 360,
  }}>
    <div className="empty-ring">💻</div>
    <h3 className="font-display font-bold" style={{ fontSize: "1.1rem", color: "#F9FAFB", marginBottom: 8 }}>
      No rooms yet
    </h3>
    <p style={{ fontSize: "0.85rem", color: "#4B5563", maxWidth: 300, lineHeight: 1.6, marginBottom: 24 }}>
      Create a new room or join an existing one to start collaborating with your team.
    </p>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
      <button className="btn-primary pulse-glow" onClick={onCreateRoom}
        style={{ padding: "10px 22px", borderRadius: 10, fontSize: "0.85rem" }}>
        Create a room
      </button>
      <button className="btn-ghost" onClick={onJoinRoom}
        style={{ padding: "10px 22px", borderRadius: 10, fontSize: "0.85rem" }}>
        Join a room
      </button>
    </div>
  </div>
);
export default EmptyState;