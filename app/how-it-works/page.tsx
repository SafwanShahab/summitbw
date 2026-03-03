"use client";

import React, { useRef } from "react";
import Navbar from "../../components/navbar.tsx";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
  const threeStepRef = useRef<HTMLDivElement>(null);

  const handleLearnMoreClick = () => {
    threeStepRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[850px] flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/howitworks.jpeg"
            alt="How It Works Background"
            fill
            priority
            className="object-cover object-[0_60%]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            How Summit Buildworks Works
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            From your first consultation to project completion, we ensure a smooth, transparent, and professional construction experience.
          </p>

          {/* Branded Yellow Button */}
          <button
            onClick={handleLearnMoreClick}
            className="mt-6 inline-flex items-center justify-center
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

      {/* 3-Step Process */}
      <section ref={threeStepRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-12">

          <h2 className="text-3xl font-bold text-black">
            Our Simple 3-Step Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3 text-black">
                Schedule a Call
              </h3>
              <p className="text-gray-800">
                Reach out to us and discuss your project goals. We'll answer your questions and schedule a free on-site consultation if needed.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3 text-black">
                Explore Options
              </h3>
              <p className="text-gray-800">
                Review design ideas from our team and trusted design and engineering partners, along with construction methods, materials, and costs. We’ll create a clear plan that fits your budget and needs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3 text-black">
                Project Execution
              </h3>
              <p className="text-gray-800">
                We handle construction from start to finish, maintaining timelines, quality, and safety standards. You get a fully completed project with peace of mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let’s talk about your project and goals. Our team will guide you every step of the way.
        </p>

        {/* Matching Yellow Button */}
        <Link
          href="/get-started"
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
          Talk to Us Today
        </Link>
      </section>
    </div>
  );
}