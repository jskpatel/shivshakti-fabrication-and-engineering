"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  // {
  //   title: "Polycarbonate Sheet",
  //   image: "/work/polycarbonatesheet.jpg",
  // },
  {
    title: "Decking sheet",
    image: "/work/deckingsheet.jpg",
  },
  {
    title: "PUF panel",
    image: "/work/pufpanel.jpg",
  },
  {
    title: "Conventional Structure",
    image: "/work/conventionalstructure.jpg",
  },
  {
    title: "Pre-Engineered Building",
    image: "/work/preendineeredbuilding.jpg",
  },
  {
    title: "CNC Cutting",
    image: "/work/cnccutting.jpg",
  },
  {
    title: "Bubble Insulation",
    image: "/work/bubbleinsulation.jpg",
  },
  // {
  //   title: "Pre-coated Sheet",
  //   image: "/work/precoatedsheet.jpg",
  // },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 py-28">
      <div className="mx-auto container-width px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24 text-center">
          <p className={`text-[14px] uppercase tracking-[7px] text-[#ff7a14]`}>
            Portfolio
          </p>

          <div className="mx-auto mt-6 h-[3px] w-[82px] bg-[#ff7a14]" />

          <h2
            className={`mt-10 text-[52px] font-black md:text-[80px]`}
          >
            <span className="text-white">Type of </span>
            <span className="text-[#ff7a14]">Work</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid container-width gap-10 xl:grid-cols-3 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-sm border border-[#493427] bg-gradient-to-r from-[#0c1737] to-[#172744]"
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.title}
                  fill
                  className="object-cover position-top object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07142f] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="px-8 py-4">
                <h3 className={`xl:text-[30px] md:text-[24px] text-[20px] font-bold text-white md:text-left text-center`}>
                  {member.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}