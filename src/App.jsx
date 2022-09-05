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
import Message from "./messagea";
import Message2 from "./messageb";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <TopIcons />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/Devotionals" element={<Devotionals />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Devotionals/message1" element={<Message />} />
          <Route path="/Devotionals/message2" element={<Message2 />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
