import React from 'react';
import { useEffect, useState, useContext } from "react";
import Logo from "../assets/img/food-villa-old.jpg";
import {generatePath, Link} from "react-router-dom";
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <a href="/" className='inline-flex'>
    <img
      alt="logo"
      title="Logo"
      className="logo w-44"
      src={Logo}

    />
  </a>
);

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  console.log(isOnline);

  const {user} = useContext(UserContext)

  return (
    // <div className="header">
    //   <Title />
    //   <div className="nav-items">
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //       <li><Link to="/">Cart</Link></li>
    //       <li><Link to="/Instamart">Instamart</Link></li>
    //     </ul>
    //   </div>
    //   <h1>{isOnline ? <span className='online'><i className="fas fa-signal"></i></span> : <span className='offline'><i className="fas fa-signal"></i></span>}</h1>
    //   {isLoggedIn ? (
    //     <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    //   ) : (
    //     <button onClick={() => setIsLoggedIn(true)}>Login</button>
    //   )}
    // </div>

    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {/* <span className="p-10 font-bold text-red-900">{user.name}</span> */}
      <span className='p-10 font-bold text-red-900'>{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
    
  );
};

export default Header;
