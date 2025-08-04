"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFlask,
  FaSoap,
  FaUtensils,
  FaStar,
  FaCogs,
  FaPrint,
  FaHardHat,
  FaMicroscope,
  FaWater,
} from "react-icons/fa";

// Category Data (matches your uploaded image)
const productCategories = [
  {
    title: "Cosmetic Ingredients",
    icon: <FaFlask />,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: lab glassware
  },
  {
    title: "Personal Care Ingredients",
    icon: <FaSoap />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: soap
  },

  {
    title: "Printing & Textile Chemicals",
    icon: <FaPrint />,
    image: "https://images.unsplash.com/photo-1585751092218-cea84c1ecf01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: textile/printing
  },
  {
    title: "Construction Chemicals",
    icon: <FaHardHat />,
    image: "https://plus.unsplash.com/premium_photo-1663051275942-a9bd73084bb6?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: construction
  },
  {
    title: "Laboratory Chemicals & Equipment",
    icon: <FaMicroscope />,
    image: "https://images.unsplash.com/photo-1616046560582-41ac3c954715?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: lab equipment
  },
  {
    title: "Water Treatment Chemicals",
    icon: <FaWater />,
    image: "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example: water treatment
  },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="products" className="py-20 px-4 bg-emerald-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productCategories.map((cat, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 bg-opacity-50 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center text-white">
                <div className="text-3xl mb-4 bg-white text-emerald-600 p-3 rounded-full shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
