import React from "react";
import Navbar from "../../components/navbar.tsx";

export default function HowItWorksPage() {
  return (
    <div className="font-sans">
    {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-900 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How Summit Buildworks Works
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          From your first consultation to project completion, we ensure a smooth, transparent, and professional construction experience.
        </p>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-12">

          <h2 className="text-3xl font-bold text-black">Our Simple 3-Step Process</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">

            {/* Step 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Schedule a Call</h3>
              <p className="text-gray-800">
                Reach out to us and discuss your project goals. We'll answer your questions and schedule a free on-site consultation if needed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Explore Options</h3>
              <p className="text-gray-800">
                Review design ideas, construction methods, materials, and costs with our team. We'll create a clear plan that fits your budget and needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <div className="text-green-600 font-bold text-4xl mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3 text-black">Project Execution</h3>
              <p className="text-gray-800">
                We handle construction from start to finish, maintaining timelines, quality, and safety standards. You get a fully completed project with peace of mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let’s talk about your project and goals. Our team will guide you every step of the way.
        </p>
        <a
          href="/get-started"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-lg transition duration-300"
        >
          Talk to Us Today
        </a>
      </section>
    </div>
  );
}