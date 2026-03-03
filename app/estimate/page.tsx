"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
import Image from "next/image";

const EstimatePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    photos: null as FileList | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, photos: e.target.files }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! (Currently just logs to console)");
  };

  const inputClass =
    "w-full border-2 border-gray-300 rounded-xl p-4 text-gray-900 text-lg font-medium shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-500 transition";

  const scrollToForm = () => {
    const formElement = document.getElementById("estimate-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[850px] flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/estimate.jpg"
            alt="Construction Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Request an Estimate
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Fill out the form below and we’ll get back to you within 2–3 days with a free consultation.
          </p>

          {/* Yellow Scroll Button */}
          <button
            onClick={scrollToForm}
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
            Fill Out Form →
          </button>
        </div>
      </section>

      {/* Form Section */}
      <section id="estimate-form" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
      Tell Us About Your Project
    </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange} required className={inputClass}>
                <option value="">Select a project type</option>
                <option value="ADU / SB9">ADU / SB9</option>
                <option value="Rebuild / Remodel">Rebuild / Remodel</option>
                <option value="Commercial Project">Commercial Project</option>
                <option value="Solar Installation">Solar Installation</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Budget (Optional)</label>
              <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="Enter budget range" className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Timeline (Optional)</label>
              <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="Enter expected project timeline" className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Project Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={6} required className={inputClass} />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Photos (Optional)</label>
              <input type="file" name="photos" onChange={handleFileChange} multiple className="w-full text-gray-700" />
            </div>

            {/* Yellow Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center
                         py-4
                         text-black font-semibold tracking-wide
                         rounded-full
                         bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                         shadow-lg shadow-yellow-500/30
                         transition-all duration-300
                         hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40
                         active:scale-95"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default EstimatePage;