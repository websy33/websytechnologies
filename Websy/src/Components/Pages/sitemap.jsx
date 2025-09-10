import React, { useState } from 'react';

const sitemap = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const siteStructure = {
    main: [
      { name: 'Home', path: '/', description: 'Welcome to Websy Technologies' },
      { name: 'About Us', path: '/about', description: 'Learn about our company and team' },
      { name: 'Services', path: '/services', description: 'Explore our offerings' },
      { name: 'Products', path: '/products', description: 'Discover our solutions' },
      { name: 'Careers', path: '/careers', description: 'Join our team' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
    ],
    company: [
      { name: 'Our Story', path: '/about/our-story', description: 'How Websy began' },
      { name: 'Leadership', path: '/about/leadership', description: 'Meet our executives' },
      { name: 'Team', path: '/about/team', description: 'Our talented professionals' },
      { name: 'Values', path: '/about/values', description: 'What we believe in' },
      { name: 'Newsroom', path: '/about/news', description: 'Company news and updates' },
      { name: 'Press Kit', path: '/about/press', description: 'Resources for media' }
    ],
    services: [
      { name: 'Web Development', path: '/services/web-development', description: 'Custom website solutions' },
      { name: 'Mobile Apps', path: '/services/mobile-apps', description: 'iOS and Android applications' },
      { name: 'Cloud Solutions', path: '/services/cloud', description: 'Scalable cloud infrastructure' },
      { name: 'UI/UX Design', path: '/services/design', description: 'User-centered design services' },
      { name: 'DevOps', path: '/services/devops', description: 'Streamlined development operations' },
      { name: 'AI & Machine Learning', path: '/services/ai-ml', description: 'Intelligent solutions' }
    ],
    products: [
      { name: 'Websy Platform', path: '/products/platform', description: 'Our flagship product' },
      { name: 'Analytics Suite', path: '/products/analytics', description: 'Data insights and reporting' },
      { name: 'CRM Integration', path: '/products/crm', description: 'Customer relationship tools' },
      { name: 'E-commerce Solutions', path: '/products/ecommerce', description: 'Online store platforms' },
      { name: 'API Gateway', path: '/products/api', description: 'Developer tools and APIs' },
      { name: 'Enterprise Solutions', path: '/products/enterprise', description: 'Large-scale implementations' }
    ],
    resources: [
      { name: 'Blog', path: '/blog', description: 'Industry insights and news' },
      { name: 'Case Studies', path: '/resources/case-studies', description: 'Success stories' },
      { name: 'White Papers', path: '/resources/white-papers', description: 'In-depth research' },
      { name: 'Webinars', path: '/resources/webinars', description: 'Educational sessions' },
      { name: 'Documentation', path: '/docs', description: 'Technical guides' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', description: 'Support resources' }
    ],
    support: [
      { name: 'Contact Support', path: '/support/contact', description: 'Get help from our team' },
      { name: 'Knowledge Base', path: '/support/knowledge-base', description: 'Searchable help articles' },
      { name: 'Community Forum', path: '/support/forum', description: 'Connect with other users' },
      { name: 'System Status', path: '/support/status', description: 'Service availability' },
      { name: 'Training', path: '/support/training', description: 'Learning resources' },
      { name: 'Submit a Request', path: '/support/request', description: 'Open a support ticket' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/legal/privacy', description: 'How we handle your data' },
      { name: 'Terms of Service', path: '/legal/terms', description: 'Usage guidelines' },
      { name: 'Cookie Policy', path: '/legal/cookies', description: 'Cookie usage information' },
      { name: 'Security', path: '/legal/security', description: 'Our security practices' },
      { name: 'Compliance', path: '/legal/compliance', description: 'Regulatory information' },
      { name: 'Accessibility', path: '/legal/accessibility', description: 'Our accessibility commitment' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore all pages and sections of the Websy Technologies website
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a page..."
              className="w-full p-4 pl-12 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-6">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('main')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Main Pages</h2>
                <p className="text-gray-600 mt-1">Essential pages every visitor should see</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.main ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.main && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.main.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('company')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Company</h2>
                <p className="text-gray-600 mt-1">Learn about Websy Technologies</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.company ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.company && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.company.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('services')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Services</h2>
                <p className="text-gray-600 mt-1">What Websy Technologies offers</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.services ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.services && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.services.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('products')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Products</h2>
                <p className="text-gray-600 mt-1">Websy Technologies solutions</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.products ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.products && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.products.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('resources')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Resources</h2>
                <p className="text-gray-600 mt-1">Educational content and materials</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.resources ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.resources && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.resources.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('support')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Support</h2>
                <p className="text-gray-600 mt-1">Get help and assistance</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.support ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.support && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.support.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Legal Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleSection('legal')}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Legal</h2>
                <p className="text-gray-600 mt-1">Policies and compliance information</p>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedSections.legal ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedSections.legal && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteStructure.legal.map((page, index) => (
                  <a
                    key={index}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600">{page.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{page.path}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-4">
            If you're having trouble finding a specific page or resource, try our search function at the top of the page or contact our support team for assistance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/help"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Visit Help Center
            </a>
            <a
              href="/contact"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sitemap;