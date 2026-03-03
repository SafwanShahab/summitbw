"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GetStartedPage() {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-0">

      {/* Hero Section */}
      <section className="relative h-[850px] flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/getstarted.jpeg"
            alt="Construction Project"
            fill
            priority
            className="object-cover object-[0_50%]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Project With Summit Buildworks
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Whether you're planning an ADU, SB9 development, full home rebuild,
            remodel, or commercial project, our team is ready to guide you from
            consultation to completion.
          </p>

          {/* Yellow Button */}
          <button
            onClick={scrollToCTA}
            className="inline-flex items-center justify-center
                       px-10 py-4
                       text-black font-semibold tracking-wide
                       rounded-full
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       shadow-lg shadow-yellow-500/30
                       transition-all duration-300
                       hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40
                       active:scale-95"
          >
            Learn More →
          </button>
        </div>
      </section>

      {/* Call To Action Section */}
      <section id="cta-section" className="py-20 px-6 bg-white text-center mt-0">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-black">
            Let’s Talk About Your Goals
          </h2>

          <p className="text-gray-700 text-lg">
            We offer free on-site consultations and provide detailed quotes
            within 2–3 business days. Our team visits your property or reviews
            approved city plans to ensure accurate pricing and planning.
          </p>

          {/* Matching Yellow Button */}
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center
                       px-12 py-4
                       text-black font-semibold tracking-wide
                       rounded-full
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       shadow-lg shadow-yellow-500/30
                       transition-all duration-300
                       hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40
                       active:scale-95"
          >
            Request a Free Estimate
          </Link>

          <div className="pt-6 text-gray-700">
            Or Call Us Directly
          </div>

          <div className="text-2xl font-bold text-black">
            (818) 923-9313
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-10 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-black mb-4">
              Licensed & Insured
            </h3>
            <p className="text-gray-800 font-medium">
              CSLB License #1140888
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-black mb-4">
              Free Consultations
            </h3>
            <p className="text-gray-800 font-medium">
              On-site visits or approved plan reviews available.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-black mb-4">
              Fast Turnaround
            </h3>
            <p className="text-gray-800 font-medium">
              Quotes delivered within 2–3 business days.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}