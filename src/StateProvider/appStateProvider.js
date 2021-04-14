import React from "react";
import { useState, createContext } from "react";

// Holds the theme's properties
export const ThemeContext = createContext();

export default function AppStateProvider(props) {
  const [theme, setTheme] = useState({
    currentTheme: "dark",
    isFloating: false,
    floatingClass: "navbar-floating",
  });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}
