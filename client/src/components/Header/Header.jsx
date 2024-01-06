import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import ecoStarLogo from "../../assets/logo/eco-star-logo.png";
const Header = () => {
  const [activePage, setActivePage] = useState("");

  let isActive = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav__logo-container">
          <h1 className="nav__logo">
            Eco<span>Star</span>
          </h1>
          <div className="nav__logo-con">
            <img
              className="nav__logo-img"
              src={ecoStarLogo}
              alt="eco-star-logo"
            ></img>
          </div>
        </NavLink>
        <div className="nav__links-container">
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink to="" className="nav__link">
                Home
              </NavLink>
            </li>

            <li className="nav__list-item">
              <NavLink to="" className="nav__link">
                leaderboard
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="" className="nav__link">
                login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
