"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Example product names
  const products = [
    "Basic Chromium Sulphate",
    "Sodium Dichromate",
    "Potassium Dichromate",
    "Chromic Acid",
    "Sodium Sulphate",
    "Sodium Sulphite",
    "Sodium Thiosulphate",
    "Sodium Meta Bisulphite",
    "Sodium Bi Sulphite",
    "Sodium Sulphide",
  ];

  return (
    <section
      className="relative text-white min-h-[80vh] h-screen flex items-center px-2 md:px-6 text-center py-10 md:py-0 overflow-hidden"
      aria-label="Hero section showcasing innovative chemical solutions"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Chemistry Background Video _ Chemical Footage in HD 4K.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-blue-900/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center w-full">
        <span
          className="mb-6 inline-block bg-white/20 border border-white/30 text-cyan-100 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase shadow backdrop-blur-sm"
          data-aos="fade-in"
        >
          Trusted by Industry Leaders
        </span>

        {/* Typing Effect Heading */}
        <h1
          className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg transition-transform transform hover:scale-105 will-change-transform"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={[
              "Chemical Solutions", 2000,
              "Sustainable & Reliable", 2000,
              "Trusted Globally", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <h2
          className="text-base md:text-2xl font-medium mb-4 text-cyan-100/90"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empowering Progress, Ensuring Quality
        </h2>

        <p
          className="text-sm md:text-xl mb-8 opacity-90"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          HEMA CHEMICAL is a leading manufacturer of BASIC CHROMIUM SULPHATE operating for more than 30 years.
        </p>

        <a
          href="#products"
          className="inline-block bg-white text-blue-800 font-semibold px-6 md:px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition duration-300 transform hover:scale-105 will-change-transform"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore Our Products
        </a>

        <p
          className="mt-6 text-xs md:text-base opacity-80"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Discover how our solutions can enhance your projects.
        </p>

        {/* --- Product Name Slider --- */}
        <div className="w-full overflow-x-hidden mt-8 md:mt-10" >
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            pauseOnClick={true}
            className="text-cyan-100 text-sm md:text-lg font-semibold"
          >
            {products.map((product, idx) => (
              <span
                key={idx}
                className="mx-4 md:mx-8 whitespace-nowrap"
              >
                {product}
              </span>
            ))}
          </Marquee>
        </div>
        {/* --- End Product Name Slider --- */}
      </div>
    </section>
  );
}