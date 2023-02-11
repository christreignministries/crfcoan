import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const displayFunction = () => {
    // setTimeout(() => {
    //   setDisplay(false);
    // }, 20000);
  };

  const [display, setDisplay] = useState(true);

  window.addEventListener("scroll", displayFunction);

  return (
    <div>
      <button
        aria-label="back-to-top-button"
        style={{
          display: `${display ? "block" : "none"}`,
          position: "fixed",
          left: "87%",
          bottom: "20px",
          boxShadow: "0px 1px 5px rgb(0,0,0,0.3)",
          zIndex: "99",
          borderRadius: "7px",
          fontWeight: "700",
          fontSize: "20px",
          cursor: "pointer",
          color: "black",
          zIndex: "99",
          outline: "none",
          border: "none",
          padding: "8px 11px 5px 11px",
        }}
        onClick={scrollUp}
      >
        <FaArrowUp style={{ cursor: " pointer" }} />
      </button>
    </div>
  );
};

export default BackToTopButton;
