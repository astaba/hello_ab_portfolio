"use client";

import React from "react";

import useScrollRate from "@/hooks/useScrollRate";

const Template = ({ children }: { children: React.ReactNode }) => {
  const completion = useScrollRate();
  return (
    <>
      <main>{children}</main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bg-primary z-50 w-1 top-0 bottom-0 right-0 transition-all duration-300"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
