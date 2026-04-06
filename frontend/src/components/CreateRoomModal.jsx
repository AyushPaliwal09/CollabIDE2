import { useState } from "react"; 
import { CloseIcon } from "./ui/Icons.jsx";


const CreateRoomModal = ({ onClose }) => (
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
          <input className="db-modal-input" type="text" placeholder="e.g. auth-refactor" />
        </div>
 
        <div>
          <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
            Description <span style={{ color: "#374151" }}>(optional)</span>
          </label>
          <textarea className="db-modal-input" rows={3} placeholder="Describe what you're building…" />
        </div>
 
        <div>
          <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
            Language
          </label>
          <select className="db-modal-input" style={{ cursor: "pointer" }}>
            {["JavaScript","TypeScript","Python","Go","Rust","C++","Java","Other"].map(l => (
              <option key={l} value={l} style={{ background: "#0d1117" }}>{l}</option>
            ))}
          </select>
        </div>
      </div>
 
      {/* Footer */}
      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        <button className="btn-ghost" onClick={onClose}
          style={{ flex: 1, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Cancel
        </button>
        <button className="btn-primary pulse-glow" onClick={onClose}
          style={{ flex: 2, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Create Room
        </button>
      </div>
    </div>
  </div>
);
export default CreateRoomModal;