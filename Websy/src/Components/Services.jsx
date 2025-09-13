import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  // State management (unchanged)
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  // Mouse position tracker for parallax effects (unchanged)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Scroll progress tracker (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollTop = window.pageYOffset;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const progress = (scrollTop - sectionTop) / sectionHeight;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Services data with updated color scheme
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom website development with modern technologies and responsive design.',
      icon: '💻',
      category: 'development',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Cross-browser Compatibility'],
      fullDescription: 'Our web development service creates stunning, functional websites tailored to your business needs. We use the latest technologies to ensure your site is fast, secure, and scalable. From simple brochure sites to complex web applications, we deliver solutions that drive results.',
      price: 'Starting at $1,500',
      timeline: '2-4 weeks',
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and engaging interfaces.',
      icon: '🎨',
      category: 'design',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      fullDescription: 'Our UI/UX design service focuses on creating interfaces that are not only visually appealing but also intuitive and user-friendly. We conduct thorough research to understand your users and create designs that enhance their experience and drive engagement.',
      price: 'Starting at $1,200',
      timeline: '3-5 weeks',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      category: 'development',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
      fullDescription: 'We develop high-performance mobile applications for both iOS and Android platforms. Our apps are designed with the user in mind, ensuring a seamless experience across all devices. We handle everything from concept to deployment on app stores.',
      price: 'Starting at $5,000',
      timeline: '6-10 weeks',
      color: 'from-emerald-500 to-teal-500',
      popular: true
    },
    {
      id: 4,
      title: 'Brand Identity',
      description: 'Creating unique visual identities that represent your brand values.',
      icon: '🖌️',
      category: 'design',
      features: ['Logo Design', 'Color Palette', 'Brand Guidelines', 'Visual Assets'],
      fullDescription: 'Our brand identity service helps you establish a strong, cohesive brand presence. We create logos, color schemes, typography, and brand guidelines that accurately represent your company values and resonate with your target audience.',
      price: 'Starting at $800',
      timeline: '2-3 weeks',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to increase your online presence.',
      icon: '📈',
      category: 'marketing',
      features: ['Social Media', 'Content Strategy', 'Analytics', 'Campaign Management'],
      fullDescription: 'Our digital marketing service develops comprehensive strategies to increase your online visibility and engagement. We utilize social media, content marketing, and data analytics to create campaigns that drive traffic and conversions.',
      price: 'Custom packages',
      timeline: 'Ongoing',
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 6,
      title: 'E-Commerce Solutions',
      description: 'Complete online store development with secure payment integration.',
      icon: '🛒',
      category: 'development',
      features: ['Product Management', 'Payment Gateway', 'Order Processing', 'Inventory System'],
      fullDescription: 'We build robust e-commerce platforms that provide seamless shopping experiences. Our solutions include product catalog management, secure payment processing, inventory tracking, and order fulfillment systems to help you sell effectively online.',
      price: 'Starting at $3,000',
      timeline: '4-8 weeks',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 7,
      title: 'Content Creation',
      description: 'Engaging content that connects with your audience and drives action.',
      icon: '✏️',
      category: 'marketing',
      features: ['Blog Posts', 'Video Content', 'Social Media Content', 'Content Strategy'],
      fullDescription: 'Our content creation service produces high-quality, engaging content that resonates with your audience. From blog posts and articles to videos and social media content, we help you tell your story and build meaningful connections.',
      price: 'Starting at $500/month',
      timeline: 'Ongoing',
      color: 'from-sky-500 to-cyan-500'
    },
    {
      id: 8,
      title: 'SEO Optimization',
      description: 'Improving your website visibility and ranking on search engines.',
      icon: '🔍',
      category: 'marketing',
      features: ['Keyword Research', 'Technical SEO', 'Performance Tracking', 'Content Optimization'],
      fullDescription: 'Our SEO optimization service improves your website visibility in search engine results. We conduct comprehensive keyword research, optimize your site structure and content, and provide ongoing monitoring to ensure sustained results.',
      price: 'Starting at $800/month',
      timeline: '3-6 months for results',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  // Rest of the functions remain unchanged
  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const openForm = (service = null) => {
    if (service) {
      setFormData(prev => ({ ...prev, service: service.title }));
    }
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setSubmitStatus(null);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS integration
    emailjs.send(
      'service_ov629rm', // Your Service ID
      'template_jr1dnto', // Your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      },
      '37pN2ThzFwwhwk7ai' // Your Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  // Parallax effect based on mouse position
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
  };

  // More pronounced parallax for background elements
  const parallaxStyleDeep = {
    transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Advanced background with layered parallax effect - updated colors */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Deep background layer with subtle movement */}
        <div className="absolute inset-0 opacity-10" style={parallaxStyleDeep}>
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
        </div>
        
        {/* Mid background layer with more movement */}
        <div className="absolute inset-0 opacity-20" style={parallaxStyle}>
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-indigo-200 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border-4 border-violet-200 rotate-12"></div>
        </div>
        
        {/* Grid pattern with subtle animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, rgb(203, 213, 225) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(203, 213, 225) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating particles with enhanced animation - updated colors */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                scale: 0,
                opacity: 0,
                y: Math.random() * 100,
                x: Math.random() * 100
              }}
              animate={{
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                y: [Math.random() * 100, Math.random() * 100 - 50, Math.random() * 100],
                x: [Math.random() * 100, Math.random() * 100 - 50, Math.random() * 100]
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                width: Math.random() * 15 + 5 + 'px',
                height: Math.random() * 15 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                backgroundColor: ['#bae6fd', '#c7d2fe', '#ddd6fe', '#bfdbfe', '#cffafe'][i % 5],
              }}
            />
          ))}
        </div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 animate-line"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30 animate-line animation-delay-3000"></div>
        
        {/* Scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with enhanced animations */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block p-3 bg-white/80 rounded-full mb-6 backdrop-blur-sm border border-slate-200"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer a comprehensive range of digital solutions to elevate your business and drive success in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Category Tabs with enhanced interactions */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm relative overflow-hidden group ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md border border-slate-200'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {activeTab === category.id && (
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="bg-white/80 rounded-2xl shadow-lg overflow-hidden group backdrop-blur-sm border border-slate-200 relative"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="mb-6">
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center text-slate-600 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <motion.button 
                    onClick={() => openModal(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group/explore ${
                      hoveredService === service.id 
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                        : 'bg-white text-slate-700 shadow-md border border-slate-200'
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Service
                      <svg 
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${hoveredService === service.id ? 'translate-x-1' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    <div className={`absolute inset-0 bg-white opacity-0 group-hover/explore:opacity-10 transition-opacity duration-300`}></div>
                  </motion.button>
                  <motion.button 
                    onClick={() => openForm(service)}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group/action"
                  >
                    Start Project
                    <svg className="w-4 h-4 ml-1 group-hover/action:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section with 3D effect */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-2xl p-8 md:p-12 text-center overflow-hidden relative backdrop-blur-md border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)"
          }}
        >
          {/* 3D effect with multiple gradients */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 opacity-50 blur-lg"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to transform your business?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Get in touch with us today and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                onClick={() => openForm()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-500 text-slate-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal for service details with 3D effect */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* 3D effect border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-b from-blue-100 to-indigo-100 opacity-40"></div>
              
              <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white rounded-t-2xl relative overflow-hidden`}>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <motion.div 
                    className="text-5xl bg-white/20 p-3 rounded-2xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {selectedService.icon}
                  </motion.div>
                  <motion.button 
                    onClick={closeModal}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    className="text-white hover:text-gray-200 transition-colors duration-300 bg-black/20 p-2 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                <h3 className="text-3xl font-bold mb-2">{selectedService.title}</h3>
                <p className="text-blue-100 opacity-90">{selectedService.description}</p>
              </div>
              
              <div className="p-6 md:p-8">
                {/* Full Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Service Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{selectedService.fullDescription}</p>
                </div>
                
                {/* Investment & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-700">Investment</h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-800">{selectedService.price}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-700">Timeline</h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-800">{selectedService.timeline}</p>
                  </motion.div>
                </div>
                
                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What's Included
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center bg-slate-50 p-4 rounded-lg border border-slate-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.button 
                  onClick={() => {
                    closeModal();
                    openForm(selectedService);
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center text-lg font-semibold relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start This Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal with 3D perspective */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background with gradient and subtle animation */}
            <motion.div 
              className="fixed inset-0 bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Form Container with 3D perspective */}
            <motion.div 
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border border-slate-200"
              initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 5 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              {/* 3D effect border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-b from-blue-100 to-indigo-100 opacity-40"></div>
              
              {/* Scrollable content area */}
              <div className="overflow-y-auto flex-1">
                <div className="relative p-6 md:p-8">
                  {/* Close button */}
                  <motion.button 
                    onClick={closeForm}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors duration-300 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                  
                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 border border-slate-200"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-800">Start Your Project</h3>
                    <p className="text-slate-600 mt-2">Let's create something amazing together</p>
                  </div>

                  {submitStatus === 'success' ? (
                    <motion.div 
                      className="text-center py-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent Successfully!</h4>
                      <p className="text-slate-600 mb-6">We'll get back to you within 24 hours.</p>
                      <motion.button 
                        onClick={closeForm}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md"
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div 
                      className="text-center py-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Something Went Wrong</h4>
                      <p className="text-slate-600 mb-6">Please try again or contact us directly.</p>
                      <motion.button 
                        onClick={() => setSubmitStatus(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md"
                      >
                        Try Again
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          whileFocus={{ scale: 1.01 }}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          whileFocus={{ scale: 1.01 }}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          whileFocus={{ scale: 1.01 }}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Interested In *</label>
                        <motion.select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          whileFocus={{ scale: 1.01 }}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-slate-800 placeholder-slate-400"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.title}>{service.title}</option>
                          ))}
                        </motion.select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details *</label>
                        <motion.textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          whileFocus={{ scale: 1.01 }}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Tell us about your project goals, timeline, and budget..."
                        ></motion.textarea>
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center relative overflow-hidden group"
                      >
                        <span className="relative z-10">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Send Message
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </motion.form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
        
        @keyframes border {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.3;
          }
        }
        .animate-border {
          animation: border 3s ease-in-out infinite;
        }
        
        @keyframes line {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        .animate-line {
          animation: line 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;