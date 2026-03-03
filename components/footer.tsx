import React from "react";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Branding */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">
            Summit Buildworks
          </h2>
          <p className="text-gray-400 leading-relaxed">
            High-quality residential and commercial construction services
            throughout California. From design to final inspection — we
            handle it all.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://www.instagram.com/summit_buildworks_energy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Instagram size={18} />
            </a>

            {/* Placeholder */}
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Facebook size={18} />
            </a>

            {/* Placeholder */}
            <a
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Explore
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:text-yellow-400 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="/estimate" className="hover:text-yellow-400 transition">
                Request Estimate
              </a>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Get Started
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/get-started" className="hover:text-yellow-400 transition">
                Free Consultation
              </a>
            </li>
            <li>
              <a href="/estimate" className="hover:text-yellow-400 transition">
                Submit Project Details
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-yellow-500 mt-1" />
              <span>9728 Variel Ave, Chatsworth, CA 91311</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-yellow-500" />
              <span>(818) 923-9313</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-yellow-500" />
              <a
                href="mailto:summitbwe@gmail.com"
                className="hover:text-yellow-400 transition"
              >
                summitbwe@gmail.com
              </a>
            </li>
            <li className="text-sm pt-2">
              CSLB License #1140888
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2026 Summit Buildworks Energy Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;