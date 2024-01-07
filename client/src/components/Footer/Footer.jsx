import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__logo">
        Eco<span>Star</span>
      </h1>
      <p className="footer__para">&copy; EcoStar All rights reserved</p>
      <p className="footer__dev-header">Developed by:</p>
      <div className="footer__list-container">
        <ul className="footer__dev-list">
          <li className="footer__list-item">Bilal Hassen</li>|
          <li className="footer__list-item">Michael Sun Dela Cruz</li>|
          <li className="footer__list-item">Aman Damani</li>|
          <li className="footer__list-item">Arjun Sahjpaul</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
