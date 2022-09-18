import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        style={{
          position: "relative",
          left: "87%",
          top: "200px",
          zIndex: "99",
          borderRadius: "30px",
          fontWeight: "700",
          fontSize: "15px",
          cursor: "pointer",
          color: "rgba(4, 36, 68)",
          border: "none",
          padding: "5px 10px 2px 10px",
        }}
        onClick={scrollUp}
      >
        <FaArrowUp style={{ cursor: " pointer" }} />
      </button>
    </div>
  );
};

export default BackToTopButton;
