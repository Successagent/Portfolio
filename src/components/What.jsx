import React from "react";
import { CgWebsite } from "react-icons/cg";

const What = () => {
  return (
    <div className="what-con">
      <h2>What I Do</h2>
      <div className="what">
        <div>
          <CgWebsite />
          <h3>Frontend Engineer</h3>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </li>
        </div>
        <div>
          <CgWebsite />
          <h3>Tech Skills</h3>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </li>
        </div>
        <div>
          <CgWebsite />
          <h3>Web Design</h3>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </li>
        </div>
      </div>
    </div>
  );
};

export default What;
