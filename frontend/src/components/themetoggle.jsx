import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="glass rounded-full p-3"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}