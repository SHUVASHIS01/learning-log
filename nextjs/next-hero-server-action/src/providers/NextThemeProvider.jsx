"use client";
import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export default function NexxtThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      startTransition(() => setTheme(savedTheme));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}