import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const TopIcons = () => {
  return (
    <div className="top-icon">
      <a href="https://web.facebook.com/Christreignministries/">
        <FaFacebook className="nav-link" />
      </a>
      <a href="https://www.instagram.com/christreignministries/">
        <FaInstagram className="nav-link" />
      </a>
      <a href="https://wa.me/2348134225529">
        <FaWhatsapp className="nav-link" />
      </a>
    </div>
  );
};

export default TopIcons;
