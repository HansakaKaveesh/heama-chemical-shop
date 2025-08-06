"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { image: "/images/heri01.png" },
  { image: "/images/heri02.png" },
  { image: "/images/hero03.png" },
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
      {/* Sliding Backgrounds */}
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-hidden="true"
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Fixed Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-24 max-w-4xl mt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
           Welcome to <br />
                  <span className="text-blue-600">Heama Chemicals</span>
        </h1>
        <p className="text-lg md:text-1xl mb-8 drop-shadow-lg text-font-inter">
          Heama Chemicals is a trusted Sri Lankan chemical supplier delivering high-quality industrial and specialty chemicals since 1999. With a reputation built on reliability, innovation, and technical excellence, we proudly serve a wide range of industries—including cosmetics, water treatment, construction, textiles, and laboratory research.
                  <br /><br />
                  As an ISO 9001:2015 certified company, we are committed to supplying safe, consistent, and sustainable chemical solutions tailored to the needs of modern industries. Our expert team and expanding product portfolio ensure that every client receives value, performance, and peace of mind.
                  <br /><br />
                  Whether you&apos;re a manufacturer, researcher, or industrial service provider, Heama Chemicals is your reliable partner for advanced chemical solutions—locally sourced, globally trusted.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
        >
          View Products
        </Link>
      </div>

  
    </section>
  );
}