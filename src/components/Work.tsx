"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

export type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

export const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at suscipit voluptatibus magni!",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="mb-12 xl:mb-48">
      <div className="container relative">
        <div className="max-w-[400px] mx-auto text-center mb-12 flex flex-col justify-center items-center xl:mx-0 xl:text-left xl:h-[400px] xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            natus.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="right-0 top-0 xl:max-w-[1000px] xl:absolute">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((item, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
