import { createSignal, onMount } from "solid-js";
import { themes, type Theme } from "../theme";

const [theme, setTheme] = createSignal<Theme>("system");

export function useTheme() {
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const themeToApply = newTheme === "system" ? systemTheme : newTheme;
    
    root.classList.remove("light", "dark");
    root.classList.add(themeToApply);
    
    Object.entries(themes[themeToApply]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    setTheme(newTheme);
  };

  onMount(() => {
    applyTheme(theme());
    
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (theme() === "system") {
        applyTheme("system");
      }
    });
  });

  return { theme, setTheme: applyTheme };
}
