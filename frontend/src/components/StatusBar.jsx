import { USERS } from "../data/MockData";

const StatusBar = () => (
  <div className="ws-status-bar">
    <div className="ws-status-item" style={{ color: "#a78bfa" }}>
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
      Connected
    </div>
    <div className="ws-status-item">TypeScript</div>
    <div className="ws-status-item">UTF-8</div>
    <div className="ws-status-item">Ln 12, Col 8</div>
    <div style={{ flex: 1 }} />
    <div className="ws-status-item" style={{ color: "#22C55E" }}>0 Errors</div>
    <div className="ws-status-item">
      {USERS.length} collaborators
    </div>
  </div>
);
export default StatusBar;