import { SendIcon } from "./ui/Icons";
import { USERS, MESSAGES } from "../data/MockData.js";
import { useState, useEffect, useRef, use } from "react";
import { Socket } from "socket.io-client";
const Chat = ({ width, socket, onlineUsers, room, user, getAvatarColor }) => {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  console.log(socket);
  // console.log("online users in Chat component", onlineUsers);
  console.log("current user in Chat component", user);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);
  const handleSendMessage = () => {
    const newMsg = {
      id: Date.now(),
      user: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mine: true,
      color: "#2563EB"
    };
    if (!input.trim()) return;
    if (input) {
      socket.emit("chat-message", { roomId: room._id, message: input, user: user });
    }
    setMsgs(prev => [...prev, newMsg]);
    setInput("");
  }


  const handleReceiveMessage = (data) => {
    if (data.user.id === user._id) return; // ignore own message
    const newMsg = {
      id: Date.now(),
      user: data.user.username,
      text: data.message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mine: false,
      color: getAvatarColor(data.user._id)
    };
    setMsgs(prev => [...prev, newMsg]);
    console.log("all messages", [...msgs, newMsg]);
  };

  useEffect(() => {
    if (!socket) return;
    const handleMessage = (data) => {
      handleReceiveMessage(data);
    };
    socket.on("chat-message", handleMessage);

    return () => {
      socket.off("chat-message", handleMessage);
    };
  }, [socket]);

  return (
    <div className="ws-chat" style={{ width }}>
      {/* Header */}
      <div className="ws-chat-header">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="font-display font-semibold" style={{ fontSize: "0.8rem", color: "#E5E7EB", flex: 1 }}>Chat</span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          {USERS.map(u => (
            <div key={u.name} className="ws-user-avatar" title={u.name}
              style={{ width: 18, height: 18, fontSize: 7, background: u.color }}>
              {u.initial}
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
        {msgs.map(msg => (
          <div key={msg.id} className="ws-chat-msg" style={{ alignItems: msg.mine ? "flex-end" : "flex-start" }}>
            {!msg.mine && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: msg.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#fff", fontWeight: 700 }}>
                  {msg.user[0]}
                </div>
                <span style={{ fontSize: 10, color: "#4B5563" }}>{msg.user}</span>
                <span style={{ fontSize: 9, color: "#374151" }}>{msg.time}</span>
              </div>
            )}
            <div className={`ws-chat-bubble ${msg.mine ? "mine" : "other"}`}>
              {msg.text}
            </div>
            {msg.mine && (
              <span style={{ fontSize: 9, color: "#374151", marginTop: 3 }}>{msg.time}</span>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#EC4899", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#fff", fontWeight: 700 }}>S</div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px 8px 8px 8px", padding: "6px 10px", display: "flex", alignItems: "center", gap: 2 }}>
            <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
          </div>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "8px 10px 10px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
          <textarea
            className="ws-chat-input"
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Message the team…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn-primary" onClick={handleSendMessage} style={{
            width: 32, height: 32, borderRadius: 8, padding: 0,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;