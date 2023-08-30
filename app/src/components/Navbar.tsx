import React from "react";
import "../assets/Navbar.scss";
import { BrowserRouter, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";


function Navbar() {

  const [cookies, setCookies, removeCookies] = useCookies()
  const navigate = useNavigate()

  const handleLogout = () => {
      removeCookies('token')
      removeCookies('email')
      removeCookies('username')
      removeCookies('moneyPotId')
      removeCookies('message')
      removeCookies('roles')
      navigate('/login')
  }

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/money_pot">My Moneypot</Link></li>
        <button className="auth-form-container button" onClick={handleLogout} > Sign Out ❌ </button>
      </ul>
    </nav>
  );
}
export default Navbar;