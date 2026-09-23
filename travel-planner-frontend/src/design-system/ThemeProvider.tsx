// src/design-system/ThemeContext.tsx

import React, { createContext, useContext, useState } from "react";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

/**
 * 1. Theme type
 */
type Theme = {
  background: string;
  text: string;
  primary: string;
  card: string;
};

/**
 * 2. Context type
 */
type ThemeContextType = {
  theme: Theme;
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

/**
 * 3. Context (IMPORTANT: undefined, not null)
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * 4. Provider
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * 5. Custom hook (safe usage)
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
