import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/Brokeness-Message-Cover-Design copy.webp";
import "./message.css";

const Message4 = () => {
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
          <div className="message-title">Sunday 6th November, 2022</div>
          <div className="message-title">Brokenness</div>
          <div className="paragraph-a">Text: Luke 19:39-40</div>
          <div className="paragraph">
            One man can walk into your life and make your testimonies real. One
            man can lift you and one man can reduce you. Increase can't come to
            you until you act it. What you celebrate is what you become. There
            are certain areas and ways to celebrate Increase. You are not in the
            church because of your pastor but because of the GOD of your pastor.
            Everything in life is an answer to the prayers of the prophet.
          </div>
          <div className="mission-b" style={{ fontWeight: "bold" }}>
            When we talk about Brokenness, we must consider self.
          </div>
          <div className="paragraph">
            A Broken christian is better than a believer. Brokenness has to do
            with someone who is real, someone that can work in any department
            regardless of your status. Until you lose yourself to GOD, HE can't
            lose himself to your will.
            <div>
              A broken man is someone that can put himself down for people to
              work on, they shoulder people's responsibility, they don't
              consider age but GOD. They stand by GOD'S work. People talk to a
              broken man anyhow, if you are truly broken, you won't care.
            </div>
          </div>
          <div className="paragraph">
            Brokenness brings obedience to GOD"S word, it kicks the world out of
            your life and put GOD there. Convenant is better than promise. When
            you get to a level where you no longer see GOD the way you used to,
            then things starts going down.
          </div>
          <div className="paragraph">
            A broken heart is what helps you to serve GOD genuinely. Brokenness
            keeps believers moving without tampering with their faith. When GOD
            comes, HE is not going to judge you on what you are doing but how
            your life was during the time yoiu gave your life to CHRIST.It is
            the broken heart you had when you gave your life to Christ that made
            you vow never to commit sin or do some certain things.
          </div>
          <div className="paragraph">
            There are certain mistakes in your life you shouldn't make because
            when you do, it will be difficult to get out of it. A man who is
            broken will never struggle with GOD. A broken christain will always
            consider the things of GOD.
          </div>
          <div className="paragraph">
            Laws started existing from Moses' time, it was when laws came that
            is when the heart of men started getting harden. Everbody can be
            existing but everybody is not Elijah, Abraham, we care about things
            of this earth more than our spiritual life.
          </div>
          <div className="paragraph">
            If you can focus on your spiritual life more than the things of this
            world then the world will hear of you. What influence do you give to
            people around you? When last did you go for retreat with GOD? Every
            mistake you make after marriage, your children will play it back to
            you. GOD is still looking for broken believers. A church is when
            even the pastors in the ministry are raising men/members for God.
          </div>
          <div className="paragraph">
            Until your soul grows you can't make heaven because there are so
            many distractions in this world. HOW ARE YOU AFFECTING YOUR WORLD?
            You ust not travel out first before they know you are there, first
            project JESUS in your heart that will affect a man there. Release
            your heart to GOD, do not harden your heart, do whatever GOD ask you
            to do. Do not celebrate when someone is going through hard times,
            what are you giving in exchange for your soul, let us go back to the
            ways of JESUS, remember your first love.
          </div>
        </div>
        <Link to="/Sermon/When-I-was-a-child">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/Unveiling-the-mysteries-of-voice">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message4;
