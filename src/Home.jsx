import React, { Component } from "react";
import { images } from "./exportedImage";
import ChurchImage from "./Images/IMG_4979.jpeg";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { quotes, testimonies, prayer } from "./exportedText";

class Home extends Component {
  state = {
    count: 0,
    quotesCount: 0,
  };

  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.setState(() => ({
        count: Math.floor(Math.random() * images.length) + 0,
        quotesCount: Math.floor(Math.random() * quotes.length) + 0,
      }));
    }, 5000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myTimer);
  };

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { count, quotesCount } = this.state;
    return (
      <div>
        <div className="welcome">Welcome Beloved!</div>
        <img src={images[this.state.count]} className="homepage-image" />
        <div className="welcome-to-church">
          <img src={ChurchImage} alt="church-image" />

          <div className="grid-a">
            <div>
              <h3>
                WELCOME TO INCREASE CITY (Christ Reign Forever Church Of All
                Nations)
              </h3>
              <h4>
                We are glad to have you here, we hope that you have a blessed
                time here with us.
              </h4>

              <Link to="/about">
                <button className="read-more" onClick={this.scrollUp}>
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="testimonies-header">
          <h1 className="testimonies">Testimonies</h1>
          <div className="testimonies-underline"></div>
        </div>
        <div className="testimonies-items">
          <div className="testimonies-a">
            <h2 className="names">Pastor (Mrs) Annabel Pelemoh</h2>
            <h2 className="first">{testimonies[0]}</h2>
          </div>
          <div className="testimonies-a">
            <h2 className="names">Mrs Vivian Ernest</h2>
            <h2 className="second">{testimonies[1]}</h2>
          </div>
        </div>
        <div className="quotes">
          <h2>{quotes[quotesCount]}</h2>
          <h1>Ehiebolo Godstime </h1>
        </div>

        <div className="events-div">
          <h3>UPCOMING PROGRAMS</h3>
          <div className="events-parent">
            <div className="events-grid">Events</div>
            <div className="events-grid">Events</div>
          </div>
        </div>
        <div className="upcoming-events"></div>
        <div className="footer-body">
          <h2>BE BORN AGAIN</h2>
          <h3>SAY THESE PRAYERS</h3>
          <h4>{prayer[0]}</h4>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
