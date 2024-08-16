import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/nakshtralogo.jpg'; // Ensure the logo path is correct
import './header.css'; // Make sure the CSS file is correctly imported

export function Header() {
  return (
    <header className="header">
      <div className="header-logo-text">
        <Link to="/" className="logo-link">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-text">
            <p>Nakshtra</p>
          </div>
        </Link>
      </div>
      <nav className="header-pages">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-login">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
}
