import React, { Component } from "react";
import Logo from "./Images/church logo copy.png";
import Menu from "./Images/2976215.png";
import { Link } from "react-router-dom";
import MenuClose from "./Images/1907734.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

class Navigation extends Component {
  state = {
    display: "none",
    openMenuToggle: "block",
    closedMenuToggle: "none",
  };

  toggleMenu = () => {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
      this.setState({ openMenuToggle: "none" });
      this.setState({ closedMenuToggle: "block" });
    } else {
      this.setState({ display: "none" });
      this.setState({ openMenuToggle: "block" });
      this.setState({ closedMenuToggle: "none" });
    }
  };

  clearMenu = () => {
    this.setState({ display: "none" });
    this.setState({ openMenuToggle: "block" });
    this.setState({ closedMenuToggle: "none" });
  };
  render() {
    return (
      <div className="parent-header">
        <div className="header-bg">
          <Link to="/about" className="routes-b" onClick={this.clearMenu}>
            <img src={Logo} alt="church-logo" className="church-logo" />
          </Link>
          <img
            src={MenuClose}
            alt="hamburger-2"
            className="hamburger-2"
            onClick={this.toggleMenu}
            style={{ display: `${this.state.closedMenuToggle}` }}
          />{" "}
          <img
            src={Menu}
            alt="hamburger"
            className="hamburger"
            onClick={this.toggleMenu}
            style={{ display: `${this.state.openMenuToggle}` }}
          />{" "}
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
          <div className="hamburger-bg" onClick={this.toggleMenu}></div>
        </div>
        <ul className="ul-menu">
          <li>
            <Link to="/" className="routes" onClick={this.clearMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="routes" onClick={this.clearMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="routes" onClick={this.clearMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="routes" onClick={this.clearMenu}>
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/giving" className="routes" onClick={this.clearMenu}>
              Giving
            </Link>
          </li>
        </ul>

        <div
          className="hamburger-menu"
          style={{ display: `${this.state.display}` }}
        >
          <Link to="/" className="routes-b" onClick={this.clearMenu}>
            <h1>Home</h1>
          </Link>
          <Link to="/about" className="routes-b" onClick={this.clearMenu}>
            <h1>About</h1>
          </Link>

          <Link to="/blog" className="routes-b" onClick={this.clearMenu}>
            <h1>Blog</h1>
          </Link>
          <Link to="/contact-us" className="routes-b" onClick={this.clearMenu}>
            <h1>Contact us</h1>
          </Link>

          <Link to="/giving" className="routes-b" onClick={this.clearMenu}>
            <h1>Giving</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
