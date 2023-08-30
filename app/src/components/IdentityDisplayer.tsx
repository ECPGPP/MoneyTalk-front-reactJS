import React, { useState } from "react";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";
import "../assets/IdentityDisplayer.scss";

function IdentityDisplayer() {
  const [cookies, setCookies, removeCookies] = useCookies();

  return (
    <CookiesProvider>
      {cookies.username != null ? (
        <div className="identity-displayer">
          <h4>You are connected as {cookies.username}</h4>
        </div>
      ) : (
        <div className="identity-displayer">
          <h4>please login</h4>
        </div>
      )}
    </CookiesProvider>
  );
}

export default IdentityDisplayer;
