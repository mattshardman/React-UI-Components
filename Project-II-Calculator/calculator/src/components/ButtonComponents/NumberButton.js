import React from "react";
import "./Button.css";

function NumberButton({ number, width = 80, pressHandler }) {
  return (
    <button
    className="btn"
      style={{
        width,
        boxSizing: "border-box",
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        border: "1px #484848 solid",
        fontSize: 25,
        outline: "none",
        cursor: "pointer"
      }}
      onClick={() => pressHandler(number)}
    >
      {number}
    </button>
  );
}

export default NumberButton;
