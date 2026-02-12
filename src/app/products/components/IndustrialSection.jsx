"use client";

import ProductCard from "./ProductCard";
import { FaIndustry, FaCogs, FaWarehouse } from "react-icons/fa";

const industrialProducts = [
    {
        image: "/images/industrial-01.jpg",
        title: "Industrial Degreasers",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaIndustry className="text-blue-700" />
                <span className="text-gray-800">Heavy-duty plant cleaning</span>
            </div>
        ),
        description:
            "High-performance degreasers formulated to remove oil, grease, and production residues from machinery and equipment.",
        icon: FaIndustry,
        accent: "text-blue-700",
        badge: "Industrial",
    },
    {
        image: "/images/industrial-02.jpg",
        title: "Metal Surface Treatment",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaCogs className="text-indigo-600" />
                <span className="text-gray-800">Prepare. Protect. Perform.</span>
            </div>
        ),
        description:
            "Chemical solutions for cleaning, phosphating, and protecting metal surfaces prior to coating, painting, or fabrication.",
        icon: FaCogs,
        accent: "text-indigo-600",
    },
    {
        image: "/images/industrial-03.jpg",
        title: "Warehouse Maintenance Chemicals",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaWarehouse className="text-slate-700" />
                <span className="text-gray-800">Clean, safe facilities</span>
            </div>
        ),
        description:
            "Floor cleaners, disinfectants, and general-purpose solutions to keep industrial storage and logistics areas in top condition.",
        icon: FaWarehouse,
        accent: "text-slate-700",
    },
];

export default function IndustrialSection() {
    return (
        <section id="industrial" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Industrial Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {industrialProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}