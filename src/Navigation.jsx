import { Component } from "react";
import Logo from "./Images/church logo-copy copy.webp";
import Menu from "./Images/2976215 copy.webp";
import { Link } from "react-router-dom";
import MenuClose from "./Images/1907734 copy.webp";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
class Navigation extends Component {
  state = {
    display: "none",
    openMenuToggle: "block",
    closedMenuToggle: "none",
    partnership: false,
    giving: false,
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
    this.setState({ partnership: false });
  };
  togglePartnerMenu = () => {
    this.setState({ partnership: !this.state.partnership });
  };

  toggleGiving = () => {
    this.setState({ giving: !this.state.giving });
  };
  clearMenu = () => {
    this.setState({ display: "none" });
    this.setState({ openMenuToggle: "block" });
    this.setState({ closedMenuToggle: "none" });
    this.setState({ giving: false });
  };

  render() {
    return (
      <div className="parent-header">
        <div className="header-bg">
          <div className="church-name-header">
            Increase City Church (CRFCOAN)
          </div>
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
          <div className="hamburger-bg" onClick={this.toggleMenu}></div>
        </div>
        <ul className="ul-menu">
          <li>
            <Link
              to="/"
              className="routes"
              onClick={() => this.setState({ giving: false })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="routes"
              onClick={() => this.setState({ giving: false })}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Sermon"
              className="routes"
              onClick={() => this.setState({ giving: false })}
            >
              Sermon
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="routes"
              onClick={() => this.setState({ giving: false })}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="routes"
              onClick={() => this.setState({ giving: false })}
            >
              Programs
            </Link>
          </li>
          <li className="giving" onClick={this.toggleGiving}>
            <div className="giving-sub" onClick={this.toggleGiving}>
              <h4 className="h4">
                Giving
                {this.state.giving ? (
                  <FaAngleUp className="giving-angle" />
                ) : (
                  <FaAngleDown className="giving-angle" />
                )}
              </h4>
            </div>

            <div
              className="partnership-parent"
              style={{ opacity: `${this.state.giving ? 1 : 0}` }}
            >
              <Link to="/partnership" className="giving-route">
                <h5 className="a">Partnership</h5>
              </Link>
              <Link to="/giving" className="giving-route">
                <h5 className="a1">Others</h5>
              </Link>
            </div>
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
          <Link to="/Sermon" className="routes-b" onClick={this.clearMenu}>
            <h1>Sermon</h1>
          </Link>
          <Link to="/programs" className="routes-b" onClick={this.clearMenu}>
            <h1>Programs</h1>
          </Link>
          <Link to="/contact-us" className="routes-b" onClick={this.clearMenu}>
            <h1>Contact us</h1>
          </Link>

          <h1 onClick={this.togglePartnerMenu} className="routes-b">
            Giving{" "}
            {this.state.partnership ? (
              <FaAngleUp className="fa-angle" />
            ) : (
              <FaAngleDown className="fa-angle" />
            )}
          </h1>

          <Link to="/partnership" className="routes-b" onClick={this.clearMenu}>
            <h1
              style={{
                display: `${this.state.partnership ? "block" : "none"}`,
              }}
            >
              Partnership
            </h1>
          </Link>
          <Link to="/giving" className="routes-b" onClick={this.clearMenu}>
            <h1
              style={{
                display: `${this.state.partnership ? "block" : "none"}`,
              }}
            >
              Others
            </h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
