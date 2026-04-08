import { useContext, useState } from "react";
import Logo from "./ui/Logo.jsx";
import { AuthContext } from "../context/AuthContext.jsx"
import { EyeOpen, EyeClosed, GoogleIcon, GithubIcon } from "./ui/Icons.jsx";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState({ username: "", password: "", email: "" })
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const { login, signup } = useContext(AuthContext)
  // pill indicator width/position
  const pillStyle = isLogin
    ? { left: 4, width: "calc(50% - 4px)" }
    : { left: "calc(50%)", width: "calc(50% - 4px)" };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    let result
    if (isLogin) {
      result = await login(user.email, user.password)
      console.log(user);
    }
    else {
      result = await signup(user.username, user.email, user.password)
      console.log(user);
    }
    console.log("result is",result)
    if (result.success) {
      navigate("/dashboard")
    } else {
      alert(result.message.message || "Something went wrong")
    }
  }
  return (
    <div style={{
      width: "100%",
      maxWidth: 420,
      display: "flex",
      flexDirection: "column",
      gap: 0,
    }}>

      {/* ── Logo ── */}
      <div className="fade-up delay-1" style={{ marginBottom: 32 }}>
        <Logo />
      </div>

      {/* ── Title + Subtitle ── */}
      <div className="fade-up delay-2" style={{ marginBottom: 28 }}>
        <h1 className="font-display font-extrabold" style={{
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: "#F9FAFB",
          marginBottom: 8,
        }}>
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.6 }}>
          {isLogin
            ? "Continue coding with your team."
            : "Start collaborating in seconds."}
        </p>
      </div>

      {/* ── Toggle: Login / Sign Up ── */}
      <div className="fade-up delay-2" style={{ marginBottom: 28 }}>
        <div className="toggle-wrap" style={{ position: "relative" }}>
          {/* sliding pill */}
          <div className="toggle-pill" style={pillStyle} />
          <button
            className="toggle-btn"
            onClick={() => setMode("login")}
            style={{ color: isLogin ? "#fff" : "#6B7280" }}
          >Login</button>
          <button
            className="toggle-btn"
            onClick={() => setMode("signup")}
            style={{ color: !isLogin ? "#fff" : "#6B7280" }}
          >Sign Up</button>
        </div>
      </div>

      {/* ── Form Fields ── */}
      <div className="fade-up delay-3" style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>

        {/* Username — signup only */}
        {!isLogin && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 500, letterSpacing: "0.02em" }}>
              Username
            </label>
            <div className="input-wrap">
              <input
                className="auth-input"
                name="username"
                value={user.username}
                onChange={handleChange}
                type="text"
                placeholder="yourhandle"
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 500, letterSpacing: "0.02em" }}>
            Email address
          </label>
          <div className="input-wrap">
            <input
              className="auth-input"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 500, letterSpacing: "0.02em" }}>
              Password
            </label>
            {isLogin && (
              <a className="link-highlight" style={{ fontSize: "0.75rem" }}>Forgot password?</a>
            )}
          </div>
          <div className="input-wrap">
            <input
              className="auth-input"
              name="password"
              type={showPass ? "text" : "password"}
              value={user.password}
              onChange={handleChange}
              placeholder={isLogin ? "••••••••" : "Min. 8 characters"}
              style={{ paddingRight: 40 }}
            />
            <button className="eye-btn" onClick={() => setShowPass(v => !v)} tabIndex={-1}>
              {showPass ? <EyeOpen /> : <EyeClosed />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Primary CTA ── */}
      <div className="fade-up delay-4" style={{ marginBottom: 20 }}>
        <button
          className="btn-primary pulse-glow cursor-pointer"
          type="submit"
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "13px 0",
            borderRadius: 12,
            fontSize: "0.95rem",
            letterSpacing: "0.01em",
          }}
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
      </div>

      {/* ── OR divider ── */}
      <div className="fade-up delay-4" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div className="or-line" />
        <span style={{ fontSize: "0.78rem", color: "#4B5563", whiteSpace: "nowrap", fontFamily: "JetBrains Mono, monospace" }}>
          OR
        </span>
        <div className="or-line" />
      </div>

      {/* ── Social Login ── */}
      <div className="fade-up delay-5" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        <button className="social-btn">
          <GoogleIcon />
          Continue with Google
        </button>
        <button className="social-btn">
          <GithubIcon />
          Continue with GitHub
        </button>
      </div>

      {/* ── Bottom link ── */}
      <div className="fade-up delay-6" style={{ textAlign: "center", fontSize: "0.83rem", color: "#6B7280" }}>
        {isLogin ? (
          <>Don't have an account?{" "}
            <a className="link-highlight" onClick={() => setMode("signup")}>Sign up</a>
          </>
        ) : (
          <>Already have an account?{" "}
            <a className="link-highlight" onClick={() => setMode("login")}>Login</a>
          </>
        )}
      </div>

      {/* ── Trust badges ── */}
      <div className="fade-up delay-6" style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
        {[
          { dot: "#22C55E", text: "No credit card required" },
          { dot: "#8B5CF6", text: "Secure authentication" },
        ].map((b, i) => (
          <div key={i} className="trust-badge">
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: b.dot, flexShrink: 0 }} />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthForm;