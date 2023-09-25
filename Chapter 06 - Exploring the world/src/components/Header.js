import { useState } from "react";
import LOGO_URL from "../utils/constants";

const Header = () => {
  const [name, setName] = useState("Login");

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={LOGO_URL} alt="logo"/>
        </a>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setName(name === "Login" ? "Logout" : "Login");
              }}
            >
              {name}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
