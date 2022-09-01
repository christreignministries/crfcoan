import React from "react";
import "./blog.css";
import ComingSoon from "./Images/SL_030420_28660_06.jpg";
import Footer from "./footer";

const Blog = () => {
  return (
    <div className="parent-bg">
      <img src={ComingSoon} className="coming-soon" />
      <Footer />
    </div>
  );
};

export default Blog;
