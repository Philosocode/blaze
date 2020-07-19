import React, { createContext, useState, useEffect } from "react";

// Context
export const ThemeContext = createContext({
  isBlaze: true,
  setBlaze: () => {},
  setZephyr: () => {},
  toggleTheme: () => {}
});

// Provider
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setIsBlaze(false);
      document.body.setAttribute("data-theme", "zephyr");
    }
  }, []);

  const [isBlaze, setIsBlaze] = useState(true);

  function setZephyr() {
    document.body.setAttribute("data-theme", "zephyr");
    localStorage.setItem("theme", "zephyr");
    setIsBlaze(false);
  }

  function setBlaze() {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    setIsBlaze(true);
  }
  
  function toggleTheme() {
    if (isBlaze) setZephyr()
    else setBlaze();
  }

  return (
    <ThemeContext.Provider
      value={{ isBlaze, setBlaze, setZephyr, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}