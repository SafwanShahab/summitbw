import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans">

      {/* HERO WITH IMAGE BACKGROUND */}
      <section className="relative h-[850px] text-white">
        <Image
          src="/0about.jpeg"
          alt="Summit Buildworks construction"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-9">
              ADUs, SB9 Projects, Remodels, and Commercial Builds
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-200">
              A licensed California construction company specializing in residential builds, ADUs, SB9 projects, remodels, and commercial construction.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-0">
          
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/1about.jpeg"
              alt="Residential construction"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Summit Buildworks is a licensed and insured California contractor
              specializing primarily in residential construction. From custom ADUs
              and SB9 developments to full rebuilds and remodels, we deliver
              projects that meet strict city compliance and high construction standards.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We work alongside a trusted design and engineering team to handle
              your project from concept to completion — including drawings,
              city approvals, and final construction.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-bold text-xl text-black">Licensed & Insured</h3>
                <p className="text-gray-600">CSLB #1140888</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Free Consultation</h3>
                <p className="text-gray-600">On-site or plan review</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Fast Quotes</h3>
                <p className="text-gray-600">2–3 day turnaround</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">No Project Too Large</h3>
                <p className="text-gray-600">Residential & commercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GRID SECTION */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Our Work
          </h2>
          <p className="text-gray-400 mt-4">
            Quality craftsmanship across every project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/2about.jpeg"
              alt="Construction project"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/3about.jpeg"
              alt="Remodel project"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/4about.jpeg"
              alt="ADU build"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;