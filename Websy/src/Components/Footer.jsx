import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaCheck,
  FaChevronUp,
  FaArrowRight,
  FaLink,
  FaYoutube,
  FaWhatsapp // Added WhatsApp icon
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer = ({ onSearch, searchTerm }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  // WhatsApp phone number (with country code but no spaces or special characters)
  const whatsappNumber = '9796337997'; // Example number - replace with actual number
  const whatsappMessage = 'Hello! I would like to inquire about your services.'; // Pre-filled message

  // Initialize current year
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Check scroll position for back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "Web Development", search: "web development", icon: "💻" },
    { name: "E-Commerce", search: "ecommerce", icon: "🛒" },
    { name: "Mobile Apps", search: "mobile app development", icon: "📱" },
    { name: "UI/UX Design", search: "ui ux design", icon: "🎨" },
    { name: "SEO Optimization", search: "seo services", icon: "🔍" },
    { name: "WordPress", search: "wordpress development", icon: "⚙️" },
    { name: "Cloud Solutions", search: "cloud services", icon: "☁️" },
    { name: "AI & ML", search: "artificial intelligence", icon: "🤖" }
  ];

  const services = [
    { name: "Custom Web Development", search: "custom web development" },
    { name: "React Applications", search: "react development" },
    { name: "API Integration", search: "api integration" },
    { name: "Database Design", search: "database design" },
    { name: "Progressive Web Apps", search: "pwa development" },
    { name: "Website Maintenance", search: "website maintenance" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact Support", href: "/support" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/profile.php?id=61577872507487' 
    },
    { 
      name: 'Twitter', 
      icon: <FaTwitter />,
      url: 'https://twitter.com/techcognics' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/websy_technologies?igsh=ZmdkMjAxZW9rdXZw' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/company/techcognics' 
    },
    {
      name: 'Youtube',
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@WebsyTechnologies'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub />,
      url: 'https://github.com' 
    },
    // Added WhatsApp to social links
    { 
      name: 'WhatsApp', 
      icon: <FaWhatsapp />,
      url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleQuickSearch = (query) => {
    if (onSearch) {
      onSearch(query);
    }
    // Always scroll to top
    scrollToTop();
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
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
        
        console.log('Subscription email sent successfully');
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } catch (error) {
        console.error('Failed to send subscription email:', error);
        // You might want to show an error message to the user here
      }
    }
  };

  const handleServiceClick = (searchTerm, e) => {
    e.preventDefault();
    handleQuickSearch(searchTerm);
  };

  const handleNavigation = (href, e) => {
    if (e) e.preventDefault();
    
    // Check if it's an external link
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Use React Router for internal navigation
      navigate(href);
    }
    
    // Always scroll to top after navigation
    scrollToTop();
  };

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <>
      <footer className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Websy Technologies 
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                🌐 Your website is more than a digital presence—it's your brand's most powerful business tool. At Websy Technologies, we specialize in creating professional, modern, and high-performing websites that not only look exceptional but also deliver measurable results. From sleek design to seamless functionality, our development solutions are crafted to engage your audience, strengthen your brand credibility, and accelerate business growth in today's competitive digital landscape.
              </p>
              
              {/* Social links with hover effects */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 transform hover:-translate-y-1 group"
                    title={social.name}
                    onClick={(e) => handleNavigation(social.url, e)}
                  >
                    <div className="w-5 h-5 text-gray-400 group-hover:text-white">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <FaCheck className="w-5 h-5 mr-2" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={(e) => handleServiceClick(service.search, e)}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center group py-1 w-full text-left"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <FaLink className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={(e) => handleServiceClick(link.search, e)}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center group py-1 w-full text-left"
                    >
                      <span className="mr-2">{link.icon}</span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9" />
                </svg>
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={(e) => handleNavigation(link.href, e)}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center group py-1 w-full text-left"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Support
              </h4>
              <ul className="space-y-3 mb-6">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={(e) => handleNavigation(link.href, e)}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center group py-1 w-full text-left"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-3">Subscribe to get updates on new services and features.</p>
                {subscribed ? (
                  <div className="bg-green-700 text-white p-3 rounded-lg text-sm flex items-center">
                    <FaCheck className="w-5 h-5 mr-2" />
                    Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
                    >
                      <FaArrowRight className="w-5 h-5 mr-2" />
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Websy Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {legalLinks.map((link, index) => (
                <button 
                  key={index}
                  onClick={(e) => handleNavigation(link.href, e)}
                  className="hover:text-white transition duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-1 animate-pulse">
            Live Chat
          </span>
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Footer;