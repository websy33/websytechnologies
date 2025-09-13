import React, { useState } from 'react';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'content', title: 'User Content' },
    { id: 'prohibited', title: 'Prohibited Activities' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'governing', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 mb-8 md:mb-0 md:mr-8 md:sticky md:top-8 md:self-start">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our service. These Terms of Service ("Terms") govern your use of our website and services. 
              By accessing or using our service, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-700">
              Please read these Terms carefully before using our service. If you do not agree to these Terms, 
              you may not access or use our service.
            </p>
          </section>

          <section id="definitions" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Definitions</h2>
            <p className="text-gray-700 mb-4">Throughout these Terms, the following definitions apply:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>"Service"</strong> refers to the website and all services provided by us.</li>
              <li><strong>"User"</strong>, <strong>"you"</strong>, and <strong>"your"</strong> refer to the individual accessing our service.</li>
              <li><strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, and <strong>"our"</strong> refer to our company.</li>
              <li><strong>"Content"</strong> refers to all information, text, graphics, or other materials uploaded or transmitted through our service.</li>
            </ul>
          </section>

          <section id="accounts" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide accurate and complete information. 
              You are solely responsible for safeguarding your account password and for any activities 
              or actions under your account.
            </p>
            <p className="text-gray-700">
              You agree to notify us immediately of any unauthorized use of your account. We reserve 
              the right to suspend or terminate your account if any information provided during 
              registration proves to be inaccurate or incomplete.
            </p>
          </section>

          <section id="content" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Content</h2>
            <p className="text-gray-700 mb-4">
              Our service allows you to post, link, store, share, and otherwise make available certain 
              information, text, graphics, videos, or other material. You are responsible for the content 
              that you post on or through the service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-gray-700">
              By posting content on or through the service, you grant us the right and license to use, modify, 
              publicly perform, publicly display, reproduce, and distribute such content on and through the service.
            </p>
          </section>

          <section id="prohibited" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You may not access or use the service for any purpose other than that for which we make the service available. The service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            <p className="text-gray-700 mb-4">As a user of the service, you agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Systematically retrieve data or other content from the service to create or compile a collection or database</li>
              <li>Make any unauthorized use of the service, including collecting usernames and/or email addresses of users</li>
              <li>Engage in unauthorized framing of or linking to the service</li>
              <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's use of the service</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
            </ul>
          </section>

          <section id="intellectual" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p className="text-gray-700">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of our company.
            </p>
          </section>

          <section id="termination" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-gray-700">
              If you wish to terminate your account, you may simply discontinue using the service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section id="disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            <p className="text-gray-700">
              We do not warrant that a) the service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the service is free of viruses or other harmful components; or d) the results of using the service will meet your requirements.
            </p>
          </section>

          <section id="liability" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-gray-700">
              Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section id="governing" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section id="changes" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-700">
              By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.
            </p>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: websytechnologies@gmail.com<br />
              Address: Nawab Complex Nawab Bazar Srinagar 190002
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Terms;