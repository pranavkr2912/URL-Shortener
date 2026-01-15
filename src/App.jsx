import { useState } from "react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [dark, setDark] = useState(true);

  const handleShorten = () => {
    if (!longUrl.trim()) return;
    setShortUrl("https://sh.rt/abc123");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: dark
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #fdfbfb, #ebedee)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        transition: "background 0.6s ease",
      }}
    >
      {/* TOGGLE */}
      <button
        onClick={() => setDark(!dark)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 14px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          background: dark ? "#fff" : "#111",
          color: dark ? "#111" : "#fff",
          transition: "all 0.3s ease",
        }}
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* CARD */}
      <div
        style={{
          width: "420px",
          padding: "30px",
          borderRadius: "16px",
          background: dark
            ? "rgba(255,255,255,0.12)"
            : "rgba(0,0,0,0.06)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          color: dark ? "#fff" : "#111",
          textAlign: "center",
          animation: "fadeIn 0.8s ease",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            background: "linear-gradient(90deg,#00ffe0,#00b3ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ⚡ URL Shortener
        </h1>

        <p style={{ opacity: 0.85, marginBottom: "20px" }}>
          Shorten links. Share faster.
        </p>

        <input
          type="text"
          placeholder="Paste long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            marginBottom: "18px",
            background: dark
              ? "rgba(255,255,255,0.18)"
              : "rgba(255,255,255,0.9)",
            color: dark ? "#fff" : "#000",
          }}
        />

        <button
          onClick={handleShorten}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            color: "#000",
            background:
              "linear-gradient(135deg,#00ffe0,#00b3ff)",
            boxShadow: "0 0 25px rgba(0,255,224,0.7)",
            transition: "transform 0.2s ease",
          }}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          🚀 Shorten URL
        </button>

        {shortUrl && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "10px",
              background: dark
                ? "rgba(0,0,0,0.35)"
                : "rgba(0,0,0,0.08)",
              wordBreak: "break-all",
              animation: "pop 0.4s ease",
            }}
          >
            <p style={{ marginBottom: "5px" }}>✨ Your short link</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: dark ? "#00ffe0" : "#007bff",
                fontWeight: "600",
              }}
            >
              {shortUrl}
            </a>
          </div>
        )}

        {/* FOOTER */}
        <div
          style={{
            marginTop: "25px",
            fontSize: "13px",
            opacity: 0.85,
          }}
        >
          Created by <b>Pranav</b>{" "}
          <span
            style={{
              color: "red",
              display: "inline-block",
              animation: "pulse 1.2s infinite",
            }}
          >
            ❤️
          </span>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pop {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default App;




