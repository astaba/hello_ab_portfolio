import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const navStyles = {
  wrapper: "hidden xl:flex items-center gap-x-8",
  link: "relative hover:text-primary transition-all",
  underline: "bg-primary absolute left-0 bottom-0 h-[2px] w-full",
}

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav navStyles={navStyles} />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
