import React from "react";

export const Container = ({ children, width, style }) => {
  const containerStyle = {
    width: width ? `${width}px` : "100%",
    margin: "0 auto",
    padding: "0 auto",
    ...style,
  };
  return <div style={containerStyle}>{children}</div>;
};
