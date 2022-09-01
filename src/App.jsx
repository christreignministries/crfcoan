import React, { Component } from "react";
import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import "./App.css";
import Giving from "./giving";
import Blog from "./blog";
import ContactUs from "./contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
