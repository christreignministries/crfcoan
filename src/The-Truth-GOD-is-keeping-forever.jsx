import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/The-Truth-that-God-is-keeping-forever copy.webp";
import "./message.css";

const Message7 = () => {
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
          <div className="message-title">Sunday 27th November, 2022</div>
          <div className="message-title">The Truth GOD is Keeping Forever</div>
          <div className="paragraph-a">Text: Psalms 146:46</div>
          <div className="paragraph">
            Why are some pastors failing? or some people excel and sometimes
            expire? The truth is that those who fail are the persons that
            believes/put mind in the things they did before. The truth of doing
            new things everyday is what keeps men going. There is a spirit of
            every 'new thing'. The truth GOD is keeping everyday is 'new things'
            and deeper truths. Update your life everyday! Men are after what is
            reigning today. Every man that must live long must upgrade in new
            things. When men seek for upgrade, GOD begins you tell you things
            you need to know. GOD is after now, not yesterday. People are not
            after how you look but what you carry.
          </div>
          <div className="paragraph">
            When you are upgraded it ushers you to maturity. When you do things
            for people to applaud you then you are failing. When you understand
            the realm of maturity, it moves you to the glory of GOD. Maturity in
            the church is what brings the Glory of GOD. There is a difference
            between a gift of glory and someone living in glory. The gift of
            glory can manifest for a while, then leaves; but living in the glory
            of GOD is your everyday life and in that realm mercy is not
            available. In the realm of glory, whatever you say comes to pass.
            Maturity defines your marriage, your life and ministry and it pushes
            you to the realm of glory. Until you are mature, you have nothing to
            do with the Glory.
            <div>
              <div className="paragraph">
                Your spending time in the secret place brings the truth of GOD
                to you. If you can see men the way GOD sees them, things becomes
                easy and it can only happen by maturity . People don't want to
                hear of your past so when you are telling your past, you are
                missing the truth of GOD. When the bible talks about
                unsearchable truth, GOD can only give it to you when you enter
                into the realm of maturity. Testimony does not keep members but
                edifies the church. It is the word of GOD that keeps
                members/people in the church. There are certain things GOD is
                keeping that HE has not revealed to any man. What draws men is
                not your size or title but about what you carry.
              </div>
            </div>
          </div>
          <div className="paragraph">
            The secret of GOD is better than the blessings of GOD. When the
            secret is given to you, men don't give you money but they pay for
            that secret. When you have the secret of GOD you command respect.
            When men fail in the realm of Glory, God chases them out of the
            garden of Eden so when you enter the realm you enter that realm, you
            are journeying back to the garden of Eden. The realm where you
            interepete what GOD is saying. It is men that has entered that realm
            of Glory that commands results on earth. In every dispensation
            things are changing. Until you get to the secret place there are
            certain blessings you will not enjoy from GOD.
          </div>
        </div>
        <Link to="/Sermon/The-Heart-of-The-Day">
          <button className="prev" onClick={loadPrev}>
            Previous
          </button>
        </Link>
        <Link to="/Sermon/Life-in-The-Spirit-Seminar-Teachings">
          <button className="next2" onClick={loadPrev}>
            Next
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Message7;
