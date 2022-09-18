import React from "react";
import "./about.css";
import ImageHeader from "./Images/IMG_7145.jpg";
import Image from "./Images/IMG_3988.jpg";
import PapaImage from "./Images/IMG_3710.jpg";
import MamaImage from "./Images/Snr-Pst-Mama-Image-2.jpg";
import Footer from "./footer";

const About = () => {
  return (
    <div className="parent">
      <div className="contact-us-parent">
        <div className="homepage-image-container1">
          <div className="top-text">
            <div className="first">About Us</div>
            <div className="second">Increase City(CRFCOAN)</div>
          </div>
          <img src={ImageHeader} className="contact-us-image" />
        </div>
        <div className="container">
          <div className="child">
            <img src={Image} alt="church-image" className="church-image" />
          </div>
          <div className="about-a">
            <h1 className="church-name">
              INCREASE CITY (Christ Reign Forever Church Of All Nations)
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              libero, alias ab quia perferendis quidem sit pariatur iste sint
              dolores, autem corrupti id accusantium architecto expedita velit
              molestiae quae quibusdam!
            </h2>
            <div className="details">
              <button>Our Mission</button>

              <h2>Destroying the yoke of</h2>
              <h2>Delay</h2>
              <h2>Marriage</h2>
              <h2>Pregnancy</h2>
            </div>
            <div className="details">
              <button>Our Vision</button>
              <h2>
                Reconciling all Nations to GOD by discovering man's purpose
              </h2>
            </div>
            <div className="details">
              <button>Our Core Values </button>
              <h2>Love</h2>
              <h2>Grace</h2>
              <h2>Intelligence</h2>
              <h2>Excellence</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-b">
        <div>
          <h3 className="snr-pst-header">OUR SENIOR PASTORS</h3>
          <hr className="contact-us-underline" />
        </div>
        <div className="about-pastors">
          <div>
            <img src={PapaImage} alt="papa-image" className="pastors-image" />
          </div>
          <div>
            <img src={MamaImage} alt="mama-image" className="pastors-image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
