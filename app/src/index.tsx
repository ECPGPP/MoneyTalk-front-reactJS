import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthProvider";
import {
  About,
  Contact,
  Home,
  Login,
  MoneyPot,
  Navbar,
  NewTransaction,
  NotFound,
  Transaction
} from "./components/Index";
import MoneyPotMenu from "./components/MoneyPotMenu";

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <AuthProvider>
    <main>
      <div className="navbar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/money_pot" element={<MoneyPot />} />
            <Route path="/transaction" element={<MoneyPotMenu />}>
              <Route path=":id" element={<Transaction />} />
              <Route path="new" element={<NewTransaction />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </main>
  </AuthProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

