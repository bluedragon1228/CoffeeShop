import { useState } from "react";
import "./header.css";
import pngLogo from "./header_logo.png";
import svgLogo from "./header_logo.svg";
function Header() {
  return (
    <>
      <header className="header-main main-container">
        <div className="inner-container-normal header-inner">
          <div className="header-box header-logo">
            <a href="/">
              <picture>
                <source srcset={svgLogo} type="image/.svg" />
                <source srcset={pngLogo} type="image/.png" />
                <img src={svgLogo} alt="Header Logo" />
              </picture>
            </a>
          </div>
          <nav className="header-box header-nav">
            <ul className="header_link_list">
              <li className="header_link_item">
                <a href="#" className="header_link">
                  Home
                </a>
              </li>
              <li className="header_link_item">
                <a href="#" className="header_link">
                  About
                </a>
              </li>
              <li className="header_link_item">
                <a href="#" className="header_link">
                  Contact
                </a>
              </li>
              <li className="header_link_item">
                <a
                  role="link"
                  href="#"
                  className="header_link btn header_login_btn"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
