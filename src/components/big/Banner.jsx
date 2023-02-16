import React from "react";
import "./Banner.css";
import NavMenu from "../medium/NavMenu";

import Intro from "../medium/Intro";

const Banner = () => {
  return (
    <div className="Banner">
      <NavMenu />
      <Intro />
    </div>
  );
};

export default Banner;
