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
          <Route path="/Devotionals" element={<Devotionals />} />
          <Route path="Devotionals/message1" element={<Message1 />} />
          <Route path="Devotionals/message2" element={<Message2 />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
