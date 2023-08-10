import React from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/money_pot">My Moneypot</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;