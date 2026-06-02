"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image: "/hero/1.jpeg",
    title: "Industrial Fabrication Excellence",
    desc: "Precision engineering and fabrication solutions."
  },
  {
    image: "/hero/2.jpeg",
    title: "Heavy Engineering Projects",
    desc: "Advanced industrial infrastructure solutions."
  },
  {
    image: "/hero/3.jpg",
    title: "Trusted Fabrication Partner",
    desc: "Delivering quality fabrication works."
  }
];

export default function Hero() {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-10 flex items-center h-full section-padding">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-xl text-slate-300">
                    {slide.desc}
                  </p>

                  <a href="#portfolio" className="mt-8 inline-block text-[22px] bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold">
                    Explore Projects
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}