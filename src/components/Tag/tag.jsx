import React from "react";

export const Tag = ({ color, children }) => {
  const tagStyle = {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: color || "#ccc",
    color: "#fff",
    fontWeight: "bold",
  };
  return <span style={tagStyle}>{children}</span>;
};
