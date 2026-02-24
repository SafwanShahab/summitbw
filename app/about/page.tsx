import React from "react";
import Navbar from "../../components/navbar.tsx";

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans relative">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Summit Buildworks
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A licensed California construction company specializing in ADU development,
            SB9 projects, full home rebuilds, remodels, and commercial construction.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Summit Buildworks delivers high-quality residential and commercial
              construction services throughout California. Our team focuses on
              precision, compliance, and efficiency—ensuring every project meets
              city regulations and client expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From custom ADUs and SB9 developments to full home rebuilds and
              major remodels, we bring professionalism, transparency, and strong
              project management to every build.
            </p>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-black">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Licensed & Insured</li>
              <li>✔ CSLB License #1140888</li>
              <li>✔ Free On-Site Consultations</li>
              <li>✔ 2–3 Day Quote Turnaround</li>
              <li>✔ No Project Too Large</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-bold text-black">
            Our Specializations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-black">
                ADU & SB9 Development
              </h3>
              <p className="text-gray-600">
                Expertise in Accessory Dwelling Units and SB9 lot developments
                built to meet California housing regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-black">
                Residential Rebuilds & Remodels
              </h3>
              <p className="text-gray-600">
                Full-scale home rebuilds and renovations executed with quality
                craftsmanship and attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-black">
                Commercial Construction
              </h3>
              <p className="text-gray-600">
                Professional tenant improvements, commercial build-outs, and
                structural renovations delivered on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;