import React from 'react';
import { useEffect, useState } from "react";

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      title="Logo"
      className="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipNZCXWLqGecr7aGdFq2gvZWHJ6MrH3KWBFTm15E=w1080-h608-p-no-v0"
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
