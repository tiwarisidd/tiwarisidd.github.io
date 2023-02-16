import React from "react";
import "../../animations/translate.css";

const Circle = ({ style }) => {
  const { top, left } = style;
  return (
    <svg
      style={{ top: top, left: left, position: "absolute" }}
      className="Circle"
      width="50"
      height="50"
      viewBox="-10 -10 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="47" stroke="#E0E0E0" strokeWidth="9" />
    </svg>
  );
};

export default Circle;
