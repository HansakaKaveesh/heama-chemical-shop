"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleManualNav = (navFn) => {
    clearInterval(slideInterval.current);
    navFn();
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, [nextSlide]);

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
            className="w-full h-full flex-shrink-0 relative bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center right", // Show more of right side
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Optional Navigation Arrows */}
      {/* <div className="absolute z-20 top-1/2 transform -translate-y-1/2 w-full px-4 flex justify-between">
        <button
          onClick={() => handleManualNav(prevSlide)}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handleManualNav(nextSlide)}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <FaArrowRight />
        </button>
      </div> */}

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full w-full text-center sm:text-left text-white px-4 sm:px-8 md:px-24 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to <br />
          <span className="text-blue-600">Heama Chemicals</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8 drop-shadow-lg font-inter max-w-3xl">
          Heama Chemicals is a trusted Sri Lankan chemical supplier delivering
          high-quality industrial and specialty chemicals since 1999. With a
          reputation built on reliability, innovation, and technical excellence,
          we proudly serve a wide range of industries—including cosmetics, water
          treatment, construction, textiles, and laboratory research.
          <br />
          <br />
          As an ISO 9001:2015 certified company, we are committed to supplying
          safe, consistent, and sustainable chemical solutions tailored to the
          needs of modern industries. Our expert team and expanding product
          portfolio ensure that every client receives value, performance, and
          peace of mind.
          <br />
          <br />
          Whether you&apos;re a manufacturer, researcher, or industrial service
          provider, Heama Chemicals is your reliable partner for advanced
          chemical solutions—locally sourced, globally trusted.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow transition mt-4"
        >
          View Products
        </Link>
      </div>
    </section>
  );
}
