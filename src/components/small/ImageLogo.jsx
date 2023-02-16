import React from "react";

const ImageLogo = () => {
  return (
    <div className="animation-container">
        <img src={require("../../assets/big_image.png")} alt="banner" />
        <div className="orbits">
            <div className="outer">
                <div className="middle">
                    <div className="inner"></div>
                </div>
            </div>
        </div>
    </div>
   );
};

export default ImageLogo;
