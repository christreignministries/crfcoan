import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
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
        <h2 className="church-name">
          <FaMapMarkerAlt className="FaMapMarkerAlt" />
          INCREASE CITY (CRFCOAN)
        </h2>
        <div className="church-address">
          INCREASE CITY, Charlisco Phase 2, off NPA expressway, Warri, Delta
          State, Nigeria.
        </div>
        <div className="quick-links-parent">
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
              <Link to="/Sermon" className="routes" onClick={scrollUp}>
                Sermon
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
            <li>
              <Link to="/partnership" className="routes" onClick={scrollUp}>
                Partnership
              </Link>
            </li>
            <li>
              <Link to="/programs" className="routes" onClick={scrollUp}>
                Programs
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <h2 className="connect">CONNECT WITH US</h2>
          <div className="ig-and-fb">
            <a href="https://web.facebook.com/Christreignministries/">
              <FaFacebook className="social-logo" />
            </a>
            <a href="https://www.instagram.com/christreignministries/">
              <FaInstagram className="social-logo" />
            </a>
            <a href="https://wa.me/2347085398720">
              <FaWhatsapp className="social-logo" />
            </a>
          </div>
          <p className="copyright">Copyright {date} © All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
