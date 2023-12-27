import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Download, Send } from "lucide-react";

import { Button } from "./ui/button";
import DevImg from "./DevImg";
import Socials from "./Socials";

const socialStyles = {
  wrapper: "mx-auto flex gap-x-6 xl:m-0",
  icons: "text-[22px] text-foreground transition-all hover:text-primary",
};
const devImgStyles = {
  wrapper: "relative bottom-0 h-[462px] w-[510px] bg-hero-shape-1 bg-no-repeat",
  imgSrc: "/hero/developer.png",
};

const Hero = () => {
  return (
    <section className="outo h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 outline-[fuchsia] xl:py-24 xl:pt-28 dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gat-x-8">
          <div className="outo outline-lime-500 max-w-[600px] mx-auto text-center flex flex-col justify-center xl:mx-0 xl:text-left">
            <div className="text-sm text-primary font-bold uppercase tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 xl:text-[72px] xl:leading-[80px]">
              Hello, my name is Astar Bahouidi
            </h1>
            <p className="subtitle xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row md:gap-x-3 xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials socialsStyles={socialStyles} />
          </div>
          <div className="bordo border-cyan-400 relative hidden xl:block">
            <div className="absolute -right-2 -top-1 size-[500px] bg-hero-shape-2-light bg-no-repeat dark:bg-hero-shape-2-dark" />
            <DevImg devImgStyles={devImgStyles} />
          </div>
        </div>
        <div className="absolute bottom-44 left-1/2 hidden animate-bounce md:block xl:bottom-12">
          <RiArrowDownSLine className="text-primary text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
