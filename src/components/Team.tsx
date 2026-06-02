"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sanjay Patel",
    role: "Operations Head",
    image: "/images/sanjay-patel.jpg",
    description: "Oversees manufacturing operations, project execution and quality control."
  },
  {
    name: "Alpesh Patel",
    role: "Founder & Director",
    image: "/images/alpesh-patel.jpg",
    description: "10+ years leading fabrication and engineering projects across Gujarat."
  },
];

export default function Team() {
  return (
    <section className="bg-[#020d2b] py-28">
      <div className="mx-auto container-width px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24 text-center">
          <p
            className={`text-[14px] uppercase tracking-[7px] text-[#ff7a14]`}
          >
            Leadership
          </p>

          <div className="mx-auto mt-6 h-[3px] w-[82px] bg-[#ff7a14]" />

          <h2
            className={`mt-10 text-[52px] font-black md:text-[80px]`}
          >
            <span className="text-white">Meet Our </span>
            <span className="text-[#ff7a14]">Team</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-sm
                border
                border-[#493427]
                bg-gradient-to-r
                from-[#0c1737]
                to-[#172744]
              "
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07142f] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className={`text-[30px] text-white`}
                >
                  {member.name}
                </h3>

                <p
                  className={`mt-2 text-[13px] uppercase tracking-[3px] text-[#ff7a14]`}
                >
                  {member.role}
                </p>

                <p className="mt-6 text-[20px] leading-9 text-[#8090b0]">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}