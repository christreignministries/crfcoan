import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import MessagePicture from "./Images/Message-cover-picture.jpg";

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
          <img src={MessagePicture} className="devotional-image" />
        </div>
        <div className="message-text">
          <div className="message-title">GOD IS LOOKING FOR A MAN</div>
          <div className="paragraph-a">
            Text: DEUTERONOMY 7:1-10, 8:5, REVELATIONS 5:2.
          </div>
          <div className="paragraph">
            As months and days are passing on, so also generations are passing
            on. God is not looking for men that capable but men that are
            available. You can never go far when you are far from God but you
            can go far when God finds you. You can't get results when you miss
            exam so also you can't get testimonies when you did not pass God's
            exams.
          </div>
          <div className="paragraph">
            Never you allow your mind to be where it wants to be, always push
            your mind to where your mind can fit your dream. People will always
            think you are wasting away until you keep yourself busy. Everybody
            can't be a man but in every man there is a man.
          </div>
          <div className="paragraph">
            WHY IS GOD LOOKING FOR A MAN? God is looking for a man because men
            are turning away from God daily.
            <div className="benefits">BENEFITS OF ACCEPTING CHRIST</div>
            <div className="benefits-child">
              1. He will love you(Deuteronomy 7:13). It is better for God to
              love you than the world to love you. God's love brings life, when
              God love you then the world will love you. You can't reflect
              Christ and reflect delay/ poverty.
            </div>
            <div className="benefits-child">2. He will multiply you.</div>
            <div className="benefits-child">
              3. He will bless the fruit of your womb.
            </div>
            <div className="benefits-child">
              4. He will bless the fruit of your land.
            </div>
            <div className="benefits-child">5. He will bless your wine.</div>
            <div className="benefits-child">6. He will bless your oil.</div>
            <div className="benefits-child">
              7. He will bless you with increase of your kind.
            </div>
            <div className="benefits-child">
              8. He will bless the flocks of thy sheep.
            </div>
            <div className="benefits-child">
              9. He will give you all lands. You can't serve God and bite your
              hands.
            </div>
          </div>
          <div className="paragraph">
            Note: Every one of us has a destiny to fulfill, don't allow the gift
            of another man to intimidate you. It is not every evil that happens
            to us that is caused by the devil. Don't tell your dream/ prophecy
            to a dream/ prophecy killer.
          </div>
          {/* <div className="paragraph">
            PRAYERS Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi libero, alias ab quia perferendis quidem sit pariatur iste sint
            dolores, autem corrupti id accusantium architecto expedita velit
            molestiae quae quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi libero, alias ab quia perferendis quidem sit
            pariatur iste sint dolores, autem corrupti id accusantium architecto
            expedita velit molestiae quae quibusdam!
          </div> */}
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
