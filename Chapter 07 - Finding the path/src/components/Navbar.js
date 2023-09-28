import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
            <Link to="/">
                <img src={LOGO_URL} alt="logo" />
            </Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
