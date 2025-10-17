// src/App.jsx
import React from "react";
import Calculator from "./Calculator";
import { useTheme } from "./ThemeContext";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <header className="top-bar">
        <h1>calc</h1>
        <div className="theme-toggle">
          <span>THEME</span>
          <div className="toggle-group">
            <div className="labels">
              <span>1</span><span>2</span><span>3</span>
            </div>
            <div className="switch">
              <input
                type="range"
                min="1"
                max="3"
                value={theme[5]}
                onChange={(e) => setTheme(`theme${e.target.value}`)}
              />
            </div>
          </div>
        </div>
      </header>
      <Calculator />
    </main>
  );
}
