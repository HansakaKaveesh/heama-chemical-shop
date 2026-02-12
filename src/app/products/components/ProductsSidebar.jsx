"use client";

import { useEffect, useState, useCallback } from "react";
import {
    FaSpa,
    FaBroom,
    FaFlask,
    FaIndustry,
    FaSeedling,
    FaMicroscope,
    FaHammer,
    FaWater,
} from "react-icons/fa";

const SECTIONS = [
    { id: "cosmetics", label: "Cosmetics", icon: FaSpa },
    { id: "cleaning", label: "Cleaning", icon: FaBroom },
    { id: "chemicals", label: "Industrial Chemicals", icon: FaFlask },
    { id: "industrial", label: "Industrial", icon: FaIndustry },
    { id: "agro", label: "Agro", icon: FaSeedling },
    { id: "lab", label: "Lab & Research", icon: FaMicroscope },
    { id: "construction", label: "Construction", icon: FaHammer },
    { id: "water-treatment", label: "Water Treatment", icon: FaWater },
];

// Adjust this if you have a taller or shorter fixed header
const HEADER_OFFSET = 96;

export default function ProductsSidebar() {
    const [activeId, setActiveId] = useState("cosmetics");

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const absoluteY = rect.top + window.scrollY;
        const targetY = absoluteY - HEADER_OFFSET;

        window.scrollTo({ top: targetY, behavior: "smooth" });
    }, []);

    // ScrollSpy: highlight section currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visible[0]) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                threshold: 0.3,
            }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => {
        scrollToSection(id);
    };

    return (
        <>
            {/* Mobile top nav (horizontal pills) */}
            <div className="lg:hidden sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div
                        className="flex gap-2 overflow-x-auto no-scrollbar"
                        role="tablist"
                        aria-label="Product categories"
                    >
                        {SECTIONS.map(({ id, label, icon: Icon }) => {
                            const active = activeId === id;
                            return (
                                <button
                                    key={id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => handleClick(id)}
                                    className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm border transition ${active
                                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                        }`}
                                >
                                    <Icon className="text-[0.8rem]" />
                                    <span>{label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-4">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                        Browse Categories
                    </h3>
                    <nav
                        className="space-y-1"
                        aria-label="Product categories"
                    >
                        {SECTIONS.map(({ id, label, icon: Icon }) => {
                            const active = activeId === id;
                            return (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => handleClick(id)}
                                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm text-left transition ${active
                                            ? "bg-blue-50 text-blue-700 font-semibold"
                                            : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    <span
                                        className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs ${active
                                                ? "bg-blue-600 text-white"
                                                : "bg-slate-100 text-slate-500"
                                            }`}
                                    >
                                        <Icon />
                                    </span>
                                    <span>{label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
}