import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Header = ({ onSearch, onLogoClick, isSinglePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: 'I\'m interested in a free consultation for my project'
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // For navigation with React Router
  const navigate = useNavigate();
  const location = useLocation();

  // Sample search data
  const searchData = [
    { id: 1, title: 'Web Development', section: 'services', content: 'Our web development services include...' },
    { id: 2, title: 'Mobile Apps', section: 'services', content: 'We create cross-platform mobile applications...' },
    { id: 3, title: 'E-commerce Solutions', section: 'services', content: 'Complete online store development...' },
    { id: 4, title: 'Project Alpha', section: 'portfolio', content: 'A responsive web application for healthcare...' },
    { id: 5, title: 'Project Beta', section: 'portfolio', content: 'E-commerce platform with custom CMS...' },
    { id: 6, title: 'Discovery Phase', section: 'process', content: 'We start by understanding your business needs...' },
    { id: 7, title: 'Client Testimonial - John Doe', section: 'testimonials', content: 'WebsyTechnologies delivered beyond our expectations...' },
  ];

  // Services dropdown data
  const servicesData = [
    { id: 1, title: 'Web Development', icon: '💻', description: 'Custom websites and web applications', color: 'from-blue-500 to-blue-700' },
    { id: 2, title: 'Mobile Apps', icon: '📱', description: 'iOS and Android applications', color: 'from-purple-500 to-purple-700' },
    { id: 3, title: 'UI/UX Design', icon: '🎨', description: 'User-centered design solutions', color: 'from-pink-500 to-pink-700' },
    { id: 4, title: 'E-commerce', icon: '🛒', description: 'Online store development', color: 'from-green-500 to-green-700' },
    { id: 5, title: 'Cloud Solutions', icon: '☁️', description: 'Scalable cloud infrastructure', color: 'from-indigo-500 to-indigo-700' },
    { id: 6, title: 'Digital Marketing', icon: '📊', description: 'SEO and online presence', color: 'from-amber-500 to-amber-600' },
  ];

  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search results when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
        setIsSearchFocused(false);
        setIsSearchExpanded(false);
      }
      
      // Close dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      
      // Close modal if clicked outside
      if (modalRef.current && !modalRef.current.contains(event.target) && showConsultationModal) {
        setShowConsultationModal(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowResults(false);
        setIsSearchFocused(false);
        setIsSearchExpanded(false);
        setActiveDropdown(null);
        setShowConsultationModal(false);
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showConsultationModal]);

  const scrollToSection = (sectionId) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setIsMenuOpen(false);
    setShowResults(false);
    setIsSearchFocused(false);
    setIsSearchExpanded(false);
    setSearchQuery('');
    setActiveDropdown(null);
  };

  // Function to handle navigation
  const handleNavigation = (path, isSection = false, sectionId = null) => {
    // Close all open menus
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setShowResults(false);
    setIsSearchFocused(false);
    setIsSearchExpanded(false);
    
    if (isSection && sectionId) {
      // If it's a section link, use scrollToSection
      scrollToSection(sectionId);
    } else {
      // Navigate to the new page
      navigate(path);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    // Pass search query to parent component for product search
    if (onSearch) {
      onSearch(query);
    }
    
    // Local section search
    if (query.length > 1) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      if (searchResults.length > 0) {
        scrollToSection(searchResults[0].section);
      } else if (onSearch) {
        // If no section results but we have onSearch prop, let parent handle it
        onSearch(searchQuery);
      } else {
        // If no results, just close the search
        setShowResults(false);
        setIsSearchFocused(false);
        setIsSearchExpanded(false);
      }
    }
  };

  const handleSearchResultClick = (result) => {
    scrollToSection(result.section);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setIsSearchExpanded(true);
    if (searchQuery.length > 1) {
      setShowResults(true);
    }
  };

  const handleSearchIconClick = () => {
    if (isSearchExpanded) {
      // If search is already expanded, submit the search
      if (searchQuery.length > 0) {
        handleSearchSubmit({ preventDefault: () => {} });
      }
    } else {
      // If search is not expanded, expand it and focus
      setIsSearchExpanded(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 10);
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleConsultationClick = () => {
    setShowConsultationModal(true);
    setFormStatus({ submitting: false, submitted: false, error: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company,
        message: formData.message,
        to_name: 'Websy Technology Team'
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_ov629rm', // Replace with your EmailJS service ID
        'template_jr1dnto', // Replace with your EmailJS template ID
        templateParams,
        '37pN2ThzFwwhwk7ai' // Replace with your EmailJS user ID
      );
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: 'I\'m interested in a free consultation for my project'
        });
        setShowConsultationModal(false);
      }, 2000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send your message. Please try again later.' 
      });
    }
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/"
                className="flex items-center space-x-3 cursor-pointer group" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (onLogoClick) {
                    onLogoClick();
                  }
                }}
              >
                <div className={`p-2 rounded-xl transition-all duration-500 ${isScrolled ? 'bg-gradient-to-r from-blue-600 to-indigo-700' : 'bg-gradient-to-r from-blue-500 to-indigo-600'} group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg shadow-md`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 9 12h2a9 9 0 1 1-2.636-6.364z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className={`text-xl font-bold transition-all duration-500 ${isScrolled ? 'text-slate-800' : 'text-white'} group-hover:text-blue-300`}>Websy Technology</h1>
                  <p className={`text-xs transition-all duration-500 ${isScrolled ? 'text-slate-600' : 'text-blue-100'} group-hover:text-blue-200`}>Innovating Digital Excellence</p>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation with integrated search */}
            <nav className="hidden lg:flex space-x-1 items-center">
              <div className="relative group" ref={dropdownRef}>
                <button 
                  onClick={() => toggleDropdown('services')}
                  onMouseEnter={() => setActiveDropdown('services')}
                  className={`flex items-center font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} ${activeDropdown === 'services' ? 'bg-blue-50 text-blue-600 shadow-md' : ''}`}
                >
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 p-5 grid grid-cols-2 gap-4">
                    {servicesData.map(service => (
                      <button
                        key={service.id} 
                        className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r ${service.color} text-white shadow-md hover:shadow-lg`}
                        onClick={() => handleNavigation('/', true, 'services')}
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3 bg-white/20 p-2 rounded-xl">{service.icon}</span>
                          <div>
                            <h3 className="font-semibold">{service.title}</h3>
                            <p className="text-sm text-blue-100 mt-1">{service.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button onClick={() => handleNavigation('/', true, 'portfolio')} className={`font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Portfolio
              </button>
              
              <button onClick={() => handleNavigation('/', true, 'process')} className={`font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Process
              </button>
              
              {/* Call to Action Button */}
              <button 
                onClick={handleConsultationClick}
                className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 极速2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Free Consultation
              </button>
              
              {/* Integrated Search Bar */}
              <div className="relative ml极速-4" ref={searchRef}>
                <form 
                  onSubmit={handleSearchSubmit} 
                  className={`flex items-center overflow-hidden transition-all duration-500 ${isSearchExpanded ? 'w-64 bg-white shadow-lg' : 'w-10'} ${isScrolled && !isSearchExpanded ? 'bg-gray-100' : !isScrolled && !isSearchExpanded ? 'bg-white/20' : ''} rounded-xl`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={handleSearchFocus}
                    placeholder={isSearchExpanded ? "Search services, portfolio..." : ""}
                    className={`py-2 transition-all duration-500 ${isSearchExpanded ? 'w-56 px-4 opacity-100' : 'w-0 px-0 opacity-0'} border-none focus:outline-none focus:ring-0 bg-transparent ${isSearchExpanded ? 'text-slate-800' : isScrolled ? 'text-slate-700' : 'text-white'}`}
                  />
                  <button 
                    type="button"
                    onClick={handleSearchIconClick}
                    className={`p-2 ${isSearchExpanded ? 'pr-3' : ''} ${isScrolled && !isSearchExpanded ? 'text-slate-600' : !isScrolled && !isSearchExpanded ? 'text-white' : 'text-blue-600'} transition-all duration-300 hover:scale-110`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>

                {/* Search Results Dropdown */}
                {showResults && (
                  <div ref={resultsRef} className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden">
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-slate-500 border-b bg-slate-50">SEARCH RESULTS</div>
                      {searchResults.length > 0 ? (
                        <ul className="max-h-80 overflow-y-auto">
                          {searchResults.map(result => (
                            <li key={result.id}>
                              <button
                                onClick={() => handleSearchResultClick(result)}
                                className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-all duration-300 border-b border-gray-100 flex flex-col hover:pl-5"
                              >
                                <div className="font-medium text-blue-700">{result.title}</div>
                                <div className="text-sm text-slate-600 capitalize mt-1">{result.section}</div>
                                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{result.content}</div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : searchQuery.length > 1 ? (
                        <div className="p-4 text-center text-slate-500">
                          No results found for "{searchQuery}"
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Search Button */}
              <button 
                onClick={() => {
                  setIsSearchFocused(!isSearchFocused);
                  setIsMenuOpen(false);
                }}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  setIsMenuOpen(!极速isMenuOpen);
                  setIsSearchFocused(false);
                }}
                className={`focus:outline-none p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6 transition-transform duration-300 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          {isSearchFocused && (
            <div className="lg:hidden mt-3 animate-fadeIn">
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={handleSearchFocus}
                    placeholder="Search services, portfolio..."
                    className="flex-1 py-2 px-4 border-none focus:outline-none focus:ring-0"
                    autoFocus
                  />
                  <button type="submit" className="p-2 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={极速2} d="M21 21极速l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>

                {/* Mobile Search Results */}
                {showResults && (
                  <div ref={resultsRef} className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl z-50 border border-gray-200">
                    <div className="py-2">
                      {searchResults.length > 0 ? (
                        <ul className="max-h-80 overflow-y-auto">
                          {searchResults.map(result => (
                            <li key={result.id}>
                              <button
                                onClick={() => handleSearchResultClick(result)}
                                className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 flex flex-col"
                              >
                                <div className="font-medium text-blue-700">{result.title}</div>
                                <div className="text-sm text-slate-600 capitalize mt-1">{result.section}</div>
                                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{result.content}</div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : searchQuery.length > 1 ? (
                        <div className="p-4 text-center text-slate-500">
                          No results found for "{searchQuery}"
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 bg-white rounded-xl shadow-2xl animate-slideDown">
              <div className="flex flex-col space-y-1 p-4">
                <button 
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex justify-between items-center text-slate-700 hover:text-blue-600 font-medium py-3 px-4 text-left rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <span>Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="pl-6 pr-4 grid grid-cols-1 gap-2 animate-fadeIn">
                    {servicesData.map(service => (
                      <button 
                        key={service.id}
                        onClick={() => handleNavigation('/', true, 'services')}
                        className="flex items-center py-2 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      >
                        <span className="mr-2 text-lg">{service.icon}</span>
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
                
                <button onClick={() => handleNavigation('/', true, 'portfolio')} className="text-slate-700 hover:text-blue-600 font-medium py-3 px-4 text-left rounded-lg hover:bg-blue-50 transition-all duration-300">
                  Portfolio
                </button>
                
                <button onClick={() => handleNavigation('/', true, 'process')} className="text-slate-700 hover:text-blue-600 font-medium py-3 px-4 text-left rounded-lg hover:bg-blue-50 transition-all duration-300">
                  Process
                </button>
                
                <button onClick={handleConsultationClick} className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-4 text-center rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div ref={modalRef} className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scaleIn">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Free Consultation</h2>
                <button 
                  onClick={() => setShowConsultationModal(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-blue-100">Let's discuss your project needs</p>
            </div>
            
            {formStatus.submitted ? (
              <div className="p极速-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semib极速old text-gray-800">Thank You!</h3>
                <p className="mt-2 text-gray-600">We've received your request and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-极速1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us about your project needs"
                    ></textarea>
                  </div>
                  
                  {formStatus.error && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                      {formStatus.error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus.submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white极速" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12s5.373 12 12 12v-4a8 8 0 01-8-8z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Request Consultation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      
      {/* Add spacer to prevent content from being hidden behind fixed header */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
  
export default Header;