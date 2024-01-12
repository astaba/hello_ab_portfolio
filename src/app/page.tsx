import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
    </main>
  );
}
