import React from "react";
import { FaArrowUp } from "react-icons/fa";
// import { useState, useEffect } from "react";

const BackToTopButton = () => {
  //   const [button, setButton] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 200) {
  //         setButton(true);
  //       } else {
  //         setButton(false);
  //       }
  //     });
  //   });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* {button && ( */}
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
        onClick={() => scrollUp()}
      >
        <FaArrowUp />
      </button>
      {/* )} */}
    </div>
  );
};

export default BackToTopButton;
