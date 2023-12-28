import React from "react";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";

import { SheetClose } from "./ui/sheet";

type SocialsProps = {
  socialsStyles: {
    wrapper: string;
    icons: string;
  };
  isMobile?: boolean;
};

const icons = [
  { path: "/", component: <RiYoutubeFill /> },
  { path: "/", component: <RiGithubFill /> },
  { path: "/", component: <RiInstagramFill /> },
  { path: "/", component: <RiLinkedinFill /> },
  { path: "/", component: <RiFacebookFill /> },
];

const Socials: React.FC<SocialsProps> = ({
  socialsStyles,
  isMobile = false,
}) => {
  return (
    <div className={socialsStyles.wrapper}>
      {icons.map((icon, i) => {
        const content = (
          <div className={socialsStyles.icons}>{icon.component}</div>
        );
        return {
          false: (
            <Link href={icon.path} key={i}>
              {content}
            </Link>
          ),
          true: (
            <Link href={icon.path} key={i}>
              <SheetClose asChild>{content}</SheetClose>
            </Link>
          ),
        }[isMobile.toString()];
      })}
    </div>
  );
};

export default Socials;
