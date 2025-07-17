import React from 'react';
import { ChevronRight, Play, Bot, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* AI Network Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00FF88" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <line x1="100" y1="100" x2="300" y2="200" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="300" y1="200" x2="500" y2="150" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="500" y1="150" x2="700" y2="300" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="700" y1="300" x2="900" y2="200" stroke="url(#networkGradient)" strokeWidth="1" />
            <circle cx="100" cy="100" r="3" fill="#00D2FF" className="animate-ping" />
            <circle cx="300" cy="200" r="3" fill="#8B5CF6" className="animate-ping delay-1000" />
            <circle cx="500" cy="150" r="3" fill="#00FF88" className="animate-ping delay-2000" />
            <circle cx="700" cy="300" r="3" fill="#00D2FF" className="animate-ping delay-3000" />
            <circle cx="900" cy="200" r="3" fill="#8B5CF6" className="animate-ping delay-4000" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 mb-8">
            <Bot className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium">AI-First Digital Agency</span>
            <Sparkles className="w-4 h-4 ml-2 text-purple-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Innovate.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Automate.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Market.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through cutting-edge AI solutions, intelligent automation, 
            and data-driven marketing strategies for the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                Start Your AI Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Solutions Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;