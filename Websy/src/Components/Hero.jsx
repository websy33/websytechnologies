import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const Hero = ({ onViewProducts, onContact }) => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ sending: false, success: false, error: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = [
    "Web Development",
    "Mobile Applications", 
    "E-commerce Solutions",
    "UI/UX Design",
    "WordPress Development",
    "React Applications",
    "SEO Optimization"
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", icon: "📊", color: "from-purple-600 to-indigo-600" },
    { value: "98%", label: "Client Satisfaction", icon: "😊", color: "from-green-600 to-teal-600" },
    { value: "24/7", label: "Support", icon: "🛠️", color: "from-blue-600 to-cyan-600" },
    { value: "50+", label: "Experts", icon: "👨‍💻", color: "from-orange-600 to-red-600" }
  ];

  const trustBadges = [
    { name: "Google", logo: "G", color: "from-blue-500 to-blue-700" },
    { name: "Microsoft", logo: "MS", color: "from-green-500 to-green-700" },
    { name: "Amazon", logo: "A", color: "from-yellow-500 to-yellow-700" },
    { name: "Netflix", logo: "N", color: "from-red-500 to-red-700" },
    { name: "Spotify", logo: "S", color: "from-green-400 to-green-600" },
    { name: "Adobe", logo: "Ad", color: "from-red-400 to-pink-600" }
  ];

  // Mouse position tracker for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        // Delete text
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        // Add text
        setTypedText(currentText.substring(0, typedText.length + 1));
      }

      // Check if we've finished typing a word
      if (!isDeleting && typedText === currentText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        // Move to next word after deleting
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ sending: true, success: false, error: false });
    
    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = 'service_9jzlq6q';
    const templateID = 'template_mwwf2lg';
    const userID = '127OFHb2IQq0zSiFJ';
    
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, userID)
    .then((result) => {
      setFormStatus({ sending: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setShowContactForm(false);
        setFormStatus({ sending: false, success: false, error: false });
      }, 2000);
    }, (error) => {
      setFormStatus({ sending: false, success: false, error: true });
    });
  };

  // Parallax effect for background elements
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 30 - 15}px, ${mousePosition.y * 30 - 15}px)`
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements with parallax */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-soft-light filter blur-xl animate-blob"
            style={{ transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)` }}
          ></div>
          <div 
            className="absolute top-0 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"
            style={{ transform: `translate(${mousePosition.x * 15 - 7.5}px, ${mousePosition.y * 15 - 7.5}px)` }}
          ></div>
          <div 
            className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"
            style={{ transform: `translate(${mousePosition.x * 25 - 12.5}px, ${mousePosition.y * 25 - 12.5}px)` }}
          ></div>
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)'
          }}></div>
        </div>

        {/* Floating particles with mouse interaction */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => {
            const size = Math.random() * 20 + 5;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `float-particle ${Math.random() * 10 + 10}s infinite ease-in-out`,
                  animationDelay: Math.random() * 5 + 's',
                  transform: `translate(${(mousePosition.x - 0.5) * size}px, ${(mousePosition.y - 0.5) * size}px)`
                }}
              ></div>
            );
          })}
        </div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute inset-4 border-4 border-purple-500 rounded-full opacity-20 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-8 border-4 border-cyan-500 rounded-full opacity-20 animate-ping" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm px-4 py-2 rounded-full mb-6 font-medium backdrop-blur-sm border border-cyan-500/30 shadow-lg">
                <span className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                  Trusted by 1000+ businesses worldwide
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 animate-text-shine">{typedText}</span>
                <span className="inline-block w-1 h-10 bg-blue-300 ml-1 animate-pulse"></span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We create stunning, responsive websites that drive growth and enhance your online presence. 
                Our expert team delivers cutting-edge solutions tailored to your business needs.
              </p>
              
              {/* Stats Cards with hover effects */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white border-opacity-20 relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="flex items-center relative z-10">
                      <span className="text-2xl mr-3 text-white bg-black bg-opacity-30 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
                      <div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white text-opacity-80">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons with enhanced animations */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Get Free Consultation
                  </span>
                </button>
                <button 
                  onClick={onViewProducts}
                  className="relative border-2 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-15 font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg backdrop-blur-sm overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    View All Products
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              {/* Main Hero Image with enhanced effects */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-70 blur-lg animate-pulse"></div>
                <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Website Development" 
                    className="transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating elements with enhanced animations */}
                <div className="absolute -top-5 -left-5 bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-xl shadow-lg animate-float text-white z-20 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-black bg-opacity-30 p-2 rounded-full mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Project Completed</div>
                      <div className="text-sm text-blue-100">Web Design</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-xl shadow-lg animate-float animation-delay-2000 text-white z-20 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-black bg-opacity-30 p-2 rounded-full mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Live Support</div>
                      <div className="text-sm text-indigo-100">24/7 Available</div>
                    </div>
                  </div>
                </div>

                {/* Third floating element */}
                <div className="absolute top-1/2 -right-10 bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl shadow-lg animate-float animation-delay-3000 text-white z-20 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-black bg-opacity-30 p-2 rounded-full mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Fast Delivery</div>
                      <div className="text-sm text-red-100">Quick Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges with enhanced hover effects */}
          <div className="mt-20 text-center">
            <p className="text-blue-200 text-sm mb-6 uppercase tracking-wider font-semibold flex items-center justify-center">
              <span className="w-8 h-px bg-blue-500 mr-3"></span>
              Trusted by industry leaders worldwide
              <span className="w-8 h-px bg-blue-500 ml-3"></span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {trustBadges.map((company, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-r ${company.color} p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-16 w-16 flex items-center justify-center text-xl font-bold text-white border border-white border-opacity-20 relative overflow-hidden group`}
                  title={company.name}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{company.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-md w-full relative shadow-2xl border border-gray-700 transform scale-95 animate-modal-in">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors hover:rotate-90 duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Consultation</h2>
              <p className="text-gray-400">We'll get back to you within 24 hours</p>
            </div>
            
            {formStatus.success ? (
              <div className="bg-green-900 bg-opacity-50 text-green-300 p-4 rounded-lg mb-4 flex items-center border border-green-800">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thank you! We'll contact you soon.
              </div>
            ) : formStatus.error ? (
              <div className="bg-red-900 bg-opacity-50 text-red-300 p-4 rounded-lg mb-4 flex items-center border border-red-800">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Something went wrong. Please try again.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.sending}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
                >
                  {formStatus.sending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Our team will contact you shortly
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes modal-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-text-shine {
          background: linear-gradient(
            to right,
            #6EE7B7 20%,
            #3B82F6 30%,
            #9333EA 70%,
            #6EE7B7 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 500% auto;
          animation: text-shine 5s ease-in-out infinite alternate;
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;