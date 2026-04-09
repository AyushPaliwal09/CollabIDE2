import { FileCodeIcon, PlusIcon, XIcon } from "./ui/Icons";

const TabsBar = ({ tabs, activeTab, onTab, onClose }) => (
  <div className="ws-tabs-bar">
    {tabs.map(tab => (
      <div
        key={tab.id}
        className={`ws-tab ${activeTab === tab.id ? "active" : ""}`}
        onClick={() => onTab(tab.id)}
      >
        <FileCodeIcon color={tab.color} />
        {tab.name}
        <button className="ws-tab-close" onClick={e => { e.stopPropagation(); onClose(tab.id); }}>
          <XIcon />
        </button>
      </div>
    ))}
    <button style={{
      padding: "0 10px", background: "transparent", border: "none",
      color: "#374151", cursor: "pointer", display: "flex", alignItems: "center",
      transition: "color 0.14s",
    }}
    onMouseEnter={e => e.currentTarget.style.color = "#9CA3AF"}
    onMouseLeave={e => e.currentTarget.style.color = "#374151"}>
      <PlusIcon />
    </button>
  </div>
);
export default TabsBar;