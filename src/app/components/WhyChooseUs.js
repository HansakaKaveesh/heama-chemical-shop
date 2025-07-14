import { FaCheckCircle, FaLeaf, FaShippingFast } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaCheckCircle className="text-blue-600 w-8 h-8 mb-3" />,
      title: "High-Quality Chemicals",
      description: "Our chemicals meet the highest standards for research and industry.",
    },
    {
      icon: <FaLeaf className="text-green-500 w-8 h-8 mb-3" />,
      title: "Eco-Friendly Solutions",
      description: "Committed to sustainability with environmentally safe products.",
    },
    {
      icon: <FaShippingFast className="text-blue-700 w-8 h-8 mb-3" />,
      title: "Global Delivery",
      description: "Reliable shipping to customers worldwide, on time every time.",
    },
  ];

  return (
    <section id="why" className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-blue-900">
          Why Choose ChemTech?
        </h2>
        <ul className="grid md:grid-cols-3 gap-10 text-left">
          {reasons.map(({ icon, title, description }, i) => (
            <li
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <div className="flex flex-col items-center">
                {icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-700 text-center">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
