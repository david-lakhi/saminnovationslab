import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      title: "E-commerce AI Revolution",
      client: "TechMart Solutions",
      industry: "E-commerce",
      challenge: "Needed personalized product recommendations and automated customer service",
      solution: "Implemented AI-powered recommendation engine and intelligent chatbot",
      results: [
        { metric: "Sales Increase", value: "45%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Customer Satisfaction", value: "92%", icon: <Users className="w-5 h-5" /> },
        { metric: "Response Time", value: "3x Faster", icon: <Zap className="w-5 h-5" /> }
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI/ML", "E-commerce", "Chatbot"]
    },
    {
      title: "Healthcare Data Analytics",
      client: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive health monitoring",
      solution: "Built AI-driven analytics platform with real-time health predictions",
      results: [
        { metric: "Diagnostic Accuracy", value: "89%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Processing Speed", value: "10x Faster", icon: <Zap className="w-5 h-5" /> },
        { metric: "Cost Reduction", value: "35%", icon: <Users className="w-5 h-5" /> }
      ],
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI/ML", "Healthcare", "Analytics"]
    },
    {
      title: "Smart Manufacturing",
      client: "AutoTech Industries",
      industry: "Manufacturing",
      challenge: "Optimize production lines and reduce downtime through predictive maintenance",
      solution: "Deployed IoT sensors with AI-powered predictive maintenance system",
      results: [
        { metric: "Downtime Reduction", value: "60%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Production Efficiency", value: "25%", icon: <Zap className="w-5 h-5" /> },
        { metric: "Cost Savings", value: "$2.3M", icon: <Users className="w-5 h-5" /> }
      ],
      image: "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&w=600",
      tags: ["IoT", "AI/ML", "Manufacturing"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with AI-powered solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-400/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {study.title}
                        </h3>
                        <p className="text-blue-400 font-medium">{study.client} • {study.industry}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-400/20">
                              <div className="flex items-center mb-2">
                                <div className="text-green-400 mr-2">
                                  {result.icon}
                                </div>
                                <span className="text-xs font-medium text-green-400">{result.metric}</span>
                              </div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">
                                {result.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <span className="mr-2">View Full Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;