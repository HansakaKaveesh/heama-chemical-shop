export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <p className="mb-10 text-gray-700">
          Reach out to our team for inquiries or quotes.
        </p>
        <form className="space-y-6" noValidate>
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-semibold text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-y"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-8 py-3 rounded shadow hover:bg-blue-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
