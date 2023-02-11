import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/The-Heart-of-the-day-message-cover copy.webp";
import "./message.css";

const Message6 = () => {
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
          <div className="message-title">Sunday 8th January, 2023</div>
          <div className="message-title">The Heart of The Day</div>
          <div className="paragraph-a">
            Text: 1 Samuel 11:6-13, Matthew 6:21
          </div>
          <div className="paragraph">
            When the hand of the LORD is on you, the hand of the devil can't be
            on you even when the enemies plan your death, it can't happen. If
            your life is so precious to you, you don't joke with it by leaving
            the presence of GOD. People can be in the church but don't have
            where their heart is. That is something that functions on its own.
            Its function is by sight and the Bible says out of it are the
            problems of life. Heaven vomitted your life, and your life is beyond
            getting married and giving birth.
          </div>
          <div className="paragraph">
            Someone can be in the church and still not be in the church. The
            snake was the first animal to communicate with eve when her heart
            was still right with GOD. When you realize your source no matter
            your sin, GOD will still show up for you. If you are a believer, the
            first things to know are the things of heaven. Because you are in a
            high position in the church, it is not a reason for you to miss your
            place! The Angels don't force anyone to bless. The functionality of
            everyone is to have an office where GOD can meet you. There are
            certain secrets GOD can't reveal to you until you enter the heart of
            GOD.
            <div>
              <div className="paragraph">
                If your foundation is bad/broken you must meet an higher
                foundation to repair it for you. Your foundation is your office
                in church. Your foundation is what defines and protects you. You
                must try as much as possible to maintain your foundation. What
                have you been doing for GOD and how long have you been doing it?
                When you want to hear GOD ask for Angel Gabriel but when you are
                in a battle call Angel Michael. When your heart is fixed in
                heaven it is that heaven that brings down anything that you
                want. Your resources is in heaven. There's what we call the
                wisdom of men and of Heaven.
              </div>
            </div>
          </div>
          <div className="paragraph">
            If you know how men betray men, you will trust only in GOD. What
            enters your heart programs your life. Do not conform to the patterns
            of this world but be conformed by the word of GOD with the renewing
            of your mind. In life, there must be beggars and givers, which one
            would you like to be? Is your heart right with GOD as GOD'S heart is
            right with you? Your money is an open door. If the word is new every
            morning then the heart of the day will produce for you. The heart of
            the day is 3pm and 4pm, every money you make a day is not by another
            time but by 3pm and 4pm.
          </div>
          <div className="paragraph">
            When you say GOD give me my daily bread, you are asking for the
            heart of the day. The heart of the day is when your body gives you
            signals. If you are not careful, you will miss it. Your victory can
            only come when your door is properly opened in the heart of the day.
            Until your sacrifice meets your altar, the endorsement of heaven
            can't meet you. If you must prosper this year, understand the
            ministry of Abraham. If you fail at the first three-mester of your
            life, it takes GOD for you to see the light. 1-25 is the first,
            25-45 is the second then the third is 45-75. Until you pass the test
            of GOD, there are certain things GOD can't drop in your hand.
          </div>
          <div className="paragraph">
            For Abraham to trek three days to sacrifice Isaac, GOD was handling
            the first three-mester of his life. No matter how small you are, you
            must have the mindset of dropping something on the altar. There are
            little things in your hand you can use to break barriers. You must
            understand where your heart lies. What can you give to GOD that will
            make heaven more beautiful? God is not a joker or a scam to you.
          </div>
        </div>
        <Link to="/Sermon/Unveiling-The-Mysteries-of-Voice">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/The-Truth-GOD-is-keeping-forever">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message6;
