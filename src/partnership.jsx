import { useState } from "react";
import "./giving.css";
import "./partnership.css";
import { ClipLoader } from "react-spinners";
import ImageHeader from "./Images/images---2022-09-06T222924.webp";
import Footer from "./footer";
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
import Typewriter from "typewriter-effect";

const Partnership = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [warning, setWarning] = useState(false);
  const [email, setEmail] = useState("");
  const [button, setButton] = useState(false);

  const buttonSubmit = async (event) => {
    event.preventDefault();
    if (
      name.length <= 0 ||
      number.length < 10 ||
      country.length < 0 ||
      birth.length === 0 ||
      address.length < 0
    ) {
      setWarning(true);
    } else {
      // try {
      //   await addDoc(collection(firestore, "Partnership"), {
      //     Address: address,
      //     Country: country,
      //     Gender: gender,
      //     Level: level,
      //     Name: name,
      //     Phone: number,
      //     State: state,
      //     birth: birth,
      //   });
      //   setWarning(false);
      //   setButton(true);
      //   setSpinner(false);
      //   setAmountWarning(false);
      // } catch (err) {
      //   alert(err);
      // }

      // try {
      //   await setDoc(doc(firestore, "Efemena", "Test"), {
      //     Testing: { name, address },
      //   });
      // } catch (err) {
      //   console.log(err);
      // }
      // }
      try {
        const partner = doc(firestore, "Partner", `${name}`);
        setDoc(partner, {
          Partnership: {
            Name: name,
            Number: number,
            DateOfBirth: birth,
            Level: level,
            Address: address,
            // Email: email,
            Gender: gender,
            // State: state,
            Country: country,
            TimeStamp: serverTimestamp(),
          },
        });
      } catch (err) {
        // console.log(err);
        swal("Please resubmit your details, there was an error");
      }
      setButton(true);
      setSpinner(true);

      // const querySnapshot = await getDocs(collection(firestore, "Partner"));
      // querySnapshot.forEach((doc) => {
      //   doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
      setTimeout(() => {
        swal("Partnership details submitted");
        setButton(false);
        setSpinner(false);
        setName("");
        setCountry("");
        setBirth("");
        setState("");
        setLevel("");
        setGender("bronze");
        setNumber("");
        setAddress("");
        setEmail("");
        window.location.href = `https://paystack.com/pay/${level}-partnership`;
      }, 2000);
    }
  };
  return (
    <div className="partner-parent">
      <div className="giving-bg">
        <div className="homepage-image-container1">
          <div className="top-text">
            <div className="first">
              <Typewriter
                options={{
                  strings: ["Partner with GOD", "PARTNER WITH GOD"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </div>
            <div className="second">
              2 Corinthians 9:7b for God loveth a cheerful giver
            </div>
          </div>
          <img src={ImageHeader} className="giving-image" alt="giving-image" />
        </div>
        <div className="our-mission">
          <div>
            <div className="mission">OUR MISSION</div>
            <div id="mission-a">
              1. To continuously win souls into the kingdom of GOD according to
              the great commission (Matthew 28:16-20).
            </div>
            <div id="mission-a">
              2. To teach the Lord's people how to be bold and have courage and
              not easily moved, for He is always with us.
            </div>
            <div id="mission-a">
              3. To stir up the body of Christ and equip them to do the work of
              the ministry.
            </div>
          </div>
        </div>
        <div className="our-mission">
          <div>
            <div className="mission-b">BENEFITS OF BEING A PARTNER</div>
            <div id="mission-a">1. You can never lose, it is always a win.</div>
            <div id="mission-a">2. You gain entrance to God's wisdom.</div>
            <div id="mission-a">
              3. You grow in all areas especially spiritual growth. You cannot
              partner with GOD and be spiritually dull.
            </div>
            <div id="mission-a">
              4. You prosper in whatever you do if you are a genuine partner
              with GOD.
            </div>
          </div>
        </div>
        <div className="categories">
          <h3 className="h3-categories">CATEGORIES</h3>
          <div className="partner-levels">
            <div className="bronze-partner">
              <h3 className="partner-level">Bronze Partner</h3>
              <h3>NGN 5,000</h3>
            </div>
            <div className="silver-partner">
              <h3 className="partner-level">Silver Partner</h3>
              <h3>NGN 15,000</h3>
            </div>
            <div className="gold-partner">
              <h3 className="partner-level">Gold Partner</h3>
              <h3>NGN 25,000</h3>
            </div>
          </div>
        </div>
        <form>
          <div className="form-information">
            <h3 className="child">
              Please fill in your correct details in the form below then click
              submit.
            </h3>
            <div className="partnership-form">PARTNERSHIP FORM</div>
          </div>
          <div className="partners-form">
            <input
              placeholder="Names"
              className="partner"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Phone Number"
              className="partner"
              type="number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <input
              placeholder="Country"
              className="partner"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
            {/* <input
              placeholder="State"
              className="partner"
              value={state}
              onChange={(event) => setState(event.target.value)}
            /> */}

            <input
              type="text"
              onFocus={(event) => (event.target.type = "date")}
              onBlur={(event) => (event.target.type = "text")}
              placeholder="Date of Birth"
              className="partner-date"
              value={birth}
              onChange={(event) => setBirth(event.target.value)}
            />
            <div className="checkbox-parent">
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="checkbox"
                  value="male"
                  onChange={(event) => setGender(event.target.value)}
                />
                Male
              </div>

              <div className="female">
                <input
                  type="radio"
                  name="gender"
                  className="checkbox"
                  value="female"
                  onChange={(event) => setGender(event.target.value)}
                />
                Female
              </div>
            </div>
            <div className="level">
              <div>
                <input
                  type="radio"
                  name="level"
                  value="bronze"
                  onChange={(event) => setLevel(event.target.value)}
                />
                Bronze(NGN 5,000)
              </div>

              <div className="silver">
                <input
                  type="radio"
                  name="level"
                  value="silver"
                  onChange={(event) => setLevel(event.target.value)}
                />
                Silver (NGN 15,000)
              </div>
              <div className="gold">
                <input
                  type="radio"
                  name="level"
                  value="gold"
                  onChange={(event) => setLevel(event.target.value)}
                />
                Gold (NGN 25,000)
              </div>
            </div>

            {/* <input
              placeholder="Email"
              className="partner-email-address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            /> */}
            <input
              placeholder="Address"
              className="partner-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div
            className="cliploader2"
            style={{ display: `${spinner ? "" : "none"}` }}
          >
            <ClipLoader />
          </div>
          <div
            className="base-information2"
            style={{ display: `${warning ? "" : "none"}` }}
          >
            Please fill the form correctly
          </div>
          <div className="submit-button">
            <button className="partner-submit-button" onClick={buttonSubmit}>
              {button ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Partnership;
