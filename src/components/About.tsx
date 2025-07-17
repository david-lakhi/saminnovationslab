import React from 'react';
import { Brain, Code, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-First Approach",
      description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to deliver scalable, future-proof solutions."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data-Driven Results",
      description: "Our strategies are powered by comprehensive analytics and real-time insights for measurable growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "A diverse team of AI engineers, developers, and marketers working together to exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Innovation",
      description: "Fast-track your digital transformation with our agile development and deployment processes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Industry-leading security measures to protect your data and maintain compliance standards."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About SAM Innovations Lab
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            We are a pioneering digital agency specializing in <strong>Software development</strong>, 
            <strong> AI integration</strong>, and <strong>Marketing automation</strong>. Our mission is to 
            empower businesses to thrive in the AI era through innovative solutions that drive growth, 
            efficiency, and competitive advantage.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">Transforming businesses since 2020</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To democratize AI technology and make it accessible to businesses of all sizes, 
              helping them unlock their full potential through intelligent automation, 
              data-driven insights, and innovative digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;