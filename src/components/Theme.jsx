import React, { createContext, useState, useEffect } from "react";

export const themes = {
  dark: {
    background: "black", 
    backgroundButton: "linear-gradient(120deg, #00aaff, #ffffff, #00aaff)",
    text: "linear-gradient(120deg, #00aaff, #ffffff, #00aaff)",
    textButton: "black",
    bodyClass: 'dark-theme', 
  },
  light: {
    background: "white", 
    text: "black",
    textButton: "black",
    backgroundButton: "white", 
    bodyClass: 'light-theme',
  },
};

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark); // initial theme dark

  // update bodys properties when changes theme
  useEffect(() => {
    document.body.className = theme.bodyClass;
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
