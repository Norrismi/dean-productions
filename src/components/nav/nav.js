import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>

      <ul>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
        <Link to='/testimonials'>
          <li>Testimonials</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
