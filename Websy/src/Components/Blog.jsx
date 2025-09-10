import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      content: "The landscape of web development continues to evolve at a rapid pace. In 2024, we're seeing increased adoption of AI-assisted development tools, more sophisticated low-code platforms, and greater emphasis on web accessibility. Developers are now focusing on creating more immersive experiences with WebGL and WebGPU, while also prioritizing performance and sustainability in their applications.",
      category: "Web Development",
      date: "April 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS 4",
      excerpt: "Learn how to use the newest version of Tailwind CSS to create beautiful interfaces quickly.",
      content: "Tailwind CSS 4 introduces several groundbreaking features that make it even more powerful for rapid UI development. The new version includes a redesigned JIT engine that's 30% faster, built-in dark mode variants, and extended color palettes. This article will walk you through the setup process and show you how to leverage these new features in your projects.",
      category: "CSS Frameworks",
      date: "April 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 3,
      title: "React Performance Optimization Techniques",
      excerpt: "Discover advanced techniques to optimize your React applications for better performance.",
      content: "React applications can suffer from performance issues as they grow in complexity. This comprehensive guide covers advanced optimization techniques including memoization with React.memo and useMemo, code splitting with React.lazy, virtualization for long lists, and leveraging the React DevTools profiler. We'll also explore the latest Concurrent Features in React 18 and how they can improve perceived performance.",
      category: "React",
      date: "April 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Alex Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 4,
      title: "Building Scalable APIs with GraphQL",
      excerpt: "Learn how to design and build scalable APIs using GraphQL for your applications.",
      content: "GraphQL has revolutionized how we think about API design and client-server communication. This article dives deep into building scalable GraphQL APIs that can handle millions of requests. We cover schema design best practices, efficient resolver patterns, caching strategies, and how to implement authentication and authorization. You'll also learn about common pitfalls and how to avoid them.",
      category: "API Development",
      date: "March 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Priya Sharma",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 5,
      title: "Introduction to Cloud Computing with AWS",
      excerpt: "A beginner's guide to understanding and using AWS cloud services for your projects.",
      content: "Amazon Web Services (AWS) offers over 200 fully-featured services from data centers globally. This beginner's guide will help you navigate the AWS ecosystem, starting with the core services like EC2 for computing, S3 for storage, and RDS for databases. We'll walk through setting up your first VPC, deploying a simple web application, and implementing basic security measures to protect your infrastructure.",
      category: "Cloud Computing",
      date: "March 22, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "James Wilson",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 6,
      title: "UI/UX Best Practices for Modern Applications",
      excerpt: "Essential UI/UX principles that every developer should know when creating user interfaces.",
      content: "Great UI/UX design is crucial for the success of any digital product. This article covers fundamental principles that bridge the gap between design and development. We explore responsive design patterns, accessibility considerations, micro-interactions that enhance user experience, and how to conduct effective usability testing. You'll learn practical techniques that can be implemented immediately to improve your projects.",
      category: "UI/UX Design",
      date: "March 15, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Emma Thompson",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by category and search query
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const searchedPosts = searchQuery 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts;

  // Close detailed view
  const closeDetailView = () => {
    setSelectedPost(null);
  };

  // Handle newsletter subscription
  const handleSubscription = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscriptionStatus('Please enter a valid email address.');
      return;
    }
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_ov629rm',
        'template_lwqkh1f',
        {
          to_email: 'traveligo00@gmail.com',
          from_email: email,
          website: 'Traveligo',
          reply_to: email
        },
        '37pN2ThzFwwhwk7ai'
      );
      
      setSubscriptionStatus('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubscriptionStatus('Sorry, there was an error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold mr-3">
              W
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Websy Technologies</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-blue-600 font-medium">Blog</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Websy Technologies Blog</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Insights, tutorials, and updates from the Websy team on web development, design, and technology trends.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="text" 
              placeholder="Search blog posts..." 
              className="flex-grow px-4 py-3 rounded-l-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search results info */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <p className="text-slate-600">
              {searchedPosts.length} post{searchedPosts.length !== 1 ? 's' : ''} found for "{searchQuery}"
              {searchQuery && <button className="ml-4 text-blue-600 hover:text-blue-800" onClick={() => setSearchQuery('')}>Clear search</button>}
            </p>
          </div>
        )}

        {/* Featured Post */}
        {!selectedPost && !searchQuery && (
          <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                  <button 
                    onClick={() => setSelectedPost(blogPosts[0])}
                    className="text-white font-medium"
                  >
                    Read full article →
                  </button>
                </div>
              </div>
              <div className="p-8 md:w-1/3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{blogPosts[0].title}</h2>
                <p className="text-slate-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button 
                  onClick={() => setSelectedPost(blogPosts[0])}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Read Article
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Post View */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeDetailView}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {selectedPost.category}
                </span>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedPost.title}</h2>
                <div className="flex items-center mb-6">
                  <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-medium text-slate-800">{selectedPost.author}</p>
                    <div className="flex text-sm text-slate-500">
                      <span className="mr-4">{selectedPost.date}</span>
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-lg">{selectedPost.excerpt}</p>
                <p className="text-slate-700 leading-relaxed">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchedPosts.slice(selectedPost || searchQuery ? 0 : 1).map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-white font-medium"
                  >
                    Read more →
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read full article
                </button>
              </div>
            </div>
          ))}
        </div>

        {searchedPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-slate-700">No posts found</h3>
            <p className="text-slate-500 mt-2">Try a different search term or category</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="max-w-xl mx-auto mb-6">
            Stay updated with the latest news, articles, and resources from Websy Technologies.
          </p>
          <form onSubmit={handleSubscription} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Subscribe
            </button>
          </form>
          {subscriptionStatus && (
            <p className="mt-4 text-blue-200">{subscriptionStatus}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;