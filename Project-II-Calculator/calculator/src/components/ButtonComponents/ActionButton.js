import React from "react";
import "./Button.css";

const ActionButton = ({ action, width = 80, background = 'crimson' }) => {
  return (
    <div
      style={{
        width,
        background,
        boxSizing: "border-box",
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRight: "1px #484848 solid",
        borderBottom: "1px #484848 solid",
        fontSize: 25,
      }}
    >
      {action}
    </div>
  );
};

export default ActionButton;
