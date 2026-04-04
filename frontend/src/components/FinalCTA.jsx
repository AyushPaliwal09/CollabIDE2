import Badge  from "./Badge";

const FinalCTA = () => (
  <section style={{ padding: "100px 0" }}>
    <div className="max-w-4xl mx-auto px-6 text-center relative">
      {/* BG glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, rgba(236,72,153,0.12) 50%, transparent 80%)",
        filter: "blur(40px)", pointerEvents: "none", zIndex: 0
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Badge>Ready to start?</Badge>
        <h2 className="font-display font-extrabold mt-6"
          style={{ fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Start coding together <span className="grad-text">today</span>
        </h2>
        <p className="mt-5 text-base" style={{ color: "#9CA3AF", maxWidth: 440, margin: "20px auto 0" }}>
          Create your first session in seconds — no setup, no installs, no credit card.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button className="btn-primary pulse-glow px-9 py-4 rounded-xl font-display font-bold text-white text-base">
            Get Started Free →
          </button>
          <button className="btn-ghost px-7 py-4 rounded-xl text-sm font-medium text-gray-300">
            Talk to us
          </button>
        </div>
        <p className="mt-5 font-mono text-xs" style={{ color: "#4B5563" }}>
          No credit card required · Free forever plan available
        </p>
      </div>
    </div>
  </section>
);
export default FinalCTA
