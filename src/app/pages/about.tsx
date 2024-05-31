import React, { useContext } from "react";
import "../styles/App.css";
import { ThemeContext } from "../context/ThemeContext";
function Page() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`home ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <a className='App-link' href='' target='_blank' rel='noopener noreferrer'>
        🧞‍♂️💥About Page💥🧞‍♂️
      </a>
    </div>
  );
}

export default Page;
