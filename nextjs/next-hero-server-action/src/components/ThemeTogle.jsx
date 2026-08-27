"use client";
import { useTheme } from "../providers/NextThemeProvider";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
