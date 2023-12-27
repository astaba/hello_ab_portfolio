import React from "react";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";

type SocialsProps = {
  socialsStyles: {
    wrapper: string;
    icons: string;
  };
};

const icons = [
  { path: "/", component: <RiYoutubeFill /> },
  { path: "/", component: <RiGithubFill /> },
  { path: "/", component: <RiInstagramFill /> },
  { path: "/", component: <RiLinkedinFill /> },
  { path: "/", component: <RiFacebookFill /> },
];

const Socials: React.FC<SocialsProps> = ({ socialsStyles }) => {
  return (
    <div className={socialsStyles.wrapper}>
      {icons.map((icon, i) => (
        <Link href={icon.path} key={i}>
          <div className={socialsStyles.icons}>{icon.component}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
