import React, { useState } from 'react';
import { Bot, MessageCircle, Calculator, Sparkles, Send, User } from 'lucide-react';

const GenAI: React.FC = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [projectType, setProjectType] = useState('web');
  const [complexity, setComplexity] = useState('medium');
  const [timeline, setTimeline] = useState('3-6 months');
  const [estimatedCost, setEstimatedCost] = useState('$15,000 - $25,000');

  const chatMessages = [
    { type: 'bot', message: 'Hello! I\'m SAM AI, your intelligent assistant. How can I help you today?' },
    { type: 'user', message: 'I need help with implementing AI in my business' },
    { type: 'bot', message: 'I\'d be happy to help! What type of business do you have and what specific challenges are you facing?' },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In a real implementation, this would send to an AI service
      setChatMessage('');
    }
  };

  const calculateEstimate = () => {
    let baseCost = 10000;
    
    // Adjust based on project type
    if (projectType === 'mobile') baseCost += 5000;
    if (projectType === 'ai') baseCost += 10000;
    if (projectType === 'enterprise') baseCost += 20000;
    
    // Adjust based on complexity
    if (complexity === 'simple') baseCost *= 0.7;
    if (complexity === 'complex') baseCost *= 1.5;
    
    // Adjust based on timeline
    if (timeline === '1-3 months') baseCost *= 1.2;
    if (timeline === '6+ months') baseCost *= 0.9;
    
    const minCost = baseCost * 0.8;
    const maxCost = baseCost * 1.2;
    
    setEstimatedCost(`$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`);
  };

  return (
    <section id="genai" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              GenAI & Agentic AI
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI with our intelligent agents and generative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Chat Demo */}
          <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SAM AI Assistant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Powered by Advanced GenAI</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto space-y-4 mb-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  } rounded-2xl px-4 py-2`}>
                    <div className="flex items-center mb-1">
                      {msg.type === 'user' ? <User className="w-4 h-4 mr-2" /> : <Bot className="w-4 h-4 mr-2" />}
                      <span className="text-xs opacity-70">{msg.type === 'user' ? 'You' : 'SAM AI'}</span>
                    </div>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask SAM AI anything..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* AI Project Estimator */}
          <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-white/10 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Project Estimator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get instant project estimates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI/ML Solution</option>
                  <option value="enterprise">Enterprise Software</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Complexity
                </label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="simple">Simple</option>
                  <option value="medium">Medium</option>
                  <option value="complex">Complex</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>

              <button
                onClick={calculateEstimate}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Calculate Estimate
              </button>

              <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-400/20">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-green-400 mr-2" />
                  <span className="font-medium text-green-400">Estimated Cost</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {estimatedCost}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  This is a preliminary estimate. Contact us for a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Conversational AI</h3>
            <p className="text-gray-600 dark:text-gray-300">Advanced chatbots and virtual assistants powered by large language models</p>
          </div>

          <div className="text-center p-6 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Intelligent Agents</h3>
            <p className="text-gray-600 dark:text-gray-300">Autonomous AI agents that can perform complex tasks and make decisions</p>
          </div>

          <div className="text-center p-6 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Content Generation</h3>
            <p className="text-gray-600 dark:text-gray-300">AI-powered content creation for marketing, documentation, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAI;