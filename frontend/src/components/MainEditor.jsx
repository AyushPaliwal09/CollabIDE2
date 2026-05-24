import Editor from "@monaco-editor/react";
import axios from "axios";
import { use, useEffect, useState } from "react";
import React from 'react'

const MainEditor = ({ room, currentLang , socket }) => {
    const [code, setCode] = useState(JSON.parse(localStorage.getItem(`code_${room?._id}`)) || room?.code || "");
    console.log("room in MainEditor", room);
    useEffect(() => {
        if (!room?._id) return;
        const timer = setTimeout(() => {
            console.log("Saving code for room:", room._id);
            localStorage.setItem(`code_${room?._id}`, JSON.stringify(code));

            saveCode();
        }, 5000);
        return () => clearTimeout(timer);
    }, [code]);

    const saveCode = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_BACKEND_URL}/room/update-room-code/${room._id}`, { code });
            console.log("Code saved successfully");
        } catch (error) {
            console.error("Error saving code:", error);
        }
    };
    useEffect(() => {
        if (!socket) return;
        const onCode = (serverCode) => setCode(serverCode ?? ""); 
        socket.on("update-code", onCode);
        return () => socket.off("update-code", onCode);
    }, [socket]);

    console.log("socket in MainEditor", socket);   
     const handleCodeChange = (value) => {
        // if (!isEditor) return;
        setCode(value);
        // localStorage.setItem(`code_${room?._id}`, JSON.stringify(value));
        // if (socketRef) socketRef.emit("code-change", { roomId, code: value });
        if (socket) socket.emit("code-change", {roomId : room?._id, code: value });
    
      }; 

    return (

        <Editor
            height="100%"
            language={currentLang}
            defaultValue={code}
            value={code}
            onChange={handleCodeChange}
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

    )
}

export default MainEditor
