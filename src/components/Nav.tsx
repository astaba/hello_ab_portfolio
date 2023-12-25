"use client";

import React from "react";

type NavProps = {
  navStyles: {
    wrapper: string;
    link: string;
    underline: string;
  };
};

const Nav: React.FC<NavProps> = ({ navStyles }) => {
  return <nav className={navStyles.wrapper}>Nav</nav>;
};

export default Nav;
