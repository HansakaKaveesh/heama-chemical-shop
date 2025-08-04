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
    description: "Disinfectant widely used in water treatment and sanitation.",
    image: "/images/pro5.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Nitrate",
    description: "Used in fertilizers, explosives, and food preservation.",
    image: "/images/pro6.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Trichloroisocyanuric Acid",
    description: "Powerful disinfectant for pools and industrial applications.",
    image: "/images/pro7.jpg",
  },
  {
    icon: <FaVial />,
    title: "Aluminium Sulphate 17%",
    description: "Coagulant used in water purification and paper manufacturing.",
    image: "/images/pro8.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Magnesium Sulfate Heptahydrate",
    description: "Used in agriculture and medical applications (Epsom salt).",
    image: "/images/pro9.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Hydrated Lime Malaysia",
    description: "Used in water treatment, construction, and agriculture.",
    image: "/images/1000152735.jpg",
  },
  {
    icon: <FaVial />,
    title: "Nitric Acid 68%",
    description: "Strong acid for fertilizers, explosives, and chemical synthesis.",
    image: "/images/pro11.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Caustic Soda Flakes",
    description: "Essential in soap making, paper, and textile industries.",
    image: "/images/pro12.jpg",
  },
];

export default function Chemicals() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="chemicals" className="py-20 px-4 bg-emerald-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">Our Chemicals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              style={{
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-opacity-70 transition duration-300 flex flex-col justify-center items-center text-white">
                <div className="text-3xl mb-4 bg-white text-emerald-600 p-3 rounded-full shadow-lg">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-center max-w-xs">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}