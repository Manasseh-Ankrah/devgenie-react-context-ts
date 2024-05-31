import React, { useContext, useState } from "react";
import "../styles/header.css";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  console.log("====================================");
  console.log("isDarkTheme TS =>>", isDarkTheme);
  console.log("====================================");
  const Button = () => {
    toggleTheme();
    setIsOpen((val) => !val);
    return <button onClick={() => toggleTheme()}>change Theme</button>;
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
            <li className='nav-item'>
              <button onClick={() => Button()}>
                {isOpen ? "-- On --" : "-- Off --"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
