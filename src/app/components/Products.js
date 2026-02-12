"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaVial, FaFlask, FaAtom } from "react-icons/fa";

const products = [
  {
    icon: <FaFlask />,
    title: "Hydrogen Peroxide 50%",
    description: "Strong oxidizer used in bleaching and disinfection.",
    image: "/images/pro1.jpg",
  },
  {
    icon: <FaVial />,
    title: "Soda Ash Light",
    description: "Used in glass manufacturing, detergents, and paper.",
    image: "/images/pro2.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Sulfate",
    description: "Commonly used in detergents and textile production.",
    image: "/images/pro3.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Tonsil Optimum 230 FF",
    description: "Activated bleaching earth for edible oil purification.",
    image: "/images/pro4.jpg",
  },
  {
    icon: <FaVial />,
    title: "Calcium Hypochlorite, Hydrated",
    description:
      "Disinfectant widely used in water treatment and sanitation.",
    image: "/images/pro5.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Nitrate",
    description: "Used in fertilizers, and food preservation.",
    image: "/images/pro6.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Trichloroisocyanuric Acid",
    description:
      "Powerful disinfectant for pools and industrial applications.",
    image: "/images/pro7.jpg",
  },
  {
    icon: <FaVial />,
    title: "Aluminium Sulphate 17%",
    description:
      "Coagulant used in water purification and paper manufacturing.",
    image: "/images/pro8.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Magnesium Sulfate Heptahydrate",
    description:
      "Used in agriculture and medical applications (Epsom salt).",
    image: "/images/pro9.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Hydrated Lime Malaysia",
    description:
      "Used in water treatment, construction, and agriculture.",
    image: "/images/1000152735.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Caustic Soda Flakes",
    description:
      "Essential in soap making, paper, and textile industries.",
    image: "/images/pro12.jpg",
  },
];

export default function Chemicals() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-quad" });
  }, []);

  return (
    <section
      id="chemicals"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient background + soft glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] -z-10 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="chem-dots absolute inset-0 -z-10 opacity-25" />

      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            Our Chemicals
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90 text-sm sm:text-base">
          High‑quality industrial chemicals, thoughtfully curated for performance and safety.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={p.title}
              data-aos="zoom-in"
              data-aos-delay={i * 90}
              role="button"
              tabIndex={0}
              aria-label={p.title}
              className="group relative cursor-pointer"
            >
              {/* Gradient glow behind card */}
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-200/70 via-teal-200/60 to-cyan-200/70 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card container */}
              <div
                className="relative h-80 rounded-3xl overflow-hidden ring-1 ring-white/15 bg-slate-950/40 backdrop-blur-xl shadow-[0_20px_45px_-26px_rgba(15,23,42,0.95)] transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Soft gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/90 transition-colors duration-500 group-hover:from-black/5 group-hover:via-black/50 group-hover:to-black/85" />

                {/* Shine sweep on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-[-60%] h-full w-2/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-800 ease-out group-hover:left-[130%] group-hover:opacity-100"
                />

                {/* Top badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.65rem] font-semibold bg-emerald-500/90 text-white shadow-sm">
                    Industrial Grade
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
                  <div className="mb-3 sm:mb-4 rounded-2xl bg-white/95 p-3 text-emerald-700 shadow-xl shadow-emerald-900/15 ring-1 ring-emerald-500/25 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl sm:text-3xl md:text-4xl">
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-[1.25rem] font-semibold tracking-tight drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-xs sm:text-sm text-white/90">
                    {p.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        .chem-dots {
          background-image: radial-gradient(
            rgba(15, 23, 42, 0.35) 1px,
            transparent 1px
          );
          background-size: 22px 22px;
        }
      `}</style>
    </section>
  );
}