import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans relative">

      {/* Hero Section */}
      <section className="relative h-[650px] w-full overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/mainimage.jpeg"
          alt="Summit Buildworks residential construction project"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start max-w-7xl mx-auto h-full px-8 md:px-16 space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Residential & Commercial Construction Experts
          </h1>

          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Specializing in ADU construction, SB9 developments, full home rebuilds,
            remodels, and commercial projects throughout California.
          </p>

          {/* 🔥 Upgraded Button */}
          <Link
            href="/get-started"
            className="group relative inline-flex items-center justify-center
                       px-10 py-4 text-lg font-bold text-black
                       rounded-full
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       shadow-xl shadow-yellow-500/30
                       transition-all duration-300
                       hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40
                       active:scale-95
                       overflow-hidden"
          >
            {/* Shimmer Sweep */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 
                               bg-white/25 skew-x-[-20deg]
                               transition-all duration-700
                               group-hover:left-full">
              </span>
            </span>

            <span className="relative z-10 tracking-wide">
              GET A FREE CONSULTATION →
            </span>
          </Link>

          <p className="text-sm text-gray-300 pt-4">
            Licensed & Insured • CSLB License #1140888
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                ADU & SB9 Development
              </h3>
              <p className="text-gray-600">
                Custom ADUs and SB9 lot developments built to meet California
                regulations with precision and efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Rebuilds & Remodels
              </h3>
              <p className="text-gray-600">
                Full home rebuilds and major renovations delivered with quality
                craftsmanship and attention to detail.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Commercial Projects
              </h3>
              <p className="text-gray-600">
                Tenant improvements, commercial build-outs, and structural
                renovations executed professionally and on schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Solar Installation
              </h3>
              <p className="text-gray-600">
                Residential and commercial solar solutions designed to maximize
                energy efficiency and long-term savings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="bg-gray-800 rounded-xl p-8 space-y-4">
              <div className="text-green-500 font-bold text-3xl">1</div>
              <h3 className="font-bold text-lg">Free Consultation</h3>
              <p className="text-gray-300">
                We visit your site or review city-approved plans to understand your project.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 space-y-4">
              <div className="text-green-500 font-bold text-3xl">2</div>
              <h3 className="font-bold text-lg">Detailed Quote</h3>
              <p className="text-gray-300">
                Transparent pricing delivered within 2–3 days with a quick turnaround.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 space-y-4">
              <div className="text-green-500 font-bold text-3xl">3</div>
              <h3 className="font-bold text-lg">Contract & Deposit</h3>
              <p className="text-gray-300">
                Project agreement finalized and deposit secured before construction begins.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 space-y-4">
              <div className="text-green-500 font-bold text-3xl">4</div>
              <h3 className="font-bold text-lg">Build & Deliver</h3>
              <p className="text-gray-300">
                Professional execution with clear communication until final walkthrough.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;