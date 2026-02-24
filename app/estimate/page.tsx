"use client"; // ✅ Add this at the very top

import React, { useState } from "react";
import Footer from "../../components/footer.tsx";
import Navbar from "../../components/navbar.tsx";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  // Common class for all inputs to make them more visible
  const inputClass =
    "w-full border-2 border-gray-400 rounded-xl p-4 text-gray-900 text-lg font-medium shadow-md focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600";

  return (
    <div className="font-sans relative">
      <Navbar />

      <section className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Request an Estimate</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Fill out the form below and we’ll get back to you within 2–3 days with a free consultation.
        </p>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a project type</option>
                <option value="ADU / SB9">ADU / SB9</option>
                <option value="Rebuild / Remodel">Rebuild / Remodel</option>
                <option value="Commercial Project">Commercial Project</option>
                <option value="Solar Installation">Solar Installation</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Budget (Optional)</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter budget range"
                className={inputClass}
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Timeline (Optional)</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="Enter expected project timeline"
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                required
                className={inputClass}
              />
            </div>

            {/* Upload Photos */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Photos (Optional)</label>
              <input
                type="file"
                name="photos"
                onChange={handleFileChange}
                multiple
                className="w-full text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition shadow-lg"
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