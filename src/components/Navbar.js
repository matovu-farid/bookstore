import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <Link to="/">Books</Link>
    </li>
    <li>
      <Link to="/categories">Categories</Link>
    </li>
  </ul>
);

export default Navbar;