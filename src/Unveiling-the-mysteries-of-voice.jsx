import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/Unveiling-the-mysteries-of-Voice-cover copy.webp";
import "./message.css";

const Message5 = () => {
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
          <div className="message-title">Sunday 18th December, 2022</div>
          <div className="message-title">Unveiling the mysteries of Voice</div>
          <div className="paragraph-a">
            Text: Deuteronomy 28:1-2, Daniel 2:19-46, Isaiah 60:1.
          </div>
          <div className="paragraph">
            Maturity tells you to do whatever you're expected to do no matter
            your age. When you're proud, you lose men but when you are mature,
            you have men. Mature men know that no matter their age they are not
            bigger than GOD. It is not everytime you say let the will of GOD be
            done. Sometimes GOD is waiting for your manifestation. Maturity will
            make you shoulder other people's pain.
          </div>
          <div className="mission-b" style={{ fontWeight: "bold" }}>
            PRINCIPLES TO FOLLOW (FOR ACCESSING VOICE).
          </div>
          <div className="paragraph">
            <div style={{ fontWeight: "bold" }}>1. Instructions.</div>
            <div>
              Access to divine secrets is what makes you a voice in the journey
              of the kingdom. Before praying to be like anybody you must find
              out all the secret things about that man. You are not competing
              with anybody, what you need is the secret of GOD. The secrets of
              GOD are found in men that fears GOD.
            </div>
          </div>
          <div className="paragraph">
            <div style={{ fontWeight: "bold" }}>
              2. Fear (Luke 23:46, Matthew 5:6, Psalms 25:14).
            </div>
            <div>
              When the fear of the Lord is with you, you can't speak against
              your breathen, you will work and follow GOD according to the
              leading of the Spirit. In every bad city/family, GOD is looking
              for a man to reveal HIS secret to. You can defeat men but you
              can't defeat GOD.
            </div>
          </div>
          <div className="paragraph">
            <div style={{ fontWeight: "bold" }}>
              3. Studying the Bible (2 Timothy 2:15).
            </div>
            <div>
              The amount of the Word of GOD in you determines the level you
              operate. No matter how busy you are, study the word of GOD. Your
              Bible is not for decoration but for your lifting. When you open
              the Bible, you appear before a mirror, there is a transition.
            </div>
          </div>
          <div className="paragraph">
            <div style={{ fontWeight: "bold" }}>4. Prayers.</div>
            No matter what you are going through if you are a praying machine,
            things will soon be good. There is no how you pray and you don't see
            GOD. As you are praying you are activating a dimension, you are
            making the road clear for JESUS to step in. Don't blame anybody for
            your inadequacy in anything. As you pray you see life. Each time you
            spend time with GOD, you come out with HIS Presence. HIS Presence is
            not a gift but an impartation.
          </div>
          <div className="paragraph">
            When things are tough upgrade your prayer temple. Don't be weak and
            expect to become a super-man (Jeremiah 33:3). Knowing things you
            don't know is by prayers. You can't step into the realm of prayers
            when someone is still in your mind.
          </div>
          <div className="paragraph">
            <div style={{ fontWeight: "bold" }}>
              5. Putting things into pratice.
            </div>
            There is no perfect man anywhere. It is your prayer that will change
            a man for you and make him your man. You can change anything you
            don't like with your prayers (Isaiah 11:2, Psalm 16:11). When you
            put everything you receive into work, you begin to enjoy pleasures
            and your presence filled with joy.
          </div>
        </div>
        <Link to="/Sermon/Brokenness">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/The-Heart-of-The-Day">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message5;
