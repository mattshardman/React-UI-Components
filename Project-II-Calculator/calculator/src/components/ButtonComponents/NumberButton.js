import React from "react";
import "./Button.css";

function NumberButton({ number, width = 80 }) {
  return (
    <div
      style={{
        width,
        boxSizing: "border-box",
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        borderLeft: "1px #484848 solid",
        borderRight: "1px #484848 solid",
        borderBottom: "1px #484848 solid",
        fontSize: 25,
      }}
    >
      {number}
    </div>
  );
}

export default NumberButton;
