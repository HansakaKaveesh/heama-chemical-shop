import { FaVial, FaFlask, FaAtom } from "react-icons/fa";

const products = [
  {
    icon: <FaVial />,
    title: "Laboratory Chemicals",
    description: "High-quality chemicals for cutting-edge research laboratories.",
  },
  {
    icon: <FaFlask />,
    title: "Industrial Solutions",
    description: "Robust and sustainable solutions tailored for industrial challenges.",
  },
  {
    icon: <FaAtom />,
    title: "Pharmaceutical Ingredients",
    description: "Premium ingredients meeting the strict standards of pharma production.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 px-6 relative"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220401/pngtree-vibrant-home-cleaning-tools-under-sunny-skies-cleaning-house-chemical-photo-image_16880360.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for gradient and better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-80"></div>

      {/* Content container needs relative and higher z-index */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-16 text-blue-900 tracking-wide">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <div
              key={i}
              className="p-8 bg-white bg-opacity-90 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-3"
            >
              <div
                className="text-blue-600 mb-6 text-6xl mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100
                  hover:text-cyan-500 hover:bg-cyan-100 transition-colors duration-300
                  hover:scale-110"
              >
                {p.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{p.title}</h3>
              <p className="text-gray-700 mb-6">{p.description}</p>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold
                  hover:bg-cyan-600 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
