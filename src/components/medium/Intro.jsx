import React from "react";
import "./Intro.css";
import ImageLogo from "../small/ImageLogo";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="introSection1">
        <p>
          Hi, I'm Siddharth, I am a full stack Software Developer specialising
          in technologies like ReactJS, NodeJS & Flutter. Let's have a chat if
          my skills appeal to your requirements. Thank you for visiting my site.
        </p>
        <a href="#hey">Download CV</a>
      </div>
      <div className="introSection2">
        <ImageLogo />
      </div>
    </div>
  );
};

export default Intro;
