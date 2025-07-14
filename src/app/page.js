import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </main>
  );
}
