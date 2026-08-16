import { useEffect, useState } from "react";
import { UsersIcon } from "./ui/Icons.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import {toast} from "react-hot-toast";

const RoomCard = ({ room, delay, setRefreshRooms, onClick }) =>{
  // const now = new Date();
  // const lastActiveDate = new Date(room.lastActive);
  // const diffMinutes = Math.floor((now - lastActiveDate) / 60000);
  // let lastActiveText = "";
  // if (diffMinutes < 1) {
  //   lastActiveText = "Just now";
  // } else if (diffMinutes < 60) {
  //   lastActiveText = `${diffMinutes} minutes ago`;
  // } else if (diffMinutes < 1440) {
  //   lastActiveText = `${Math.floor(diffMinutes / 60)} hours ago`;
  // } else {
  //   lastActiveText = `${Math.floor(diffMinutes / 1440)} days ago`;
  // }
  // room.lastActive = lastActiveText;
  const {user} = useAuth();
  const deleteRoom = room.admin === user._id;
  const isLive = room.activeUser.length >= 1;
   const { roomId } = useParams();
  const handleDeleteRoom = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/room/delete-room/${room._id}`);
      setRefreshRooms(prev => prev + 1);
      console.log(room);
      
      // alert("Room deleted successfully");
      toast.success("Room deleted successfully");
    } catch (error) {
      console.error("Error deleting room:", error);
      // alert("Failed to delete room");
      toast.error("Failed to delete room");
    }
  };
  return (

  <div onClick={onClick} className={`db-card fade-up delay-${delay}`} style={{ position: "relative", zIndex: 1 }}>
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
            {room.roomName}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
            <UsersIcon />
            <span style={{ fontSize: "0.7rem", color: "#6B7280" }}>{room.participants.length+1} members</span>
          </div>
        </div>
      </div>
      {/* Live badge */}
      {isLive && (
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
      {room.description || "No description provided."}
    </p>

    {/* Footer */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span className={`db-tag ${room.langClass}`}>{room.lang}</span>
        <span style={{ fontSize: "0.68rem", color: "#374151" }}>{room.lastActive}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {/* Delete button */}
        {deleteRoom &&
        <button 
          onClick={e => e.stopPropagation()}
          style={{
            width: 26, height: 26, borderRadius: 7, border: "none",
            background: "rgba(239,68,68,0.08)",
            color: "#ef4444", cursor: "pointer", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, transition: "background 0.18s, transform 0.15s",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteRoom();
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(239,68,68,0.18)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(239,68,68,0.08)"}
        >🗑</button>}
        <button className="db-card-btn" >
          {isLive ? "Open" : "Resume"}
        </button>
      </div>
    </div>
  </div>
);
}
export default RoomCard;


