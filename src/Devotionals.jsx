import { useState } from "react";
import "./Devotionals.css";
import { DevotionalsImage } from "./DevotionalsExport";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Typewriter from "typewriter-effect";

const Devotionals = () => {
  const [search, setSearch] = useState("");
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="parent-bg">
      <hr className="ruler" />

      <div className="top-header">
        <h3>Category</h3>
        <h2 className="devotional">
          <Typewriter
            options={{
              strings: ["Sermons", "Messages"],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </h2>
        <div className="search-parent">
          <input
            placeholder="Search for a sermon title"
            className="sermon-search"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div>
        {DevotionalsImage.filter((items) => {
          if (search == "") {
            return items;
          } else if (
            items.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return items;
          }
        }).map((items, i) => {
          return (
            <div className="message-div" key={i}>
              <div className="div-picture">
                <img
                  src={items.img}
                  className="coming-soon"
                  alt="devotional-image"
                />
              </div>
              <div className="div-text">
                <div>
                  <div className="sermon-title">{items.title}</div>
                  <div className="sermon-date">{items.date}</div>
                  <div className="sermon-message">{items.message}</div>
                  <Link to={items.link} onClick={scrollUp}>
                    <button className="readmore">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Devotionals;
