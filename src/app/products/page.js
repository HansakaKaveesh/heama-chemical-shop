"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  FaArrowDown,
  FaSearch,
  FaFlask,
  FaPumpSoap,
  FaHandsWash,
} from "react-icons/fa";

export default function ProductsPage() {
  // Animation and search state
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType] = useState("grid");

  // Product data
  const products = [
    {
      title: "Basic Chromium Sulphate Liquid",
      description:
        "A liquid form of chromium sulphate for easier application in industrial tanning processes.",
      image: "/images/pro2.jpg",
    },
    {
      title: "Basic Chromium Sulphate",
      description:
        "Used mainly in leather tanning, this compound provides excellent chromium content and stability.",
      image: "/images/pro1.jpg",
    },
    {
      title: "Saccharin Insoluble",
      description:
        "A form of saccharin used in specialized formulations, especially where solubility control is important.",
      image: "/images/pro7.jpg",
    },
    {
      title: "Manganese Dioxide",
      description:
        "Commonly used in dry-cell batteries and in the glass industry for coloring and oxidation.",
      image: "/images/pro4.jpg",
    },
    {
      title: "Saccharin Sodium",
      description:
        "A calorie-free artificial sweetener used in food and beverages as a sugar substitute.",
      image: "/images/pro5.jpg",
    },
    {
      title: "Sodium Nitrate",
      description:
        "Used in fertilizers, explosives, and as a preservative in the food industry.",
      image: "/images/pro6.jpg",
    },
    {
      title: "Boric Acid",
      description:
        "Widely used in glass, ceramics, agriculture, and as a flame retardant in multiple industries.",
      image: "/images/pro3.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/about.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70 backdrop-blur-sm" />
        <div
          className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            Our Products
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Our products are designed to deliver reliable performance and meet industry standards across cleaning, industrial, and specialty applications.
          </p>
        </div>
      </section>

      {/* Scroll Prompt Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 bg-gradient-to-r from-blue-50 via-white to-cyan-50 relative z-20">
        <p className="text-base sm:text-lg font-medium mb-2 text-gray-700 animate-pulse">
          Click to see more
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button
            onClick={() =>
              document.getElementById("our-products")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <FaPumpSoap className="text-white text-lg" />
            Our Products
          </button>
          <button
            onClick={() =>
              document.getElementById("our-chemicals")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-gray-200 text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105"
          >
            <FaFlask className="text-blue-700 text-lg" />
            Our Chemicals
          </button>
        </div>
        <div
          onClick={() =>
            document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer group relative"
        >
          <div className="flex flex-col items-center animate-bounce text-blue-700 text-2xl ">
            <FaArrowDown />
          </div>
        </div>
      </section>

      {/* Wash/Cleaning Product Buttons */}
      <section className="mt-4 px-6 py-4 flex flex-wrap justify-center gap-6" data-aos="fade-up">
        {["Hand Wash", "Dish Wash", "Tile Cleaner", "Hand Sanitizer"].map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-white text-blue-900 font-medium px-4 py-2 rounded-full border border-blue-300 hover:bg-blue-200 transition duration-200 shadow-sm"
          >
            <FaHandsWash className="text-blue-700" />
            {item}
          </button>
        ))}
      </section>

      {/* Product Category Buttons */}
      <section className="mt-5 px-6 py-6" data-aos="fade-up">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product, index) => (
            <button
              key={index}
              className="flex items-center gap-2 bg-blue-200 text-blue-900 font-medium px-4 py-2 rounded-full hover:bg-blue-300 transition duration-200 shadow-sm"
            >
              <FaFlask className="text-blue-800" />
              {product.title}
            </button>
          ))}
        </div>
      </section>

      {/* About Heama Products */}
      <section className="max-w-5xl mx-auto px-6 text-center py-12" data-aos="fade-up">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Heama Logo"
            width={120}
            height={50}
            className="opacity-60"
          />
        </div>
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-black inline-block relative">
          About Heama Products
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          <strong>Heama Chemicals</strong> is a leading supplier and distributor of premium-quality industrial chemicals. With a strong commitment to safety, innovation, and customer satisfaction, we provide a wide range of chemical solutions for industrial, pharmaceutical, agricultural, and research applications worldwide.
        </p>
      </section>

      {/* Two Images Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-10 mb-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-20" data-aos="fade-up">
        <div className="overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[250px]">
          <Image
            src="/images/im1.jpg"
            alt="Image One"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[250px]">
          <Image
            src="/images/hero-bg4.jpg"
            alt="Image Two"
            width={400}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Our Products Section */}
      <div id="our-products" ></div>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-20 mb-12 lg:mb-12" data-aos="fade-up">
        <div className="text-center mb-20 relative">
          <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
          {[
            {
              title: "Hand Wash",
              description: "Gentle and effective formula for clean, soft hands.",
              image: "/images/handwash.jpg",
            },
            {
              title: "Dishwash",
              description: "Tough on grease, gentle on hands. Sparkling clean dishes every time.",
              image: "/images/dishwash.jpg",
            },
            {
              title: "Tile Cleaner",
              description: "Removes tough stains and restores shine to tiles and surfaces.",
              image: "/images/tilecleaner.jpg",
            },
            {
              title: "Sanitizer",
              description: "Fast-acting sanitizer to kill 99.9% of germs and bacteria.",
              image: "/images/sani.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={350}
                className="object-cover w-full h-60"
              />
              <div className="p-4 flex-1 w-full">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Chemicals Section */}
      <div id="our-chemicals"></div>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-20" data-aos="fade-up">
        <div className="text-center relative mb-10">
          <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
            Our Chemicals
          </h2>
        </div>
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center px-6 sm:px-10 py-4 max-w-7xl mx-auto gap-4">
          <div className="relative w-full sm:w-1/4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border text-gray-600 border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute top-2.5 right-3 text-gray-500" />
          </div>
        </div>
        {/* Chemical Products */}
        <div
          className={`text-black py-10 px-4 sm:px-10 grid gap-8 max-w-7xl mx-auto ${
            viewType === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={viewType === "grid" ? 160 : 200}
                height={viewType === "grid" ? 100 : 150}
                className={`object-cover w-full h-48`}
              />
              <div className="p-4 flex-1 w-full">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}