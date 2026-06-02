"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  "About",
  "Services",
  "Portfolio",
  "Team",
  "Contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#020817]/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container-width flex items-center justify-between py-5 px-6">
        <h1 className="text-2xl font-black uppercase tracking-wider text-orange-500">
          Shivshakti Fabrication & Engineering
        </h1>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-500 transition"
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