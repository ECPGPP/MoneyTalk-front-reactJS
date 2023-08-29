import React from "react";
import "../assets/Navbar.scss";
import { BrowserRouter, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";


function Navbar() {

  const [cookies, setCookies, removeCookies] = useCookies()
  const navigate = useNavigate()

  const handleLogout = () => {
      removeCookies('username')
      removeCookies('token')
      navigate('/login')
  }

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/money_pot">My Moneypot</Link></li>
      </ul>

{/* if current route logine || register don't display logout */}
      <button className="logout" onClick={handleLogout} > Sign Out ❌ </button>

    </nav>
  );
}
export default Navbar;