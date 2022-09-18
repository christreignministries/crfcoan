import React from "react";
import "./Devotionals.css";
import { DevotionalsImage } from "./DevotionalsExport";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Devotionals = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="parent-bg">
      {/* <img src={ComingSoon} className="coming-soon" /> */}
      <hr className="ruler" />

      <div className="top-header">
        <h3>Category</h3>
        <h2 className="devotional">Devotionals</h2>
      </div>
      <div>
        {DevotionalsImage.map((items, i) => {
          return (
            <div className="message-div" key={i}>
              <div className="div-picture">
                <img src={items.img} className="coming-soon" />
              </div>
              <div className="div-text">
                <div>
                  <h2>Message Title</h2>
                  <h3>{items.message}</h3>
                  <Link to={items.link} onClick={scrollUp}>
                    <button className="readmore">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Devotionals;
