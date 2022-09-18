import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import ComingSoon from "./Images/images - 2022-09-06T222924.741.jpeg";
import "./message.css";

const Message2 = ({ testFunction }) => {
  const loadPrev = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    testFunction();
  };
  return (
    <div>
      <div className="parent-bg">
        <hr className="ruler" />
        <div className="top-header">
          <h3>Category</h3>
          <h2 className="devotional">Devotionals</h2>
        </div>
        <div className="devotional-image">
          <img src={ComingSoon} className="devotional-image" />
        </div>
        <div className="message-text">
          <div className="paragraph">Date of Upload</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div>
          <div className="paragraph">
            PRAYERS Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div>
        </div>
        <Link to="/Devotionals/message1">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message2;
