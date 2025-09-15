import React from 'react';
import { Link } from 'react-router-dom';
import "./css-files/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <p>Welcome to Food Bridge</p>
        <div className="home-buttons">
          <Link to="/user" className="btn-link">
            <button>Register</button>
          </Link>
          <Link to="/userlog" className="btn-link">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
