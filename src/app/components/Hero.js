"use client";
import React, { useState, useEffect } from 'react';
import { Award, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "ISO 9001:2015 Certified",
    desc: "Quality management and global standards compliance.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Industry Expertise",
    desc: "25+ years serving Sri Lanka’s leading industries.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Trusted Partnerships",
    desc: "Long-term relationships with clients and suppliers.",
  },
];

// Add your hero images here
const heroImages = [
  "/images/pro1.jpg",
  "/images/pro2.jpg",
  "/images/pro3.jpg",
  "/images/pro6.jpg",
  "/images/pro5.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/still-life-laboratory-samples.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-100/60 z-0"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight drop-shadow font-playfair text-center sm:text-left">
  Welcome to <br />
  <span className="text-blue-600">Heama Chemicals</span>
</h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify font-serif">
                  Heama Chemicals is a trusted Sri Lankan chemical supplier delivering high-quality industrial and specialty chemicals since 1999. With a reputation built on reliability, innovation, and technical excellence, we proudly serve a wide range of industries—including cosmetics, water treatment, construction, textiles, and laboratory research.
                  <br /><br />
                  As an ISO 9001:2015 certified company, we are committed to supplying safe, consistent, and sustainable chemical solutions tailored to the needs of modern industries. Our expert team and expanding product portfolio ensure that every client receives value, performance, and peace of mind.
                  <br /><br />
                  Whether you&apos;re a manufacturer, researcher, or industrial service provider, Heama Chemicals is your reliable partner for advanced chemical solutions—locally sourced, globally trusted.
                </p>
              </div>
              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-3 shadow hover:shadow-md transition">
                    <div>{f.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{f.title}</div>
                      <div className="text-xs text-gray-600">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative">
              {/* Slider Images */}
              <div className="relative h-[400px] sm:h-[400px] lg:h-[850px] w-full overflow-hidden rounded-2xl shadow-2xl">
                {heroImages.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-44 h-44 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse pointer-events-none"></div>
                <div className="absolute -bottom-8 -left-4 w-44 h-44 sm:w-72 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000 pointer-events-none"></div>
              </div>
              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full border-2 border-blue-600 transition-all duration-300 ${
                      idx === current ? "bg-blue-600" : "bg-white"
                    }`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* End Image Slider */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;