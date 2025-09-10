import React, { useState } from 'react';

const faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'account', name: 'Account' },
    { id: 'billing', name: 'Billing' },
    { id: 'technical', name: 'Technical' },
    { id: 'services', name: 'Services' }
  ];

  const allFaqs = [
    {
      id: 1,
      question: 'What does Websy Technologies do?',
      answer: 'Websy Technologies provides innovative digital solutions including web development, mobile applications, cloud services, and AI-powered tools to help businesses transform their digital presence and operations.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team by email at support@websytech.com, through our website chat feature, or by calling our toll-free number at 1-800-WEBSY-TECH. Our support hours are Monday-Friday, 9AM-6PM EST.',
      category: 'general'
    },
    {
      id: 3,
      question: 'Where is Websy Technologies located?',
      answer: 'Our headquarters is in San Francisco, California, but we have teams across the United States and several international locations. We serve clients globally and most of our services can be delivered remotely.',
      category: 'general'
    },
    {
      id: 4,
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button at the top right of our website. You\'ll need to provide your name, email address, and create a password. Once registered, you can access all our services.',
      category: 'account'
    },
    {
      id: 5,
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you a password reset link. This link will expire after 24 hours for security reasons.',
      category: 'account'
    },
    {
      id: 6,
      question: 'Can I change my account email address?',
      answer: 'Yes, you can change your email address from the account settings page. You\'ll need to verify the new email address before it becomes active for your account.',
      category: 'account'
    },
    {
      id: 7,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for larger corporate accounts. All payments are processed securely.',
      category: 'billing'
    },
    {
      id: 8,
      question: 'Can I change my subscription plan?',
      answer: 'Yes, you can upgrade or downgrade your subscription plan at any time from your account dashboard. Changes take effect immediately, and we\'ll prorate any differences in cost.',
      category: 'billing'
    },
    {
      id: 9,
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription from the Billing section of your account settings. Your service will continue until the end of your current billing period, and you won\'t be charged again.',
      category: 'billing'
    },
    {
      id: 10,
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Angular, Vue.js, Node.js, Python, and cloud platforms like AWS and Azure. We also have expertise in mobile development (iOS and Android) and emerging technologies like AI/ML.',
      category: 'technical'
    },
    {
      id: 11,
      question: 'Do you provide API documentation?',
      answer: 'Yes, comprehensive API documentation is available for all our services. You can access it through our developer portal or directly from your account dashboard if you\'re a subscribed user.',
      category: 'technical'
    },
    {
      id: 12,
      question: 'What browsers are supported?',
      answer: 'Our web applications support all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest versions for optimal performance and security.',
      category: 'technical'
    },
    {
      id: 13,
      question: 'Do you offer custom development services?',
      answer: 'Yes, we offer custom development tailored to your specific business needs. Our team will work with you to understand your requirements and deliver a solution that fits your goals and budget.',
      category: 'services'
    },
    {
      id: 14,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines after our initial consultation.',
      category: 'services'
    },
    {
      id: 15,
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your digital solutions continue to perform optimally. These include security updates, feature enhancements, and technical support.',
      category: 'services'
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Find answers to common questions about Websy Technologies</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full p-4 pl-12 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            key="all"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Questions
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${openItems[faq.id] ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {openItems[faq.id] && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-800">No questions found</h3>
              <p className="mt-2 text-gray-600">Try a different search term or category</p>
            </div>
          )}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please reach out to our friendly team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </a>
            <a
              href="/support"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Support Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;