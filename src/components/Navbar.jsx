import React from "react";
import "../App.css"; // bad practice

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
    </>
  );
};

export default Navbar;
