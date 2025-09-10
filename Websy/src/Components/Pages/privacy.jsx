import React, { useState } from 'react';

const privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data We Collect' },
    { id: 'data-usage', title: 'How We Use Your Data' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
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
            <a href="#" className="text-blue-600 font-medium">Privacy</a>
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
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Last updated: April 15, 2024. This Privacy Policy describes how Websy Technologies collects, uses, and shares your personal information.
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
                {/* Introduction Section */}
                <section id="introduction" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h2>
                  <p className="text-slate-600 mb-4">
                    At Websy Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-slate-600">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                  </p>
                </section>

                {/* Data Collection Section */}
                <section id="data-collection" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Data We Collect</h2>
                  <p className="text-slate-600 mb-4">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Data</h3>
                    <p className="text-slate-600 mb-4">
                      Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with us or when you choose to participate in various activities related to our services.
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Business information</li>
                      <li>Payment information</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Derivative Data</h3>
                    <p className="text-slate-600 mb-4">
                      Information our servers automatically collect when you access our services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing our services.
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </section>

                {/* Data Usage Section */}
                <section id="data-usage" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Data</h2>
                  <p className="text-slate-600 mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via our services to:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">Account Management</h3>
                      <p className="text-slate-600 text-sm">Create and manage your account</p>
                    </div>
                    
                    <div className="bg-green-50 p-5 rounded-lg">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">Transaction Processing</h3>
                      <p className="text-slate-600 text-sm">Process payments and orders</p>
                    </div>
                    
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">Communication</h3>
                      <p className="text-slate-600 text-sm">Send administrative information</p>
                    </div>
                    
                    <div className="bg-amber-50 p-5 rounded-lg">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">Analytics</h3>
                      <p className="text-slate-600 text-sm">Analyze usage and improve our services</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600">
                    We will not use your personal information for purposes other than those disclosed to you without your consent.
                  </p>
                </section>

                {/* Data Sharing Section */}
                <section id="data-sharing" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Sharing</h2>
                  <p className="text-slate-600 mb-4">
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Third-Party Service Providers</h3>
                    <p className="text-slate-600">
                      We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Legal Requirements</h3>
                    <p className="text-slate-600">
                      We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Business Transfers</h3>
                    <p className="text-slate-600">
                      We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </p>
                  </div>
                </section>

                {/* Data Security Section */}
                <section id="data-security" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
                  <p className="text-slate-600 mb-4">
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                    <p className="text-blue-700">
                      <strong>Note:</strong> Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that there are security and privacy limitations beyond our control.
                    </p>
                  </div>
                </section>

                {/* Data Retention Section */}
                <section id="data-retention" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Retention</h2>
                  <p className="text-slate-600">
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need to process your personal information, we will either delete or anonymize it.
                  </p>
                </section>

                {/* Your Rights Section */}
                <section id="your-rights" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
                  <p className="text-slate-600 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-2">Access and Portability</h3>
                      <p className="text-slate-600 text-sm">Request access to or a copy of your personal data</p>
                    </div>
                    
                    <div className="bg-white border border-slate-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-2">Correction</h3>
                      <p className="text-slate-600 text-sm">Request correction of inaccurate personal data</p>
                    </div>
                    
                    <div className="bg-white border border-slate-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-2">Deletion</h3>
                      <p className="text-slate-600 text-sm">Request deletion of your personal data</p>
                    </div>
                    
                    <div className="bg-white border border-slate-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-2">Objection</h3>
                      <p className="text-slate-600 text-sm">Object to processing of your personal data</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mt-6">
                    To exercise any of these rights, please contact us using the contact details provided in this policy.
                  </p>
                </section>

                {/* Cookies Section */}
                <section id="cookies" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies</h2>
                  <p className="text-slate-600 mb-4">
                    We use cookies and similar tracking technologies to track the activity on our services and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                  <p className="text-slate-600">
                    For more information about the cookies we use and your choices regarding cookies, please visit our <a href="#" className="text-blue-600 hover:underline">Cookies Policy</a>.
                  </p>
                </section>

                {/* Policy Changes Section */}
                <section id="changes" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Policy Changes</h2>
                  <p className="text-slate-600 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                  </p>
                  <p className="text-slate-600">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
                  <p className="text-slate-600 mb-4">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Email</h3>
                        <p className="text-slate-600">privacy@websytech.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Address</h3>
                        <p className="text-slate-600">123 Tech Avenue, San Francisco, CA 94107, USA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Phone</h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </section>
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
                <li><a href="#" className="text-blue-300 font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
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

export default privacy;