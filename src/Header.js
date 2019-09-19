import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav className="header ">
      <Link style={navStyle} to="/" >
        <h3>MySecretDiary</h3>
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/Schwarzmaler" >
          <li>Schwarzmaler Sarkasmus</li>
        </Link>
        <Link style={navStyle} to="/GetaMate" >
          <li>Get a Mate</li>
        </Link>

        <Link style={navStyle} to="/DrChaos" >
          <li>Dr. Chaos</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Header;