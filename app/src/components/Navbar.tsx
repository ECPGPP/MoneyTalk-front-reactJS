import React from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
function Navbar() {
  return (     
    <nav className="navbar">
      <img src="" alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">AdminPageTest</Link></li>   
        <li><Link to="/money_pot">My Moneypot</Link></li>       
      </ul>     
    </nav>
  ); 
} 
export default Navbar;