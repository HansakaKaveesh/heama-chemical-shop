"use client";
import {
  FaCheckCircle,
  FaLeaf,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaPenFancy,
  FaTags,
  FaFlask,
  FaNewspaper,
  FaBoxOpen,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    name: "Industry News",
    icon: <FaNewspaper className="text-blue-600 text-2xl" />,
    href: "/blog/category/industry-news",
    color: "from-blue-100 to-blue-50",
  },
  {
    name: "Research",
    icon: <FaFlask className="text-cyan-600 text-2xl" />,
    href: "/blog/category/research",
    color: "from-cyan-100 to-cyan-50",
  },
  {
    name: "Sustainability",
    icon: <FaLeaf className="text-green-600 text-2xl" />,
    href: "/blog/category/sustainability",
    color: "from-green-100 to-green-50",
  },
  {
    name: "Product Updates",
    icon: <FaBoxOpen className="text-yellow-600 text-2xl" />,
    href: "/blog/category/product-updates",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    name: "Safety Tips",
    icon: <FaShieldAlt className="text-red-600 text-2xl" />,
    href: "/blog/category/safety-tips",
    color: "from-red-100 to-red-50",
  },
];

const featuredPosts = [
  {
    title: "The Future of Green Chemistry",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Priya Sharma",
    date: "July 2025",
    desc: "Explore how sustainable practices are shaping the chemical industry for a greener tomorrow.",
    link: "/blog/green-chemistry",
    badge: "Trending",
  },
  {
    title: "Safety First: Best Practices in Chemical Handling",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    author: "Mr. John Lee",
    date: "June 2025",
    desc: "A comprehensive guide to ensuring safety in laboratories and industrial environments.",
    link: "/blog/chemical-safety",
    badge: "Editor's Pick",
  },
  {
    title: "Innovations in Industrial Chemicals",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    author: "Ms. Aisha Patel",
    date: "May 2025",
    desc: "Discover the latest breakthroughs and technologies in industrial chemical production.",
    link: "/blog/industrial-innovations",
    badge: "New",
  },
];

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/3696093.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70 backdrop-blur-sm" />
        <div
          className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            Heama Chemicals Blog
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Insights, news, and updates from the world of chemicals, innovation, and sustainability. Stay informed with our latest articles and expert tips.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center gap-2">
          <FaTags className="text-cyan-600" />
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`group flex flex-col items-center bg-gradient-to-br ${cat.color} hover:scale-105 border border-cyan-100 rounded-xl p-5 shadow transition-transform duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              tabIndex={0}
              aria-label={cat.name}
            >
              <div className="mb-2">{cat.icon}</div>
              <span className="font-semibold text-blue-800 group-hover:text-cyan-700 text-base text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredPosts.map((post, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-0 flex flex-col overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {post.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-blue-900 text-lg mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaPenFancy className="text-cyan-600" />
                  <span className="font-medium">{post.author}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{post.desc}</p>
                <Link
                  href={post.link}
                  className="text-cyan-700 font-semibold hover:underline mt-auto"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-gradient-to-br from-cyan-100 to-blue-100 py-20 px-6 text-center"
        data-aos="zoom-in-up"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex justify-center items-center gap-2">
          <FaCheckCircle className="text-cyan-600" />
          Want to Stay Updated?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          Subscribe to our newsletter for the latest articles, industry news, and exclusive insights from Heama Chemicals.
        </p>
        <form
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 justify-center"
          action="/subscribe"
          method="GET"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full border border-cyan-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
          >
            Subscribe Now
          </button>
        </form>
      </section>
    </main>
  );
}
