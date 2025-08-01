"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaVial, FaFlask, FaAtom } from "react-icons/fa";

// Product data (add category if you want to group/filter later)
const products = [
  {
    icon: <FaFlask />,
    title: "Body Wash",
    description: "Gentle cleanser for daily personal care and hygiene.",
    image: "/images/WhatsApp Image 2025-07-15 at 14.13.13_8aac698b.jpg",
    category: "Personal Care",
  },
  {
    icon: <FaVial />,
    title: "Personal Care Essentials",
    description: "A collection of must-haves for your daily grooming needs.",
    image: "/images/WhatsApp Image 2025-07-15 at 14.13.13_90787025.jpg",
    category: "Personal Care",
  },
  {
    icon: <FaAtom />,
    title: "Cleaning Essentials",
    description: "All-purpose cleaning products for home and industry use.",
    image: "/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg",
    category: "Cleaning",
  },
  {
    icon: <FaFlask />,
    title: "Glycerine (Vegetable) Glycerol",
    description: "Humectant and moisturizer for pharmaceutical and cosmetic use.",
    image: "/images/WhatsApp Image 2025-07-15 at 14.13.15_03ee6694.jpg",
    category: "Chemicals",
  },
  {
    icon: <FaVial />,
    title: "Hand Sanitizer",
    description: "Kills 99.9% of germs and bacteria without water.",
    image: "/images/hand-sanitizer.jpg",
    category: "Personal Care",
  },
  {
    icon: <FaAtom />,
    title: "Tile Cleaner",
    description: "Powerful formula to remove tough stains from tiles.",
    image: "/images/tile-cleaner.jpg",
    category: "Cleaning",
  },
  {
    icon: <FaFlask />,
    title: "Dishwash Liquid",
    description: "Tough on grease, gentle on hands — sparkling clean dishes.",
    image: "/images/dishwash.jpg",
    category: "Cleaning",
  },
  {
    icon: <FaVial />,
    title: "Hand Wash",
    description: "Mild and effective cleanser for daily hand hygiene.",
    image: "/images/handwash.jpg",
    category: "Personal Care",
  },
];


export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="products"
      className="py-20 px-4 relative"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220401/pngtree-vibrant-home-cleaning-tools-under-sunny-skies-cleaning-house-chemical-photo-image_16880360.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-80"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-2 text-blue-900 tracking-wide">
          Our Products
        </h2>
        <p className="text-lg text-blue-700 mb-10 font-medium">
          Quality chemicals and personal care essentials for home, industry, and wellness.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative p-6 bg-white/90 border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center"
            >
              {/* Category badge */}
              <span className="absolute top-4 left-4 bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {p.category}
              </span>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover bg-white rounded-lg mb-4 border"
                loading="lazy"
                aria-label={p.title}
              />
              <div
                className="text-blue-600 mb-4 text-3xl mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100
                  hover:text-cyan-500 hover:bg-cyan-100 transition-colors duration-300
                  hover:scale-110"
                aria-label={p.title + " icon"}
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{p.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{p.description}</p>
              {/* Optional: Call to action */}
              <button className="mt-auto bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-cyan-700 transition">
                Inquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}