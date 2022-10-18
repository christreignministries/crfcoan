import React, { Component } from "react";
import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import "./App.css";
import Giving from "./giving";
import Devotionals from "./Devotionals";
import ContactUs from "./contact";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import TopIcons from "./topIcons";
import Partnership from "./partnership";
import Message1 from "./message1";
import Message2 from "./message2";
import Program from "./program";
import Countdown from "./countdown";
import Message3 from "./message3";

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
            path="Sermon/God-is-looking-for-a-man"
            element={<Message1 />}
          />
          <Route path="Sermon/When-I-was-a-child" element={<Message2 />} />
          <Route
            path="Sermon/The-Mountain-of-the-Lord"
            element={<Message3 />}
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
