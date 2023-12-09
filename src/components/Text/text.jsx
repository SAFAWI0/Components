import React from "react";

export const Text = ({ size, bold, color, children, style }) => {
  const textStyle = {
    fontSize: size ? `${size}px` : "inherit",
    fontWeight: bold ? "bold" : "normal",
    color: color || "inherit",
    ...style,
  };
  return <span style={textStyle}>{children}</span>;
};
