export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center px-6 text-center"
      style={{
        backgroundImage: `url('/3696093.jpg')`,
        backgroundAttachment: "fixed", // Update the image path if needed
      }}
      aria-label="Hero section showcasing innovative chemical solutions"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-600/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg transition-transform transform hover:scale-105">
          Innovative Chemical Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          We manufacture and supply high-quality chemicals for industrial, medical,
          and scientific applications worldwide.
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition duration-300 transform hover:scale-105"
        >
          Explore Our Products
        </a>
        <p className="mt-4 text-sm md:text-base opacity-80">
          Discover how our solutions can enhance your projects.
        </p>
      </div>
    </section>
  );
}
