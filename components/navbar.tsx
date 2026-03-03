"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Get Started", href: "/get-started" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Estimate", href: "/estimate" },
  ];

  const [showNavbar, setShowNavbar] = useState(false); // start hidden
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // At the very top, show navbar
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up → show navbar
        setShowNavbar(true);
      } else {
        // Scrolling down → hide navbar
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300
        border-2 border-gray-300 rounded-b-lg
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-28 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/SBElogo.svg"
            alt="Summit Buildworks Logo"
            width={220}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-lg font-medium text-black transition-colors duration-200
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0
                           after:bg-yellow-500
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