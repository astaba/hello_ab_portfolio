import Socials from "./Socials";

const socialStyles = {
  wrapper: "mb-4 flex gap-x-6",
  icons: "text-[20px] text-primary transition-all hover:text-white dark:text-white/70 dark:hover:text-primary",
};

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <Socials socialsStyles={socialStyles} />
          <p className="text-muted-foreground">Copyright &copy; Astar Bahouidi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
