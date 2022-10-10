import { NavLink } from 'react-router-dom';
import logo from './img/planet.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="app-logo" className="logo-img" />
      <span className="app-title">Space Traveler's Hub</span>
    </div>
    <nav className="navbar">
      <NavLink className="nav-link" to="/Rockets"> Rockets </NavLink>
      <NavLink className="nav-link" to="/Missions"> Missions </NavLink>
      <NavLink className="nav-link" to="/Profile"> My Profile </NavLink>
    </nav>
  </header>
);

export default Header;