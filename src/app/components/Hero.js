import React from 'react';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className=" bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Advanced Chemical 
                <span className="text-blue-600"> Solutions</span> for Tomorrow
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Leading the industry through groundbreaking chemical innovations, we specialize in sustainable processes, state-of-the-art research, and next-generation formulations that redefine what’s possible in science and industry. Our team of seasoned chemists, engineers, and researchers is committed to achieving excellence in every molecule—pushing the boundaries of quality, safety, and environmental responsibility. We don’t just supply chemicals; we engineer trust, drive transformation, and build lasting partnerships that empower industries to excel in a rapidly evolving global landscape. With decades of proven expertise and an unwavering focus on progress, we deliver dependable solutions that fuel tomorrow’s innovations today.
              </p>

            </div>

         

 
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chemical Laboratory"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;