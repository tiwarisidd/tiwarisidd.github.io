import React from "react";
import "../../animations/translate.css";

const Sine = ({ style }) => {
  const { top, left, rotate } = style;

  return (
    <svg
      style={{
        top: top,
        left: left,
        position: "absolute",
        transform: `rotate(${rotate})`,
      }}
      className="Sine"
      width="80"
      height="30"
      viewBox="0 0 400 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-116 40.5C-92.4167 -9.5 -68.8333 -9.5 -45.25 40.5C-21.6667 90.5 1.91666 90.5 25.5 40.5C49.0833 -9.5 72.6667 -9.5 96.25 40.5C119.833 90.5 143.417 90.5 167 40.5C190.583 -9.5 214.167 -9.5 237.75 40.5C261.333 90.5 284.917 90.5 308.5 40.5C332.083 -9.5 355.667 -9.5 379.25 40.5C402.833 90.5 426.417 90.5 450 40.5C473.583 -9.5 497.167 -9.5 520.75 40.5C544.333 90.5 567.917 90.5 591.5 40.5C615.083 -9.5 638.667 -9.5 662.25 40.5C685.833 90.5 709.417 90.5 733 40.5"
        stroke="#E0E0E0"
        strokeWidth="16"
      />
    </svg>
  );
};

export default Sine;
