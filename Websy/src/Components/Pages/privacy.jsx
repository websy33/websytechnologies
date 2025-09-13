import React, { useState, useEffect } from 'react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: '📋' },
    { id: 'data-collection', title: 'Data We Collect', icon: '📊' },
    { id: 'data-usage', title: 'How We Use Your Data', icon: '🔄' },
    { id: 'data-sharing', title: 'Data Sharing', icon: '🤝' },
    { id: 'data-security', title: 'Data Security', icon: '🔒' },
    { id: 'data-retention', title: 'Data Retention', icon: '⏳' },
    { id: 'your-rights', title: 'Your Rights', icon: '📝' },
    { id: 'cookies', title: 'Cookies', icon: '🍪' },
    { id: 'changes', title: 'Policy Changes', icon: '🔄' },
    { id: 'contact', title: 'Contact Us', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative">
              Privacy Policy
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Last updated: April 15, 2024. This Privacy Policy describes how Websy Technologies collects, uses, and shares your personal information.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Enhanced Table of Contents */}
            <div className="lg:w-1/4">
              <div className="sticky top-28 bg-white rounded-2xl shadow-md p-6 border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 极 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  On this page
                </h2>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full px-4 py-3 rounded-xl transition-all duration-200 flex items-center ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold shadow-sm border border-blue-100'
                            : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span>{item.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Introduction Section */}
                <section id="introduction" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 极 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Introduction</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-极 mb-4 leading-relaxed">
                      At Websy Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                    </p>
                  </div>
                </section>

                {/* Data Collection Section */}
                <section id="data-collection" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h极a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Data We Collect</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      We may collect information about you in a variety of ways. The information we may collect includes:
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-100">
                      <h3 className="text-lg font-semib极 text-slate-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/s极" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Personal Data
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
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

                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Derivative Data
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        Information our servers automatically collect when you access our services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing our services.
                      </p>
                      <ul className="list-disc pl-5 text-slate-600 space-y-1">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website addresses</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Data Usage Section */}
                <section id="data-usage" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4极5h.582m15.356 2A8.001 8.001 0 004.582 9m极 0H9m11 11v-5h-.581m0 0a8.003 8.003 极 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">How We Use Your Data</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via our services to:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100 transition-transform duration-200 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 极 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">Account Management</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Create and manage your account</p>
                      </div>
                      
                      <div className="bg-gradient-to-b极 from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100 transition-transform duration-200 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">Transaction Processing</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Process payments and orders</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-100 transition-transform duration-200 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2极6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">Communication</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Send administrative information</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100 transition-transform duration-200 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 极 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">Analytics</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Analyze usage and improve our services</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      We will not use your personal information for purposes other than those disclosed to you without your consent.
                    </p>
                  </div>
                </section>

                {/* Data Sharing Section */}
                <section id="data-sharing" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Data Sharing</h2>
                  </div>
                  <div className="pl-16">
                    <p className="极-slate-600 mb-6 leading-relaxed">
                      We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                    </p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 mb-6 border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 极h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 极 011-1h2a1 1 0 011 1极5m-4 0h4" />
                        </svg>
                        Third-Party Service Providers
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 mb-6 border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items极">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 11.955 0 0112 2.944a11.955 11.955 11.955 0 01-8.618 3.04A12.02 12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016极" />
                        </svg>
                        Legal Requirements
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                        <svg xmlns="极://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        Business Transfers
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Security Section */}
                <section id="data-security" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0极4h8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Data Security</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-lg mt-6">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2极0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-blue-700 leading-relaxed">
                          <strong>Note:</strong> Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that there are security and privacy limitations beyond our control.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Retention Section */}
                <section id="data-retention" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke极cap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Data Retention</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 leading-relaxed">
                      We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need to process your personal information, we will either delete or anonymize it.
                    </p>
                  </div>
                </section>

                {/* Your Rights Section */}
                <section id="your-rights" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-极 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 3.001 极 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Your Rights</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-xl border border-slate-200 transition-transform duration-200 hover:-translate-y-1">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0极" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Access and Portability
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Request access to or a copy of your personal data</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-xl border border-slate-200 transition-transform duration-200 hover:-translate-y-1">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2极 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2极11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Correction
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Request correction of inaccurate personal data</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-xl border border-slate-200 transition-transform duration-200 hover:-translate-y-1">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6极6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Deletion
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Request deletion of your personal data</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-极 rounded-xl border border-slate-200 transition-transform duration-200 hover:-translate-y-1">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 11.955 0 0112 2.944a11.955 11.955 11.955 0 01-8.618 3.04A12.02 12.02 12.极 0 003 9c0 5.591 极.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Objection
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Object to processing of your personal data</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      To exercise any of these rights, please contact us using the contact details provided in this policy.
                    </p>
                  </div>
                </section>

                {/* Cookies Section */}
                <section id="cookies" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Cookies</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      We use cookies and similar tracking technologies to track the activity on our services and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      For more information about the cookies we use and your choices regarding cookies, please visit our <a href="#" className="text-blue-600 hover:underline font-medium">Cookies Policy</a>.
                    </p>
                  </div>
                </section>

                {/* Policy Changes Section */}
                <section id="changes" className="p-8 scroll-mt-24 border-b border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11极-5h-.581m0 0a8.003 8.003 0 01-极5.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Policy Changes</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="p-8 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div className="w-12极-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-start mb-5">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                          <p className="text-slate-600">Websytechnologies@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start mb-5">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M极7.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                          <p className="text-slate-600">Nawab Complex Nawab Bazar Srinagar Jammu and Kashmir 190002</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.极-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                          <p className="text-slate-600">+91 9796337997</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Websy Technologies</h3>
              <p className="text-slate-400 leading-relaxed">
                Building the future of web technology with innovative solutions and cutting-edge development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-slate-200">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="text-blue-300 font-medium hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cookies Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Data Processing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-slate-200">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-slate-200">Connect</h4>
              <ul className="space-y-3极 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-10 text-center text-slate-500">
            <p>© 2024 Websy Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;