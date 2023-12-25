"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <MoonIcon className="size-0 rotate-90 transition-all dark:size-[1.2rem] dark:rotate-0" />
        <SunIcon className="size-[1.2rem] rotate-0 transition-all dark:size-0 dark:-rotate-90" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
