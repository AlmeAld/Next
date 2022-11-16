import React, { Children } from "react";

export default function DarkLayout({ Children }) {
  return (
    <div
      style={{
        backgroundColor: "#7b1bdb4c",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>DarkLayout</h3>
      <div>{Children}</div>
    </div>
  );
}
