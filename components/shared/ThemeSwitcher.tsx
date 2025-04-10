"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === "dark") {
    return <SunIcon className="text-foreground cursor-pointer" size="24" onClick={() => setTheme("light")} />;
  }

  if (currentTheme === "light") {
    return <MoonIcon className="text-foreground cursor-pointer" size="24" onClick={() => setTheme("dark")} />;
  }
}
