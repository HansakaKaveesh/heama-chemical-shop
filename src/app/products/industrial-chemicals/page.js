"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaFlask, FaAtom, FaMicroscope } from "react-icons/fa";

// Fade-up on scroll
function useScrollFadeIn() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, isVisible];
}

function ProductCard({ image, title, subtitle, description, icon: Icon, accent = "text-emerald-500" }) {
  const [ref, isVisible] = useScrollFadeIn();

  return (
    <article
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-100 ring-1 ring-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 will-change-transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      aria-label={title}
    >
      {/* Image */}
      <div className="relative h-60">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent transition-colors duration-300 group-hover:from-black/25 group-hover:via-black/5" />
        {/* Icon + Title */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-white grid place-items-center shadow-lg ring-1 ring-white/50">
            {Icon ? <Icon className={`${accent} text-xl`} /> : <FaFlask className="text-emerald-600 text-xl" />}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-4 px-4">
          <h4 className="text-white text-lg font-semibold drop-shadow">{title}</h4>
        </div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <h5 className="mt-4 px-4 text-center">
          {subtitle}
        </h5>
      )}

      {/* Description + CTAs */}
      <div className="p-4">
        <p
          className="text-gray-600 text-sm"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow hover:bg-blue-700"
          >
            Request Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ring-1 ring-blue-200 text-blue-700 hover:bg-blue-50"
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}

export default function IndustrialChemicalsPage() {
  return (
    <main className="relative bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      <style jsx global>{`
        .glow-flash {
          text-shadow: 0 0 0 transparent;
          animation: glow 2.6s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 0 rgba(37, 99, 235, 0); }
          50% { text-shadow: 0 4px 24px rgba(37, 99, 235, 0.35); }
        }
        .bg-dots {
          background-image: radial-gradient(rgba(0,0,0,.06) 1px, transparent 1px);
          background-size: 18px 18px;
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/about.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70 backdrop-blur-[2px]" />
        <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow glow-flash">Our Chemicals</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            High-purity industrial chemicals for consistent, reliable performance.
          </p>
        </div>
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      </section>

      {/* Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
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
            },
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}