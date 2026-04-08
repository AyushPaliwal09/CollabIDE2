import { useState } from "react";
import { CloseIcon } from "./ui/Icons.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CreateRoomModal = ({ onClose }) => {
  const [interviewMode, setInterviewMode] = useState(false);
  const [roomData, setRoomData] = useState({roomName:"", description:""})
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setRoomData({...roomData, [e.target.name]:e.target.value})
  }
  const handleSubmit=async()=>{
    try {
      const res = await axios.post("http://localhost:5000/room/create-room",{
       roomName: roomData.roomName,
       description: roomData.description,
      },
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  )
      console.log(res.data)
      navigate("/room/roompage")
    } catch (error) {
      console.log("error in createroom", error.message);
      
    }
  }
  return (
  <div className="db-modal-backdrop" onClick={onClose}>
    <div className="db-modal" onClick={e => e.stopPropagation()}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <h2 className="font-display font-bold" style={{ fontSize: "1rem", color: "#F9FAFB" }}>
            Create a new room
          </h2>
          <p style={{ fontSize: "0.77rem", color: "#4B5563", marginTop: 2 }}>
            Set up your collaborative workspace
          </p>
        </div>
        <button className="db-icon-btn" onClick={onClose} style={{ width: 28, height: 28 }}>
          <CloseIcon />
        </button>
      </div>

      {/* Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
            Room name
          </label>
          <input 
          name="roomName"
          value={roomData.roomName}
          onChange={handleChange}
          className="db-modal-input" type="text" placeholder="e.g. auth-refactor" />
        </div>

        <div>
          <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
            Description <span style={{ color: "#374151" }}>(optional)</span>
          </label>
          <textarea name="description"   value={roomData.description} onChange={handleChange}
          className="db-modal-input" rows={3} placeholder="Describe what you're building…" />
        </div>

        <div>
          <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
            Language
          </label>
          <select className="db-modal-input" style={{ cursor: "pointer" }}>
            {["JavaScript", "TypeScript", "Python", "Go", "Rust", "C++", "Java", "Other"].map(l => (
              <option key={l} value={l} style={{ background: "#0d1117" }}>{l}</option>
            ))}
          </select>
        </div>

        {/* ── NEW: Interview Mode Toggle ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 14px", borderRadius: 10,
        background: "rgba(139,92,246,0.06)",
        border: "1px solid rgba(139,92,246,0.15)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* AI logo badge */}
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, flexShrink: 0,
          }}>✦</div>
          <div>
            <div className="font-display font-semibold" style={{ fontSize: "0.8rem", color: "#E5E7EB" }}>
              Interview Mode
            </div>
            <div style={{ fontSize: "0.7rem", color: "#6B7280", marginTop: 1 }}>
              AI-powered evaluation & hints
            </div>
          </div>
        </div>
        {/* Toggle — add useState: const [interviewMode, setInterviewMode] = useState(false) */}
        <div
          onClick={() => setInterviewMode(v => !v)}
          style={{
            width: 40, height: 22, borderRadius: 999, flexShrink: 0, cursor: "pointer",
            background: interviewMode
              ? "linear-gradient(135deg,#8B5CF6,#EC4899)"
              : "rgba(255,255,255,0.08)",
            position: "relative", transition: "background 0.25s",
          }}>
          <div style={{
            position: "absolute", top: 3,
            left: interviewMode ? 20 : 3,
            width: 16, height: 16, borderRadius: "50%", background: "#fff",
            transition: "left 0.22s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }} />
        </div>
      </div>
      </div>
      
      {/* Footer */}
      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        <button className="btn-ghost" onClick={onClose}
          style={{ flex: 1, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Cancel
        </button>
        <button className="btn-primary pulse-glow" onClick={handleSubmit}
          style={{ flex: 2, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Create Room
        </button>
      </div>
    </div>
  </div>
);
}
export default CreateRoomModal;