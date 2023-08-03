import React from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
function Navbar() {
  return (     
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">AdminPageTest</Link></li>   
        <li><Link to="/login">Login</Link></li>       
      </ul>     
    </nav>
  ); 
} 
export default Navbar;