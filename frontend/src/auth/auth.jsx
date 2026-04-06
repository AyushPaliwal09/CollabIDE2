import { useEffect, useState } from "react";
import AuthForm from "../components/AuthForm.jsx";
import BackgroundBlobs from "../components/ui/BackgroundBlobs.jsx";
import Preview from "../components/ui/Preview.jsx";
import axios from "axios"
export default function Auth() {

  return (
    <>
      
      <BackgroundBlobs />
 
      {/* Full page wrapper */}
      <div
        className="auth-root grid-bg h-full "
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "stretch",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
 
        {/* ── LEFT — Auth form (40%) ─────────────────────────────── */}
        <div
          className="auth-left"
          style={{
            width: "42%",
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "40px 48px",
            position: "relative",
            zIndex: 2,
            /* subtle left glow behind form */
            background: "linear-gradient(135deg, rgba(139,92,246,0.04) 0%, transparent 60%)",
          }}
        >
          {/* Soft purple glow behind form — NEW (auth page depth layer) */}
          <div style={{
            position: "absolute",
            top: "30%", left: "-10%",
            width: 360, height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />
 
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 420 }}>
            <AuthForm />
          </div>
        </div>
 
        {/* ── RIGHT — Product preview (58%) ─────────────────────── */}
        <div
          className="auth-right"
          style={{
            width: "58%",
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            padding: "24px 48px",
            position: "relative",
            zIndex: 2,
            /* subtle vertical divider */
            borderLeft: "1px solid rgba(255,255,255,0.04)",
            /* deeper glow on right for the editor */
            background: "radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.09) 0%, transparent 60%)",
          }}
        >
          {/* Text above editor */}
          <div className="fade-up delay-1" style={{ textAlign: "center", marginBottom: 32 }}>
            <p className="font-mono" style={{ fontSize: 11, color: "#4B5563", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
              What you're signing into
            </p>
            <h2 className="font-display font-extrabold" style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: "#F9FAFB",
            }}>
              Real-time coding,{" "}
              <span className="grad-text">together.</span>
            </h2>
          </div>
 
          <Preview />
 
          {/* Bottom trust line */}
          <div className="fade-up delay-5" style={{
            marginTop: 32, textAlign: "center",
            fontSize: "0.78rem", color: "#4B5563",
            fontFamily: "JetBrains Mono, monospace",
          }}>
            Used by <span style={{ color: "#8B5CF6" }}>1,200+</span> developers worldwide
          </div>
        </div>
 
      </div>
    </>
  );
}
