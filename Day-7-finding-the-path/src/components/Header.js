import React from 'react';
import { useEffect, useState } from "react";
import Logo from "../assets/img/food-villa.png";
import {Link} from "react-router-dom";

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      title="Logo"
      className="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
