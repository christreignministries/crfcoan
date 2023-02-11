import { Component } from "react";
import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import "./App.css";
import Giving from "./giving";
import Devotionals from "./Devotionals";
import ContactUs from "./contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TopIcons from "./topIcons";
import Partnership from "./partnership";
import Message1 from "./God-is-looking-for-a-man";
import Message2 from "./When-I-was-a-child";
import Program from "./program";
import Countdown from "./countdown";
import Message3 from "./The-Mountain-of-The-LORD";
import Message4 from "./Unveiling-the-mysteries-of-voice";
import Message5 from "./Brokenness";
import Message6 from "./The-Heart-of-the-day";
import Message7 from "./The-Truth-GOD-is-keeping-forever";
import Message8 from "./Life-in-The-Spirit-Seminar-Teachings";
import Message9 from "./Life-in-The-Spirit-Seminar-Teachings-b";

class App extends Component {
  state = {};

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <Router>
        <TopIcons />

        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} loading />
          <Route path="/about" element={<About />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Sermon" element={<Devotionals />} />
          <Route
            path="Sermon/God-is-Looking-For-a-Man"
            element={<Message1 />}
          />
          <Route path="Sermon/When-I-was-a-child" element={<Message2 />} />
          <Route
            path="Sermon/The-Mountain-of-The-LORD"
            element={<Message3 />}
          />
          <Route
            path="Sermon/Unveiling-The-Mysteries-of-Voice"
            element={<Message4 />}
          />
          <Route path="Sermon/Brokenness" element={<Message5 />} />
          <Route path="Sermon/The-Heart-Of-The-Day" element={<Message6 />} />
          <Route
            path="Sermon/The-Truth-GOD-is-keeping-forever"
            element={<Message7 />}
          />
          <Route
            path="/Sermon/Life-in-The-Spirit-Seminar-Teachings"
            element={<Message8 />}
          />
          <Route
            path="/Sermon/Life-in-The-Spirit-Seminar-Teachings-b"
            element={<Message9 />}
          />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
