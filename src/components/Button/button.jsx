import React from "react";
import "./button.css"
export const Button = ({ type, size, children}) => {
  let width, height, fontSize;

  if (size === "sm") {
    width = "50px";
    height = "25px";
    fontSize = "12px";
  } else if (size === "md") {
    width = "80px";
    height = "50px";
    fontSize = "16px";
  }

  let butStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
  };
  return <button className={type} style={butStyle}>{children}</button>;
};
