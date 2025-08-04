import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image and Values (now on the left) */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chemical Research Team"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
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

          {/* Content (now on the right) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Heama Chemicals</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 1999, Heama Chemicals has been at the forefront of chemical innovation, providing
                world-class solutions to industries ranging from pharmaceuticals to manufacturing.
                Our commitment to excellence and sustainability drives everything we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our state-of-the-art facilities and team of expert chemists, we deliver 
                precise, reliable, and innovative chemical solutions that help our clients 
                achieve their goals while maintaining the highest safety and environmental standards.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;