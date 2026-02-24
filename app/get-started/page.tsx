import React from "react";
import Navbar from "../../components/navbar.tsx";

export default function GetStartedPage() {
  return (
    <div>
        {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gray-900 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Start Your Project With Summit Buildworks
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Whether you're planning an ADU, SB9 development, full home rebuild,
          remodel, or commercial project, our team is ready to guide you from
          consultation to completion.
        </p>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-black">
            Let’s Talk About Your Goals
          </h2>

          <p className="text-gray-700 text-lg">
            We offer free on-site consultations and provide detailed quotes
            within 2–3 business days. Our team visits your property or reviews
            approved city plans to ensure accurate pricing and planning.
          </p>

          <a
            href="/estimate"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-lg transition duration-300"
          >
            Request a Free Estimate
          </a>

          <div className="pt-6 text-gray-700">
            Or Call Us Directly
          </div>

          <div className="text-2xl font-bold text-black">
            (818) 923-9313
          </div>
        </div>
      </section>

      {/* Darker Trust Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Licensed & Insured
            </h3>
            <p className="text-gray-800 font-medium">
              CSLB License #1140888
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Free Consultations
            </h3>
            <p className="text-gray-800 font-medium">
              On-site visits or approved plan reviews available.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
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