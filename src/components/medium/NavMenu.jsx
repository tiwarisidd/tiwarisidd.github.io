import React from "react";
import "./NavMenu.css";
import NameLogo from "../small/NameLogo";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <NameLogo />
      <div className="actions">
        <span>
          <a href="#home">About</a>
        </span>
        <span>
          <a href="#home">Technologies</a>
        </span>
        <span>
          <a href="#home">Projects</a>
        </span>
        <span>
          <a href="#home">Contact Me</a>
        </span>
      </div>
    </div>
  );
};

export default NavMenu;
