"use client";
import React, { useState } from "react";
import Logo from "./logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLink {
  text: string;
  href: string;
}

const NavLinks: NavLink[] = [
  { text: "Today", href: "/" },
  { text: "Tomorrow", href: "/tomorrow" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-2 lg:gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-light text-xl text-white py-1 px-2 lg:px-4 hover:brightness-50 transition duration-300 ${
                pathname === link.href
                  ? "border-b border-[#695D5D] font-medium"
                  : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white md:hidden"
        >
          <Menu />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full bg-[#0a0a0a] shadow-lg p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer w-full"
        >
          <X className="text-white ml-auto" />
        </button>

        <div className="mt-10">
          <div className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-light text-base text-white py-1 px-4 hover:brightness-50 transition duration-300 ${
                  pathname === link.href
                    ? "border-b border-[#695D5D] font-medium"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
