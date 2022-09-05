import React, { useState } from "react";
import "./contact.css";
import Image from "./Images/IMG_5393.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Footer from "./footer";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const resetInputValue = (event) => {
    event.preventDefault();

    const data = {
      Name: name,
      Phone: phone,
      Details: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/3f7a705a-acd2-4360-914d-8c3ab1667e72",
        data
      )
      .then((response) => {
        console.log(response);
      });

    setName("");
    setPhone("");
    setMessage("");
    // alert(message.length);
  };
  return (
    <div className="contact-us-parent">
      <div className="welcome">Welcome Beloved!</div>
      <img src={Image} className="contact-us-image" />
      <div className="header">
        <h3 className="first-header">WE'D LOVE TO HEAR FROM YOU</h3>
        <h1 className="second-header">CONTACT US</h1>
        <hr className="underline" />
        <h3 className="third-header">
          We are available 24 / 7. Kindly use the phone or social handles to
          reach us.
        </h3>

        <div className="reach-flex">
          <div className="reach-us-through">
            <h3 className="item-a">REACH US THROUGH</h3>
            <h4 className="item-b">
              Increase City, Charlisco Phase 2, Off Ekpan Expressway, Warri,
              Delta State, Nigeria.
            </h4>
            <h4 className="item-b">Phone Number</h4>
            <h4 className="item-b">Custom email address</h4>
          </div>
          {/* <div className="icons">
            <FaFacebook className="fb-icon" />
            <FaInstagram className="fb-icon" />
            <FaWhatsapp className="fb-icon" />
          </div> */}
          <div className="social-networks">
            <h3 className="social-header">SOCIAL NETWORKS</h3>
            <div className="sub-a">
              <h4 className="sub-a">
                <a
                  href="https://web.facebook.com/Christreignministries/"
                  className="contactfb"
                >
                  <FaFacebook className="-icona" />
                  christreignministries
                </a>
              </h4>
            </div>
            <h4 className="sub-a">
              <a
                href="https://www.instagram.com/christreignministries/"
                className="contactfb"
              >
                <FaInstagram className="-icona" />
                christreignministries
              </a>
            </h4>
            <h4 className="sub-a">
              <a href="https://wa.me/2347085398720" className="contactfb">
                <FaWhatsapp className="-icona" />
                +234 708 539 8720
              </a>
            </h4>
          </div>
        </div>
      </div>
      <form>
        <div className="contact-us-form">
          <div className="prayer">
            <h2 className="h2">SHARE YOUR TESTIMONIES</h2>
          </div>
          <div className="input-item">
            <div className="input-grid">
              <div>
                Names
                <input
                  className="name"
                  value={name}
                  placeholder="Please enter your names"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                Phone Number
                <input
                  className="phone"
                  placeholder="Please enter your phone number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>

            <div>
              Testimonies
              <textarea
                className="message"
                value={message}
                placeholder="Please share your testimonies"
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <input className="submit" type="submit" onClick={resetInputValue} />
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default ContactUs;
