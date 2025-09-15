import React from "react";
import { Link } from "react-router-dom";
import "./css-files/navbar.css"; // use same CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Food Bridge</h2>
      <ul className="nav-links">
        <li><Link to="/base">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/fooddonate">Donate</Link></li>
        <li><Link to="/foodorder">Available Food</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
