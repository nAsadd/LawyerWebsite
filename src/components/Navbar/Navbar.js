import React, { useState } from "react";
import "./Navbar.css";
import array from "./array";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [barsClicked, setBarsClicked] = useState(false);
  return (
    <div className="navbar-container">
      <div className="sub-navbar">
        <div className="logo">
          <h3>
            <span className="span1">Ori</span>
            <span className="span2">.</span>
            <span className="span3">Lawyer</span>
          </h3>
        </div>
        <ul className="menu-container">
          {array.map((element) => {
            const { id, title } = element;
            return (
              <li key={id} className="menu">
                {title}
              </li>
            );
          })}
          <li className="menu search-icon">
            <FaSearch />
          </li>
        </ul>
        <div
          className={`bars-container ${barsClicked && "bars-container-active"}`}
        >
          <FaBars onClick={() => setBarsClicked(!barsClicked)} />
        </div>
      </div>
      <div
        className={`submenu-container ${
          barsClicked && "show-submenu-container"
        }`}
      >
        {array.map((element) => {
          const { id, title } = element;
          return (
            <div key={id} className="submenu">
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
