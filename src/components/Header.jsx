import React from "react";
import headerLogo from "../assets/Success Logo II.png";

const Header = () => {
  return (
    <header>
      <div className="logo-con">
        <img src={headerLogo} alt="" />
      </div>
      <ul className="header-list">
        <li>About</li>
        <li>What I Do</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
