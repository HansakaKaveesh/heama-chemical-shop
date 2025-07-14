import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Heama Chemicals</h2>
          <p className="text-sm text-gray-300">
            Supplying high-quality chemicals for industrial, medical, and scientific excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-sm text-center text-gray-400 space-y-2">
        <p>&copy; {new Date().getFullYear()} Heama Chemicals. All rights reserved.</p>
        <p className="flex justify-center items-center gap-2 text-gray-300">
          {/* Logo (optional image or icon) */}
          Designed & Developed by <img src="/singale logo.png" alt="Frithcode Logo" className="h-5" /><span className="text-white font-semibold ml-1">FrithCode Technologies</span>
        </p>
      </div>
    </footer>
  );
}
