import React from "react";
import "../../animations/translate.css";

const Triangle = ({ style }) => {
  const { top, left, rotate } = style;
  return (
    <svg
      style={{
        top: top,
        left: left,
        position: "absolute",
        transform: `rotate(${rotate})`,
      }}
      className="Triangle"
      width="50"
      height="50"
      viewBox="0 0 78 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.0311 5.25L73.208 59.25C74.5552 61.5833 72.8712 64.5 70.1769 64.5H7.82309C5.12879 64.5 3.44485 61.5833 4.792 59.25L35.9689 5.25C37.3161 2.91667 40.6839 2.91667 42.0311 5.25Z"
        stroke="#E0E0E0"
        strokeWidth="6"
      />
    </svg>
  );
};

export default Triangle;
