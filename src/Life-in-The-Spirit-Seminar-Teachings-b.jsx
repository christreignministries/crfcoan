import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/Life-in-the-Spirit-Seminar-January-2023 copy.webp";
import "./message.css";

const Message9 = () => {
  const loadPrev = () => {
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
          <h2 className="devotional">Sermon</h2>
        </div>
        <div className="devotional-image">
          <img
            src={MessageImage}
            className="devotional-image"
            alt="devotional-image"
          />
        </div>
        <div className="message-text">
          <div className="message-title">Thursday 19th January, 2023</div>
          <div className="message-title">WISDOM TIPS FOR REIGNERS</div>
          <div className="paragraph-a">
            Text: 1 Samuel 11:6-13, Matthew 6:21
          </div>
          <div className="paragraph">
            1. Do not go into the rooms of any Reigner when you pay them a
            visit, apart from the sitting room, exceeding that would mean
            something else entirely.
          </div>
          <div className="paragraph">
            2. When you enter into any house, study the house. . Be calculative
            and observant of your surroundings.
            <div>
              <div className="paragraph">
                3. When you enter into any home, do not enter into the kitchen
                to serve food yourself, no matter the relationship.
              </div>
            </div>
          </div>
          <div className="paragraph">
            Train your children on how to receive things from anybody, for every
            tender has a sweet tone to sweet talk you into doing what you don't
            want to do. The best love you can show your children is not when you
            buy them expensive clothes, but when you put your eyes on them,
            don't take your eyes off your children for even an hour because the
            spoilers will spoil them for you. Every mother should always have
            eyes for their female children.
          </div>
          <div className="paragraph">
            4. You must not dip your hands into or eat in the same plate as a
            married man, no matter what.
          </div>
          <div className="paragraph">
            For Abraham to treck three days to sacrifice Isaac, GOD was handling
            5. There are four areas in a house you must not enter.
          </div>
          <div className="paragraph">
            <h3>4 Things a woman should protect in her home. </h3>i. Her
            Husband. ii. Her children. iii. Her kitchen. iv. Her Freezer
            /Refrigerator. A woman protects hers freezer because any wrong thing
            that enters there can kill the husband/children.
          </div>
          <div className="paragraph">
            6. Don't be a boss under your Boss — No matter how close you are
            with a friend, be careful for some certain things you do.
          </div>
          <div className="paragraph">
            When you see a man you're staying with getting angry unnecessarily,
            it means the man is no longer comfortable with your presence in the
            house. What you suffer too much for, is what you'll want to die for.
            There are things you should not do no matter what! Anyone that
            comes/sits in your shop, is not only there to buy something but also
            to hear something about you. Do not let your husband come to the
            house to hear that your friend beat his children; when you want to
            discipline someone else's child use wisdom, don't be a boss. When
            you're living in a house where your age mate is a child in that
            house, it takes the grace of God to wear clothes given to you by the
            parents. Always take permission from the child of the house to avoid
            angering the child of the house. Apply wisdom.
          </div>
          <div className="mission" style={{ fontWeight: "bold" }}>
            PRAYER POINTS
          </div>
          <div className="paragraph">
            1. Father in the name of Jesus Christ, by your mercies; correct the
            errors of my mouth. Every wrong word I have spoken, be corrected
            now! [2 Kings 2:23-24].
          </div>
          <div className="paragraph">
            2. Father in the name of Jesus Christ, break every wrong foundation
            speaking against me and my children.
          </div>
          <div className="paragraph">
            3. Every wrong foundation fighting me today, oh Lord break it by
            fire!
          </div>
          <div className="paragraph">
            4. Every altar from the shrine, coven, marine, fighting me with my
            name, break as I remove my name!
          </div>
        </div>
        <Link to="/Sermon/Life-in-The-Spirit-Seminar-Teachings">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/The-Mountain-of-The-LORD">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message9;
