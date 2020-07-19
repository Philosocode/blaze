import React, { createContext, useState, useEffect } from "react";

// Context
export const ThemeContext = createContext({
  isZephyr: false,
  setBlaze: () => {},
  setZephyr: () => {},
  toggleTheme: () => {}
});

// Provider
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") !== null) {
      document.body.setAttribute("data-theme", "blaze");
      setisZephyr(false);
    }
    else {
      setisZephyr(true);
    }
  }, []);

  const [isZephyr, setisZephyr] = useState(undefined);

  function setZephyr() {
    document.body.setAttribute("data-theme", "blaze");
    localStorage.setItem("theme", "blaze");
    setisZephyr(false);
  }

  function setBlaze() {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    setisZephyr(true);
  }
  
  function toggleTheme() {
    if (isZephyr) setZephyr()
    else setBlaze();
  }

  return (
    <ThemeContext.Provider
      value={{ isZephyr, setBlaze, setZephyr, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}