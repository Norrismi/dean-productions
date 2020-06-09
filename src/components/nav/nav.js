import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav-style.css";

function Nav() {
  return (
    <div className="master-container">
      <div className="logo-container">
        <h3 className="logo">Logo</h3>
      </div>

      <nav className="nav-bar">
        <ul className="links">
          <NavLink
            to="/contact"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/testimonials"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            <li>Testimonials</li>
          </NavLink>
          <NavLink
            exact to="/"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            <li>Home</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
