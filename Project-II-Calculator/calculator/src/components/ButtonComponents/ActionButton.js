import React from "react";
import "./Button.css";

const ActionButton = ({ action, width = 80, background = "crimson", handler }) => {
  return (
    <button
      style={{
        width,
        background,
        boxSizing: "border-box",
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px #484848 solid",
        fontSize: 25,
        outline: "none"
      }}
      onClick={() => handler(action)}
    >
      {action}
    </button>
  );
};

export default ActionButton;
