import React from 'react';
import { useEffect, useState } from "react";
import Logo from "../assets/img/food-villa-old.jpg";
import {generatePath, Link} from "react-router-dom";
import useOnline from '../utils/useOnline';

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

  const isOnline = useOnline();
  console.log(isOnline);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Cart</Link></li>
          <li><Link to="/Instamart">Instamart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? <span className='online'><i className="fas fa-signal"></i></span> : <span className='offline'><i className="fas fa-signal"></i></span>}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
