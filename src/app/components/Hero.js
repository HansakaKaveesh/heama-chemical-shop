import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/still-life-laboratory-samples.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Advanced Chemical
                  <span className="text-blue-600"> Solutions</span> for Tomorrow
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
  Heama Chemicals is a trusted Sri Lankan chemical supplier delivering high-quality industrial and specialty chemicals since 1999. With a reputation built on reliability, innovation, and technical excellence, we proudly serve a wide range of industries—including cosmetics, water treatment, construction, textiles, and laboratory research.
  <br /><br />
  As an ISO 9001:2015 certified company, we are committed to supplying safe, consistent, and sustainable chemical solutions tailored to the needs of modern industries. Our expert team and expanding product portfolio ensure that every client receives value, performance, and peace of mind.
  <br /><br />
  Whether you&apos;re a manufacturer, researcher, or industrial service provider, Heama Chemicals is your reliable partner for advanced chemical solutions—locally sourced, globally trusted.
</p>

              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chemical Laboratory"
                  className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-44 h-44 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-44 h-44 sm:w-72 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
