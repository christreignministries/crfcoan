import React from "react";
import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const date = new Date().getFullYear();
  return (
    <div className="footer-parent">
      <BackToTopButton />
      <div className="footer-base">
        <h2>
          <FaMapMarkerAlt className="FaMapMarkerAlt" />
          INCREASE CITY (Christ Reign Forever Church Of All Nations)
        </h2>
        <h3>
          INCREASE CITY, Charlisco Phase 2, off Ekpan expressway, Warri, Delta
          State, Nigeria
        </h3>
        <ul className="quick-links">
          <li>
            <Link to="/" className="routes" onClick={scrollUp}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="routes" onClick={scrollUp}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="routes" onClick={scrollUp}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="routes" onClick={scrollUp}>
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/giving" className="routes" onClick={scrollUp}>
              Giving
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <h2>CONNECT WITH US</h2>
          <div className="ig-and-fb">
            <a href="https://web.facebook.com/Christreignministries/">
              <FaFacebook className="social-logo" />
            </a>
            <a href="https://www.instagram.com/christreignministries/">
              <FaInstagram className="social-logo" />
            </a>
            <a href="https://wa.me/234">
              <FaWhatsapp className="social-logo" />
            </a>
            {/* <FaEnvelope className="social-logo" /> */}
          </div>
          <p className="copyright">Copyright {date} © All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
