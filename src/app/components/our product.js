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
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700" />
      {/* Soft radial highlights */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/24 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-8%] -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      {/* Subtle dots pattern */}
      <div className="products-dots absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            Our Products
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90 text-sm sm:text-base">
          Premium personal care, cleaning, industrial, agro, lab, construction, and water
          treatment categories.
        </p>

        {/* Category hero blocks */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              role="listitem"
              className="group relative"
              aria-label={cat.title}
            >
              {/* Outer glow + border */}
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-200/60 via-teal-200/55 to-cyan-200/60 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="relative h-60 md:h-72 rounded-3xl overflow-hidden shadow-[0_20px_45px_-24px_rgba(15,23,42,0.9)] ring-1 ring-white/15 bg-slate-950/40 backdrop-blur-xl transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
                {/* Shine sweep */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[220%] transition-transform duration-800 ease-out" />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                  <div className="mb-4 rounded-2xl bg-white text-emerald-600 p-3 shadow-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <span className="text-3xl md:text-4xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-bold drop-shadow-md">
                    {cat.title}
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm md:text-base mt-2 max-w-xs mx-auto">
                    Curated quality for reliable performance.
                  </p>
                </div>

                {/* Subtle bottom gradient line */}
                <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        .products-dots {
          background-image: radial-gradient(
            rgba(15, 23, 42, 0.3) 1px,
            transparent 1px
          );
          background-size: 22px 22px;
        }
      `}</style>
    </section>
  );
}