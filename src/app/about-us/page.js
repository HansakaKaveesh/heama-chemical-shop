import {
  FaCheckCircle,
  FaLeaf,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/3696093.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70 backdrop-blur-sm" />

        <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            About Heama Chemicals
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Heama Chemicals is a trusted supplier of high-quality chemicals for
            industrial, medical, and scientific applications. With decades of
            experience, we are committed to excellence, innovation, and
            sustainability in every product we offer.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-cyan-600" />
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower industries and researchers with reliable, high-purity
              chemicals while upholding the highest standards of safety,
              quality, and environmental responsibility.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" />
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a global leader in chemical solutions, driving progress and
              sustainability for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Our Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaShieldAlt className="text-blue-700 text-3xl" />,
              title: "Quality",
              desc: "We never compromise on the quality of our products and services.",
            },
            {
              icon: <FaUsers className="text-blue-700 text-3xl" />,
              title: "Integrity",
              desc: "We conduct our business with honesty, transparency, and respect.",
            },
            {
              icon: <FaLightbulb className="text-blue-700 text-3xl" />,
              title: "Innovation",
              desc: "We embrace new ideas and technologies to serve our clients better.",
            },
            {
              icon: <FaLeaf className="text-green-600 text-3xl" />,
              title: "Sustainability",
              desc: "We are committed to eco-friendly practices and a greener future.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-blue-50 hover:bg-white transition shadow-md p-6 rounded-xl flex gap-4 items-start border border-blue-100"
            >
              {val.icon}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Dr. Priya Sharma",
              title: "R&D Head",
              image: "/team1.jpg",
              desc: "Expert in chemical research and innovation.",
            },
            {
              name: "Mr. John Lee",
              title: "Procurement Manager",
              image: "/team2.jpg",
              desc: "Ensures timely and quality sourcing for clients.",
            },
            {
              name: "Ms. Aisha Patel",
              title: "Production Supervisor",
              image: "/team3.jpg",
              desc: "Leads our manufacturing with precision and care.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="font-semibold text-blue-900 text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.title}</p>
              <p className="text-sm text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-cyan-100 to-blue-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex justify-center items-center gap-2">
          <FaCheckCircle className="text-cyan-600" />
          Why Choose Heama Chemicals?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          We combine expertise, reliability, and a customer-first approach to
          deliver the best chemical solutions for your needs. Join our growing
          list of satisfied clients and experience the Heama difference!
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
