"use client";

import ProductCard from "./ProductCard";
import { FaSeedling, FaTint, FaLeaf } from "react-icons/fa";

const agroProducts = [
    {
        image: "/images/agro-01.jpg",
        title: "Soil Conditioners",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaSeedling className="text-emerald-700" />
                <span className="text-gray-800">Health at the root</span>
            </div>
        ),
        description:
            "Mineral-based conditioners that improve soil structure, aeration, and nutrient availability for sustainable yields.",
        icon: FaSeedling,
        accent: "text-emerald-700",
        badge: "Agro",
    },
    {
        image: "/images/agro-02.jpg",
        title: "Foliar Nutrient Blends",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaTint className="text-sky-600" />
                <span className="text-gray-800">Targeted crop nutrition</span>
            </div>
        ),
        description:
            "Balanced liquid nutrients designed for foliar application, supporting crop vigor and stress resistance.",
        icon: FaTint,
        accent: "text-sky-600",
    },
    {
        image: "/images/agro-03.jpg",
        title: "Crop Protection Adjuncts",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaLeaf className="text-lime-700" />
                <span className="text-gray-800">Optimize application</span>
            </div>
        ),
        description:
            "Surfactants and wetting agents that help improve coverage, adherence, and performance of agrochemicals.",
        icon: FaLeaf,
        accent: "text-lime-700",
    },
];

export default function AgroSection() {
    return (
        <section id="agro" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Agro Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {agroProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}