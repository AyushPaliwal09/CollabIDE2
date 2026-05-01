import Chat from "../components/Chat.jsx";
import RoomHeader from "../components/RoomHeader.jsx";
import StatusBar from "../components/StatusBar.jsx";
import TabsBar from "../components/TabsBar.jsx";
import Terminal from "../components/Terminal.jsx";
import { FileCodeIcon, FilesIcon } from "../components/ui/Icons.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Editor from "@monaco-editor/react";
import { DEFAULT_CODE, TABS } from "../data/MockData.js";
import { useState, useEffect, useRef, useCallback } from "react";
import SettingsModal from "../components/SettingModal.jsx";



export default function Workspace() {
  
  // ── Panel state ────────────────────────────────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarTab, setSidebarTab] = useState("users");
  const [sidebarWidth, setSidebarWidth] = useState(220);   // icon strip (48) + panel

  const [chatWidth, setChatWidth] = useState(280);

  const [terminalOpen, setTerminalOpen] = useState(true);
  const [terminalH, setTerminalH] = useState(180);
  const [termTab, setTermTab] = useState("Terminal");

  const [tabs, setTabs] = useState(TABS);
  const [activeTab, setActiveTab] = useState(1);

  const [mobilePanelIdx, setMobilePanelIdx] = useState(0);

  // ── Monaco language per file tab ──────────────────────────────────────────
  const currentLang = tabs.find(t => t.id === activeTab)?.lang ?? "javascript";

  // ── Sidebar tab toggle: click same → toggle open ──────────────────────────
  const handleSidebarTab = useCallback((tab) => {
    if (sidebarTab === tab && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarTab(tab);
      setSidebarOpen(true);
      if (tab === "terminal") setTerminalOpen(true);
    }
  }, [sidebarTab, sidebarOpen]);

  // ── Resize: vertical (chat) ────────────────────────────────────────────────
  const chatResizing = useRef(false);
  const chatStartX = useRef(0);
  const chatStartW = useRef(0);

  const onChatMouseDown = useCallback((e) => {
    chatResizing.current = true;
    chatStartX.current = e.clientX;
    chatStartW.current = chatWidth;
    e.preventDefault();
  }, [chatWidth]);

  // ── Resize: horizontal (terminal) ─────────────────────────────────────────
  const termResizing = useRef(false);
  const termStartY = useRef(0);
  const termStartH = useRef(0);

  const onTermMouseDown = useCallback((e) => {
    termResizing.current = true;
    termStartY.current = e.clientY;
    termStartH.current = terminalH;
    e.preventDefault();
  }, [terminalH]);

  // ── Resize: sidebar panel ──────────────────────────────────────────────────
  const sbResizing = useRef(false);
  const sbStartX = useRef(0);
  const sbStartW = useRef(0);

  const onSbMouseDown = useCallback((e) => {
    if (!sidebarOpen) return;
    sbResizing.current = true;
    sbStartX.current = e.clientX;
    sbStartW.current = sidebarWidth;
    e.preventDefault();
  }, [sidebarOpen, sidebarWidth]);

  // ── Global mouse move / up ─────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e) => {
      if (chatResizing.current) {
        const delta = chatStartX.current - e.clientX;
        setChatWidth(Math.max(200, Math.min(480, chatStartW.current + delta)));
      }
      if (termResizing.current) {
        const delta = termStartY.current - e.clientY;
        setTerminalH(Math.max(100, Math.min(400, termStartH.current + delta)));
      }
      if (sbResizing.current) {
        const delta = e.clientX - sbStartX.current;
        setSidebarWidth(Math.max(48, Math.min(340, sbStartW.current + delta)));
      }
    };
    const onUp = () => {
      chatResizing.current = false;
      termResizing.current = false;
      sbResizing.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  // ── Close tab ──────────────────────────────────────────────────────────────
  const closeTab = useCallback((id) => {
    setTabs(t => {
      const next = t.filter(x => x.id !== id);
      if (activeTab === id && next.length) setActiveTab(next[next.length - 1].id);
      return next;
    });
  }, [activeTab]);

  // ── Computed sidebar total width ───────────────────────────────────────────
  const totalSidebarW = sidebarOpen ? sidebarWidth : 48;

  const [modal, setModal] = useState(null); // null | "settings"
  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  // close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>

      <div className="ws-root">

        {/* ── Room header ──────────────────────────────────────────────── */}
        <RoomHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(v => !v)}
          chatOpen={true}
          onToggleChat={() => { }}
        />

        {/* ── Body ────────────────────────────────────────────────────── */}
        <div className="ws-body">

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <div className="ws-sidebar" style={{ width: totalSidebarW }}>
            <Sidebar
              open={sidebarOpen}
              activeTab={sidebarTab}
              onTab={handleSidebarTab}
              onSettings={() => openModal("settings")}

            />
          </div>

          {/* Sidebar resize handle */}
          <div
            className="ws-resize-v"
            onMouseDown={onSbMouseDown}
            style={{ cursor: sidebarOpen ? "col-resize" : "default" }}
          />

          {/* ── Editor column ───────────────────────────────────────── */}
          <div className="ws-editor-col">

            {/* File tabs */}
            {/* <TabsBar
              tabs={tabs}
              activeTab={activeTab}
              onTab={setActiveTab}
              onClose={closeTab}
            /> */}

            {/* Monaco editor + terminal stacked */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 }}>

              {/* Editor */}
              <div className="ws-editor-area" style={{ flex: 1 }}>
                <Editor
                  height="100%"
                  language={currentLang}
                  defaultValue={DEFAULT_CODE}
                  theme="vs-dark"
                  options={{
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontLigatures: true,
                    lineHeight: 1.7,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    padding: { top: 14, bottom: 14 },
                    renderLineHighlight: "gutter",
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                    smoothScrolling: true,
                    tabSize: 2,
                    wordWrap: "on",
                    automaticLayout: true,
                    scrollbar: {
                      verticalScrollbarSize: 4,
                      horizontalScrollbarSize: 4,
                    },
                    overviewRulerLanes: 0,
                    hideCursorInOverviewRuler: true,
                    lineNumbers: "on",
                    glyphMargin: false,
                    folding: true,
                    bracketPairColorization: { enabled: true },
                    suggest: { showWords: false },
                  }}
                />
              </div>

              {/* Terminal resize handle */}
              {terminalOpen && (
                <div
                  className="ws-resize-h"
                  onMouseDown={onTermMouseDown}
                />
              )}

              {/* Terminal */}
              {terminalOpen && (
                <Terminal
                  height={terminalH}
                  termTab={termTab}
                  onTermTab={setTermTab}
                />
              )}
            </div>
          </div>

          {/* Chat resize handle */}
          <div
            className="ws-resize-v"
            onMouseDown={onChatMouseDown}
          />

          {/* ── Chat panel ──────────────────────────────────────────── */}
          <Chat width={chatWidth} />

        </div>

        {/* ── Status bar ──────────────────────────────────────────────── */}
        <StatusBar />

        {/* ── Mobile bottom tabs ──────────────────────────────────────── */}
        <div className="ws-mobile-tabs">
          {[
            { label: "Editor", icon: <FileCodeIcon color="currentColor" /> },
            { label: "Chat", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
            // { label: "Files",   icon: <FilesIcon /> },
          ].map((t, i) => (
            <div
              key={i}
              className={`ws-mobile-tab ${mobilePanelIdx === i ? "active" : ""}`}
              onClick={() => setMobilePanelIdx(i)}
            >
              {t.icon}
              <span style={{ fontSize: 9, fontFamily: "DM Sans, sans-serif" }}>{t.label}</span>
            </div>
          ))}
        </div>

      </div>

      {modal === "settings" && <SettingsModal onClose={closeModal} />}

    </>
  );
}
