"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFlask,
  FaSoap,
  FaPrint,
  FaWater,
  FaIndustry,
  FaSeedling,
  FaMicroscope,
  FaHammer,
} from "react-icons/fa";

const categories = [
  {
    title: "Personal Care Essentials",
    icon: <FaFlask />,
    image:
      "https://t3.ftcdn.net/jpg/02/72/37/20/360_F_272372012_2aOGqAOdrJaFmaqlkGCHSvlcL2wrLUDD.jpg",
  },
  {
    title: "Body Wash",
    icon: <FaSoap />,
    image:
      "https://247wallst.com/wp-content/uploads/2024/03/shutterstock-1850208661-huge-licensed-scaled.jpg",
  },
  {
    title: "Cleaning Essentials",
    icon: <FaPrint />,
    image:
      "https://confessionsofacleaninglady.com/wp-content/uploads/2023/05/cleaning-products-on-kitchen-counter.webp",
  },
  {
    title: "Industrial Solutions",
    icon: <FaIndustry />,
    image:
      "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Agro Solutions",
    icon: <FaSeedling />,
    image:
      "https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Laboratory & Research",
    icon: <FaMicroscope />,
    image:
      "https://images.unsplash.com/photo-1694230155228-cdde50083573?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Construction Chemicals",
    icon: <FaHammer />,
    image:
      "https://images.pexels.com/photos/544971/pexels-photo-544971.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Water Treatment Chemicals",
    icon: <FaWater />,
    image:
      "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=1170&auto=format&fit=crop",
  },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-quad" });
  }, []);

  return (
    <section id="products" className="relative overflow-hidden py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            Our Products
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90">
          Premium personal care, cleaning, industrial, agro, lab, construction, and water treatment
          categories.
        </p>

        {/* Category hero blocks only (no product cards) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative h-60 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={cat.title}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/70" />
              {/* Shine sweep */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="text-3xl md:text-4xl mb-4 bg-white text-emerald-600 p-3 rounded-full shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-2xl text-white/85 md:text-3xl font-bold drop-shadow">
                  {cat.title}
                </h3>
                <p className="text-white/85 text-sm md:text-base mt-2">
                  Curated quality for reliable performance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}