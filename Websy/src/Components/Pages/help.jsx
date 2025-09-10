import React, { useState } from 'react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

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

  const supportResources = [
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      icon: '📚',
      link: '/knowledge-base',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step tutorials for our products',
      icon: '🎥',
      link: '/tutorials',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other Websy users and experts',
      icon: '💬',
      link: '/community',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Webinars',
      description: 'Join live or watch recorded training sessions',
      icon: '📹',
      link: '/webinars',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with Websy Platform',
      category: 'Onboarding',
      views: '12.5k',
      readTime: '5 min'
    },
    {
      title: 'How to Reset Your Password',
      category: 'Account',
      views: '8.7k',
      readTime: '3 min'
    },
    {
      title: 'Understanding Billing and Payments',
      category: 'Billing',
      views: '6.3k',
      readTime: '7 min'
    },
    {
      title: 'API Integration Guide',
      category: 'Development',
      views: '5.9k',
      readTime: '12 min'
    },
    {
      title: 'Troubleshooting Common Issues',
      category: 'Technical',
      views: '4.8k',
      readTime: '8 min'
    }
  ];

  const contactMethods = [
    {
      method: 'Email Support',
      details: 'support@websytech.com',
      response: 'Within 24 hours',
      icon: '✉️',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      method: 'Live Chat',
      details: 'Available 9AM-6PM EST',
      response: 'Instant response',
      icon: '💬',
      color: 'bg-green-100 text-green-800'
    },
    {
      method: 'Phone Support',
      details: '1-800-WEBSY-TECH',
      response: 'During business hours',
      icon: '📞',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      method: 'Emergency Line',
      details: '1-800-WEBSY-URGENT',
      response: '24/7 for critical issues',
      icon: '🚨',
      color: 'bg-red-100 text-red-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
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
              className="w-full p-5 pl-14 pr-10 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl shadow-md p-1">
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'resources' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'contact' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Support
            </button>
            <button
              className={`py-3 px-8 font-medium rounded-xl transition-all ${activeTab === 'status' ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
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
                <div key={index} className="group bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex rounded-2xl p-4 mb-5 bg-gradient-to-r ${resource.color} text-white text-3xl`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-5">{resource.description}</p>
                  <a href={resource.link} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Explore <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Popular Help Articles</h3>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  View all articles <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="space-y-5">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-lg mb-1">{article.title}</h4>
                      <div className="flex items-center mt-2">
                        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500 ml-4 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {article.views} views
                        </span>
                        <span className="text-xs text-gray-500 ml-4 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime} read
                        </span>
                      </div>
                    </div>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 ml-4 flex items-center">
                      Read
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
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
                  <div key={index} className="flex items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className={`rounded-xl p-3 mr-5 ${method.color}`}>
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{method.method}</h3>
                      <p className="text-gray-600">{method.details}</p>
                      <p className="text-sm text-gray-500 mt-1">Response: {method.response}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Before contacting support</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Check our knowledge base for existing solutions</li>
                  <li>Have your account information ready</li>
                  <li>Describe your issue in as much detail as possible</li>
                  <li>Include any error messages you're receiving</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
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
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
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

            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-5">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-4 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-gray-800">All Systems Operational</h3>
              </div>
              <p className="text-gray-600">
                All Websy Technologies services are currently running smoothly. No ongoing incidents
                or maintenance activities are reported.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Service Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Web Application</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">API Services</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Database</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">Payment Processing</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-green-50 border border-green-100">
                  <span className="text-gray-800 font-medium">CDN & Network</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="font-semibold text-xl mb-3">Subscribe to Status Updates</h3>
              <p className="mb-5 opacity-90">Get notified about service incidents and maintenance windows.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-l-xl text-gray-800 focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-5 py-3 rounded-r-xl font-medium hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Help Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Need help right away?</h2>
          <p className="text-center text-blue-200 mb-10 max-w-2xl mx-auto">
            We're here to assist you with any urgent issues or questions you might have
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="#" className="bg-white bg-opacity-10 rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30">
              <div className="text-4xl mb-5">📞</div>
              <h3 className="font-semibold text-lg mb-2">Call Support</h3>
              <p className="text-sm text-blue-200">Speak directly with our support team</p>
            </a>
            <a href="#" className="bg-white bg-opacity-10 rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30">
              <div className="text-4xl mb-5">💬</div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-sm text-blue-200">Instant messaging with our experts</p>
            </a>
            <a href="#" className="bg-white bg-opacity-10 rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30">
              <div className="text-4xl mb-5">🐛</div>
              <h3 className="font-semibold text-lg mb-2">Report a Bug</h3>
              <p className="text-sm text-blue-200">Let us know about technical issues</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;