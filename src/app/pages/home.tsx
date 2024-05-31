import React, { useContext } from "react";
import logo from "../../logo.svg";
import "../styles/App.css";
import { ThemeContext } from "../context/ThemeContext";
function Page() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`home ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <img src={logo} className='App-logo' alt='logo' />

      <a
        className='App-link'
        href='https://www.npmjs.com/package/devgenie'
        target='_blank'
        rel='noopener noreferrer'
      >
        🧞‍♂️💥DevGenie React TypeScript Setup💥🧞‍♂️
      </a>
    </div>
  );
}

export default Page;
