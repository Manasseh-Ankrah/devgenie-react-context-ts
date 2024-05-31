import React, { useState } from "react";
import "../styles/header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href='/'>Logo</a>
        </div>
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/about'>About</a>
            </li>
            <li className='nav-item'>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
