import React, { useState } from "react";
import "./giving.css";
import ImageHeader from "./Images/images - 2022-08-25T111508.791.jpg";
import GivingImage from "./Images/images---2022-09-04T172252.jpg";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Giving = () => {
  const [display, setDisplay] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [color, setColor] = useState("#00aeff");
  const [color2, setColor2] = useState("#042444");
  const [bankDisplay, setBankDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay("block");
    setDisplay2("none");
    setColor("#00aeff");
    setColor2("#042444");
    setBankDisplay(false);
  };

  const toggleDisplay2 = () => {
    setDisplay("none");
    setDisplay2("block");
    setColor("#042444");
    setBankDisplay(false);
    setColor2("#00aeff");
  };

  const toggleBankDisplay = () => {
    setBankDisplay(!bankDisplay);
  };
  return (
    <div className="giving-bg">
      <div className="contact-us-parent">
        <div className="top-text1">
          <div className="first1">Partner with GOD</div>
          <div className="second1">
            2 Corinthians 9:7b for God loveth a cheerful giver.(KJV)
          </div>
        </div>
      </div>
      <img src={GivingImage} className="giving-image" />
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
              Malachi 3:10 - Bring ye all the tithes into the storehouse, that
              there may be meat in mine house, and prove me now herewith, saith
              the LORD of hosts, if I will not open you the windows of heaven,
              and pour you out a blessing, that [there shall] not [be room]
              enough [to receive it]
            </h3>
          </div>
        </div>
      </div>
      <div style={{ display: display2 }}>
        <div className="account-details">
          <div className="bank" onClick={toggleBankDisplay}>
            Give
          </div>
          <div
            className="give-payment-account"
            style={{ display: `${bankDisplay ? "block" : "none"}` }}
          >
            <div className="bank1">PROJECT 5811034038 ECOBANK</div>
            <div className="bank1">OFFERING 0065675723 ACCESS BANK</div>
            <div className="bank1">TITHE 0067378664 ACCESS BANK</div>
            <div className="bank1">PARTNER'S 2110805625 UBA</div>
            <div className="bank1">SEED 0067380270 ACCESS BANK</div>
            <div className="bank1">FIRST FRUIT 0086696220 ACCESS BANK</div>
          </div>
          <Link to="/partnership" className="link">
            <div className="bank">Partnership</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Giving;
