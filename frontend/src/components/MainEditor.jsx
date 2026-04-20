import Editor from "@monaco-editor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

const MainEditor = ({ room , currentLang }) => {
    const [code, setCode] = useState(room.code);
    useEffect(() => {
        if (!room._id) return;
        const timer = setTimeout(() => {
            console.log("Saving code for room:", room._id);
            saveCode();
        }, 5000);
        return () => clearTimeout(timer);
    }, [code]);

    const saveCode = async () => {
        try {
            await axios.put(`http://localhost:5000/room/update-room-code/${room._id}`, { code });
            console.log("Code saved successfully");
        } catch (error) {
            console.error("Error saving code:", error);
        }
    };

    return (
    
            <Editor
                height="100%"
                language={currentLang}
                // defaultValue={code}
                value={code}
                onChange={(value) => setCode(value)}
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
