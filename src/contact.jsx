import { useState } from "react";
import "./contact.css";
import Image from "./Images/IMG_5067 copy.webp";
import { ClipLoader } from "react-spinners";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
// import axios from "axios";
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
import swal from "sweetalert";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [warning, setWarning] = useState(false);
  const [button, setButton] = useState(false);

  const resetInputValue = async (event) => {
    event.preventDefault();
    if (name.length <= 0 || phone.length < 10 || message.length <= 0) {
      setWarning(true);
      // const querySnapshot = await getDocs(collection(firestore, "Testimonies"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    } else {
      setSpinner(true);
      setButton(true);
      setWarning(false);
      const data = {
        Name: name,
        Phone: phone,
        Details: message,
        TimeStamp: serverTimestamp(),
      };

      // axios
      //   .post(
      //     "https://sheet.best/api/sheets/3f7a705a-acd2-4360-914d-8c3ab1667e72",
      //     data
      //   )
      //   .then((response) => {
      //     console.log(response.status);
      //     if (response.status === 200) {
      //       setSpinner(false);
      //       setButton(false);
      //       setName("");
      //       setPhone("");
      //       setMessage("");
      //     }
      //   });

      try {
        const cityRef = doc(firestore, "Testimonies", `${name}`);
        setDoc(cityRef, {
          Testimony: {
            Name: name,
            Phone_number: phone,
            Message: message,
            TimeStamp: serverTimestamp(),
          },
        });
      } catch (err) {
        // console.log(err);
        swal("Please resubmit your testimony, there was an error");
      }

      setSpinner(true);
      setButton(true);

      setTimeout(() => {
        swal(`${name}`, "", "Your testimony has been submitted, stay blessed.");
        setSpinner(false);
        setButton(false);
        setName("");
        setPhone("");
        setMessage("");
      }, 2000);
      // const querySnapshot = await getDocs(collection(firestore, "Testimonies"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    }
  };

  return (
    <div className="contact-us-parent">
      <div className="homepage-image-container1">
        <div className="top-text">
          <div className="first">
            <Typewriter
              options={{
                strings: ["For more enquiries", "For prayers, counselling"],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </div>
          <div className="second">React out to us</div>
        </div>
        <img src={Image} className="contact-us-image" alt="contact-us-image" />
      </div>

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
            <h3 className="item-a">REACH US VIA</h3>
            <h4 className="item-b">
              Increase City, Charlisco Phase 2, Off NPA Expressway, Warri, Delta
              State, Nigeria.
            </h4>
            <h4 className="item-b">
              <a href="tel:+2347033878309" className="number-link">
                +234 703 387 8309
              </a>
            </h4>
            <h4 className="item-b">
              <a
                href="mailto:christreign@increasecity.org"
                className="contactfb"
              >
                christreign@increasecity.org
              </a>
            </h4>
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
            <h3 className="h2">SHARE YOUR TESTIMONIES</h3>
          </div>
          <div className="input-item">
            <div className="input-grid">
              <div>
                <div className="info-tag">Names</div>
                <input
                  className="name"
                  value={name}
                  placeholder="Please enter your names"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <div className="info-tag">Phone Number</div>
                <input
                  className="phone"
                  placeholder="Please enter your phone number"
                  value={phone}
                  type="number"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="info-tag"> Testimonies</div>
              <textarea
                className="message"
                value={message}
                placeholder="Please share your testimonies"
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div
            style={{ display: `${spinner ? "" : "none"}` }}
            className="cliploader"
          >
            <ClipLoader />
          </div>
          <div
            className="base-information"
            style={{ display: `${warning ? "" : "none"}` }}
          >
            Please fill the form correctly
          </div>

          <button
            className="submit"
            onClick={resetInputValue}
            style={{
              backgroundColor: `${button ? "#00bbba" : "rgb(0, 39, 168)"}`,
            }}
          >
            {button ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d325.5387994381768!2d5.729155586116927!3d5.581416767191477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1040532a109dc17d%3A0xdff63ee47accb19b!2sEkpan%20I!3m2!1d5.5811015!2d5.7352478!5e1!3m2!1sen!2sng!4v1662740003496!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
};

export default ContactUs;
