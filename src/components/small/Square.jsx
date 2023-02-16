import React from "react";
import "../../animations/translate.css";

const Square = ({ style }) => {
  const { top, left, rotate } = style;
  return (
    <svg
      style={{
        top: top,
        left: left,
        position: "absolute",
        transform: `rotate(${rotate})`,
      }}
      className="Square"
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1_2" fill="white">
        <rect width="100" height="100" rx="6" />
      </mask>
      <rect
        width="100"
        height="100"
        rx="6"
        stroke="#E0E0E0"
        strokeWidth="18"
        mask="url(#path-1-inside-1_1_2)"
      />
    </svg>
  );
};

export default Square;
