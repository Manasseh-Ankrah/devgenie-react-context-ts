import React, { useEffect } from "react";
import logo from "../../logo.svg";
import "../styles/App.css";
import { useStateValue } from "../context/ThemeContext";
function Page() {
  const [{ isDarkMode }, dispatch] = useStateValue();
  console.log("====================================");
  console.log("isDarkMode HOME", isDarkMode);
  console.log("====================================");

  return (
    <div className={`home ${isDarkMode ? "darkTheme" : "lightTheme"}`}>
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
