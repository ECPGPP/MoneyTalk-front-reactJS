import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
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
import "./assets/index.scss";
import './assets/Common.scss'

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


