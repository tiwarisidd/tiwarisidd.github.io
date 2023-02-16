import React from "react";

const Dot = ({ scale }) => {
  return (
    <svg
      className="Dot"
      width="10"
      height="10"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#D9D9D9" />
    </svg>
  );
};

export default Dot;
