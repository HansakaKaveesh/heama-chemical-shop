"use client";

import ProductCard from "./ProductCard";
import { FaHardHat, FaTools, FaHammer } from "react-icons/fa";

const constructionProducts = [
    {
        image: "/images/construction-01.jpg",
        title: "Cement Additives",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaHardHat className="text-amber-700" />
                <span className="text-gray-800">Strength & workability</span>
            </div>
        ),
        description:
            "Chemical admixtures that improve setting time, workability, and final strength of cement and concrete.",
        icon: FaHardHat,
        accent: "text-amber-700",
        badge: "Construction",
    },
    {
        image: "/images/construction-02.jpg",
        title: "Surface Hardeners & Sealers",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaHammer className="text-slate-800" />
                <span className="text-gray-800">Durable finishes</span>
            </div>
        ),
        description:
            "Solutions that protect floors and structures against abrasion, dusting, and weathering.",
        icon: FaHammer,
        accent: "text-slate-800",
    },
    {
        image: "/images/construction-03.jpg",
        title: "Waterproofing Systems",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaTools className="text-orange-600" />
                <span className="text-gray-800">Defend against moisture</span>
            </div>
        ),
        description:
            "Crystalline and membrane-based waterproofing chemicals for basements, roofs, and water-retaining structures.",
        icon: FaTools,
        accent: "text-orange-600",
    },
];

export default function ConstructionSection() {
    return (
        <section id="construction" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Construction & Building Chemicals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {constructionProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}