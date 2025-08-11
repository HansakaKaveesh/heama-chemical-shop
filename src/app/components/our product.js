"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFlask,
  FaSoap,
  FaPrint,
  FaHardHat,
  FaMicroscope,
  FaWater,
} from "react-icons/fa";

const productCategories = [
  {
    title: "Cosmetic Ingredients",
    icon: <FaFlask />,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1187&auto=format&fit=crop",
    products: [
      {
        name: "Aloe Vera Extract",
        img: "https://tse4.mm.bing.net/th/id/OIP.8DNfF6u0-b3rz6nP432RDgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Natural skin-soothing extract rich in vitamins.",
      },
      {
        name: "Vitamin C Powder",
        img: "https://plus.unsplash.com/premium_photo-1673294206737-edefb10dcbab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        description: "Brightening agent for skincare and cosmetics.",
      },
    ],
  },
  {
    title: "Personal Care Ingredients",
    icon: <FaSoap />,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop",
    products: [
      {
        name: "Shea Butter",
        img: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        description: "Deeply moisturizing butter for skin and hair.",
      },
      {
        name: "Essential Oils",
        img: "https://images.unsplash.com/photo-1588167056572-fb3bce8b3d3b?q=80&w=500&auto=format&fit=crop",
        description: "Natural aromatic oils for beauty and wellness.",
      },
    ],
  },
  {
    title: "Printing & Textile Chemicals",
    icon: <FaPrint />,
    image:
      "https://images.unsplash.com/photo-1585751092218-cea84c1ecf01?q=80&w=687&auto=format&fit=crop",
    products: [
      {
        name: "Fabric Dye",
        img: "https://images.unsplash.com/photo-1505322024881-9b8a4a79eebd?q=80&w=500&auto=format&fit=crop",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },
      {
        name: "Screen Printing Ink",
        img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=500&auto=format&fit=crop",
        description: "High-quality ink for textile printing applications.",
      },
    ],
  },
  {
    title: "Construction Chemicals",
    icon: <FaHardHat />,
    image:
      "https://plus.unsplash.com/premium_photo-1663051275942-a9bd73084bb6?q=80&w=1192&auto=format&fit=crop",
    products: [
      {
        name: "Tile Adhesive",
        img: "https://images.unsplash.com/photo-1604370374301-b93e0d61a00a?q=80&w=500&auto=format&fit=crop",
        description: "Strong adhesive for tile installation.",
      },
      {
        name: "Waterproof Coating",
        img: "https://images.unsplash.com/photo-1598048151083-8f2f1c126a0a?q=80&w=500&auto=format&fit=crop",
        description: "Protective coating to prevent water damage.",
      },
    ],
  },
  {
    title: "Laboratory Chemicals & Equipment",
    icon: <FaMicroscope />,
    image:
      "https://images.unsplash.com/photo-1616046560582-41ac3c954715?q=80&w=1172&auto=format&fit=crop",
    products: [
      {
        name: "Beakers",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89f0b7?q=80&w=500&auto=format&fit=crop",
        description: "Glass containers for mixing and measuring liquids.",
      },
      {
        name: "Microscope Slides",
        img: "https://images.unsplash.com/photo-1581092335654-1f9cbf92bba4?q=80&w=500&auto=format&fit=crop",
        description: "Thin glass for holding specimens under a microscope.",
      },
    ],
  },
  {
    title: "Water Treatment Chemicals",
    icon: <FaWater />,
    image:
      "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=1170&auto=format&fit=crop",
    products: [
      {
        name: "Chlorine Tablets",
        img: "https://images.unsplash.com/photo-1580479561645-1ef43d04e013?q=80&w=500&auto=format&fit=crop",
        description: "Effective disinfectant for water purification.",
      },
      {
        name: "Water Purification Powder",
        img: "https://images.unsplash.com/photo-1614002229240-d3c89486e02a?q=80&w=500&auto=format&fit=crop",
        description: "Removes impurities and contaminants from water.",
      },
    ],
  },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 160, easing: "ease-out-cubic" });
    // Refresh on route changes/images loaded if needed
    const t = setTimeout(() => AOS.refresh(), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="products"
      className="relative py-24 px-4 bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 text-white"
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-300/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200">
              Our Products
            </span>
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Premium ingredients and chemicals across industries. Scroll to explore ✨
          </p>
        </div>

        {/* Category blocks */}
        {productCategories.map((cat, i) => (
          <div key={i} className="mb-24" data-aos="fade-up" data-aos-delay={i * 120}>
            {/* Category hero card */}
            <div
              className="group relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-8"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay + subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/70" />
              {/* Shine sweep on hover (no extra CSS needed) */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="text-3xl md:text-4xl mb-4 bg-white text-emerald-600 p-3 rounded-full shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold drop-shadow">{cat.title}</h3>
                <p className="text-white/85 text-sm md:text-base mt-2">
                  Curated quality for reliable performance.
                </p>
              </div>
            </div>

            {/* Products grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
              data-aos-delay={80}
            >
              {cat.products.map((p, j) => (
                <div
                  key={j}
                  data-aos="zoom-in-up"
                  data-aos-delay={j * 120}
                  className="group relative rounded-xl p-[1px] bg-gradient-to-br from-emerald-300/40 via-teal-300/40 to-cyan-300/40 hover:from-emerald-300/80 hover:via-teal-300/80 hover:to-cyan-300/80 transition-all duration-300 shadow-xl"
                >
                  <div className="rounded-xl overflow-hidden bg-white/90 text-slate-900 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md dark:bg-slate-900/70 dark:text-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover description overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm text-white/95">{p.description}</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="font-semibold">{p.name}</div>
                      <button
                        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200 text-sm font-medium transition-colors"
                        aria-label={`Enquire about ${p.name}`}
                      >
                        Enquire
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Soft glow on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-400/20 blur-md" />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        ))}

        {/* Back to top */}
        <div className="mt-10 flex justify-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white transition-colors"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}