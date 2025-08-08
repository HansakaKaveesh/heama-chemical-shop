"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const slidesDesktop = [
  { image: "/images/heri01.png" },
  { image: "/images/heri02.png" },
  { image: "/images/hero03.png" },
];

const slidesMobile = [
  { image: "/images/heri01.png" },
  { image: "/images/heri02.png" },
  { image: "/images/hero03.png" },
];

// Mobile background image (single image or you can choose any)
const mobileBgImage = "/images/hero-bg.jpg";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobileSliderRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % (isMobile ? slidesMobile.length : slidesDesktop.length));
  }, [isMobile]);

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, [nextSlide]);

  useEffect(() => {
    if (isMobile && mobileSliderRef.current) {
      const container = mobileSliderRef.current;
      const slideWidth = container.firstChild?.clientWidth || 0;
      container.scrollTo({
        left: current * (slideWidth + 16), // 16 = space-x-4
        behavior: "smooth",
      });
    }
  }, [current, isMobile]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Desktop Sliding Backgrounds */}
      <div
        className="hidden sm:flex absolute inset-0 w-full h-full flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-hidden="true"
      >
        {slidesDesktop.map((slide, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Mobile Background behind content - only on mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${mobileBgImage})` }}
        aria-hidden="true"
      />
      {/* Dark overlay on mobile background */}
<div className="sm:hidden absolute inset-0 bg-black/80 z-5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full w-full text-center sm:text-left text-white px-4 sm:px-8 md:px-24 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to <br />
          <span className="text-blue-600">Heama Chemicals</span>
        </h1>

        {/* Mobile sliding images below the h1 */}
        <div
          ref={mobileSliderRef}
          className="sm:hidden flex space-x-4 overflow-x-auto no-scrollbar mb-8 w-full max-w-2xl scroll-smooth"
        >
          {slidesMobile.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-40 bg-center bg-cover  relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
             
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-lg mb-8 drop-shadow-lg font-inter font-bold max-w-2xl text-justify">
  {isMobile ? (
    <>
      Heama Chemicals is a trusted Sri Lankan chemical supplier delivering
      high-quality industrial and specialty chemicals since 1999. We serve
      industries including cosmetics, water treatment, construction, and
      textiles—locally sourced, globally trusted.
      <br />
      Whether you&apos;re a manufacturer, researcher, or industrial service
      provider, Heama Chemicals is your reliable partner for advanced
      chemical solutions locally sourced, globally trusted.
    </>
  ) : (
    <>
      Heama Chemicals is a trusted Sri Lankan chemical supplier delivering
      high-quality industrial and specialty chemicals since 1999. With a
      reputation built on reliability, innovation, and technical excellence,
      we proudly serve a wide range of industries including cosmetics, water
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
      chemical solutions locally sourced, globally trusted.
    </>
  )}
</p>

      </div>
    </section>
  );
}
