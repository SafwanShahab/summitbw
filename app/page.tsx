import React from "react";
import Navbar from "../components/navbar.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans relative">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[650px]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
          alt="Residential construction project"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start max-w-7xl mx-auto p-8 md:p-16 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Residential & Commercial Construction Experts
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Specializing in ADU construction, SB9 developments, full home rebuilds, remodels, and commercial projects throughout California.
          </p>
          <a
            href="/get-started"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            GET A FREE CONSULTATION
          </a>
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
            {/* ADU & SB9 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                ADU & SB9 Development
              </h3>
              <p className="text-gray-600">
                Custom ADUs and SB9 lot developments built to meet California regulations with precision and efficiency.
              </p>
            </div>

            {/* Residential */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Rebuilds & Remodels
              </h3>
              <p className="text-gray-600">
                Full home rebuilds and major renovations delivered with quality craftsmanship and attention to detail.
              </p>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Commercial Projects
              </h3>
              <p className="text-gray-600">
                Tenant improvements, commercial build-outs, and structural renovations executed professionally and on schedule.
              </p>
            </div>

            {/* Solar */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4 text-black">
                Solar Installation
              </h3>
              <p className="text-gray-600">
                Residential and commercial solar solutions designed to maximize energy efficiency and long-term savings.
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