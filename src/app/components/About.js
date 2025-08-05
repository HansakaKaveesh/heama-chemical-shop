"use client";
import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate results with meticulous attention to detail in every project."
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge research and advanced methodologies."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building trust through transparency, ethical practices, and reliable partnerships."
  }
];

const achievements = [
  "ISO 9001:2015 Certified Quality Management",
  "25+ Years of Industry Experience",
  "500+ Successful Projects Completed",
  "State-of-the-Art Laboratory Facilities",
  "Expert Team of Certified Chemists",
  "Environmental Sustainability Focus"
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://cgu-odisha.ac.in/wp-content/uploads/2024/03/2150365017-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Colored Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-white/80 to-white/90 z-0"></div>
      {/* Optional: Add a subtle pattern overlay */}
      {/* <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image and Values */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chemical Research Team"
                className="rounded-2xl shadow-xl w-full h-80 object-cover border-4 border-white"
              />
              {/* Decorative circle */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-2xl z-0"></div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-2">
                Why Choose Us
              </span>
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0 shadow">
                      <value.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content and Achievements */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-2">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Heama Chemicals</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since 1999, Heama Chemicals has been at the forefront of chemical innovation, providing
                world-class solutions to industries ranging from pharmaceuticals to manufacturing.
                Our commitment to excellence and sustainability drives everything we do.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our state-of-the-art facilities and team of expert chemists, we deliver 
                precise, reliable, and innovative chemical solutions that help our clients 
                achieve their goals while maintaining the highest safety and environmental standards.
              </p>
            </div>

            {/* Achievements as grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-3 shadow hover:shadow-md transition">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

   

      {/* Fade-in animation for values */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default About;