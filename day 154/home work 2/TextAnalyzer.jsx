import { useState, useMemo } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const textCategory = useMemo(() => {
    const len = text.length;
    if (len < 20) return "Short text";
    if (len <= 50) return "Medium text";
    return "Long text";
  }, [text]);

  const theme = isDarkMode ? "dark" : "light";

  const themeStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f9f9f9",
    color: isDarkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s",
  };

  return (
    <div style={themeStyles}>
      <h1 className="text-2xl font-bold mb-4">Text Analyzer</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text..."
        className="border p-2 rounded w-full max-w-md"
      />

      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      <div className="mt-6 text-lg">
        <p>Text Category: <strong>{textCategory}</strong></p>
        <p>Theme: <strong>{theme}</strong></p>
      </div>
    </div>
  );
};

export default TextAnalyzer;
