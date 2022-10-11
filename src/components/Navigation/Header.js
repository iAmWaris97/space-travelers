import './Header.css';
import Logo from './img/planet.png';

const Header = () => (
  <header className="header flex">
    <div className="logo flex">
      <img src={Logo} alt="logo" className="logo-img" />
      <h1 className="logo-title">Space Traveler&apos;s Hub</h1>
    </div>
    <nav className="navbar">
      <ul className="nav-list flex">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
