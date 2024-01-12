"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thomson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Salt",
    job: "Interior Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Martin Browleen",
    job: "Game Dev",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Meekey Filo",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Faxilow Brandy",
    job: "Game Changer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Ethan Prink",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto cum fuga, vero sapiente sequi.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container">
        <h2 className="section-title mb-12 mx-auto text-center">Reviews</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, i) => (
            <SwiperSlide key={i}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={person.avatar}
                      width={70}
                      height={70}
                      alt=""
                      priority
                    />
										<div>
											<CardTitle>{person.name}</CardTitle>
											<p>{person.job}</p>
										</div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
