"use client";
import { Switch } from "@heroui/react";
import Moon from "@gravity-ui/icons/Moon";
import Sun from "@gravity-ui/icons/Sun";
import { useTheme } from "../providers/NextThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        aria-label="Toggle dark mode"
        isSelected={theme === "dark"}
        onChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      >
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb>
              {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </Switch.Thumb>
          </Switch.Control>
        </Switch.Content>
      </Switch>
    </div>
  );
}
