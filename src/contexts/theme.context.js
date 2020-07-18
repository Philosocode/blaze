import React, { createContext, useState } from "react";

// Context
export const ThemeContext = createContext({
  isBlaze: true,
  toggleBlaze: () => {}
});

// Provider
export const ThemeProvider = ({ children }) => {
  const [isBlaze, setIsBlaze] = useState(true);
  
  function toggleBlaze() {
    if (isBlaze) document.body.setAttribute("data-theme", "dark");
    else document.body.removeAttribute("data-theme");

    setIsBlaze(!isBlaze);
  }

  return (
    <ThemeContext.Provider
      value={{ isBlaze, toggleBlaze }}
    >
      {children}
    </ThemeContext.Provider>
  )
}