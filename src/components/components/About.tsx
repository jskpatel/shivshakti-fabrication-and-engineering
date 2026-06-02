"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const features = [
  "ISO 9001:2015 Certified",
  "Global Project Execution",
  "24/7 Technical Support",
  "Safety-First Culture",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#020817] min-h-[80vh] flex flex-col justify-center text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="container-width mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-md">
            <Image
              src="/about/about.jpeg"
              alt="Fabrication Work"
              width={700}
              height={700}
              className="w-full h-[600px] object-cover hover:scale-105 duration-700"
            />
          </div>

          {/* EXPERIENCE CARD */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute md:top-6 top-0 md:right-6 right-0 bg-orange-500 md:px-8 px-4 py-7 rounded-md shadow-2xl md:scale-[1] scale-[0.6]"
          >
            <h2 className="text-6xl font-black">20+</h2>

            <p className="uppercase tracking-[4px] md:text-sm text-xl mt-2 leading-6">
              Years Of <br /> Excellence
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* SMALL TITLE */}
          <div className="mb-6">
            <p className="text-orange-500 uppercase tracking-[5px] text-sm font-semibold">
              About Shivshakti Fabrication & Engineering
            </p>

            <div className="w-20 h-[3px] bg-orange-500 mt-4" />
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Engineering The{" "}
            <span className="text-orange-500">Future</span>
            <br />
            Since 2008
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-400 text-lg leading-10 mt-10">
            Shivshakti Fabrication & Engineering has been delivering
            precision fabrication, heavy engineering, and industrial solutions
            for decades. We specialize in structural fabrication, industrial
            maintenance, and customized engineering projects with world-class
            quality standards.
          </p>

          <p className="text-slate-400 text-lg leading-10 mt-8">
            Our expert engineers and skilled workforce ensure timely project
            execution with maximum safety, durability, and performance across
            industries.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4"
              >
                <div className="w-7 h-7 rounded bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-sm" />
                </div>

                <p className="text-lg text-slate-300">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          {/* <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-12 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-10 py-5 uppercase tracking-[2px] font-bold rounded-md shadow-lg"
          >
            Learn More About Us
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}