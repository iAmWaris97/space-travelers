import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from './img/planet.png';

const Header = () => (
  <header className="header flex">
    <div className="logo flex">
      <img src={Logo} alt="logo" className="logo-img" />
      <h1 className="logo-title">Space Traveler&apos;s Hub</h1>
    </div>
    <nav className="navbar flex">
      <ul className="nav-list flex">
        <li>
          <NavLink to="/rockets"> Rockets </NavLink>
        </li>
        <li>
          <NavLink to="/missions"> Missions </NavLink>
        </li>
        <li>
          <NavLink to="/profile"> My Profle </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
