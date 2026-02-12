"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
];

// Any route that should highlight "Products"
const productRelatedRoutes = [
  "/products",
  "/industrial-chemicals",
  "/agro",
  "/lab",
  "/construction",
  "/water-treatment",
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  const productsIsActive =
    productRelatedRoutes.some((r) => pathname === r) ||
    pathname?.startsWith("/products/") ||
    pathname?.startsWith("/industrial-chemicals/");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_-22px_rgba(15,23,42,0.9)] border-b border-slate-100"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-md border-b border-white/10"
      }`}
      style={{ WebkitBackdropFilter: "blur(14px)" }}
    >
      {/* Glow line under header */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-auto">
              <Image
                src={isScrolled ? "/images/logo.png" : "/logo W.png"}
                alt="Heama Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain drop-shadow-sm transition transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/products"
                  ? productsIsActive
                  : pathname === link.href;

              const baseColor = isScrolled
                ? "text-slate-700 hover:text-blue-700"
                : "text-slate-100 hover:text-blue-200";

              const activeColor = isScrolled
                ? "text-blue-700"
                : "text-emerald-100";

              const colorClasses = isActive ? activeColor : baseColor;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-1 pb-1 font-medium text-sm tracking-wide transition-colors
                    ${colorClasses}
                    after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                    after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-200 border ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:shadow-lg"
                  : "bg-blue-600/90 text-white border-white/40 hover:bg-white/90 hover:text-blue-700"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg border ml-auto transition-all duration-200 ${
              isScrolled
                ? "bg-white/90 border-slate-200 hover:bg-blue-50"
                : "bg-slate-900/60 border-slate-700/70 hover:bg-slate-800"
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-700" />
            ) : (
              <Menu className="h-6 w-6 text-blue-100" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 origin-top ${
            isMenuOpen
              ? "max-h-[420px] opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-95"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 border-t border-slate-200 rounded-b-2xl shadow-xl">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/products"
                  ? productsIsActive
                  : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-3 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;