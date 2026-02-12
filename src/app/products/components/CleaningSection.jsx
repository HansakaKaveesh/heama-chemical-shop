"use client";

import ProductCard from "./ProductCard";
import { FaTint, FaSoap, FaCar, FaLeaf, FaToilet } from "react-icons/fa";

const cleaningProducts = [
    {
        image: "/images/lemon.png",
        title: "Jonis Dishwash",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaTint className="text-blue-600" />
                <span className="text-gray-800">Sparkling clean. Gentle on hands</span>
            </div>
        ),
        description:
            "Dissolves grease and residue, leaving dishes spotless. Enriched to protect hands from dryness — pure cleanliness, pure comfort.",
        icon: FaSoap,
        accent: "text-blue-600",
        badge: "Family Favorite",
    },
    {
        image: "/images/carwash.png",
        title: "Jonis Car Shampoo",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaCar className="text-indigo-600" />
                <span className="text-gray-800">Shine that speaks luxury</span>
            </div>
        ),
        description:
            "Gently but powerfully removes dirt without stripping gloss. Leaves a radiant, showroom finish with every wash.",
        icon: FaCar,
        accent: "text-indigo-600",
    },
    {
        image: "/images/air.png",
        title: "Jonis Air Freshener",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaLeaf className="text-emerald-600" />
                <span className="text-gray-800">Refresh. Revive. Relax</span>
            </div>
        ),
        description:
            "Transforms any space with crisp, long-lasting fragrance. Balanced scents for a calm, inviting atmosphere.",
        icon: FaLeaf,
        accent: "text-emerald-600",
    },
    {
        image: "/images/Toilet.png",
        title: "Jonis Toilet Bowl Cleaner",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaToilet className="text-rose-600" />
                <span className="text-gray-800">Deep clean. Pure hygiene</span>
            </div>
        ),
        description:
            "Eliminates stains, limescale, and bacteria fast — for a sparkling bowl and fresh, hygienic environment.",
        icon: FaToilet,
        accent: "text-rose-600",
    },
];

export default function CleaningSection() {
    return (
        <section id="cleaning" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Our Cleaning Essentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cleaningProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}