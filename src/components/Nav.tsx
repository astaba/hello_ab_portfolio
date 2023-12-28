"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SheetClose } from "./ui/sheet";

type NavProps = {
  navStyles: {
    wrapper: string;
    link: string;
    underline: string;
  };
  isMobile?: boolean;
};

const links = [
  { to: "/", label: "home" },
  { to: "/projects", label: "my projects" },
  { to: "/contact", label: "contact" },
];

const Nav: React.FC<NavProps> = ({ navStyles, isMobile = false }) => {
  const pathname = usePathname();

  return (
    <nav className={navStyles.wrapper}>
      {links.map((link, index) => {
        const content = {
          underline: link.to === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={navStyles.underline}
            />
          ),
          label: link.label,
        };

        return {
          false: (
            <Link
              key={index}
              href={link.to}
              className={`capitalize ${navStyles.link}`}
            >
              {content.underline}
              {content.label}
            </Link>
          ),
          true: (
            <Link key={index} href={link.to} className={navStyles.link}>
              {content.underline}
              <SheetClose className="text-xl font-bold capitalize">
                {content.label}
              </SheetClose>
            </Link>
          ),
        }[isMobile.toString()];
      })}
    </nav>
  );
};

export default Nav;
