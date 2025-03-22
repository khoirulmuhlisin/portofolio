
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative transition-all duration-500 ease-in-out rounded-full w-10 h-10 hover:bg-accent/50 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      <Sun className={`h-[1.5rem] w-[1.5rem] absolute transition-all duration-500 ${
        theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
      }`} />
      <Moon className={`h-[1.5rem] w-[1.5rem] absolute transition-all duration-500 ${
        theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
