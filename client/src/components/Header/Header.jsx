import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo-container">
          <h1 className="nav__logo">
            Eco<span>Star</span>
          </h1>
        </div>
        <div className="nav__links-container">
          <ul className="nav__list">
            <li className="nav__list-item">LeaderBoard</li>
            <li className="nav__list-item">Login</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
