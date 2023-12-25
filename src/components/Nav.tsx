"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavProps = {
  navStyles: {
    wrapper: string;
    link: string;
    underline: string;
  };
};

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "my projects" },
  { to: "/contact", label: "contact" },
];

const Nav: React.FC<NavProps> = ({ navStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={navStyles.wrapper}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.to}
            className={`capitalize ${navStyles.link}`}
          >
            {link.to === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={navStyles.underline}
              />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
