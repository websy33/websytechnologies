// src/Components/Portfolio.jsx
import React, { useState, useEffect } from 'react';

const Portfolio = ({ portfolio, portfolioItems, isHighlighted }) => {
  // Use portfolioItems if provided, otherwise use portfolio (for backward compatibility)
  const items = portfolioItems || portfolio || [];
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [animateItems, setAnimateItems] = useState(false);
  
  // Extract unique categories for filtering
  const categories = ['all', ...new Set(items.map(item => item.category).filter(Boolean))];
  
  // Filter items based on active category
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  // Function to open project modal
  const openProjectModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Function to close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) closeProjectModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Load more items function
  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  // Trigger animations when component mounts or filter changes
  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter, items]);

  return (
    <>
      <section 
        id="portfolio" 
        className={`py-16 lg:py-24 relative ${isHighlighted ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50' : 'bg-white'}`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 text-blue-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 relative pb-2 mt-4">
              Featured <span className="text-blue-600">Projects</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Discover our innovative solutions and creative projects that deliver exceptional results
            </p>
          </div>
          
          {/* Category Filters */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center mb-12 lg:mb-16 gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setVisibleItems(6);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                    activeFilter === category 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform -translate-y-1' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {category === 'all' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      All Projects
                    </>
                  ) : (
                    category.charAt(0).toUpperCase() + category.slice(1)
                  )}
                </button>
              ))}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.slice(0, visibleItems).map((project, index) => (
                <div 
                  key={project.id} 
                  className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 0.1}s`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-500/30 text-blue-100 text-xs rounded-full backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-800/50 text-gray-100 text-xs rounded-full backdrop-blur-sm">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                          <button 
                            onClick={() => openProjectModal(project)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2h-16a2 2 0 01-2-2z" />
                            </svg>
                            View Details
                          </button>
                          {project.projectUrl && (
                            <a 
                              href={project.projectUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
                              title="Live Preview"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-white border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 text-lg mb-1 truncate">{project.title}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-600 text-sm font-medium">{project.category}</span>
                      <span className="text-xs text-gray-500">{project.year || project.date}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="inline-flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-200 max-w-md mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No portfolio items found</h3>
                  <p className="text-gray-500">
                    {activeFilter !== 'all' 
                      ? `No projects found in the ${activeFilter} category.` 
                      : 'We are currently working on new projects. Please check back soon.'
                    }
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMore}
                className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 hover:text-blue-600 flex items-center mx-auto hover:transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Load More Projects
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 lg:mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 lg:p-12 shadow-inner relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Ready to start your project?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Let's work together to create something amazing. Get in touch with us today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule a Call
                </button>
                <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center hover:transform hover:-translate-y-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-16 text-blue-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" onClick={closeProjectModal}></div>
          
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {currentProject.category}
                  </span>
                  <span className="text-gray-500 text-sm">{currentProject.year || currentProject.date}</span>
                  {currentProject.featured && (
                    <span className="px-3 py-1.5 bg-yellow-500 text-white text-sm font-medium rounded-full flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{currentProject.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{currentProject.description}</p>
                
                {currentProject.details && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Details</h4>
                    <p className="text-gray-600 leading-relaxed">{currentProject.details}</p>
                  </div>
                )}
                
                {currentProject.highlights && currentProject.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {currentProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {currentProject.projectUrl && (
                    <a 
                      href={currentProject.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Preview
                    </a>
                  )}
                  {currentProject.githubUrl && (
                    <a 
                      href={currentProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-full transition-colors flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      View Code
                    </a>
                  )}
                  <button 
                    onClick={closeProjectModal}
                    className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;