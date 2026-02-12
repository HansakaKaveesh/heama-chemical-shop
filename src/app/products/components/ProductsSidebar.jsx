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
      <div className="lg:hidden sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
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
                  className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-all duration-200 shadow-sm ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md scale-[1.02]"
                      : "bg-white/90 text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${
                      active
                        ? "bg-white/10"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="text-[0.7rem]" />
                  </span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
        <div className="relative">
          {/* Soft glow behind card */}
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-emerald-400/20 blur-2xl opacity-60" />
          {/* Sidebar card */}
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.9)] p-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">
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
                    className={`relative w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-sm text-left transition-all duration-200 ${
                      active
                        ? "text-blue-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50/80"
                    }`}
                  >
                    {/* Left active bar */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 rounded-full transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-b from-blue-500 to-cyan-500 opacity-100"
                          : "opacity-0"
                      }`}
                    />

                    {/* Icon pill */}
                    <span
                      className={`inline-flex items-center justify-center h-7 w-7 rounded-full text-xs shadow-sm transition-colors duration-200 ${
                        active
                          ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon />
                    </span>

                    <span className="truncate">{label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}