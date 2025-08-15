"use client";

import Image from "next/image";
import {
  FaFlask,
  FaSoap,
  FaLeaf,
  FaSprayCan,
  FaBath,
  FaTint,
  FaWater,
  FaPumpSoap,
  FaArrowDown,
  FaCar,
  FaToilet,
  FaAtom,
  FaOilCan,
  FaPaintBrush,
  FaMicroscope,
} from "react-icons/fa";
import { GiPerfumeBottle, GiWaterBottle } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";

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

export default function ProductsPage() {
  const [productsRef, productsVisible] = useScrollFadeIn();
  const [chemicalsRef, chemicalsVisible] = useScrollFadeIn();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow glow-flash">Our Products</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Our products deliver reliable performance and meet industry standards across cleaning, industrial, and specialty applications.
          </p>
        </div>
        {/* Decorative dots */}
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      </section>

      {/* Scroll Prompt */}
      <div className="w-full flex flex-col items-center justify-center py-6 relative z-20">
        <p className="text-base sm:text-lg font-medium mb-3 text-gray-700 animate-pulse">
          Click to see more
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => scrollTo("our-products")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <FaPumpSoap className="text-white text-lg" />
            Our Products
          </button>
          <button
            onClick={() => scrollTo("our-chemicals")}
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
          >
            <FaFlask className="text-blue-700 text-lg" />
            Our Chemicals
          </button>
        </div>
        <div onClick={() => scrollTo("our-products")} className="cursor-pointer group">
          <div className="flex flex-col items-center animate-bounce text-blue-700 text-2xl">
            <FaArrowDown />
          </div>
        </div>
      </div>

      {/* Our Products */}
      <section
        id="our-products"
        ref={productsRef}
        className={`mb-10 py-10 px-4 sm:px-6 lg:px-20 transition-all duration-700 ease-out ${
          productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center glow-flash text-gray-800">Our Products</h2>

        {/* Cosmetics */}
        <h3 className="text-xl font-semibold mb-8 text-black flex items-center gap-2">
          <GiPerfumeBottle className="text-emerald-600" /> Cosmetics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
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
            }, {
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
            }, {
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
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>

        <hr className="border-t border-gray-200 my-12 -mx-4 sm:-mx-6 lg:-mx-20" />

        {/* Cleaning Essentials */}
        <h3 className="text-xl font-semibold mb-8 mt-4 text-black flex items-center gap-2">
          <FaSprayCan className="text-emerald-600" /> Cleaning Essentials
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
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
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Our Chemicals */}
      <section
        id="our-chemicals"
        ref={chemicalsRef}
        className={`py-10 px-4 sm:px-6 lg:px-20 transition-all duration-700 ease-out ${
          chemicalsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center glow-flash text-gray-800">
          Our Chemicals
        </h2>

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