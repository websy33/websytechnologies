import React from 'react';

const Testimonials = ({ process, searchTerm, isHighlighted, onSearch }) => {
  // Default process data if not passed as prop
  const defaultSteps = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals, target audience, and requirements.",
      icon: "🔍",
      tags: ["discovery", "planning", "requirements", "analysis", "strategy"],
      technologies: ["Research", "Analysis", "Documentation"]
    },
    {
      id: 2,
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and mockups to visualize the final product.",
      icon: "🎨",
      tags: ["design", "prototyping", "wireframes", "ui", "ux", "mockups"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description: "Our developers bring the design to life with clean, efficient code.",
      icon: "💻",
      tags: ["development", "coding", "programming", "frontend", "backend", "fullstack"],
      technologies: ["React", "Node.js", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      id: 4,
      number: "04",
      title: "Testing & Quality Assurance",
      description: "We rigorously test the website to ensure optimal performance and user experience.",
      icon: "🧪",
      tags: ["testing", "qa", "quality", "performance", "bug", "debugging"],
      technologies: ["Jest", "Cypress", "Selenium", "Testing", "Debugging"]
    },
    {
      id: 5,
      number: "05",
      title: "Deployment",
      description: "We launch your website and ensure everything is working perfectly.",
      icon: "🚀",
      tags: ["deployment", "launch", "hosting", "server", "cloud", "devops"],
      technologies: ["AWS", "Netlify", "Vercel", "Docker", "CI/CD"]
    },
    {
      id: 6,
      number: "06",
      title: "Maintenance & Support",
      description: "We provide ongoing support to keep your website updated and secure.",
      icon: "🔧",
      tags: ["maintenance", "support", "updates", "security", "monitoring", "optimization"],
      technologies: ["Support", "Updates", "Security", "Monitoring", "Optimization"]
    }
  ];

  // Safely handle the process prop
  const steps = Array.isArray(process) ? process : defaultSteps;

  const filteredSteps = steps.filter(step => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Safely check each property
    const titleMatch = step.title?.toLowerCase().includes(searchLower) || false;
    const descriptionMatch = step.description?.toLowerCase().includes(searchLower) || false;
    const tagsMatch = Array.isArray(step.tags) 
      ? step.tags.some(tag => tag?.toLowerCase().includes(searchLower))
      : false;
    const techMatch = Array.isArray(step.technologies)
      ? step.technologies.some(tech => tech?.toLowerCase().includes(searchLower))
      : false;

    return titleMatch || descriptionMatch || tagsMatch || techMatch;
  });

  const handleTagSearch = (tag) => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(tag);
    }
  };

  const handleTechnologySearch = (tech) => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(tech);
    }
  };

  const handleStepSearch = (stepTitle) => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(stepTitle);
    }
  };

  // Safe array mapping with fallbacks
  const renderTechnologies = (technologies) => {
    if (!Array.isArray(technologies)) return null;
    
    return technologies.slice(0, 3).map((tech, techIndex) => (
      <span
        key={techIndex}
        onClick={(e) => {
          e.stopPropagation();
          handleTechnologySearch(tech);
        }}
        className="bg-white text-gray-700 px-2 py-1 rounded text-xs cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition duration-200 border border-gray-200"
      >
        {tech || 'Technology'}
      </span>
    ));
  };

  const renderTags = (tags) => {
    if (!Array.isArray(tags)) return null;
    
    return tags.slice(0, 4).map((tag, tagIndex) => (
      <span
        key={tagIndex}
        onClick={(e) => {
          e.stopPropagation();
          handleTagSearch(tag);
        }}
        className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs cursor-pointer hover:bg-blue-100 transition duration-200"
      >
        #{tag || 'tag'}
      </span>
    ));
  };

  return (
    <section 
      id="process" 
      className={`py-20 bg-white ${isHighlighted ? 'search-highlight' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure every project is delivered on time and exceeds expectations.
          </p>
        </div>

        {/* Search Results Header */}
        {searchTerm && (
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {filteredSteps.length > 0 
                ? `Found ${filteredSteps.length} process step(s) matching "${searchTerm}"`
                : `No process steps found matching "${searchTerm}"`
              }
            </h3>
            <button 
              onClick={() => onSearch && onSearch('')}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSteps.map((step) => (
            <div 
              key={step.id || step.number} 
              className="bg-gray-50 p-8 rounded-lg relative group hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleStepSearch(step.title)}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-blue-700 transition duration-300">
                {step.number || '00'}
              </div>
              
              {/* Step Icon */}
              <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100 transition duration-300">
                {step.icon || '📋'}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition duration-300">
                {step.title || 'Process Step'}
              </h3>
              
              <p className="text-gray-600 mb-4">{step.description || 'No description available.'}</p>

              {/* Technologies */}
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {renderTechnologies(step.technologies)}
                  {Array.isArray(step.technologies) && step.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{step.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Related:</h4>
                <div className="flex flex-wrap gap-1">
                  {renderTags(step.tags)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSteps.length === 0 && !searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No process steps available.</p>
          </div>
        )}

        {/* Process Explanation */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Our Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div key="structured">
              <div className="text-2xl mb-2">📋</div>
              <h4 className="font-semibold text-gray-800 mb-2">Structured Approach</h4>
              <p className="text-gray-600 text-sm">Clear milestones and deliverables at every stage</p>
            </div>
            <div key="efficient">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-800 mb-2">Efficient Workflow</h4>
              <p className="text-gray-600 text-sm">Optimized processes for faster delivery</p>
            </div>
            <div key="quality">
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Rigorous testing at every phase</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={() => onSearch && onSearch('process')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 mr-4"
          >
            Learn More About Our Process
          </button>
          <button 
            onClick={() => onSearch && onSearch('consultation')}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;