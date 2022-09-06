import React, { useState } from "react";
import "./giving.css";
import "./partnership.css";
import ImageHeader from "./Images/images - 2022-08-25T111508.791.jpg";
import Footer from "./footer";

const Partnership = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const radioButton = (event) => {
    // console.log(event.target.value);
  };
  const buttonSubmit = () => {
    console.log({
      name,
      number,
      country,
      state,
      gender,
      address,
    });
  };
  return (
    <div className="giving-bg">
      <div className="contact-us-parent">
        <div className="top-text1">
          <div className="first1">Partner with GOD</div>
          <div className="second1">
            We are committed to the teaching and application of God's Word in
            all of life.
          </div>
        </div>
      </div>
      <img src={ImageHeader} className="giving-image" />

      <form>
        <div className="form-information">
          <h3 className="child">
            Please fill in your correct details in the form below then click
            submit
          </h3>
        </div>
        <div className="partners-form">
          <input
            placeholder="Names"
            className="partner"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Phone Number"
            className="partner"
            onChange={(event) => setNumber(event.target.value)}
          />
          <input
            placeholder="Country"
            className="partner"
            onChange={(event) => setCountry(event.target.value)}
          />
          <input
            placeholder="State"
            className="partner"
            onChange={(event) => setState(event.target.value)}
          />
          <div className="checkbox-parent">
            <input
              type="radio"
              name="gender"
              className="checkbox"
              value="male"
              onChange={radioButton}
            />
            Male
            <input
              type="radio"
              name="gender"
              className="checkbox"
              value="female"
              onChange={radioButton}
            />
            Female
          </div>
          <input
            placeholder="Address"
            className="partner"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="submit-button">
          <button className="partner-submit-button" onClick={buttonSubmit}>
            Submit
          </button>
        </div>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default Partnership;
