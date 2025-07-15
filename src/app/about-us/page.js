// app/about/page.jsx
export const metadata = {
  title: "About Us | Heama Chemicals",
  description: "Learn more about Heama Chemicals, our mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
<section className="relative max-w-full mx-auto text-center mb-16 overflow-hidden shadow-2xl">
  {/* Background image layer */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: "url('/3696093.jpg')",
    }}
    aria-hidden="true"
  />

  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70 backdrop-blur-sm" />

  {/* Content */}
  <div className="relative z-10 px-8 py-24 md:py-32 lg:py-40">
    <h1 className="text-5xl md:text-5xl font-extrabold text-white mb-6">
      About Heama Chemicals
    </h1>
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
      Heama Chemicals is a trusted supplier of high-quality chemicals for industrial,
      medical, and scientific applications. With decades of experience, we are committed
      to excellence, innovation, and sustainability in every product we offer.
    </p>
  </div>
</section>


      <section className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To empower industries and researchers with reliable, high-purity chemicals, while upholding the highest standards of safety, quality, and environmental responsibility.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To be a global leader in chemical solutions, driving progress and sustainability for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-blue-700 mb-2">Quality</h3>
            <p className="text-gray-600">We never compromise on the quality of our products and services.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-blue-700 mb-2">Integrity</h3>
            <p className="text-gray-600">We conduct our business with honesty, transparency, and respect.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-blue-700 mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace new ideas and technologies to serve our clients better.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-blue-700 mb-2">Sustainability</h3>
            <p className="text-gray-600">We are committed to eco-friendly practices and a greener future.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example team members, replace with your own */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/team1.jpg" alt="Dr. Priya Sharma" className="w-20 h-20 rounded-full object-cover mb-3" />
            <div className="font-semibold text-blue-900">Dr. Priya Sharma</div>
            <div className="text-sm text-gray-500 mb-2">R&D Head</div>
            <p className="text-xs text-gray-600 text-center">Expert in chemical research and innovation.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/team2.jpg" alt="Mr. John Lee" className="w-20 h-20 rounded-full object-cover mb-3" />
            <div className="font-semibold text-blue-900">Mr. John Lee</div>
            <div className="text-sm text-gray-500 mb-2">Procurement Manager</div>
            <p className="text-xs text-gray-600 text-center">Ensures timely and quality sourcing for clients.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src="/team3.jpg" alt="Ms. Aisha Patel" className="w-20 h-20 rounded-full object-cover mb-3" />
            <div className="font-semibold text-blue-900">Ms. Aisha Patel</div>
            <div className="text-sm text-gray-500 mb-2">Production Supervisor</div>
            <p className="text-xs text-gray-600 text-center">Leads our manufacturing with precision and care.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Heama Chemicals?</h2>
        <p className="text-gray-700 mb-6">
          We combine expertise, reliability, and a customer-first approach to deliver the best chemical solutions for your needs. Join our growing list of satisfied clients and experience the Heama difference!
        </p>
        <a
          href="/#contact"
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors mb-16"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}