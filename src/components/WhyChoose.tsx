"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineShieldCheck,
  HiOutlineGlobe,
  HiOutlinePhone,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineLocationMarker,
    title: "Advanced Industrial Infrastructure",
    description:
      "State-of-the-art manufacturing facilities spanning 2.4M sq ft across 3 continents.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Certified Engineering Standards",
    description:
      "ISO 9001, ISO 14001, OHSAS certified with qualified engineering teams.",
  },
  {
    icon: HiOutlineGlobe,
    title: "Global Project Execution",
    description:
      "Proven track record of on-time, on-budget delivery across international markets.",
  },
  {
    icon: HiOutlinePhone,
    title: "24/7 Technical Support",
    description:
      "Round-the-clock technical assistance and emergency response support.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#020d2b] py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className={`text-[14px] uppercase tracking-[7px] text-[#ff7a14]`}
            >
              WHY CHOOSE US
            </p>

            <div className="mt-6 h-[4px] w-[82px] bg-[#ff7a14]" />

            <h2
              className={`mt-10 text-[52px] font-black leading-[1.15] text-white xl:text-[78px]`}
            >
              The <span className="text-[#ff7a14]">Benchmark</span> for
              <br />
              Industrial Excellence
            </h2>

            <p className="mt-10 max-w-[760px] text-[22px] leading-[1.8] text-[#8b99b8]">
              We combine decades of engineering expertise with cutting-edge
              industrial technology to deliver results that exceed expectations
              on every project.
            </p>

            <div className="mt-14 space-y-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="flex items-start gap-5"
                  >
                    <div
                      className="
                        flex
                        h-[64px]
                        w-[64px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-[#694021]
                        bg-[#111d3c]
                      "
                    >
                      <Icon
                        size={30}
                        className="text-[#ff7a14]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[28px] font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-[650px] text-[20px] leading-[1.7] text-[#7384a5]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-sm border border-[#2a3553]">
              <Image
                src="/images/industrial-factory.jpg"
                alt="Industrial Facility"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}