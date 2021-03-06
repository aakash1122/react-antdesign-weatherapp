import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  let [dark, setDark] = useState(false);

  let lightTheme = {
    fg: "#000",
    bg: "#f6f6f6f2",
    // cb: "rgba(248, 248, 255, 0.85) none repeat scroll 0% 0%",
    cb: "#ffff",
  };
  let darkTheme = {
    fg: "#f1f2f6",
    bg: "#2f3542",
    cb: "#34495e",
  };

  let themeObj = dark ? darkTheme : lightTheme;

  let toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ themeObj, toggleDarkMode, dark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
