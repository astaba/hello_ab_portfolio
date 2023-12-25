"use client";

import React from "react";
import { motion } from "framer-motion";

import useScrollRate from "@/hooks/useScrollRate";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  const completion = useScrollRate();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bg-primary z-50 w-1 top-0 bottom-0 right-0 transition-all duration-300"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
