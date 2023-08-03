import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Home,
  AdminAccount,
  MoneyPot,
  Navbar,
  Login
} from "./components/Index";
import { createRoot } from 'react-dom/client';
import AdminAccounts from "./pages/AdminAccounts";

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<AdminAccounts />} />
        <Route path="moneypot" element={<MoneyPot />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

