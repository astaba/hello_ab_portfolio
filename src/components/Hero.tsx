import { RiArrowDownSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="outo h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 outline-[fuchsia] xl:py-24 xl:pt-28 dark:bg-none">
      <div className="container mx-auto">
        <div></div>
        <div className="absolute bottom-44 left-1/2 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-primary text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
