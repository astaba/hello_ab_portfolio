"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
	attribute: string;
	defaultTheme: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
