import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  // Initialize state based on localStorage value
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Effect to apply the correct theme on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      // If no theme in localStorage, set it to light by default
      localStorage.setItem("theme", "light");
    } else {
      // Apply the stored theme to the document root
      document.documentElement.classList.add(storedTheme);
    }
    setIsDarkMode(storedTheme === "dark");
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light theme
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      // Switch to dark theme
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
<button
  onClick={toggleTheme}
  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
  className={cn(
    "fixed top-[21px] sm:top-[15px] right-14 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden"
  )}
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900" />
  )}
</button>
  );
};
