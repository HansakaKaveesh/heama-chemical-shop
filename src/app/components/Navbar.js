"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {/* Contact Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-[60] bg-blue-600 text-white text-sm transition-all duration-300 ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <span>
              <strong>Call:</strong>{" "}
              <a href="tel:+1234567890" className="underline hover:text-blue-200">
                +1 234 567 890
              </a>
            </span>
            <span className="hidden md:inline-block border-l border-blue-400 h-4 mx-2"></span>
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@heama.com" className="underline hover:text-blue-200">
                info@heama.com
              </a>
            </span>
          </div>
          {/* Social Icons - Only on desktop */}
          <div className="hidden md:flex items-center gap-3 mt-2 md:mt-0">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 px-6 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md bg-transparent"
        }`}
        style={{ top: isScrolled ? 0 : "2.5rem" }} // Adjusts for contact bar height
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Heama Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition">
                About Us
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
                Products
              </Link>
              <Link href="/manufacturing" className="text-gray-700 hover:text-blue-600 transition">
                Manufacturing
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/manufacturing"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Manufacturing
                </Link>
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white text-center px-3 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
            {/* Spacer to prevent content from being hidden behind fixed bars */}
      <div className="h-[72px] md:h-[80px]" />
    </>
  );
};

export default Header;