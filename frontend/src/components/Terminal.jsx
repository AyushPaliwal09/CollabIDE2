import { TERMINAL_LINES } from "../data/MockData";
import axios from "axios";
import { useState } from "react";

const Terminal = ({
  height,
  termTab,
  onTermTab,
  codeRef,
  language,
  setTerminalOpen,
}) => {

  const languageMap = {
    javascript: 63,
    typescript: 74,
    python: 71,
    java: 62,
    c: 50,
    cpp: 54,
    "c#": 51,
    go: 60,
    rust: 73,
    php: 68,
    ruby: 72,
    swift: 83,
    kotlin: 78,
    dart: 90,
    scala: 81,
    perl: 85,
    r: 80,
    sql: 82,
    bash: 46,
  };

  const previewLanguages = ["html", "css"];

  const [output, setOutput] = useState("");
const [problems, setProblems] = useState([]);
  // Open Preview In New Tab
  const openPreviewInNewTab = () => {

    const blob = new Blob(
      [codeRef.current],
      { type: "text/html" }
    );

    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");
  };

  const runCode = async () => {
 const cleanedCode = codeRef.current
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
    .trim();

  if (!cleanedCode) {

    setOutput("No code to execute");

    onTermTab("Output");

    return;
  }

    // HTML/CSS Preview
    if (previewLanguages.includes(language)) {
      onTermTab("Preview");
      return;
    }

    try {

      setOutput("Running...");
      onTermTab("Output");

      let finalCode = codeRef.current;

      // Fix Java class name
      if (language === "java") {
        finalCode = finalCode.replace(
          /public class\s+\w+/,
          "public class Main"
        );
      }

      const response = await axios.post(
        "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
        {
          source_code: finalCode,
          language_id: languageMap[language],
          stdin: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const errorOutput =
  response.data.stderr ||
  response.data.compile_output;

if (errorOutput) {

  setProblems(
    errorOutput.split("\n").filter(Boolean)
  );

} else {

  setProblems([]);
}
if (errorOutput) {
  onTermTab("Problems");
}

      setOutput(
        response.data.stdout ||
        response.data.stderr ||
        response.data.compile_output ||
        "No Output"
      );

    } catch (error) {

  console.log(error);

  setOutput(
    error?.response?.data?.message ||
    "Execution Error"
  );
}
  };

  return (
    <div className="ws-terminal slide-up" style={{ height }}>

      {/* Terminal header */}
      <div className="ws-terminal-header">

        {["Output", "Preview", "Problems"].map((t) => (
          <div
            key={t}
            className={`ws-terminal-tab ${termTab === t ? "active" : ""}`}
            onClick={() => onTermTab(t)}
          >
            {t}
          </div>
        ))}

        <div style={{ flex: 1 }} />

        {/* Run Button */}
        <button
          className="ws-icon-btn"
          title="Run Code"
          onClick={runCode}
          style={{
            width: 55,
            height: 26,
            marginRight: 6,
            fontSize: 11,
            color: "#22C55E",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          Run
        </button>

        {/* Open Preview Button */}
        {termTab === "Preview" && (
          <button
            className="ws-icon-btn"
            title="Open Preview"
            onClick={openPreviewInNewTab}
            style={{
              width: 26,
              height: 26,
              marginRight: 6,
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        )}

        {/* Close Button */}
        <button
          className="ws-icon-btn"
          title="Close"
          style={{ width: 26, height: 26 }}
          onClick={() => setTerminalOpen(false)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>

      {/* Terminal body */}
      <div className="ws-terminal-body">

        {/* TERMINAL */}
        {/* {termTab === "Terminal" && (
          <>
            {TERMINAL_LINES.map((line, i) => (
              <div
                key={i}
                style={{
                  color: line.color,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                }}
              >
                {line.text || "\u00A0"}
              </div>
            ))}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop: 4,
              }}
            >
              <span
                style={{
                  color: "#8B5CF6",
                  fontFamily: "JetBrains Mono",
                  fontSize: 12,
                }}
              >
                $
              </span>

              <span
                className="cursor-blink"
                style={{
                  color: "#a78bfa",
                  fontFamily: "JetBrains Mono",
                  fontSize: 12,
                }}
              >
                |
              </span>
            </div>
          </>
        )} */}

        {/* OUTPUT */}
        {termTab === "Output" && (
          <pre
            style={{
              color: "#22C55E",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              whiteSpace: "pre-wrap",
              lineHeight: 1.5,
            }}
          >
            {output || "Run your code to see output"}
          </pre>
        )}

        {/* PREVIEW */}
        {termTab === "Preview" && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            className="preview-container"
          >

            {/* Hover Icon */}
            <button
              onClick={openPreviewInNewTab}
              className="preview-open-btn"
              title="Open in New Tab"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>

            <iframe
              title="preview"
              srcDoc={codeRef.current}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "white",
                borderRadius: 8,
              }}
              sandbox="allow-scripts"
            />
          </div>
        )}

        {/* PROBLEMS */}
        {termTab === "Problems" && (

          problems.length > 0 ? (

            <div>
              {problems.map((problem, index) => (
                <div
                  key={index}
                  style={{
                    color: "#EF4444",
                    fontFamily: "JetBrains Mono",
                    fontSize: 12,
                    marginBottom: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {problem}
                </div>
              ))}
            </div>

          ) : (

            <div
              style={{
                color: "#22C55E",
                fontFamily: "JetBrains Mono",
                fontSize: 12,
              }}
            >
              ✓ No problems found
            </div>

          )
        )}
      </div>
    </div>
  );
};

export default Terminal;