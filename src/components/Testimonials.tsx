"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    initials: "MP",
    name: "Mitesh Patel",
    role: "Founder, Suraj Namkeen",
    review:
      "Shivshakti Fabrication & Engineering delivered our steel plant expansion project 3 weeks ahead of schedule. Their engineering precision and project management is unmatched in the industry.",
  },
  {
    initials: "SS",
    name: "Sachin Suthar",
    role: "Operations Director, Ballet",
    review:
      "Their oil refinery engineering team handled complex challenges with remarkable expertise. 100% safety record maintained throughout the 18-month project. Highly recommended.",
  },
  {
    initials: "BG",
    name: "Bhavin Gajjar",
    role: "GM, Lal Gajjar, Rakhiyal",
    review:
      "World-class mining equipment solutions that increased our operational efficiency by 34%. The Shivshakti Fabrication & Engineering team understands what industrial clients truly need.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#020d2b] py-28">
      <div className="mx-auto container-width px-6 lg:px-12">

        <SectionTitle
          title="What Our"
          highlight="Clients Say"
          subtitle="Client Testimonials"
        />

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex xl:h-[500px] h-auto flex-col rounded-sm border border-[#493427] bg-gradient-to-r from-[#0c1737] to-[#172744] md:px-12 px-8 py-12"
            >
              {/* Quote */}
              <div className={` text-[56px] leading-none text-[#ff7a14]`}>
                &quot;
              </div>

              {/* Review */}
              <p className="md:mt-8 flex-1 text-[20px] md:leading-[2] leading-[1.5] text-[#91a0bf]">
                {item.review}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-5">
                <div className={`flex h-[66px] w-[66px] items-center justify-center rounded-full border-[3px] border-[#ff7a14] text-[24px] font-bold text-[#ff7a14]`}>
                  {item.initials}
                </div>

                <div>
                  <h3 className="text-[20px] font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[16px] text-[#7283a8]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}