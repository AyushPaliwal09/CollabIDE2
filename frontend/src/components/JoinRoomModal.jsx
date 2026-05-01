import { useState } from "react";
import { CloseIcon } from "./ui/Icons.jsx";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const JoinRoomModal = ({onClose}) => {
  const [join, setJoin] = useState("")
   const { roomId } = useParams()
  const navigate = useNavigate()
  const handleJoin = async ()=>{
   try {
    const res = await axios.post(`http://localhost:5000/room/join-room/${roomId}`)
    console.log(res.data);
    
     navigate("/login")
   }catch (error) {
        console.log(error)
        alert("Invalid or expired room link")
      }
  }
return (
  <>
  <div className="db-modal-backdrop" >
    <div className="db-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 400 }}>
      <div style = {{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <h2 className="font-display font-bold" style={{ fontSize: "1rem", color: "#F9FAFB" }}>
            Join a room
          </h2>
          <p style={{ fontSize: "0.77rem", color: "#4B5563", marginTop: 2 }}>Paste an invite link to join</p>
        </div>
        <button className="db-icon-btn" onClick={onClose} style={{ width: 28, height: 28 }}>
          <CloseIcon />
        </button>
      </div>
 
      <div style={{ marginBottom: 18 }}>
        <label style={{ fontSize: "0.76rem", color: "#6B7280", fontWeight: 500, display: "block", marginBottom: 5 }}>
          Room URL
        </label>
        <input
          className="db-modal-input"
          type="text"
          placeholder="collabide.dev/join/abc-xyz-123"
          autoFocus
        />
      </div>
 
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn-ghost" onClick={onClose}
          style={{ flex: 1, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Cancel
        </button>
        <button className="btn-primary pulse-glow" onClick={handleJoin}
          style={{ flex: 2, padding: "10px 0", borderRadius: 9, fontSize: "0.85rem" }}>
          Join Room
        </button>
      </div>
    </div>
  </div>
</>
)

}
export default JoinRoomModal