"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    title: "Welcome to Our Site",
    description: "Discover amazing things with us.",
  },
  {
    image: "/images/hero-bg2.jpg",
    title: "Innovate & Inspire",
    description: "We bring your ideas to life.",
  },
  {
    image: "/images/hero-bg3.jpg",
    title: "Join Our Journey",
    description: "Be a part of something great.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, [current]);

  const handleManualNav = (navFn) => {
    clearInterval(slideInterval.current);
    navFn();
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-30 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">
                {slide.description}
              </p>
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
              >
                View Products
              </Link>
            </div>
          </div>
        ))}
      </div>

<button
  onClick={() => handleManualNav(prevSlide)}
  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
  aria-label="Previous Slide"
>
  <FaArrowLeft size={24} />
</button>
<button
  onClick={() => handleManualNav(nextSlide)}
  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
  aria-label="Next Slide"
>
  <FaArrowRight size={24} />
</button>

      {/* Uncomment to enable navigation dots */}
      {/* 
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualNav(() => setCurrent(idx))}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      */}
    </section>
  );
}