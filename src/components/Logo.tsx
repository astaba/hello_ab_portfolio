import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SheetClose } from "./ui/sheet";

type LogoProps = {
  isMobile?: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMobile = false }) => {
  const content = (
    <Image src="/logo.svg" width={54} height={54} alt="Page logo" priority />
  );

  return {
    false: <Link href="/">{content}</Link>,
    true: (
      <Link href="/">
        <SheetClose>{content}</SheetClose>
      </Link>
    ),
  }[isMobile.toString()];
};

export default Logo;
