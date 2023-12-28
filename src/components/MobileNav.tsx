import { Sheet, SheetTrigger, SheetClose, SheetContent } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Socials from "./Socials";
import Logo from "./Logo";

const navStyles = {
  wrapper: "flex flex-col gap-y-8 items-center",
  link: "relative hover:text-primary transition-all",
  underline: "bg-primary absolute left-0 -bottom-1 h-[3px] w-full",
};
const socialStyles = {
  wrapper: "mx-auto mt-auto flex gap-x-6",
  icons: "text-2xl text-foreground transition-all hover:text-primary",
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full py-8 flex flex-col gap-y-20 items-center">
          <Logo isMobile />
          <Nav navStyles={navStyles} isMobile />
          <Socials socialsStyles={socialStyles} isMobile />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
