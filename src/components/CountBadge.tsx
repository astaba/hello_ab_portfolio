"use client";

import React from "react";
import CountUp from "react-countup";

type CountBadgeProps = {
  positionStyles: string;
  title: string;
  countUp: {
    end: number;
    delay?: number;
  };
  suffix?: string;
  icon: React.JSX.Element;
};

const CountBadge: React.FC<CountBadgeProps> = ({
  countUp,
  icon,
  positionStyles,
  title,
  suffix,
}) => {
  return (
    <div className={`badge ${positionStyles}`}>
      {/* icon */}
      <div className="text-3xl text-primary">{icon}</div>
      {/* text */}
      <div className="flex items-center justify-between gap-x-2">
        <div className="text-primary text-4xl leading-none -tracking-[0.1em] font-bold ">
          <CountUp end={countUp.end} delay={countUp.delay} />
          {suffix && <span>&nbsp;{suffix}</span>}
        </div>
        <p className="max-w-[70px] text-[15px] font-medium capitalize leading-none text-black">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CountBadge;
