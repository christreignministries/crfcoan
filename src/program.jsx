import { useState } from "react";
import { program } from "./programExport";
import NewYearImage from "./Images/Welcome-to-2023-Design-copy copy.webp";
import "./program.css";
import Footer from "./footer";

const Program = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="giving-bg">
      <div className="homepage-image-container1">
        <div className="top-text">
          {/* <div className="first">Program for year 2023</div> */}
          <div className="second">
            {/* 2 Corinthians 9:7b for God loveth a cheerful giver */}
          </div>
        </div>
        <img src={NewYearImage} className="giving-image" alt="program-image" />
      </div>
      <div>
        <div>
          <input
            placeholder="Search for a program"
            className="program-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      {program
        .filter((items) => {
          if (search == "") {
            return items;
          } else if (
            items.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            items.date.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return items;
          }
        })
        .map((items, i) => {
          return (
            <div className="program-div" key={i}>
              <div className="programs">{items.name}</div>
              <div className="programs">{items.date}</div>
              <div className="programs">{items.time}</div>
            </div>
          );
        })}
      <Footer />
    </div>
  );
};

export default Program;
