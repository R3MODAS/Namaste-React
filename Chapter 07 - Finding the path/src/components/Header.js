import { useState } from "react";
import LOGO_URL, { CLOSEBTN, PATH } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("Login");
  const [Sidebar, setSidebar] = useState("");
  console.log("Header is Rendered");

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img loading="lazy" className="logo" src={LOGO_URL} alt="logo" />
          </a>
        </div>

        <nav className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setName(name === "Login" ? "Logout" : "Login");
                  console.log("State Variable updated");
                }}
              >
                {name}
              </a>
            </li>
          </ul>
        </nav>

        <div className="menu" onClick={() => setSidebar(Sidebar === "" ? "active" : "" )}>
          <img src={PATH} alt="menu" loading="lazy" />
        </div>
      </header>

      <div className={`sidebar ${Sidebar}`}>
          <div className="close" onClick={() => setSidebar(Sidebar === "active" ? "" : "active")}>
            <img src={CLOSEBTN} alt="close" loading="lazy" />
          </div>
        <ul className="sidebar-items">
          <li>
            <Link to="/" onClick={() => {
              setSidebar(Sidebar === "active" ? "" : "active")
            }}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => {
              setSidebar(Sidebar === "active" ? "" : "active")
            }}>About us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => {
              setSidebar(Sidebar === "active" ? "" : "active")
            }}>Contact us</Link>
          </li>
          <li>
            <Link to="/" onClick={() => {
              setSidebar(Sidebar === "active" ? "" : "active")
            }}>Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
