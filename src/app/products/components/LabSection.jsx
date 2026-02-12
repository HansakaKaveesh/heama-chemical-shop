"use client";

import ProductCard from "./ProductCard";
import { FaFlask, FaVial, FaMicroscope } from "react-icons/fa";

const labProducts = [
    {
        image: "/images/lab-01.jpg",
        title: "Analytical Reagents",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaFlask className="text-indigo-700" />
                <span className="text-gray-800">Accuracy you can trust</span>
            </div>
        ),
        description:
            "High-purity reagents for analytical testing, quality control, and research laboratories.",
        icon: FaFlask,
        accent: "text-indigo-700",
        badge: "Lab Grade",
    },
    {
        image: "/images/lab-02.jpg",
        title: "Buffer & Calibration Solutions",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaVial className="text-blue-600" />
                <span className="text-gray-800">Stable & reliable</span>
            </div>
        ),
        description:
            "Ready-to-use buffer and calibration standards designed for consistent, repeatable measurements.",
        icon: FaVial,
        accent: "text-blue-600",
    },
    {
        image: "/images/lab-03.jpg",
        title: "Indicators & Stains",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope className="text-purple-700" />
                <span className="text-gray-800">Clarity in every test</span>
            </div>
        ),
        description:
            "Indicators, stains, and auxiliaries tailored for titration, microbiology, and histology workflows.",
        icon: FaMicroscope,
        accent: "text-purple-700",
    },
];

export default function LabSection() {
    return (
        <section id="lab" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Laboratory & Research
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {labProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}