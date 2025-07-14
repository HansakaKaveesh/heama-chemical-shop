"use client";
export default function Hero() {
  return (
    <section
      className="relative text-white h-screen flex items-center px-6 text-center py-10 md:py-0 overflow-hidden"
      aria-label="Hero section showcasing innovative chemical solutions"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Chemistry Background Video _ Chemical Footage in HD 4K.mp4" // <-- Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-blue-900/50  z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="mb-6 inline-block bg-white/20 border border-white/30 text-cyan-100 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase shadow backdrop-blur-sm animate-fade-in">
          Trusted by Industry Leaders
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg transition-transform transform hover:scale-105 will-change-transform animate-fade-in-up">
          Innovative Chemical Solutions
        </h1>

        {/* Subheading */}
        <h2 className="text-lg md:text-2xl font-medium mb-4 text-cyan-100/90 animate-fade-in-up delay-100">
          Empowering Progress, Ensuring Quality
        </h2>

        {/* Description */}
        <p className="text-base md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
          HEMA CHEMICAL INDUSTRIES is a leading manufacturer of BASIC CHROMIUM SULPHATE operating for more than 30 years.
        </p>

        {/* CTA Button */}
        <a
          href="#products"
          className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition duration-300 transform hover:scale-105 will-change-transform animate-fade-in-up delay-300"
        >
          Explore Our Products
        </a>

        {/* Secondary Text */}
        <p className="mt-6 text-sm md:text-base opacity-80 animate-fade-in-up delay-400">
          Discover how our solutions can enhance your projects.
        </p>
      </div>

      {/* Animations (add to your global CSS or Tailwind config if needed) */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1s both; }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}