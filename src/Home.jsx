import React, { Component } from "react";
import { images } from "./exportedImage";
import ChurchImage from "./Images/IMG_4979.jpg";
import Footer from "./footer";
import { Event } from "./exportedImage";
import { Link } from "react-router-dom";
import { quotes, testimonies, prayer } from "./exportedText";
import { FaQuoteLeft } from "react-icons/fa";
import PartnerImage from "./Images/IMG_3177.jpg";

class Home extends Component {
  state = {
    count: 0,
    quotesCount: 0,
    readmore1: 152,
    readmore2: true,
    readmore2b: 157,
    readmore2b1: true,
  };

  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.setState(() => ({
        count: Math.floor(Math.random() * images.length) + 0,
        quotesCount: Math.floor(Math.random() * quotes.length) + 0,
      }));
    }, 10000);
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

  toggleText = () => {
    if (this.state.readmore2 === true) {
      this.setState({ readmore1: testimonies[1].length, readmore2: false });
    } else {
      this.setState({ readmore1: 150, readmore2: true });
    }
  };

  toggleText2 = () => {
    if (this.state.readmore2b1 === true) {
      this.setState({ readmore2b: testimonies[0].length, readmore2b1: false });
    } else {
      this.setState({ readmore2b: 150, readmore2b1: true });
    }
  };

  render() {
    const { count, quotesCount } = this.state;
    return (
      <div>
        <div className="homepage-image-container">
          {" "}
          <div className="top-text">
            <div className="first">We follow GOD</div>
            <div className="second">
              {/* Grow up Spiritually. We are committed to the teaching and application of God's Word in
              all of life. */}
              and nothing else.
            </div>
            <Link to="/devotionals">
              <button className="learn-more">Learn More</button>
            </Link>
          </div>
          <img src={images[this.state.count]} className="homepage-image" />
        </div>
        <div className="welcome-to-church">
          <img src={ChurchImage} alt="church-image" />

          <div className="grid-a">
            <div className="welcome-div">
              <h3 className="welcome-to-increase-city">
                WELCOME TO INCREASE CITY (Christ Reign Forever Church Of All
                Nations)
              </h3>
              <h4>
                We are glad to have you here, we hope that you have a blessed
                time with us.
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
            <div className="second">
              {testimonies[0].slice(0, `${this.state.readmore2b}`)}
              <button className="read-more-text" onClick={this.toggleText2}>
                {this.state.readmore2b1 ? "read more" : "read less"}
              </button>
            </div>
          </div>
          <div className="testimonies-a">
            <h2 className="names">Mrs Vivian Ernest</h2>
            <div className="second">
              {testimonies[1].slice(0, `${this.state.readmore1}`)}
              <button className="read-more-text" onClick={this.toggleText}>
                {this.state.readmore2 ? "read more" : "read less"}
              </button>
            </div>
          </div>
        </div>
        <div className="quotes">
          <FaQuoteLeft className="quotes-left-icon" />
          <h2 className="quotes-text">{quotes[quotesCount]}</h2>
          <p className="papa-name">Ehiebolo Godstime </p>
        </div>
        <div className="partners-div">
          <div className="top-text">
            <div className="first">Partner with GOD</div>
            <div className="second">
              2 Corinthians 9:7b for God loveth a cheerful giver
            </div>
            <Link to="/partnership" onClick={this.scrollUp}>
              <button className="learn-more">Read More</button>
            </Link>
          </div>
          <img src={PartnerImage} className="partners-image" />
        </div>
        <div className="events-div">
          <h3 className="upcoming-program">UPCOMING PROGRAMS</h3>
          <div className="events-parent">
            {Event.map((items, i) => {
              return (
                <div key={i}>
                  <div className="events-grid">
                    <img src={items.image} className="event-image" />
                  </div>
                  {/* <h2 className="program-name">{items.event}</h2>
                  <h2 className="program-date"> {items.date}</h2> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="upcoming-events"></div>
        <div className="footer-body">
          <h2 className="born-again">BE BORN AGAIN</h2>
          <h3 className="say-these-prayers">SAY THESE PRAYERS</h3>
          <h4 className="salvation-prayer">{prayer[0]}</h4>
        </div>
        <div className="facebook-video">
          <iframe
            className="video"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FChristreignministries%2Fvideos%2F1091655311781771%2F&show_text=true&width=560&t=0"
            width="560"
            height="480"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            data-show-text={true}
            data-show-captions={true}
            allowFullScreen={true}
          ></iframe>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
