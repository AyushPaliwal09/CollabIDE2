import { FILE_TREE, USERS } from "../data/MockData.js";
import { FileCodeIcon, FilesIcon, FolderIcon, SettingsIcon, TerminalIcon, UsersIcon } from "./ui/Icons.jsx";

const Sidebar = ({ open, activeTab, onTab, onSettings }) => {
  const TABS_META = [
    // { id: "files",    icon: <FilesIcon />,   label: "Files"    },
    { id: "users",    icon: <UsersIcon />,   label: "Users"    },
    { id: "terminal", icon: <TerminalIcon />, label: "Terminal" },
  ];
 
  return (
    <>
      {/* Icon strip */}
      <div className="ws-icon-strip">
        {/* Top icons */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, alignItems: "center", paddingTop: 4 }}>
          {TABS_META.map(t => (
            <button
              key={t.id}
              className={`ws-sidebar-icon ${activeTab === t.id ? "active" : ""}`}
              onClick={() => onTab(t.id)}
              title={t.label}
            >
              {t.icon}
              <span className="ws-tooltip">{t.label}</span>
            </button>
          ))}
        </div>
 
        {/* Bottom: settings + collapse */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", paddingBottom: 6 }}>
          <div className="ws-sep" style={{ width: 20, height: 1 }} />
          <button className="ws-sidebar-icon spin-slow-hover" title="Settings" onClick={onSettings}>
            <SettingsIcon />
            <span className="ws-tooltip">Settings</span>
          </button>
        </div>
      </div>
 
      {/* Expanded panel */}
      {open && (
        <div className="ws-sidebar-panel fade-in">
          {/* Panel title */}
          <div style={{
            height: 32, display: "flex", alignItems: "center",
            padding: "0 10px", borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}>
            <span style={{ fontSize: "10px", color: "#4B5563", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "JetBrains Mono, monospace" }}>
              {activeTab}
            </span>
          </div>
 
          <div className="ws-sidebar-panel-inner">
            {/* FILES */}
            {/* {activeTab === "files" && (
              <div>
                {FILE_TREE.map((item, i) => (
                  <div key={i}
                    className={`ws-file-item ${item.active ? "active" : ""}`}
                    style={{ paddingLeft: item.depth === 1 ? 22 : 10 }}>
                    {item.type === "folder"
                      ? <FolderIcon open={item.open} />
                      : <FileCodeIcon color={item.color} />}
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</span>
                  </div>
                ))}
              </div>
            )} */}
 
            {/* USERS */}
            {activeTab === "users" && (
              <div style={{ padding: "4px 0" }}>
                {USERS.map((u, i) => (
                  <div key={i} className="ws-user-row">
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: u.color, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 10, color: "#fff",
                      fontWeight: 700, flexShrink: 0,
                    }}>{u.initial}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "11px", color: "#D1D5DB", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis" }}>
                        {u.name}{u.you && <span style={{ color: "#4B5563", marginLeft: 4 }}>(you)</span>}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                        {u.status === "typing" ? (
                          <>
                            <span className="typing-dot" />
                            <span className="typing-dot" />
                            <span className="typing-dot" />
                          </>
                        ) : (
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                        )}
                        <span style={{ fontSize: 10, color: "#4B5563" }}>{u.status === "typing" ? "typing…" : "online"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
 
            {/* TERMINAL (shortcut in sidebar) */}
            {activeTab === "terminal" && (
              <div style={{ padding: "8px 10px" }}>
                <p style={{ fontSize: 11, color: "#4B5563", fontFamily: "JetBrains Mono, monospace" }}>
                  Terminal is open in the<br />bottom panel ↓
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;