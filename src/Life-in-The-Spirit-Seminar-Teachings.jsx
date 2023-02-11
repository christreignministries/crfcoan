import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/Life-in-the-Spirit-Seminar-January-2023 copy.webp";
import "./message.css";

const Message8 = () => {
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
          <div className="message-title">Tuesday 17th January, 2023</div>
          <div className="message-title">
            Life in The Spirit Seminar Teachings
          </div>
          <div className="paragraph">
            This year January is a month of re-structuring hour spiritual life.
            There's a level you serve God to, God will send men to bring what
            you need in life. _Live your life on sacrifice no matter how life is
            torturing you; the pain of the sacrifice you make is what GOD
            attends to, until you apply this principle you can never be Blessed.
            When you are starting anything, start with God. When you pray, don't
            doubt it, believe it! You can only see now, not tomorrow; the one
            that sees tomorrow (GOD) will tell you what to do for your tomorrow.
          </div>
          <div className="paragraph">
            <div className="mission-b" style={{ fontWeight: "bold" }}>
              THREE GROUPS OF PEOPLE YOU SHOULD NOT LET GO.
            </div>
            <div>
              <div className="paragraph">
                <h3>
                  1. PEOPLE THAT WOULD SAY I AM WITH YOU AND THEY MEAN IT WITH
                  THEIR BLOOD
                </h3>
                Don't joke with these persons, they don't joke with their words.
                Have a place where you keep their picture to pray for them when
                you're praying. These people are the ones that will lift you
                when you are failing, they sow to your life and don't announce
                it.
              </div>
            </div>
          </div>
          <div className="paragraph">
            <h3>
              2. PEOPLE THAT WILL PRAY TO GOD TO KNOW IF THEM BEING WITH YOU IS
              RIGHT OR WRONG
            </h3>
            Don't do away with those kind of people even if devil is trying to
            take them away, go extra miles to bring them back. _Any church not
            building you with message, walk away because the church will make
            you behave like a native doctor.
          </div>
          <div className="paragraph">
            <h3>3. PEOPLE THAT RESPECTS YOUR OPINIONS</h3>
            Let your eye be single. If you know who you are; no matter what
            happens in the church, you will stay. Call people back when they are
            leaving the church because it can be manipulation by the devil, most
            times they don't know why whatever happened came to be. There are
            people you musn't let go.
          </div>
          <div className="mission-b" style={{ fontWeight: "bold" }}>
            THE REIGNING WISDOM TIPS FOR ALL REIGNERS.
          </div>
          <div className="paragraph">
            <h3>BE A BUILDER AND NOT A DESTROYER</h3>
            (Proverbs 17;:1-5 and proverbs 14:1). This world and being a
            Christian is like marriage. As a reigner, being in the church you
            must understand that Jesus suffered 9hours on the cross. Till the
            day you will die you will never see a church where there are no
            problems or sinful acts. The Bible should be a mirror to you.
          </div>
          <div className="paragraph">
            Any person you are telling on to another, they will never see you as
            a good person but a bad friend. Be a builder and not a destroyer
            because anybody you are building now is a definition of your life
            tomorrow. Your business is to preach the word not to judge people.
            Until a member becomes a worker you cannot judge the person. Who you
            are against can be your lifter tomorrow. Runaway from people who
            claim their Pastor is the reason they left the church.
          </div>
          <div className="paragraph">
            <h3>BEING AN AGENT OF CHANGE</h3>
          </div>
          <div className="paragraph">
            <h3>BE CONCERNED ABOUT PEOPLE IN THE AREAS OF PRAYERS</h3>
          </div>

          <div className="paragraph">
            What you are looking for is in the hand of a man so treat men well
            for GOD will always use men to bless you.
          </div>
          <div className="paragraph">
            <h3>HAVE A BUILDING SYSTEM</h3>A woman that has a building system
            will not take her children away from the church where they're
            growing.
          </div>
          <div className="paragraph">
            You cannot finish from a fast program and remain the same because
            you should be able to see something. When you are not consistent and
            spiritually connected, that's when you know that marriage is not
            just all about dancing to the altar. People you refuse to build now,
            you will seek help from them tomorrow and may not see them. Partner
            with GOD to secure your future.
          </div>
        </div>
        <Link to="/Sermon/The-Heart-of-The-Day">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/Life-in-The-Spirit-Seminar-Teachings-b">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message8;
