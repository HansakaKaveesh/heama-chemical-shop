"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFlask } from "react-icons/fa"; // 🧪 Chemical icon

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulated loading time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <FaFlask className="animate-spin text-blue-600 text-5xl drop-shadow-lg" />
    </div>
  ) : null;
}
