import { useState } from "react";
import "./giving.css";
import ImageHeader from "./Images/images---2022-09-06T222924.webp";
import GivingImage from "./Images/images - 2022-09-04T172252.448 copy.webp";
import Footer from "./footer";

const Giving = () => {
  const [display, setDisplay] = useState("block");
  const [color, setColor] = useState("#00aeff");
  const [color2, setColor2] = useState("#042444");
  const [bankDisplay, setBankDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay("block");

    setColor("#00aeff");
    setColor2("#042444");
    setBankDisplay(false);
  };

  const toggleDisplay2 = () => {
    setDisplay("none");

    setColor("#042444");
    setBankDisplay(true);
    setColor2("#00aeff");
  };

  return (
    <div className="giving-bg">
      <div className="homepage-image-container1">
        <div className="top-text">
          <div className="first">Partner with GOD</div>
          <div className="second">
            2 Corinthians 9:7b for God loveth a cheerful giver
          </div>
        </div>
        <img src={GivingImage} className="giving-image" />
      </div>

      <div className="giving-header">
        <div
          className="items"
          onClick={toggleDisplay}
          style={{ backgroundColor: color }}
        >
          Giving at INCREASE CITY CHURCH (CRFCOAN)
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
          <img
            src={ImageHeader}
            className="giving-image-2"
            alt="giving-image"
          />

          <div className="giving-scripture">
            <h3>
              Malachi 3:10 - Bring ye all the tithes into the storehouse, that
              there may be meat in mine house, and prove me now herewith, saith
              the LORD of hosts, if I will not open you the windows of heaven,
              and pour you out a blessing, that [there shall] not [be room]
              enough [to receive it].
            </h3>
          </div>
        </div>
      </div>
      <div style={{ display: `${bankDisplay ? "" : "none"}` }}>
        <div className="account-details">
          <div className="give-payment-account">
            <a
              href="https://paystack.com/pay/increase-giving"
              className="online-payment"
            >
              <div className="pay-online">Pay Online</div>
            </a>
            <div className="pay-via-transfer">
              <div className="bank-accounts">Project EcoBank 5811034038</div>
              <div className="bank-accounts">Offering Access 0065675723</div>
              <div className="bank-accounts">Partner's UBA 28110805625</div>
              <div className="bank-accounts">Tithe Access 0067378664</div>
              <div className="bank-accounts">SeedFaith Access 0067380270</div>
              <div className="bank-accounts">First Fruit 0086696220</div>
            </div>
          </div>
          {/* <Link to="/partnership" className="link">
            <div className="bank">Partnership</div>
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Giving;
