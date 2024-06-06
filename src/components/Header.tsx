"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const navStyles = {
  wrapper: "hidden xl:flex items-center gap-x-8",
  link: "relative hover:text-primary transition-all",
  underline: "bg-primary absolute left-0 bottom-0 h-[2px] w-full",
};

const Header = () => {
  const [isWindowYoffset, setIsWindowYoffset] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkWindowYoffset = () => {
      window.scrollY > 50
        ? setIsWindowYoffset(true)
        : setIsWindowYoffset(false);
    };
    // NOTE:  Throttling scroll event to debounce checkWindowYoffset
    let isYoffset = false;
    const truthyfier = () => (isYoffset = true);
    window.addEventListener("scroll", truthyfier);
    const timer = setInterval(() => {
      if (isYoffset) {
        isYoffset = false;
        checkWindowYoffset();
      }
    }, 100);
    return () => {
      window.removeEventListener("scroll", truthyfier);
      clearInterval(timer);
    };
  }, []);

  return (
    <header
      className={`${
        isWindowYoffset
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } fixed inset-0 bottom-auto z-30 transition-all ${
        pathname === "/" && "bg-[#FEF9F5]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav navStyles={navStyles} />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
