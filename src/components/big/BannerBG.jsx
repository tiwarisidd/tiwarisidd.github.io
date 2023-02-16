import React from "react";
import "./BannerBG.css";
import Sidd from "../small/Sidd";
import Triangle from "../small/Triangle";
import Square from "../small/Square";
import Sine from "../small/Sine";
import Circle from "../small/Circle";
import Plus from "../small/Plus";

const Banner = () => {
  return (
    <div className="Banner">
      <Sidd />
      <Circle style={{ top: "60px", left: "220px" }} />
      <Sine style={{ top: "330px", left: "220px", rotate: "45deg" }} />
      <Sine style={{ top: "100px", left: "1100px", rotate: "90deg" }} />
      <Plus style={{ top: "320px", left: "540px", rotate: "20deg" }} />
      <Triangle style={{ top: "350px", left: "830px", rotate: "45deg" }} />
      <Square style={{ top: "80px", left: "600px", rotate: "45deg" }} />
      <Plus style={{ top: "150px", left: "850px", rotate: "20deg" }} />
      <Circle style={{ top: "300px", left: "1120px" }} />
      <Square style={{ top: "560px", left: "750px", rotate: "45deg" }} />
      <Triangle style={{ top: "550px", left: "150px", rotate: "45deg" }} />
      <Circle style={{ top: "550px", left: "450px" }} />
      <Plus style={{ top: "550px", left: "1100px", rotate: "20deg" }} />
    </div>
  );
};

export default Banner;
