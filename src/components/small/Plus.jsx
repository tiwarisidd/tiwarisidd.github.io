import React from "react";

const Plus = ({ style }) => {
  const { top, left, rotate } = style;

  return (
    <svg
      style={{
        top: top,
        left: left,
        position: "absolute",
        transform: `rotate(${rotate})`,
      }}
      width="40"
      height="40"
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="98" height="98" fill="none" />
      <rect
        x="5.25002"
        y="-1"
        width="132"
        height="10"
        rx="4.41941"
        transform="rotate(45 5.25002 -1)"
        fill="#E0E0E0"
      />
      <rect
        x="-1"
        y="92.7499"
        width="132"
        height="10"
        rx="4.41941"
        transform="rotate(-45 -1 92.7499)"
        fill="#E0E0E0"
      />
    </svg>
  );
};

export default Plus;
