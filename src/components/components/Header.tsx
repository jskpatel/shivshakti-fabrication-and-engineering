"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  "About",
  "Services",
  "Process",
  "Portfolio",
  "Team",
  "testimonials",
  "Contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#020817]/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container-width flex items-center justify-between py-5 px-6">
        <a href="https://shivshaktifabrication.vercel.app/" className="text-2xl font-black Capitalize text-orange-500">
          <span className="tracking-[5px]">Shivshakti</span> <span className="md:text-xl text-[14px] block text-white">Fabrication & Engineering</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-500 transition text-[20px]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 p-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}