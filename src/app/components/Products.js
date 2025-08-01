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
          "url('https://logcargo.org/wp-content/uploads/2025/06/bf8f27a3cd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-80"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-2 text-blue-900 tracking-wide">
          Our Chemicals
        </h2>
        <p className="text-lg text-blue-700 mb-10 font-medium">
          High-quality chemicals for industry, agriculture, water treatment, and more.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-4 bg-white bg-opacity-90 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-contain bg-white rounded-lg mb-4"
              />
              <div
                className="text-blue-600 mb-4 text-3xl mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100
                  hover:text-cyan-500 hover:bg-cyan-100 transition-colors duration-300
                  hover:scale-110"
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{p.title}</h3>
              <p className="text-gray-700 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
