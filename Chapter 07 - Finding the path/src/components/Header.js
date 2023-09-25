import { useState } from "react";
import LOGO_URL, { CLOSEBTN, PATH } from "../utils/constants";

const Header = () => {
  const [name, setName] = useState("Login");
  const [Sidebar, setSidebar] = useState("");

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img className="logo" src={LOGO_URL} alt="logo" />
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

        <div className="menu" onClick={() => setSidebar(Sidebar === "" ? "active" : "" )}>
          <img src={PATH} alt="menu" />
        </div>
      </header>

      <div className={`sidebar ${Sidebar}`}>
          <div className="close" onClick={() => setSidebar(Sidebar === "active" ? "" : "active")}>
            <img src={CLOSEBTN} alt="close" />
          </div>
        <ul className="sidebar-items">
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
        </ul>
      </div>
    </>
  );
};

export default Header;
