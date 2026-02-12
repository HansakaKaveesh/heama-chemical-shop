"use client";

import ProductCard from "./ProductCard";
import {
    FaTint,
    FaPumpSoap,
    FaBath,
    FaOilCan,
    FaPaintBrush,
} from "react-icons/fa";
import { GiWaterBottle } from "react-icons/gi";

const cosmeticsProducts = [
    {
        image: "/images/face wash.png",
        title: "Jonis Face Wash",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaTint className="text-blue-600" />
                <span className="text-gray-800">Purity, redefined</span>
            </div>
        ),
        description:
            "A gentle daily cleanser suited to warm, humid climates. Removes excess oil and impurities while maintaining balance for a fresh, radiant look.",
        icon: FaTint,
        accent: "text-blue-600",
        badge: "Best Seller",
    },
    {
        image: "/images/powder.png",
        title: "Jonis Powder",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaPumpSoap className="text-rose-500" />
                <span className="text-gray-800">Hydration, held close</span>
            </div>
        ),
        description:
            "Silky, fast-absorbing moisture for dry or sun-exposed skin. Soft, smooth, and lightly scented — perfect for the tropics.",
        icon: FaPumpSoap,
        accent: "text-rose-500",
        badge: "New",
    },
    {
        image: "/images/shampoo.png",
        title: "Jonis Shampoo",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <GiWaterBottle className="text-cyan-600" />
                <span className="text-gray-800">Clean. Strong. Luminous</span>
            </div>
        ),
        description:
            "Gently lifts buildup while nourishing roots. Hair feels lighter and looks shinier — from city humidity to hill country cool.",
        icon: GiWaterBottle,
        accent: "text-cyan-600",
    },
    {
        image: "/images/hire oil.png",
        title: "Jonis Hair Oil",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaOilCan className="text-amber-600" />
                <span className="text-gray-800">A tradition reimagined</span>
            </div>
        ),
        description:
            "Lightweight oil that strengthens hair, revitalizes the scalp, and supports natural growth — honoring heritage with every drop.",
        icon: FaOilCan,
        accent: "text-amber-600",
    },
    {
        image: "/images/nailpolish.png",
        title: "Jonis Nail Polish Remover",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaPaintBrush className="text-fuchsia-600" />
                <span className="text-gray-800">Clean removal. Soft finish</span>
            </div>
        ),
        description:
            "Erases color swiftly without excessive dryness. No residue — just clean nails ready for their next look.",
        icon: FaPaintBrush,
        accent: "text-fuchsia-600",
    },
    {
        image: "/images/body wash 01.png",
        title: "Jonis Body Wash",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaBath className="text-violet-600" />
                <span className="text-gray-800">Pure cleanse. Silky touch</span>
            </div>
        ),
        description:
            "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
        icon: FaBath,
        accent: "text-violet-600",
    },
    {
        image: "/images/body wash 02.png",
        title: "Jonis Body Wash",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaBath className="text-violet-600" />
                <span className="text-gray-800">Pure cleanse. Silky touch</span>
            </div>
        ),
        description:
            "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
        icon: FaBath,
        accent: "text-violet-600",
    },
    {
        image: "/images/body wash 03.png",
        title: "Jonis Body Wash",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaBath className="text-violet-600" />
                <span className="text-gray-800">Pure cleanse. Silky touch</span>
            </div>
        ),
        description:
            "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
        icon: FaBath,
        accent: "text-violet-600",
    },
];

export default function CosmeticsSection() {
    return (
        <section id="cosmetics" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Our Cosmetics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cosmeticsProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}