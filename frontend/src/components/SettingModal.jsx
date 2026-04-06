import { useState } from "react";
import { CloseIcon } from "./ui/Icons.jsx";

const SettingsModal = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState("14px");
  const [editorTheme, setEditorTheme] = useState("One Dark");
 
  return (
    <div className="db-modal-backdrop" onClick={onClose}>
      <div className="db-modal db-modal-lg" onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 className="font-display font-bold" style={{ fontSize: "1rem", color: "#F9FAFB" }}>Settings</h2>
          <button className="db-icon-btn" onClick={onClose} style={{ width: 28, height: 28 }}><CloseIcon /></button>
        </div>
 
        {/* Sections */}
        {[
          {
            title: "Theme",
            rows: [
              {
                label: "Dark mode",
                sub: "Use dark background across the app",
                control: (
                  <div
                    onClick={() => setDarkMode(v => !v)}
                    style={{
                      width: 40, height: 22, borderRadius: 999,
                      background: darkMode ? "linear-gradient(135deg,#8B5CF6,#EC4899)" : "rgba(255,255,255,0.1)",
                      position: "relative", cursor: "pointer", transition: "background 0.25s", flexShrink: 0,
                    }}>
                    <div style={{
                      position: "absolute", top: 3,
                      left: darkMode ? 20 : 3, width: 16, height: 16,
                      borderRadius: "50%", background: "#fff",
                      transition: "left 0.22s cubic-bezier(0.4,0,0.2,1)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                    }} />
                  </div>
                ),
              },
            ],
          },
          {
            title: "Editor",
            rows: [
              {
                label: "Font size",
                sub: "Code editor font size",
                control: (
                  <select
                    className="db-modal-input"
                    value={fontSize}
                    onChange={e => setFontSize(e.target.value)}
                    style={{ width: 80, padding: "4px 8px", cursor: "pointer" }}>
                    {["12px","13px","14px","15px","16px","18px"].map(s => (
                      <option key={s} style={{ background: "#0d1117" }}>{s}</option>
                    ))}
                  </select>
                ),
              },
              {
                label: "Editor theme",
                sub: "Syntax highlighting theme",
                control: (
                  <select
                    className="db-modal-input"
                    value={editorTheme}
                    onChange={e => setEditorTheme(e.target.value)}
                    style={{ width: 110, padding: "4px 8px", cursor: "pointer" }}>
                    {["One Dark","Dracula","Nord","Gruvbox","Tokyo Night"].map(t => (
                      <option key={t} style={{ background: "#0d1117" }}>{t}</option>
                    ))}
                  </select>
                ),
              },
            ],
          },
          {
            title: "Account",
            rows: [
              {
                label: "Display name",
                sub: "Visible to collaborators",
                control: (
                  <input
                    className="db-modal-input"
                    defaultValue="Aman Verma"
                    style={{ width: 140, padding: "5px 9px" }}
                  />
                ),
              },
            ],
          },
        ].map((section, si) => (
          <div key={si} style={{ marginBottom: si < 2 ? 20 : 0 }}>
            <div className="font-mono" style={{ fontSize: "0.68rem", color: "#4B5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
              {section.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {section.rows.map((row, ri) => (
                <div key={ri} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "9px 0",
                  borderBottom: ri < section.rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#E5E7EB", fontWeight: 500 }}>{row.label}</div>
                    <div style={{ fontSize: "0.72rem", color: "#4B5563", marginTop: 1 }}>{row.sub}</div>
                  </div>
                  {row.control}
                </div>
              ))}
            </div>
            {si < 2 && <div className="db-sep" style={{ marginTop: 4 }} />}
          </div>
        ))}
 
        <div style={{ marginTop: 20 }}>
          <button className="btn-primary" onClick={onClose}
            style={{ padding: "10px 0", borderRadius: 9, fontSize: "0.85rem", width: "100%" }}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;