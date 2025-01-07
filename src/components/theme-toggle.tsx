import { useTheme } from "../store/use-theme";
import { Moon, Sun, Monitor } from "lucide-solid";
import Button from "./button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div class="flex items-center gap-2">
      <Button
        variant={theme() === "light" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
        title="Light"
      >
        <Sun />
      </Button>
      <Button
        variant={theme() === "dark" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
        title="Dark"
      >
        <Moon />
      </Button>
      <Button
        variant={theme() === "system" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("system")}
        title="System"
      >
        <Monitor />
      </Button>
    </div>
  );
}
