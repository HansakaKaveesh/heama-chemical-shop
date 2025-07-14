"use client";
import { FaCheckCircle, FaFlask, FaLeaf, FaGlobe, FaUserTie } from "react-icons/fa";

export default function ProductFeatureSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Why Choose Our Product?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the unique features and benefits that set our chemical solutions apart in the industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sticky Screenshot */}
          <div className="md:sticky md:top-24">
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-transparent bg-white bg-clip-padding bg-gradient-to-br from-cyan-100 via-white to-blue-100 p-2">
              <img
                src="/about.jpg"
                alt="Product Screenshot"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <div className="flex items-start gap-5 animate-fade-in-up">
              <div className="flex-shrink-0 mt-1">
                <FaFlask className="text-cyan-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Advanced Purity</h3>
                <p className="text-gray-700">
                  Our chemicals are manufactured with the highest standards, ensuring exceptional purity for your critical applications.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 animate-fade-in-up delay-100">
              <div className="flex-shrink-0 mt-1">
                <FaLeaf className="text-green-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Process</h3>
                <p className="text-gray-700">
                  We use sustainable and environmentally responsible production methods, minimizing our ecological footprint.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 animate-fade-in-up delay-200">
              <div className="flex-shrink-0 mt-1">
                <FaCheckCircle className="text-blue-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Certified Quality</h3>
                <p className="text-gray-700">
                  All our products are rigorously tested and certified to meet international quality and safety standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 animate-fade-in-up delay-300">
              <div className="flex-shrink-0 mt-1">
                <FaGlobe className="text-cyan-700 text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Global Distribution</h3>
                <p className="text-gray-700">
                  We serve clients worldwide with a robust logistics network, ensuring timely and safe delivery of our products.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 animate-fade-in-up delay-400">
              <div className="flex-shrink-0 mt-1">
                <FaUserTie className="text-blue-800 text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Support</h3>
                <p className="text-gray-700">
                  Our experienced team provides technical support and guidance to help you achieve the best results with our products.
                </p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:bg-cyan-700 transition-colors duration-300 font-semibold text-lg"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}