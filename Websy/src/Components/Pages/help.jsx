import React, { useState, useEffect } from 'react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [expandedResource, setExpandedResource] = useState(null);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hello! I'm Websy, your virtual assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. Our support team will contact you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const toggleResource = (index) => {
    if (expandedResource === index) {
      setExpandedResource(null);
    } else {
      setExpandedResource(index);
      setExpandedArticle(null); // Close article if open
    }
  };

  const toggleArticle = (index) => {
    if (expandedArticle === index) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(index);
      setExpandedResource(null); // Close resource if open
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') return;
    
    setIsSearching(true);
    // Simulate search API call
    setTimeout(() => {
      const results = [
        { id: 1, title: 'Getting Started with Websy Platform', category: 'Onboarding', type: 'article' },
        { id: 2, title: 'How to Reset Your Password', category: 'Account', type: 'article' },
        { id: 3, title: 'API Integration Guide', category: 'Development', type: 'article' },
        { id: 4, title: 'Introduction to Websy Platform', category: 'Tutorial', type: 'video' },
        { id: 5, title: 'Understanding Billing and Payments', category: 'Billing', type: 'article' }
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim() === '') return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: chatInput, sender: 'user' };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand you're asking about: " + chatInput,
        "Let me help you with that. Our knowledge base has several articles that might be useful.",
        "Based on your question, I recommend checking our documentation on that topic.",
        "I've found some resources that might help answer your question."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = { id: Date.now(), text: randomResponse, sender: 'bot' };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const supportResources = [
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      icon: '📚',
      link: '/knowledge-base',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">What you'll find:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Step-by-step setup guides</li>
            <li>Troubleshooting common issues</li>
            <li>Best practices for implementation</li>
            <li>API documentation</li>
            <li>Frequently asked questions</li>
          </ul>
          <div className="mt-4 flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Browse All Articles
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition-colors">
              Download PDF Guides
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step tutorials for our products',
      icon: '🎥',
      link: '/tutorials',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-purple-100">
          <h4 className="font-semibold text-purple-800 mb-2">Featured tutorials:</h4>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-lg p-2 flex items-center shadow-sm">
              <span className="mr-2 text-purple-600">▶️</span>
              <span className="text-sm">Getting Started</span>
            </div>
            <div className="bg-white rounded-lg p-2 flex items-center shadow-sm">
              <span className="mr-2 text-purple-600">▶️</span>
              <span className="text-sm">Advanced Features</span>
            </div>
            <div className="bg-white rounded-lg p-2 flex items-center shadow-sm">
              <span className="mr-2 text-purple-600">▶️</span>
              <span className="text-sm">Integration Guide</span>
            </div>
            <div className="bg-white rounded-lg p-2 flex items-center shadow-sm">
              <span className="mr-2 text-purple-600">▶️</span>
              <span className="text-sm">Troubleshooting</span>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
            Visit Tutorial Library
          </button>
        </div>
      )
    },
    {
      title: 'Community Forum',
      description: 'Connect with other Websy users and experts',
      icon: '💬',
      link: '/community',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-green-100">
          <div className="flex items-center mb-3">
            <div className="flex-1">
              <h4 className="font-semibold text-green-800 mb-1">Join the conversation</h4>
              <p className="text-sm text-gray-600">15,000+ active community members</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              243 Online
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Topics</span>
              <span className="font-medium">1,842</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Solutions</span>
              <span className="font-medium">4,591</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Community Experts</span>
              <span className="font-medium">127</span>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
            Join Community
          </button>
        </div>
      )
    },
    {
      title: 'Webinars',
      description: 'Join live or watch recorded training sessions',
      icon: '📹',
      link: '/webinars',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-orange-100">
          <h4 className="font-semibold text-orange-800 mb-3">Upcoming webinars:</h4>
          <div className="space-y-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">Advanced Analytics Workshop</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Tomorrow</span>
              </div>
              <p className="text-xs text-gray-600">10:00 AM EST • 45 min</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">Q3 Feature Release</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Sept 28</span>
              </div>
              <p className="text-xs text-gray-600">2:00 PM EST • 1 hour</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
            View All Webinars
          </button>
        </div>
      )
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with Websy Platform',
      category: 'Onboarding',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Article Summary</h4>
          <p className="text-gray-600 mb-4">
            This comprehensive guide walks you through the initial setup of your Websy account, 
            from verifying your email to configuring your first project. You'll learn how to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Set up your team members and permissions</li>
            <li>Connect your data sources</li>
            <li>Configure your dashboard preferences</li>
            <li>Create your first report</li>
            <li>Invite collaborators to view your insights</li>
          </ul>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Read Full Article
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'How to Reset Your Password',
      category: 'Account',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Quick Steps</h4>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Click on "Forgot Password" on the login page</li>
            <li>Enter your registered email address</li>
            <li>Check your inbox for the password reset link</li>
            <li>Click the link and create a new password</li>
            <li>Log in with your new credentials</li>
          </ol>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Note:</span> The reset link expires after 24 hours for security reasons.
            If you don't see the email, check your spam folder.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Read Full Article
            <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )
    },
    {
      title: 'Understanding Billing and Payments',
      category: 'Billing',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">What's Covered</h4>
          <p className="text-gray-600 mb-4">
            This article explains everything about Websy's billing system, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>How subscription tiers and pricing work</li>
            <li>Understanding your invoice</li>
            <li>Payment methods accepted</li>
            <li>Upgrading or downgrading your plan</li>
            <li>Cancellation and refund policies</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Pro Tip:</span> You can download all your invoices directly from 
              the Billing section of your account dashboard.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Read Full Article
          </button>
        </div>
      )
    },
    {
      title: 'API Integration Guide',
      category: 'Development',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Developer Resources</h4>
          <p className="text-gray-600 mb-4">
            Our comprehensive API documentation helps developers integrate Websy's capabilities into their applications.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">API Reference</h5>
              <p className="text-xs text-gray-600">Complete endpoint documentation</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">SDK Libraries</h5>
              <p className="text-xs text-gray-600">For Python, JS, Java, and more</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">Code Samples</h5>
              <p className="text-xs text-gray-600">Real-world implementation examples</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">Postman Collection</h5>
              <p className="text-xs text-gray-600">Pre-configured API calls</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              View API Docs
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Download SDKs
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'Troubleshooting Common Issues',
      category: 'Technical',
      expandedContent: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Common Solutions</h4>
          <div className="space-y-3 mb-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">Connection Timeouts</h5>
              <p className="text-xs text-gray-600">Check firewall settings and whitelist our IP addresses</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">Data Sync Delays</h5>
              <p className="text-xs text-gray-600">Verify your data source credentials and permissions</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-1">Dashboard Loading Issues</h5>
              <p className="text-xs text-gray-600">Clear browser cache or try incognito mode</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Still having issues?</span> Our support team is available 24/7 
              to help resolve any technical problems you encounter.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Read Full Article
          </button>
        </div>
      )
    }
  ];

  const contactMethods = [
    {
      method: 'Email Support',
      details: 'support@websytech.com',
      response: 'Within 24 hours',
      icon: '✉️',
      color: 'bg-blue-100 text-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      method: 'Live Chat',
      details: 'Available 9AM-6PM EST',
      response: 'Instant response',
      icon: '💬',
      color: 'bg-green-100 text-green-800',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      method: 'Phone Support',
      details: '1-800-WEBSY-TECH',
      response: 'During business hours',
      icon: '📞',
      color: 'bg-purple-100 text-purple-800',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      method: 'Emergency Line',
      details: '1-800-WEBSY-URGENT',
      response: '24/7 for critical issues',
      icon: '🚨',
      color: 'bg-red-100 text-red-800',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Chat Bot */}
      {showChatBot && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold">Websy Assistant</h3>
            <button 
              onClick={() => setShowChatBot(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {chatMessages.map(message => (
              <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-2xl ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white shadow-sm border border-gray-200'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-xl hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 transition-all z-40"
      >
        {showChatBot ? '✕' : '💬'}
      </button>

      {/* Header */}
      <div className={`relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-20 overflow-hidden transition-all duration-300 ${isScrolled ? 'pt-24' : ''}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 -mr-40 mt-20 opacity-20">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path fill="currentColor" d="M45.1,-58.9C64.2,-48.9,88.2,-41.8,95.5,-26.4C102.8,-11,93.4,12.7,80.1,31.4C66.8,50.1,49.6,63.8,30.9,70.6C12.2,77.4,-8,77.3,-25.5,70.4C-43,63.5,-57.8,49.8,-66.2,32.6C-74.6,15.4,-76.6,-5.3,-70.2,-22.9C-63.8,-40.5,-49.1,-54.9,-33.2,-65.6C-17.3,-76.3,-0.3,-83.2,12.5,-79.9C25.3,-76.6,35.9,-63.1,45.1,-58.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Get answers to your questions, troubleshoot issues, and learn how to make the most of Websy Technologies
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search help articles, tutorials, and more..."
              className="w-full p-5 pl-14 pr-10 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg bg-white border border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md flex items-center"
            >
              {isSearching ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching
                </>
              ) : 'Search'}
            </button>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['Getting Started', 'Account', 'Billing', 'Technical', 'API'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  setTimeout(handleSearch, 100);
                }}
                className="px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm hover:bg-opacity-30 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="container mx-auto px-4 -mt-6 relative z-20">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Search Results</h3>
              <button 
                onClick={() => setSearchResults([])}
                className="text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            </div>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.id} className="p-4 border border-gray-200 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex items-start">
                    <span className={`mr-3 ${result.type === 'video' ? 'text-purple-600' : 'text-blue-600'}`}>
                      {result.type === 'video' ? '🎥' : '📄'}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium">{result.title}</h4>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full mt-2 inline-block">
                        {result.category}
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl shadow-lg p-1 border border-gray-100">
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'resources' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'contact' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Support
            </button>
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'status' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('status')}
            >
              System Status
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'resources' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Support Resources</h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
              Explore our comprehensive resources designed to help you succeed with Websy Technologies
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportResources.map((resource, index) => (
                <div key={index} className={`group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform ${expandedResource === index ? '-translate-y-2 scale-105' : 'hover:-translate-y-1'} border border-gray-100`}>
                  <div className={`inline-flex rounded-2xl p-4 mb-5 bg-gradient-to-r ${resource.color} text-white text-3xl shadow-md`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-5">{resource.description}</p>
                  
                  {expandedResource === index ? (
                    <>
                      {resource.expandedContent}
                      <button 
                        onClick={() => toggleResource(index)}
                        className="mt-4 text-blue-600 font-medium hover:text-blue-800 inline-flex items-center transition-colors"
                      >
                        Show less <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => toggleResource(index)}
                      className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center transition-colors group-hover:scale-105"
                    >
                      Explore <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Popular Help Articles</h3>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center transition-colors">
                  View all articles <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="space-y-5">
                {popularArticles.map((article, index) => (
                  <div key={index} className={`bg-white p-6 rounded-2xl ${expandedArticle === index ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-md hover:shadow-lg'} transition-all duration-300 border border-gray-100`}>
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-lg mb-1">{article.title}</h4>
                        <div className="flex items-center mt-2">
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleArticle(index)}
                        className="text-blue-600 font-medium hover:text-blue-800 ml-4 flex items-center transition-colors"
                      >
                        {expandedArticle === index ? 'Collapse' : 'Read'}
                        <svg className={`w-4 h-4 ml-1 ${expandedArticle === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {expandedArticle === index && article.expandedContent}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact Our Support Team</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our dedicated support team is here to help you with any questions or issues you may have. 
                Choose the method that works best for you.
              </p>

              <div className="space-y-6 mb-10">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <div className={`rounded-xl p-3 mr-5 ${method.color} shadow-sm`}>
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg">{method.method}</h3>
                      <p className="text-gray-600">{method.details}</p>
                      <p className="text-sm text-gray-500 mt-1">Response: {method.response}</p>
                    </div>
                    <button className={`px-4 py-2 ${method.buttonColor} text-white rounded-lg text-sm transition-colors shadow-md hover:shadow-lg`}>
                      Contact
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Before contacting support</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Check our knowledge base for existing solutions</li>
                  <li>Have your account information ready</li>
                  <li>Describe your issue in as much detail as possible</li>
                  <li>Include any error messages you're receiving</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send us a message</h3>
              <p className="text-gray-600 mb-6">We'll get back to you as soon as possible</p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      name="category"
                      value={contactForm.category}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Report a Bug</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleFormChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">System Status</h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
              Check the current status of our services and see any ongoing incidents or maintenance.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <div className="flex items-center mb-5">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-4 animate-pulse shadow-sm"></div>
                <h3 className="text-xl font-semibold text-gray-800">All Systems Operational</h3>
              </div>
              <p className="text-gray-600">
                All Websy Technologies services are currently running smoothly. No ongoing incidents
                or maintenance activities are reported.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Service Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Web Application</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">API Services</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Database</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Payment Processing</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">CDN & Network</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="font-semibold text-xl mb-3">Subscribe to Status Updates</h3>
              <p className="mb-5 opacity-90">Get notified about service incidents and maintenance windows.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-l-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-600 px-5 py-3 rounded-r-xl font-medium hover:bg-blue-50 transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Help Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Need help right away?</h2>
          <p className="text-center text-indigo-200 mb-10 max-w-2xl mx-auto">
            We're here to assist you with any urgent issues or questions you might have
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="#" className="bg-white bg-opacity-15 rounded-2xl p-8 text-center hover:bg-opacity-25 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 hover:scale-105">
              <div className="text-4xl mb-5">📞</div>
              <h3 className="font-semibold text-lg mb-2">Call Support</h3>
              <p className="text-sm text-indigo-200">Speak directly with our support team</p>
            </a>
            <a href="#" className="bg-white bg-opacity-15 rounded-2xl p-8 text-center hover:bg-opacity-25 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 hover:scale-105">
              <div className="text-4xl mb-5">💬</div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-sm text-indigo-200">Instant messaging with our experts</p>
            </a>
            <a href="#" className="bg-white bg-opacity-15 rounded-2xl p-8 text-center hover:bg-opacity-25 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 hover:scale-105">
              <div className="text-4xl mb-5">🐛</div>
              <h3 className="font-semibold text-lg mb-2">Report a Bug</h3>
              <p className="text-sm text-indigo-200">Let us know about technical issues</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;