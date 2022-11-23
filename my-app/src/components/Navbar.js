import "./navbarstyle.css"

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>EZINE</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Computer</Link>
          </li>
          <li>
            <Link to="/About">Laptop</Link>
          </li>
          <li>
            <Link to="/Contact">About</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;