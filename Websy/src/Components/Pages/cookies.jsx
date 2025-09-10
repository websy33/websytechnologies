import React, { useState } from 'react';

const cookies = () => {
  const [activeSection, setActiveSection] = useState('what-are-cookies');

  const tableOfContents = [
    { id: 'what-are-cookies', title: 'What Are Cookies?' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'purpose-cookies', title: 'Purpose of Cookies' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'managing-cookies', title: 'Managing Cookies' },
    { id: 'updates-policy', title: 'Updates to This Policy' },
    { id: 'contact-us', title: 'Contact Us' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
              W
            </div>
            <h1 className="text-xl font-bold text-slate-800">Websy Technologies</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#" className="text-blue-600 font-medium">Cookies</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Cookies Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Last updated: April 15, 2024. This Cookies Policy explains how Websy Technologies uses cookies and similar technologies.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">On this page</h2>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`text-left w-full px-3 py-2 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                {/* What Are Cookies Section */}
                <section id="what-are-cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">What Are Cookies?</h2>
                  <p className="text-slate-600 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the website owners.
                  </p>
                  <p className="text-slate-600">
                    Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
                  </p>
                </section>

                {/* Types of Cookies Section */}
                <section id="types-of-cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Types of Cookies We Use</h2>
                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Essential Cookies</h3>
                    <p className="text-slate-600 mb-4">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you.
                    </p>
                    <div className="flex items-center text-sm text-slate-500">
                      <span className="inline-flex items-center mr-4">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Duration: Session
                      </span>
                      <span className="inline-flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Provider: Websy Technologies
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Analytical/Performance Cookies</h3>
                    <p className="text-slate-600 mb-4">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.
                    </p>
                    <div className="flex items-center text-sm text-slate-500">
                      <span className="inline-flex items-center mr-4">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Duration: 2 years
                      </span>
                      <span className="inline-flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Provider: Google Analytics
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Functionality Cookies</h3>
                    <p className="text-slate-600 mb-4">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                    <div className="flex items-center text-sm text-slate-500">
                      <span className="inline-flex items-center mr-4">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        Duration: 1 year
                      </span>
                      <span className="inline-flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        Provider: Websy Technologies
                      </span>
                    </div>
                  </div>
                </section>

                {/* Purpose of Cookies Section */}
                <section id="purpose-cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Purpose of Cookies</h2>
                  <p className="text-slate-600 mb-4">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                    <li>To provide a secure browsing experience during your visit</li>
                    <li>To understand how visitors interact with our website through analytics</li>
                    <li>To remember your preferences and settings</li>
                    <li>To provide features from third-party services</li>
                    <li>To improve our website and services based on usage data</li>
                  </ul>
                  <p className="text-slate-600">
                    The information collected by cookies does not personally identify you, but it can help us provide you with a better user experience.
                  </p>
                </section>

                {/* Third-Party Cookies Section */}
                <section id="third-party-cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Cookies</h2>
                  <p className="text-slate-600 mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Service</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Purpose</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Google Analytics</td>
                          <td className="px-4 py-4 text-sm text-slate-600">Website analytics and usage statistics</td>
                          <td className="px-4 py-4 text-sm text-blue-600"><a href="#">View Policy</a></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Facebook Pixel</td>
                          <td className="px-4 py-4 text-sm text-slate-600">Advertising and conversion tracking</td>
                          <td className="px-4 py-4 text-sm text-blue-600"><a href="#">View Policy</a></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Hotjar</td>
                          <td className="px-4 py-4 text-sm text-slate-600">User behavior and feedback</td>
                          <td className="px-4 py-4 text-sm text-blue-600"><a href="#">View Policy</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Managing Cookies Section */}
                <section id="managing-cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Managing Cookies</h2>
                  <p className="text-slate-600 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Browser Controls</h3>
                  <p className="text-slate-600 mb-4">
                    You can set or amend your web browser controls to accept or refuse cookies. The steps for doing so differ from browser to browser. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Cookie Preferences</h3>
                  <p className="text-slate-600 mb-4">
                    When you first visit our website, you will be presented with a cookie banner where you can choose which types of cookies you accept, except for essential cookies which are necessary for the website to function.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                    <p className="text-blue-700">
                      <strong>Note:</strong> If you disable cookies, some features of our website may not function properly, and your user experience may be affected.
                    </p>
                  </div>
                </section>

                {/* Updates to Policy Section */}
                <section id="updates-policy" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Updates to This Policy</h2>
                  <p className="text-slate-600 mb-4">
                    We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our operations. We will post any changes on this page and, where appropriate, notify you by email or through our website.
                  </p>
                  <p className="text-slate-600">
                    We recommend that you check this page occasionally to ensure you are familiar with any changes to this policy.
                  </p>
                </section>

                {/* Contact Us Section */}
                <section id="contact-us" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
                  <p className="text-slate-600 mb-4">
                    If you have any questions about our use of cookies or this Cookies Policy, please contact us:
                  </p>
                  <ul className="list-disc pl-5 text-slate-600 space-y-2">
                    <li><strong>Email:</strong> privacy@websytech.com</li>
                    <li><strong>Address:</strong> 123 Tech Avenue, San Francisco, CA 94107, USA</li>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                  </ul>
                </section>
              </div>

              {/* Consent Manager */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Cookie Preferences</h2>
                <p className="text-slate-600 mb-6">
                  Manage your cookie preferences. You can change these settings at any time by clicking the "Cookie Preferences" link in the footer.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-slate-800">Essential Cookies</h3>
                      <p className="text-sm text-slate-600">Required for the website to function properly</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-blue-600 cursor-not-allowed">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked 
                        disabled
                        readOnly
                      />
                      <span className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-slate-800">Analytics Cookies</h3>
                      <p className="text-sm text-slate-600">Allow us to analyze website usage to improve performance</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-slate-800">Marketing Cookies</h3>
                      <p className="text-sm text-slate-600">Used to track visitors across websites for advertising purposes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Websy Technologies</h3>
              <p className="text-slate-400">
                Building the future of web technology with innovative solutions and cutting-edge development.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-blue-300 font-medium">Cookies Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Processing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 Websy Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default cookies;