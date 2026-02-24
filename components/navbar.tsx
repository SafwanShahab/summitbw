"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Get Started", href: "/get-started" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Estimate", href: "/estimate" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-28 px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // make sure logo.png is in /public
            alt="Summit Buildworks Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-lg font-medium text-black hover:text-green-600 transition-colors duration-200
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0
                           after:bg-green-600
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;