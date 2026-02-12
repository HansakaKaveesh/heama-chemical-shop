"use client";

import ProductCard from "./ProductCard";
import { FaFlask, FaAtom, FaMicroscope } from "react-icons/fa";

const chemicalProducts = [
    {
        image: "/images/pro1.jpg",
        title: "Hydrogen Peroxide 50%",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Purity. Power. Protection.</span>
            </div>
        ),
        description:
            "Versatile oxidizer and disinfectant for high-performance cleaning and bleaching in industrial and lab use.",
        icon: FaFlask,
        accent: "text-cyan-600",
        badge: "50%",
    },
    {
        image: "/images/pro2.jpg",
        title: "Soda Ash Light",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Brighten. Balance. Boost.</span>
            </div>
        ),
        description:
            "Premium alkaline compound for pH control, water treatment, and glass production with consistent quality.",
        icon: FaFlask,
        accent: "text-blue-600",
        badge: "Light",
    },
    {
        image: "/images/pro3.jpg",
        title: "Sodium Sulfate",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Stable. Strong. Safe.</span>
            </div>
        ),
        description:
            "Reliable for detergents, glass, and textiles. Uniform granules and purity ensure optimal performance.",
        icon: FaAtom,
        accent: "text-emerald-600",
        badge: "Tech Grade",
    },
    {
        image: "/images/pro4.jpg",
        title: "Tonsil Optimum 230 FF",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Absorb. Enhance. Protect.</span>
            </div>
        ),
        description:
            "High-quality absorbent clay for filtration, purification, and decolorization. Consistent and efficient.",
        icon: FaFlask,
        accent: "text-indigo-600",
    },
    {
        image: "/images/pro5.jpg",
        title: "Calcium Hypochlorite, Hydrated",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Clean. Clear. Confident.</span>
            </div>
        ),
        description:
            "Potent disinfectant for water treatment. Hydrated form improves safety and long-lasting effectiveness.",
        icon: FaFlask,
        accent: "text-amber-600",
        badge: "Hydrated",
    },
    {
        image: "/images/pro6.jpg",
        title: "Trichloroisocyanuric Acid",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Purify. Protect. Perform.</span>
            </div>
        ),
        description:
            "Reliable sanitation for pools and industrial systems with high chlorine content for cleanliness.",
        icon: FaAtom,
        accent: "text-rose-600",
    },
    {
        image: "/images/pro7.jpg",
        title: "Trichloroisocyanuric Acid 90%",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Concentrated. Controlled. Clean.</span>
            </div>
        ),
        description:
            "Concentrated grade for maximum efficiency in disinfection and bleaching across industrial use.",
        icon: FaFlask,
        accent: "text-sky-600",
        badge: "90%",
    },
    {
        image: "/images/pro8.jpg",
        title: "Aluminium Sulphate",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Clarify. Coagulate. Care.</span>
            </div>
        ),
        description:
            "Essential for water purification and paper manufacturing — highly soluble and consistent.",
        icon: FaFlask,
        accent: "text-fuchsia-600",
    },
    {
        image: "/images/pro11.jpg",
        title: "Nitric Acid",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Powerful. Precise. Pure.</span>
            </div>
        ),
        description:
            "Reactive acid for fertilizers, explosives, and metal processing with premium purity.",
        icon: FaAtom,
        accent: "text-red-600",
        badge: "Concentrated",
    },
    {
        image: "/images/pro9.jpg",
        title: "Magnesium Sulfate Heptahydrate",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Nourish. Balance. Strengthen.</span>
            </div>
        ),
        description:
            "Epsom salt for agriculture, healthcare, and industry — high purity for effective application.",
        icon: FaFlask,
        accent: "text-emerald-600",
        badge: "Heptahydrate",
    },
    {
        image: "/images/1000152735.jpg",
        title: "Hydrated Lime",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Neutralize. Strengthen. Protect.</span>
            </div>
        ),
        description:
            "Industrial alkaline for water treatment, soil stabilization, and chemical manufacturing.",
        icon: FaFlask,
        accent: "text-lime-600",
        badge: "Alkaline",
    },
    {
        image: "/images/pro12.jpg",
        title: "Caustic Soda Flakes",
        subtitle: (
            <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                <FaMicroscope />
                <span className="text-gray-800">Refine. React. Resolve.</span>
            </div>
        ),
        description:
            "Powerful alkaline for processing, soap making, and water treatment — high purity and solubility.",
        icon: FaAtom,
        accent: "text-blue-700",
        badge: "High Purity",
    },
];

export default function ChemicalsSection() {
    return (
        <section id="chemicals" className="py-12 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                Our Industrial Chemicals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {chemicalProducts.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}