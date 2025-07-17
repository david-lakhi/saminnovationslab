import React from 'react';
import { Calendar, Clock, TrendingUp, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: Trends to Watch in 2025",
      excerpt: "Explore the latest AI trends that will shape business operations and customer experiences in the coming year.",
      author: "Alex Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      title: "Building Intelligent Chatbots: A Complete Guide",
      excerpt: "Learn how to create conversational AI that truly understands and engages with your customers.",
      author: "Sarah Mitchell",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      title: "Machine Learning for Predictive Analytics",
      excerpt: "Discover how ML algorithms can forecast trends and optimize business decisions for better outcomes.",
      author: "David Chen",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      title: "Revolutionizing Digital Marketing with AI",
      excerpt: "How artificial intelligence is transforming marketing strategies and customer engagement.",
      author: "Emily Rodriguez",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      title: "Data Security in the Age of AI",
      excerpt: "Best practices for protecting sensitive information while leveraging AI capabilities.",
      author: "Michael Park",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      title: "Automation Success Stories: Real-World Applications",
      excerpt: "Case studies of businesses that achieved remarkable results through intelligent automation.",
      author: "Lisa Thompson",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  const categories = ["All", "AI Trends", "Development", "Machine Learning", "Marketing", "Security", "Case Studies"];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Insights & Blog
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on AI, technology, and digital transformation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-gray-800/30 text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="group bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Stay Updated with AI Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for the latest AI trends, insights, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center sm:text-left"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;