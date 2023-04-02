import React, { useState } from "react";
import { work } from "../work";

const Works = () => {
  const [active, setActive] = useState(1);

  const newWorks = work.filter((item) => item.category === "new_works");
  const oldWorks = work.filter((item) => item.category === "old_works");
  const recentWorks = work.filter((item) => item.category === "recent_works");

  const handleWorks = (e) => {
    if (e.target.id === "work") {
      setActive(1);
    } else if (e.target.id === "recent") {
      setActive(2);
    } else if (e.target.id === "new") {
      setActive(3);
    } else if (e.target.id === "old") {
      setActive(4);
    }
  };

  return (
    <div className="works-container">
      <h2>Works</h2>
      <ul className="work-ul">
        <li
          onClick={handleWorks}
          className={`${active === 1 ? "active" : ""}`}
          id="work"
        >
          All Works
        </li>
        <li
          onClick={handleWorks}
          id="recent"
          className={`${active === 2 ? "active" : ""}`}
        >
          Recents Works
        </li>
        <li
          onClick={handleWorks}
          id="new"
          className={`${active === 3 ? "active" : ""}`}
        >
          New Projects
        </li>
        <li
          onClick={handleWorks}
          id="old"
          className={`${active === 4 ? "active" : ""}`}
        >
          Old Projects
        </li>
      </ul>
      <div className="works">
        {(active === 2
          ? recentWorks
          : active === 3
          ? newWorks
          : active === 4
          ? oldWorks
          : work
        ).map((item, idx) => (
          <div key={idx}>
            <img src={item.image} alt={item.image} />
            <a className="btn" href={item.url} target="_blank">
              Go to Link
            </a>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
