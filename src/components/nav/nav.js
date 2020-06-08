import React from "react";
import { Link } from "react-router-dom";
import "./nav-style.css";

function Nav() {
  return (
    <div className="master-container">
      <div className="logo-container">
        <h3 className="logo">Logo</h3>
        </div >

      <nav className="nav-bar">
        <ul className="links">
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/testimonials">
            <li>Testimonials</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
