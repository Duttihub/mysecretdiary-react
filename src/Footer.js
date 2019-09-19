import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Footer() {


  const navStyle = {
    color: 'white'
  };

  return (
    <nav style={navStyle} className='footer'>
      <ul className="footerlinks">
        <Link style={navStyle} to="/Impressum" >
          <li>Impressum</li>
        </Link>
        <Link style={navStyle} to="/Kontakt" >
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  )

}

export default Footer;
