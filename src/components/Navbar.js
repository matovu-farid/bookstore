import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav-card">
    <h3>Bookstore CMS</h3>
    <ul className="navbar">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'non-active-nav')} to="/">Books</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'non-active-nav')} to="/categories">Categories</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
