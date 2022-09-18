import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import ComingSoon from "./Images/images - 2022-09-04T172252.448.jpeg";

import "./message.css";

const Message1 = () => {
  const loadNext = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      </div>
      <Link to="/Devotionals/message2">
        <button className="next" onClick={loadNext}>
          Next
        </button>
      </Link>

      <Footer />
    </div>
  );
};

export default Message1;
