import { NavLink } from 'react-router-dom';
import { ImMan } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => (
  <div className="nav-card">

    <div className="nav-content">
      <h3>Bookstore CMS</h3>
      <ul className="navbar">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'non-active-nav')} to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'non-active-nav')} to="/categories">CATEGORIES</NavLink>
        </li>

      </ul>
      <div className="icon-div">

        <ImMan className="icon" />
      </div>
    </div>
  </div>
);

export default Navbar;
