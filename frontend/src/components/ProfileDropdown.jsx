import { useEffect, useRef, useContext } from "react";
import { UserIcon, SettingsIcon, LogOutIcon } from "./ui/Icons.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
const ProfileDropdown = ({ onClose }) => {
  const ref = useRef(null);
 const navigate = useNavigate()
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const {logout} = useContext(AuthContext);
 
  const handleLogout = () =>
  {
   logout()
   navigate("/")

  }
  return (
    <div ref={ref} className="db-dropdown">
      {/* User info */}
      <div style={{ padding: "10px 10px 8px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0,
        }}>A</div>
        <div style={{ minWidth: 0 }}>
          <div className="font-display font-semibold" style={{ fontSize: "0.82rem", color: "#F9FAFB", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Aman Verma</div>
          <div style={{ fontSize: "0.72rem", color: "#4B5563", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>aman@collabide.dev</div>
        </div>
      </div>
 
      <div className="db-sep" />
 
      {[
        { icon: <UserIcon />,     label: "Profile" },
        { icon: <SettingsIcon />, label: "Settings" },
      ].map((item, i) => (
        <div key={i} className="db-dropdown-item" onClick={onClose}>
          <span style={{ color: "#6B7280", flexShrink: 0 }}>{item.icon}</span>
          {item.label}
        </div>
      ))}
 
      <div className="db-sep" />
 
      <div className="db-dropdown-item danger" onClick={handleLogout}>
        <span style={{ flexShrink: 0 }}><LogOutIcon /></span>
        Logout
      </div>
    </div>
  );
};
export default ProfileDropdown;

