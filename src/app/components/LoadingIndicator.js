"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-[9999]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* Morphing loader */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#269af2] to-blue-600 animate-morph shadow-lg shadow-blue-500/30" />
          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#269af2] to-blue-600 animate-morph opacity-50 blur-md" style={{ animationDelay: '-0.5s' }} />
        </div>

        {/* Brand */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Heama <span className="text-[#269af2]">Chemicals</span>
          </h1>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#269af2] animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
            transform: rotate(90deg) scale(1.05);
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
            transform: rotate(180deg) scale(1);
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
            transform: rotate(270deg) scale(1.05);
          }
        }
        .animate-morph {
          animation: morph 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}