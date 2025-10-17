// src/Calculator.jsx
import React, { useState } from "react";

const keys = [
  "7", "8", "9", "DEL",
  "4", "5", "6", "+",
  "1", "2", "3", "-",
  ".", "0", "/", "x",
  "RESET", "=",
];

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (key) => {
    if (key === "RESET") return setDisplay("0");
    if (key === "DEL") return setDisplay(display.slice(0, -1) || "0");
    if (key === "=") {
      try {
        const result = eval(display.replace("x", "*").replace("/", "/"));
        setDisplay(result.toLocaleString());
      } catch {
        setDisplay("Error");
      }
    } else {
      if (display === "0") {
        setDisplay(key === "." ? "0." : key);
      } else {
        setDisplay(display + key);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        {keys.map((key, i) => (
          <button
            key={i}
            className={`btn ${key === "DEL" ? "del" : ""} ${key === "RESET" ? "reset" : ""} ${key === "=" ? "equal" : ""}`}
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
