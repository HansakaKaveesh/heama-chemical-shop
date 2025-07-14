"use client"
import React, { useState } from "react";
import {
  FaFlask,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-blue-800/80 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide flex-shrink-0">
          <FaFlask className="text-cyan-300" />
          <span className="text-white">Heama Chemicals</span>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base font-medium justify-center flex-grow absolute md:static top-full left-0 right-0 bg-blue-800/90 md:bg-transparent rounded-b-xl md:rounded-none px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <a
              href="#about"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#why"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social icons (keep visible on all screen sizes, or you can hide on mobile by adding md:flex) */}
        <div className="hidden md:flex space-x-4 text-lg flex-shrink-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            <FaFacebookF className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
          >
            <FaTwitter className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
          >
            <FaLinkedinIn className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
          >
            <FaInstagram className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
        </div>
      </div>
    </nav>
  );
}
