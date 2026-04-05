const BackgroundBlobs = () => (
  <>
    {/* Blob 1 — top right purple */}
    <div style={{
      position: "fixed", top: "-10%", right: "-5%",
      width: 560, height: 560, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
      filter: "blur(80px)",
      animation: "blobDrift 14s ease-in-out infinite",
      pointerEvents: "none", zIndex: 0,
    }} />
    {/* Blob 2 — bottom left pink */}
    <div style={{
      position: "fixed", bottom: "-10%", left: "-5%",
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
      filter: "blur(80px)",
      animation: "blobDrift2 16s ease-in-out infinite",
      pointerEvents: "none", zIndex: 0,
    }} />
    {/* Blob 3 — centre accent green (very subtle) */}
    <div style={{
      position: "fixed", top: "40%", left: "40%",
      width: 300, height: 300, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
      filter: "blur(60px)",
      animation: "blobDrift 20s ease-in-out infinite reverse",
      pointerEvents: "none", zIndex: 0,
    }} />
  </>
);
export default BackgroundBlobs;