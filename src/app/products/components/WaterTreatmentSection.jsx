"use client";

import ProductCard from "./ProductCard";
import { FaWater, FaTint, FaFilter } from "react-icons/fa";

const waterTreatmentProducts = [
    {
        image: "/images/water-01.jpg",
        title: "Disinfection & Chlorination",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaWater className="text-sky-700" />
                <span className="text-gray-800">Safe, clean water</span>
            </div>
        ),
        description:
            "Chlorine-based and alternative disinfectants for drinking water, pools, and industrial systems.",
        icon: FaWater,
        accent: "text-sky-700",
        badge: "Water Treatment",
    },
    {
        image: "/images/water-02.jpg",
        title: "Coagulants & Flocculants",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaTint className="text-blue-600" />
                <span className="text-gray-800">Clarify at scale</span>
            </div>
        ),
        description:
            "Aluminium and polymer-based solutions to remove suspended solids and improve clarity in water and wastewater.",
        icon: FaTint,
        accent: "text-blue-600",
    },
    {
        image: "/images/water-03.jpg",
        title: "RO & Boiler Treatment",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaFilter className="text-cyan-700" />
                <span className="text-gray-800">Protect your systems</span>
            </div>
        ),
        description:
            "Antiscalants, cleaning agents, and conditioning chemicals that extend membrane and boiler life.",
        icon: FaFilter,
        accent: "text-cyan-700",
    },
];

export default function WaterTreatmentSection() {
    return (
        <section id="water-treatment" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Water Treatment Chemicals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {waterTreatmentProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}