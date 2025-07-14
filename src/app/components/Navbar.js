import {
  FaFlask,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-blue-800/80 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide flex-shrink-0">
          <FaFlask className="text-cyan-300" />
          <span className="text-white">Heama Chemicals</span>
        </div>

        {/* Centered Navigation Links */}
        <ul className="flex space-x-8 text-sm md:text-base font-medium justify-center flex-grow">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#why"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons on the right */}
        <div className="flex space-x-4 text-lg flex-shrink-0">
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
