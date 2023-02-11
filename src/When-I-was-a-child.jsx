import { Link } from "react-router-dom";
import Footer from "./footer";
import MessageImage from "./Images/Message-cover-picture-b copy.webp";
import "./message.css";

const Message3 = () => {
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
          <div className="message-title">WHEN I WAS A CHILD</div>
          <div className="paragraph-a">
            Text: 1 CORINTHIANS 13:1-11, 1 PETER 2:2.
          </div>
          <div className="paragraph">
            For God to destroy a man that carries a prophecy, He will rather fix
            the person and use. There is always a prophecy on an empty vessel.
            There are some people you can't touch or speak against because if
            you do God will react in a way you don't expect. You can waste your
            life but you can't waste a prophecy. No matter how you cry it does
            not move God but your prophecy moves God.
          </div>
          <div className="paragraph">
            In every dispensation there is a voice. What God can't do no man can
            do it. When you force people to be right they will end up being
            right wrongly. The God you see is better than the God that was
            introduced to you, encounter simplifies you. There is difference
            between the body of Christ and the nation of Christ. Generations are
            wasting out.
          </div>
          <div className="paragraph">
            Somebody can be 60years and still behave like a child. A child is
            someone that is 100years but still thinks like a 2year old. Men are
            always children until they decide to be mature. Children don't fish
            men but adults fish men. Be Careful with the way you judge people
            because there is something that person might carry that God doesn't
            joke with. Adult ask questions while children act. When JESUS steps
            into a man's life, He turns his life for good.
          </div>
          <div className="paragraph">
            A child is that person that still keeps malice in the church. You
            can't be acting like a child and expect God to bless you. Children
            have their own level of blessings. Children don't get married or
            even work in a company because their thoughts are still childish.
            Don't ever solve a problem until you know who you are. Until you get
            to a level where you can accommodate everybody then you are not an
            adult. As an adult you pray your children into their destinies. What
            can't be settled spiritually can't be celebrated physically. Stop
            wasting your life. WORK ON YOUR TODAY FOR YOUR TOMORROW TO BE
            BETTER.
          </div>
        </div>
        <div className="nextandprev">
          <Link to="/Sermon/God-is-Looking-For-a-Man">
            <button className="prev" onClick={loadPrev}>
              Previous
            </button>
          </Link>
          <Link to="/Sermon/Brokenness">
            <button className="next2" onClick={loadPrev}>
              Next
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Message3;
