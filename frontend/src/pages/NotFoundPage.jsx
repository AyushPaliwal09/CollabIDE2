// CollabIDE — Minimal 404 Page
// Non-scrollable · Full viewport · Simple
//
// NEW styles added (nf-min-* prefix):
//   @keyframes nfFadeUp   — single fade-up entry for whole block
//   @keyframes nfBlink    — blinking terminal cursor
//   .nf-min-root          — full 100svh, overflow:hidden, centered
//   .nf-min-logo          — top-left brand mark
//   .nf-min-num           — 96px gradient 404
//   .nf-min-divider       — thin 32px separator line
//   .nf-min-label         — monospace uppercase label
//   .nf-min-cursor        — blinking purple bar
//   .nf-min-btn-p         — gradient primary button
//   .nf-min-btn-g         — ghost secondary button
//
// Reused tokens: Outfit font · #07090f bg · #8B5CF6/#EC4899 gradient

import { useNavigate } from "react-router-dom";

const S = () => (
  <style>{`
    .nf-min-root {
      height: 100svh; width: 100vw; overflow: hidden;
      background: #07090f;
      display: flex; align-items: center; justify-content: center;
      position: relative;
      font-family: 'DM Sans', sans-serif;
    }

    .nf-min-logo {
      position: absolute; top: 20px; left: 24px;
      display: flex; align-items: center; gap: 7px;
    }
    .nf-min-logo-mark {
      width: 22px; height: 22px; border-radius: 6px;
      background: linear-gradient(135deg, #8B5CF6, #EC4899);
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 700; color: #fff;
      font-family: 'JetBrains Mono', monospace;
    }
    .nf-min-logo-text {
      font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 0.78rem;
      background: linear-gradient(135deg, #a78bfa, #ec4899);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nf-min-wrap {
      display: flex; flex-direction: column; align-items: center;
      animation: nfFadeUp 0.45s ease both;
    }
    @keyframes nfFadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .nf-min-num {
      font-family: 'Outfit', sans-serif;
      font-weight: 700; font-size: 96px;
      line-height: 1; letter-spacing: -0.05em;
      background: linear-gradient(135deg, #a78bfa, #ec4899);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nf-min-divider {
      width: 32px; height: 1px;
      background: rgba(255,255,255,0.08);
      margin: 20px 0 18px;
    }

    .nf-min-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px; color: #374151;
      letter-spacing: 0.1em; text-transform: uppercase;
      margin-bottom: 10px;
    }

    .nf-min-desc {
      font-size: 0.88rem; color: #4B5563;
      text-align: center; max-width: 260px;
      line-height: 1.6; margin: 0;
    }

    @keyframes nfBlink { 0%,100%{opacity:1} 50%{opacity:0} }
    .nf-min-cursor {
      display: inline-block; width: 6px; height: 13px;
      background: #8B5CF6; border-radius: 1px;
      vertical-align: middle; margin-left: 3px;
      animation: nfBlink 1s step-end infinite;
    }

    .nf-min-actions { display: flex; gap: 8px; margin-top: 28px; }

    .nf-min-btn-p {
      padding: 9px 20px; border-radius: 9px;
      background: linear-gradient(135deg, #8B5CF6, #EC4899);
      border: none; color: #fff;
      font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.8rem;
      cursor: pointer;
      transition: transform 0.16s ease, filter 0.16s ease;
    }
    .nf-min-btn-p:hover { transform: scale(1.04); filter: brightness(1.08); }
    .nf-min-btn-p:active { transform: scale(0.97); }

    .nf-min-btn-g {
      padding: 9px 18px; border-radius: 9px;
      background: transparent; border: 1px solid rgba(255,255,255,0.09);
      color: #6B7280;
      font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.8rem;
      cursor: pointer;
      transition: border-color 0.16s ease, color 0.16s ease;
    }
    .nf-min-btn-g:hover { border-color: rgba(139,92,246,0.35); color: #a78bfa; }

    @media (max-width: 400px) {
      .nf-min-num { font-size: 72px; }
      .nf-min-actions { flex-direction: column; width: 220px; }
      .nf-min-btn-p, .nf-min-btn-g { text-align: center; }
    }
  `}</style>
);

export default function NotFound() {
  let navigate;
  try { navigate = useNavigate(); } catch { navigate = null; }

  const goHome = () => navigate ? navigate("/dashboard") : (window.location.href = "/dashboard");
  const goBack = () => navigate ? navigate(-1) : window.history.back();

  return (
    <>
      <S />
      <div className="nf-min-root">

        <div className="nf-min-logo">
          <div className="nf-min-logo-mark">&lt;&gt;</div>
          <span className="nf-min-logo-text">CollabIDE</span>
        </div>

        <div className="nf-min-wrap">
          <div className="nf-min-num">404</div>
          <div className="nf-min-divider" />
          <div className="nf-min-label">Page not found</div>
          <p className="nf-min-desc">
            This room or page doesn't exist.<br />
            Head back to your workspace.<span className="nf-min-cursor" />
          </p>
          <div className="nf-min-actions">
            <button className="nf-min-btn-p" onClick={goHome}>Dashboard</button>
            <button className="nf-min-btn-g" onClick={goBack}>Go back</button>
          </div>
        </div>

      </div>
    </>
  );
}