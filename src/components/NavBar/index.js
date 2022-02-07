import React from "react";
import { Link } from "react-router-dom";
import burgerBtn from "../Js/script";

function Nav() {
  return (
    <nav
      className="navbar has-background-light mb-3 text is-light"
      role="navigation"
      aria-label="main navigation navbar-is-dark"
    >
      <div className="navbar-brand">
        <div className="navbar-item nav__item">
          <Link to="/Home" className="nav__item">
            <i className="uil uil-truck mr-.5"></i>
            <strong>Home</strong>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/Projects" className="nav__item">
            Projects
          </Link>
        </div>

        <button
          // role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => burgerBtn}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/AboutMe" className="nav__item">
              About Me
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/Contact" className="nav__item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
