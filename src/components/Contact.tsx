"use client";

import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 pb-24 pt-36">
      <div className="mx-auto container-width px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="!w-full !w-100"
          >
            <span className="text-[13px] font-semibold uppercase tracking-[7px] text-[#ff7a14]">
              GET IN TOUCH
            </span>

            <div className="mt-6 h-[4px] w-[82px] bg-[#ff7a14]" />

            <h2 className="mt-12 leading-none">
              <span className="block text-[54px] font-black text-white xl:text-[80px]">
                Request an
              </span>

              <span className="mt-3 block font-black text-[#ff7a14] text-4xl md:text-6xl">
                Industrial Quote
              </span>
            </h2>

            <p className="mt-10 md:max-w-[700px] text-[22px] leading-[1.8] text-[#8b99b8]">
              Tell us about your project requirements. Our engineering team
              will analyze and provide a detailed proposal within 48 hours.
            </p>

            <div className="mt-20 space-y-12">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <HiOutlinePhone
                  size={34}
                  className="mt-1 text-[#ff7a14]"
                />

                <div>
                  <h4 className="lg:text-[28px] text-[20px]  font-semibold text-white">
                    <a href="callto:9726764891">+91 97267 64891</a> / <a href="callto:9624963269">+91 96249 63269</a>
                  </h4>

                  <p className="mt-1 text-[22px] text-[#6f7d9d]">
                    24/7 Support Line
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <HiOutlineMail
                  size={34}
                  className="mt-1 text-[#ff7a14]"
                />

                <div>
                  <h4 className="lg:text-[28px] text-[20px] font-semibold text-white break-all" style={{}}>
                    shivshaktifabrication653@gmail.com
                  </h4>

                  <p className="mt-1 text-[22px] text-[#6f7d9d]">
                    Response within 24hrs
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <HiOutlineLocationMarker
                  size={34}
                  className="mt-1 text-[#ff7a14]"
                />

                <div>
                  <h4 className="md:max-w-[550px] lg:text-[28px] text-[20px]  font-semibold text-white">
                    Shivshakti Fabrication & Engineering
                  </h4>

                  <p className="mt-1 text-[22px] text-[#6f7d9d]">
                    Sureliya, Rabari Colony, Amaraiwadi, Ahmedabad,
                    Gujarat 382415
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border border-[#2d3554] bg-[#07132f] p-8 md:p-14"
          >
            {/* Top Corner Accent */}
            <div className="absolute left-0 top-0 h-[55px] w-[55px] border-l-[4px] border-t-[4px] border-[#ff7a14]" />

            <h3 className="mb-12 text-[42px] font-bold text-white">
              Quote Request
            </h3>

            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="h-[72px] w-full border border-[#32415f] bg-[#182643] px-6 text-lg text-white outline-none placeholder:text-[#66789d]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="ACME Industries"
                    className="h-[72px] w-full border border-[#32415f] bg-[#182643] px-6 text-lg text-white outline-none placeholder:text-[#66789d]"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="h-[72px] w-full border border-[#32415f] bg-[#182643] px-6 text-lg text-white outline-none placeholder:text-[#66789d]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="h-[72px] w-full border border-[#32415f] bg-[#182643] px-6 text-lg text-white outline-none placeholder:text-[#66789d]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                  Industry Type *
                </label>

                <select className="h-[72px] w-full border border-[#32415f] bg-[#182643] px-6 text-lg text-white outline-none">
                  <option>Select Industry...</option>
                  <option>Fabrication</option>
                  <option>Manufacturing</option>
                  <option>Engineering</option>
                  <option>Construction</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[4px] text-[#7b89aa]">
                  Project Requirements *
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project, scope, timeline and requirements..."
                  className="w-full resize-none border border-[#32415f] bg-[#182643] p-6 text-lg text-white outline-none placeholder:text-[#66789d]"
                />
              </div>

              <button
                type="submit"
                className="flex h-[76px] w-full items-center justify-center gap-3 bg-[#ff7a14] text-lg font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#ff8b2f]"
              >
                <IoPaperPlaneOutline size={22} />
                Request Industrial Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}