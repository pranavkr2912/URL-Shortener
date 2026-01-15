import { useState } from "react";

const API_BASE = "https://url-shortener-backend-lauc.onrender.com";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!longUrl.trim()) return;

    setLoading(true);
    setShortUrl("");

    try {
      const res = await fetch(`${API_BASE}/api/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });

      const data = await res.json();

      if (data.shortCode) {
        setShortUrl(`${API_BASE}/${data.shortCode}`);
      } else {
        alert("Failed to shorten URL");
      }
    } catch (err) {
      alert("Backend error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: dark
          ? "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
          : "linear-gradient(135deg,#fdfbfb,#ebedee)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <button
        onClick={() => setDark(!dark)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 14px",
          borderRadius: 20,
          border: "none",
          cursor: "pointer",
        }}
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>

      <div
        style={{
          width: 420,
          padding: 30,
          borderRadius: 16,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(16px)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1>⚡ URL Shortener</h1>

        <input
          type="text"
          placeholder="Paste long URL..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
            border: "none",
          }}
        />

        <button
          onClick={handleShorten}
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "⏳ Shortening..." : "🚀 Shorten URL"}
        </button>

        {shortUrl && (
          <div style={{ marginTop: 20 }}>
            <p>Your short link:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;





