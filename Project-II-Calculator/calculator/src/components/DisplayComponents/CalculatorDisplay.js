import React from "react";
import "./Display.css";

const Display = ({result}) => (
  <div
    style={{
      boxSizing: "border-box",
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 20,
      border: "1px #484848 solid",
      width: 320,
      height: 80,
      background: "#484848",
      fontSize: 50,
      cursor: "pointer"
    }}
  >
  {result || 0}
  </div>
);

export default Display;
