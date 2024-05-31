import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type contextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<contextProps>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
