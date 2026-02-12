"use client"
import HeroSection from "./components/HeroSection";
import CosmeticsSection from "./components/CosmeticsSection";
import CleaningSection from "./components/CleaningSection";
import ChemicalsSection from "./components/ChemicalsSection";
import IndustrialSection from "./components/IndustrialSection";
import AgroSection from "./components/AgroSection";
import LabSection from "./components/LabSection";
import ConstructionSection from "./components/ConstructionSection";
import WaterTreatmentSection from "./components/WaterTreatmentSection";
import ProductsSidebar from "./components/ProductsSidebar";
import BackToTopButton from "./components/BackToTopButton";

export default function ConsumerProductsPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <style jsx global>{`
        .glow-flash {
          text-shadow: 0 0 0 transparent;
          animation: glow 2.6s ease-in-out infinite;
        }
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            text-shadow: 0 4px 24px rgba(37, 99, 235, 0.35);
          }
        }
        .bg-dots {
          background-image: radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          background-size: 18px 18px;
        }
        .grain {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'%3E%3C/feColorMatrix%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
          opacity: 0.5;
        }
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(36px);
          opacity: 0.6;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.75;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-120%) translateY(0) rotate(12deg);
          }
          100% {
            transform: translateX(220%) translateY(0) rotate(12deg);
          }
        }
        .animate-shine {
          animation: shine 1.25s ease-in-out forwards;
        }
      `}</style>

      {/* Full-width Hero */}
      <HeroSection />

      {/* Sidebar + Content layout */}
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar (desktop only) */}
          <ProductsSidebar />

          {/* Main product content */}
          <div className="flex-1 min-w-0">
            <CosmeticsSection />
            <CleaningSection />
            <ChemicalsSection />
            <IndustrialSection />
            <AgroSection />
            <LabSection />
            <ConstructionSection />
            <WaterTreatmentSection />
          </div>
        </div>
      </div>

      <BackToTopButton />
    </main>
  );
}