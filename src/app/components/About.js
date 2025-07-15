"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50 relative overflow-hidden"
    >
      {/* Decorative background shape */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="text-left" data-aos="fade-right">
          <h2 className="text-4xl font-extrabold mb-6 text-blue-900 tracking-tight">
            About Us
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            HEMA CHEMICAL INDUSTRIES is a leading chemical manufacturing company focused on providing
            high-quality, eco-friendly, and innovative chemical products. Our team of
            experts ensures that all our products meet the highest industry standards.
          </p>

          {/* Mission Statement */}
          <p className="text-gray-600 italic mb-8 text-lg max-w-xl">
            Committed to sustainability and excellence in every product we create.
          </p>

          {/* Call to Action */}
          <a
            href="#products"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Learn More About Our Products
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="100">
          <img
            src="/about-removebg-preview.png"
            alt="ChemTech manufacturing process"
            className="transition-transform transform hover:scale-105"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
