import React, { useState, useEffect } from "react";
import "./App.css";

const API = "http://13.60.179.255:5000"; // ✅ your backend IP

function App() {
  const [selected, setSelected] = useState(null);
  const [meaning, setMeaning] = useState("");
  const [clicks, setClicks] = useState(0);

  const quotes = [
    "Success is not final, failure is not fatal",
    "Stars can’t shine without darkness",
    "Dream big, work hard",
    "Every moment is a fresh beginning",
    "Push yourself, because no one else will"
  ];

  useEffect(() => {
    fetch(`${API}/visit`, { method: "POST" });
  }, []);

  const handleClick = async (quote) => {
    const res = await fetch(`${API}/quote?q=${encodeURIComponent(quote)}`);
    const data = await res.json();

    setSelected(quote);
    setMeaning(data.meaning);
    setClicks(data.clicks);
  };

  return (
    <div className="container">
      <h1 className="title">🌌 Cosmic Quote Explorer</h1>

      <div className="quote-list">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`quote-item ${selected === q ? "active" : ""}`}
            onClick={() => handleClick(q)}
          >
            <span className="star">⭐</span>
            <p className="quote-text">"{q}"</p>
          </div>
        ))}
      </div>

      {meaning && (
        <div className="meaning-box show">
          <h3>✨ Meaning</h3>
          <p>{meaning}</p>
        </div>
      )}

      <div className="counter">
        🚀 Interactions: {clicks}
      </div>
    </div>
  );
}

export default App;