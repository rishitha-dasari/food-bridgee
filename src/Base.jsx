import React from "react";
import { Link } from "react-router-dom";
import "./css-files/base.css";

const Base = () => {
  return (
    <div className="base-page">
      {/* Navbar */}
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

      {/* Split Section */}
      <section className="split-intro">
        {/* Left Side - Text */}
        <div className="intro-text">
          <h1>Welcome to Food Bridge</h1>
          <p>
            Our mission is to reduce food wastage and help those in need by
            connecting donors and receivers. You can contribute by donating excess
            food, or request available food items for yourself or your community.
          </p>
          <p>
            Join us today in building a sustainable future where no food goes to waste.
          </p>
        </div>

        {/* Right Side - Image */}
        <div 
          className="intro-image"
          style={{
            backgroundImage: `url("https://www.talktoray.com/wp-content/uploads/2019/11/programs-to-feed-the-hungry-nova.jpg")`
          }}
        ></div>
      </section>
    </div>
  );
};

export default Base;
