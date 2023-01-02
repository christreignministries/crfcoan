import { Component } from "react";
import { images } from "./exportedImage";
import ChurchImage from "./Images/IMG_4930.jpg";
import Footer from "./footer";
import { Event } from "./exportedImage";
import { Link } from "react-router-dom";
import { quotes, testimonies, prayer } from "./exportedText";
import { FaQuoteLeft } from "react-icons/fa";
import PartnerImage from "./Images/IMG_3177.jpg";
import swal from "sweetalert";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import firestore from "./firebase";
import Swal from "sweetalert2";

class Home extends Component {
  state = {
    count: 0,
    quotesCount: 0,
    readmore1: 133,
    readmore2: true,
    readmore2b: 145,
    readmore2b1: true,
    name: "",
    email: "",
    number: "",
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
      this.setState({ readmore1: 133, readmore2: true });
    }
  };

  toggleText2 = () => {
    if (this.state.readmore2b1 === true) {
      this.setState({ readmore2b: testimonies[0].length, readmore2b1: false });
    } else {
      this.setState({ readmore2b: 145, readmore2b1: true });
    }
  };

  getStarted = () => {
    Swal.fire({
      confirmButtonText: "Submit",
      html: `
      <div>
      CONGRATULATIONS!
    <h3>Welcome to the Reigning Family!</h3>  
      </div>
          <input type="text" id="name" placeholder="Please enter your names"class="new-members"/>
          <input type="number" id="number" placeholder="Please enter your phone number"  class="new-members"/>
          <input type="text" id="email" placeholder="Please enter your email-address" class="new-members"/>
        `,
    }).then(() => {
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const email = document.getElementById("email").value;

      if (name.length < 1 && number.length < 10 && email.length < 1) {
        Swal.fire("Form not submitted", "", "warning");
      } else {
        try {
          const cityRef = doc(firestore, "Believers", `${name}`);
          setDoc(cityRef, {
            Testimony: {
              Name: name,
              Number: number,
              Email: email,
              TimeStamp: serverTimestamp(),
            },
          });
          Swal.fire("Form submitted", "", "success");
        } catch (err) {
          // console.log(err);
          swal("Please resubmit your details");
        }
      }
    });
  };

  render() {
    const { count, quotesCount } = this.state;
    return (
      <div className="parent">
        <div className="contact-us-parent">
          <div className="homepage-image-container1">
            <div className="top-text">
              <div className="first">Christ Cannot Reign</div>
              <div className="first">and things remain the same</div>
              <div className="second"></div>
              <Link to="/Sermon">
                <button className="learn-more">Learn More</button>
              </Link>
            </div>
            <img
              src={images[count]}
              className="contact-us-image"
              alt="church-image"
              loading="lazy"
            />
          </div>
          <div className="welcome-to-church">
            <img
              src={ChurchImage}
              alt="church-image"
              className=""
              loading="lazy"
            />

            <div className="grid-a">
              <div className="welcome-div">
                <h3 className="welcome-to-increase-city">
                  WELCOME TO INCREASE CITY CHURCH (CRFCOAN)
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
            <div className="quotes-text">{quotes[quotesCount]}</div>
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
            <img
              src={PartnerImage}
              className="partners-image"
              alt="partner's image"
              loading="lazy"
            />
          </div>
          <div className="events-div">
            <div className="upcoming-program">
              <h3>UPCOMING PROGRAMS</h3>

              <Link
                to="/programs"
                className="view-more"
                onClick={this.scrollUp}
              >
                VIEW MORE
              </Link>
            </div>

            <div className="events-parent">
              {Event.map((items, i) => {
                return (
                  <div key={i}>
                    <div className="events-grid">
                      <img
                        src={items.image}
                        className="event-image"
                        alt="event-image"
                        loading="lazy"
                      />
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
              title="declaration-video"
              className="video"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FChristreignministries%2Fvideos%2F5684684231575288%2F&show_text=false&width=560&t=0"
              width="560"
              height="480"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              data-show-text={true}
              data-show-captions={true}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="new-converts">
            <div className="become-a-believer">Become a believer today</div>
            <button className="get-started" onClick={this.getStarted}>
              Get Started
            </button>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
