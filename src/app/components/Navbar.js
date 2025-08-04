"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, FlaskRound as Flask } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // 🔁 important

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setHasMounted(true); // ✅ only render dynamic behavior after mount

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

  // ❌ Avoid hydration mismatch
  if (!hasMounted) {
    return null;
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
         {/* Logo */}
<div className="flex items-center space-x-2">
  <img
    src="/images/logo.png" // <-- Replace with your logo image path or URL
    alt="Heama Logo"
    className="h-10 w-20 "
  />
  
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600 transition">Products</a>
            <a href="/manufacturing" className="text-gray-700 hover:text-blue-600 transition">Manufacturing</a>
            
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </a>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Products</a>
              <a href="/manufacturing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Manufacturing</a>
              
              <a href="/contact" className="w-full block bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mt-4 transition text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
