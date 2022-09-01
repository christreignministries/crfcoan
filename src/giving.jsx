import React, { useState } from "react";
import "./giving.css";
import ImageHeader from "./Images/images - 2022-08-25T111508.791.jpeg";
import Footer from "./footer";

const Giving = () => {
  const [display, setDisplay] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [color, setColor] = useState("#00aeff");
  const [color2, setColor2] = useState("#042444");

  const toggleDisplay = () => {
    setDisplay("block");
    setDisplay2("none");
    setColor("#00aeff");
    setColor2("#042444");
  };

  const toggleDisplay2 = () => {
    setDisplay("none");
    setDisplay2("block");
    setColor("#042444");
    setColor2("#00aeff");
  };

  return (
    <div className="giving-bg">
      <div className="welcome">Welcome Beloved!</div>
      <img src={ImageHeader} className="giving-image" />
      <div className="giving-header">
        <div
          className="items"
          onClick={toggleDisplay}
          style={{ backgroundColor: color }}
        >
          Giving at CRFCOAN
        </div>
        <div
          className="items"
          onClick={toggleDisplay2}
          style={{ backgroundColor: color2 }}
        >
          Methods of Giving
        </div>
      </div>
      <div style={{ display: display }}>
        <div className="giving-at-crfcoan">
          <img src={ImageHeader} className="giving-image-2" />

          <div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              libero, alias ab quia perferendis quidem sit pariatur iste sint
              dolores, autem corrupti id accusantium architecto expedita velit
              molestiae quae quibusdam!
            </h3>
          </div>
        </div>
      </div>
      <div style={{ display: display2 }}>
        <div className="account-details">
          <div className="bank">PROJECT 5811034038 ECOBANK</div>
          <div className="bank">OFFERING 0065675723 ACCESS BANK</div>
          <div className="bank">TITHE 0067378664 ACCESS BANK</div>
          <div className="bank">PARTNER'S 2110805625 UBA</div>
          <div className="bank">SEED 0067380270 ACCESS BANK</div>
          <div className="bank">FIRST FRUIT 0086696220 ACCESS BANK</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Giving;
