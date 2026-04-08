import { useState, useEffect } from "react";

import Navbar from "../components/DashboardNavbar.jsx";
import DashboardHeader from "../components/DashboardHeader.jsx";
import RoomCard from "../components/RoomCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import StatsBar from "../components/StatsBar.jsx";
import SettingsModal from "../components/SettingModal.jsx";
import  JoinRoomModal  from "../components/JoinRoomModal.jsx";
import CreateRoomModal  from "../components/CreateRoomModal.jsx";
import { ROOMS } from "../data/Room.js";
export default function Dashboard() {
  const [modal, setModal] = useState(null); // null | "create" | "join" | "settings"
  const [hasRooms, setHasRooms] = useState(true);        // toggle to false to see empty state
 
  const openModal  = (type) => setModal(type);
  const closeModal = () => setModal(null);
 
  // close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
 
  return (
    <>
     
 
      {/* ── Fixed navbar ── */}
      <Navbar
        onCreateRoom={() => openModal("create")}
        onJoinRoom={()   => openModal("join")}
        onSettings={() => openModal("settings")}
      />
 
      {/* ── Main content ── */}
      <main
        className="grid-bg"
        style={{
          minHeight: "100svh",
          paddingTop: 56,          /* navbar height */
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Ambient background glows — reused from home page approach */}
        <div style={{
          position: "fixed", top: "5%", right: "-5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(70px)", pointerEvents: "none", zIndex: 0,
        }} />
        <div style={{
          position: "fixed", bottom: "5%", left: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
          filter: "blur(70px)", pointerEvents: "none", zIndex: 0,
        }} />
 
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "clamp(20px,4vw,40px) clamp(16px,3vw,32px)",
          position: "relative", zIndex: 1,
        }}>
          <DashboardHeader
            onCreateRoom={() => openModal("create")}
            onJoinRoom={() => openModal("join")}
          />
 
          <StatsBar />
 
          {/* ── Rooms grid or empty state ── */}
          {hasRooms ? (
            <div
              className="rooms-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
              }}
            >
              {ROOMS.map((room, i) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  delay={Math.min(i + 1, 6)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              onCreateRoom={() => openModal("create")}
              onJoinRoom={() => openModal("join")}
            />
          )}
        </div>
      </main>
 
      {/* ── Modals ── */}
      {modal === "create"   && <CreateRoomModal  onClose={closeModal} />}
      {modal === "join"     && <JoinRoomModal    onClose={closeModal}  />}
      {modal === "settings" && <SettingsModal    onClose={closeModal} />}

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "16px clamp(16px,3vw,32px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10,
        background: "rgba(7,9,15,0.6)",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Logo */}
          <div style={{
            width: 20, height: 20, borderRadius: 5,
            background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, color: "#fff",
            fontFamily: "JetBrains Mono, monospace",
          }}>{"<>"}</div>
          <span className="font-display grad-text" style={{ fontSize: "0.8rem", fontWeight: 700 }}>
            CollabIDE
          </span>
          <span style={{ fontSize: "0.72rem", color: "#374151" }}>© 2026</span>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {["Docs", "Status", "Privacy", "Terms"].map(l => (
            <a key={l} href="#" style={{
              fontSize: "0.75rem", color: "#4B5563",
              textDecoration: "none", transition: "color 0.18s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#9CA3AF"}
            onMouseLeave={e => e.currentTarget.style.color = "#4B5563"}>
              {l}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
