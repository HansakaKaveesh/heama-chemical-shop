
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <Contact />
      
    </main>
  );
}
