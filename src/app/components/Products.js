"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaVial, FaFlask, FaAtom } from "react-icons/fa";

const products = [
  {
    icon: <FaVial />,
    title: "Basic Chromium Sulphate",
    description: "Used in leather tanning and other industrial applications.",
  },
  {
    icon: <FaFlask />,
    title: "Basic Chromium Sulphate Liquid",
    description: "Liquid form for specialized industrial processes.",
  },
  {
    icon: <FaAtom />,
    title: "Boric Acid",
    description: "Versatile chemical for glass, ceramics, and antiseptics.",
  },
  {
    icon: <FaVial />,
    title: "Manganese Dioxide",
    description: "Essential for batteries, glass, and ceramics manufacturing.",
  },
  {
    icon: <FaFlask />,
    title: "Saccharin Sodium",
    description: "High-intensity sweetener for food and beverage industries.",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Nitrate",
    description: "Used in fertilizers, explosives, and food preservation.",
  },
  {
    icon: <FaVial />,
    title: "Saccharin Insoluble",
    description: "Insoluble form for specific industrial and food applications.",
  },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="products"
      className="py-16 px-4 relative"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220401/pngtree-vibrant-home-cleaning-tools-under-sunny-skies-cleaning-house-chemical-photo-image_16880360.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for gradient and better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-80"></div>

      {/* Content container needs relative and higher z-index */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 tracking-wide">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100} // stagger animations
              className="p-4 bg-white bg-opacity-90 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <div
                className="text-blue-600 mb-4 text-3xl mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100
                  hover:text-cyan-500 hover:bg-cyan-100 transition-colors duration-300
                  hover:scale-110"
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{p.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{p.description}</p>
              <button
                type="button"
                className="cursor-pointer px-4 py-1 bg-blue-600 text-white rounded-full font-semibold text-sm
                  hover:bg-cyan-600 transition-colors duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
