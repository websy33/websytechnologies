import React, { useState, useMemo, useEffect, useRef } from 'react';

function TechnologiesUsed() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [formStatus, setFormStatus] = useState({ submitting: false, message: '', success: false });
  const [carouselItems, setCarouselItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technologies = {
    frontend: [
      { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-800' },
      { name: 'Vue.js', icon: '🟢', color: 'bg-green-100 text-green-800' },
      { name: 'Angular', icon: '🅰️', color: 'bg-red-100 text-red-800' },
      { name: 'Svelte', icon: '💨', color: 'bg-orange-100 text-orange-800' },
      { name: 'Next.js', icon: '⏭️', color: 'bg-gray-100 text-gray-800' },
      { name: 'Gatsby', icon: '📊', color: 'bg-purple-100 text-purple-800' },
      { name: 'TypeScript', icon: '🔷', color: 'bg-blue-100 text-blue-800' },
      { name: 'JavaScript (ES6+)', icon: '📜', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'HTML5', icon: '🌐', color: 'bg-orange-100 text-orange-800' },
      { name: 'CSS3', icon: '🎨', color: 'bg-blue-100 text-blue-800' },
      { name: 'Sass/SCSS', icon: '💅', color: 'bg-pink-100 text-pink-800' },
      { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-100 text-cyan-800' },
      { name: 'Bootstrap', icon: '🅱️', color: 'bg-purple-100 text-purple-800' },
      { name: 'Material-UI', icon: '🧩', color: 'bg-blue-100 text-blue-800' },
      { name: 'Redux', icon: '🗃️', color: 'bg-purple-100 text-purple-800' },
      { name: 'Zustand', icon: '🐻', color: 'bg-brown-100 text-brown-800' },
      { name: 'React Query', icon: '🔄', color: 'bg-red-100 text-red-800' },
      { name: 'GraphQL (Apollo Client)', icon: '📊', color: 'bg-pink-100 text-pink-800' },
      { name: 'Webpack', icon: '📦', color: 'bg-blue-100 text-blue-800' },
      { name: 'Vite', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'Babel', icon: '🔁', color: 'bg-yellow-100 text-yellow-800' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-800' },
      { name: 'Express.js', icon: '🚂', color: 'bg-gray-100 text-gray-800' },
      { name: 'NestJS', icon: '🪹', color: 'bg-red-100 text-red-800' },
      { name: 'Python (Django, Flask)', icon: '🐍', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'Ruby on Rails', icon: '💎', color: 'bg-red-100 text-red-800' },
      { name: 'Java (Spring Boot)', icon: '☕', color: 'bg-orange-100 text-orange-800' },
      { name: 'PHP (Laravel, Symfony)', icon: '🐘', color: 'bg-purple-100 text-purple-800' },
      { name: 'Go (Gin, Echo)', icon: '🐹', color: 'bg-cyan-100 text-cyan-800' },
      { name: '.NET Core', icon: '🔷', color: 'bg-purple-100 text-purple-800' },
      { name: 'FastAPI', icon: '🚀', color: 'bg-green-100 text-green-800' },
      { name: 'GraphQL (Apollo Server)', icon: '📊', color: 'bg-pink-100 text-pink-800' },
      { name: 'REST APIs', icon: '🔌', color: 'bg-green-100 text-green-800' },
      { name: 'gRPC', icon: '📡', color: 'bg-blue-100 text-blue-800' },
      { name: 'Socket.io', icon: '🔌', color: 'bg-gray-100 text-gray-800' },
      { name: 'WebSockets', icon: '🔄', color: 'bg-blue-100 text-blue-800' }
    ],
    database: [
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-100 text-blue-800' },
      { name: 'MySQL', icon: '🐬', color: 'bg-orange-100 text-orange-800' },
      { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-800' },
      { name: 'Redis', icon: '🔴', color: 'bg-red-100 text-red-800' },
      { name: 'SQLite', icon: '💡', color: 'bg-blue-100 text-blue-800' },
      { name: 'Firebase Firestore', icon: '🔥', color: 'bg-orange-100 text-orange-800' },
      { name: 'Supabase', icon: '⚡', color: 'bg-green-100 text-green-800' },
      { name: 'Cassandra', icon: '🌌', color: 'bg-blue-100 text-blue-800' },
      { name: 'Elasticsearch', icon: '🔍', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'DynamoDB', icon: '⛰️', color: 'bg-blue-100 text-blue-800' },
      { name: 'Prisma', icon: '🟣', color: 'bg-gray-100 text-gray-800' },
      { name: 'Sequelize', icon: '🗄️', color: 'bg-blue-100 text-blue-800' },
      { name: 'TypeORM', icon: '🟦', color: 'bg-blue-100 text-blue-800' },
      { name: 'Mongoose', icon: '🐍', color: 'bg-green-100 text-green-800' }
    ],
    devops: [
      { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-800' },
      { name: 'Kubernetes', icon: '☸️', color: 'bg-blue-100 text-blue-800' },
      { name: 'AWS', icon: '☁️', color: 'bg-orange-100 text-orange-800' },
      { name: 'Azure', icon: '🔵', color: 'bg-blue-100 text-blue-800' },
      { name: 'Google Cloud Platform', icon: '🔶', color: 'bg-blue-100 text-blue-800' },
      { name: 'Vercel', icon: '▲', color: 'bg-black-100 text-black-800' },
      { name: 'Netlify', icon: '🌐', color: 'bg-blue-100 text-blue-800' },
      { name: 'Heroku', icon: '🚀', color: 'bg-purple-100 text-purple-800' },
      { name: 'DigitalOcean', icon: '🐙', color: 'bg-blue-100 text-blue-800' },
      { name: 'Nginx', icon: '🔧', color: 'bg-green-100 text-green-800' },
      { name: 'Jenkins', icon: '🤖', color: 'bg-red-100 text-red-800' },
      { name: 'GitHub Actions', icon: '⚡', color: 'bg-gray-100 text-gray-800' },
      { name: 'GitLab CI/CD', icon: '🦊', color: 'bg-orange-100 text-orange-800' },
      { name: 'Terraform', icon: '🏗️', color: 'bg-purple-100 text-purple-800' },
      { name: 'Prometheus', icon: '📊', color: 'bg-red-100 text-red-800' },
      { name: 'Grafana', icon: '📈', color: 'bg-orange-100 text-orange-800' },
      { name: 'Let\'s Encrypt', icon: '🔒', color: 'bg-green-100 text-green-800' }
    ],
    tools: [
      { name: 'Git', icon: '📚', color: 'bg-orange-100 text-orange-800' },
      { name: 'GitHub', icon: '🐙', color: 'bg-gray-100 text-gray-800' },
      { name: 'GitLab', icon: '🦊', color: 'bg-orange-100 text-orange-800' },
      { name: 'Bitbucket', icon: '🪣', color: 'bg-blue-100 text-blue-800' },
      { name: 'VS Code', icon: '💻', color: 'bg-blue-100 text-blue-800' },
      { name: 'WebStorm', icon: '🛩️', color: 'bg-blue-100 text-blue-800' },
      { name: 'Postman', icon: '📬', color: 'bg-orange-100 text-orange-800' },
      { name: 'Insomnia', icon: '😴', color: 'bg-purple-100 text-purple-800' },
      { name: 'Jest', icon: '🃏', color: 'bg-red-100 text-red-800' },
      { name: 'Cypress', icon: '🌲', color: 'bg-gray-100 text-gray-800' },
      { name: 'Playwright', icon: '🎭', color: 'bg-blue-100 text-blue-800' },
      { name: 'ESLint', icon: '📝', color: 'bg-purple-100 text-purple-800' },
      { name: 'Prettier', icon: '💅', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'npm/yarn/pnpm', icon: '📦', color: 'bg-red-100 text-red-800' },
      { name: 'Storybook', icon: '📚', color: 'bg-pink-100 text-pink-800' },
      { name: 'Figma', icon: '🎨', color: 'bg-purple-100 text-purple-800' },
      { name: 'Adobe XD', icon: '✏️', color: 'bg-pink-100 text-pink-800' },
      { name: 'Jira', icon: '🦍', color: 'bg-blue-100 text-blue-800' },
      { name: 'Trello', icon: '📋', color: 'bg-blue-100 text-blue-800' },
      { name: 'Slack', icon: '💬', color: 'bg-purple-100 text-purple-800' },
      { name: 'Discord', icon: '🎮', color: 'bg-indigo-100 text-indigo-800' }
    ],
    mobile: [
      { name: 'React Native', icon: '⚛️', color: 'bg-blue-100 text-blue-800' },
      { name: 'Flutter', icon: '🦋', color: 'bg-blue-100 text-blue-800' },
      { name: 'Ionic', icon: '⚡', color: 'bg-blue-100 text-blue-800' },
      { name: 'NativeScript', icon: '📱', color: 'bg-green-100 text-green-800' },
      { name: 'Expo', icon: '🚀', color: 'bg-gray-100 text-gray-800' },
      { name: 'Swift (iOS)', icon: '🐦', color: 'bg-orange-100 text-orange-800' },
      { name: 'Kotlin (Android)', icon: '🤖', color: 'bg-purple-100 text-purple-800' }
    ]
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-blue-700',
    backend: 'from-green-500 to-green-700',
    database: 'from-amber-500 to-amber-700',
    devops: 'from-red-500 to-red-700',
    tools: 'from-indigo-500 to-indigo-700',
    mobile: 'from-purple-500 to-purple-700',
    all: 'from-gray-500 to-gray-700'
  };

  const categoryIcons = {
    frontend: '💻',
    backend: '⚙️',
    database: '🗄️',
    devops: '🔄',
    tools: '🛠️',
    mobile: '📱',
    all: '🌟'
  };

  const allTechnologies = useMemo(() => Object.values(technologies).flat(), [technologies]);

  const filteredTechnologies = useMemo(() => {
    const techList = activeCategory === 'all' ? allTechnologies : technologies[activeCategory];
    return techList.filter(tech => 
      tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm, allTechnologies, technologies]);

  // Prepare carousel items
  useEffect(() => {
    if (filteredTechnologies.length > 0) {
      // Duplicate items to create seamless loop
      const items = [...filteredTechnologies, ...filteredTechnologies];
      setCarouselItems(items);
    }
  }, [filteredTechnologies]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: '', success: false });
    
    try {
      // Simulate API call/EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ 
        submitting: false, 
        message: 'Your message has been sent successfully! We\'ll get back to you soon.', 
        success: true 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
      
      // Close form after 3 seconds
      setTimeout(() => {
        setShowForm(false);
        setFormStatus({ submitting: false, message: '', success: false });
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus({ 
        submitting: false, 
        message: 'Sorry, there was an error sending your message. Please try again later.', 
        success: false 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-200/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-200/20 to-transparent"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>

      {/* Project Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all duration-500 scale-95 animate-in fade-in-90 slide-in-from-bottom-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Start Your Project</h2>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Close form"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 opacity-90">Tell us about your project and we'll get back to you soon</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="api">API Development</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">1 Month</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6+months">6+ Months</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your project goals, requirements, and any specific technologies you're interested in..."
                ></textarea>
              </div>
              
              <div className="pt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-70 flex items-center"
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-white/80 rounded-full mb-6 backdrop-blur-sm border border-blue-100 shadow-lg animate-bounce-slow">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
            Technologies We Use
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-600">
            Our full-stack development expertise spans across various technologies and tools
          </p>
        </div>

        {/* Search Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search technologies..."
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-full leading-5 bg-white/80 backdrop-blur-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search technologies"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 flex items-center text-sm sm:text-base ${
              activeCategory === 'all'
                ? `bg-gradient-to-r ${categoryColors.all} text-white shadow-lg scale-105`
                : 'bg-white/80 backdrop-blur-sm text-slate-700 shadow-md hover:shadow-lg border border-slate-200'
            }`}
            aria-pressed={activeCategory === 'all'}
            aria-label="Show all technologies"
          >
            <span className="mr-2 text-lg">{categoryIcons.all}</span>
            All Technologies
          </button>
          
          {Object.keys(technologies).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 flex items-center text-sm sm:text-base ${
                activeCategory === category
                  ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg scale-105`
                  : 'bg-white/80 backdrop-blur-sm text-slate-700 shadow-md hover:shadow-lg border border-slate-200'
              }`}
              aria-pressed={activeCategory === category}
              aria-label={`Show ${category} technologies`}
            >
              <span className="mr-2 text-lg">{categoryIcons[category]}</span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Technologies Count */}
        <div className="mb-6 text-center">
          <p className="text-slate-600 bg-white/50 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            Showing <span className="font-semibold text-blue-600">{filteredTechnologies.length}</span> technologies
            {searchTerm && (
              <span> for "<span className="font-semibold text-blue-600">{searchTerm}</span>"</span>
            )}
            {activeCategory !== 'all' && (
              <span> in <span className="font-semibold text-blue-600">{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Technologies Carousel */}
        {filteredTechnologies.length > 0 && (
          <div ref={sectionRef} className="relative overflow-hidden mb-12">
            {/* First row */}
            <div className="flex mb-6">
              <div className={`flex animate-marquee whitespace-nowrap ${isVisible ? 'animate-marquee' : ''}`}>
                {carouselItems.slice(0, Math.ceil(carouselItems.length / 2)).map((tech, index) => (
                  <div 
                    key={`row1-${tech.name}-${index}`}
                    className={`${tech.color} rounded-xl shadow-md mx-3 p-4 min-w-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-opacity-20 group flex items-center backdrop-blur-sm`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span className="text-2xl mr-3 transition-transform duration-300 group-hover:scale-110" role="img" aria-label={tech.name}>{tech.icon}</span>
                    <h3 className="text-md font-semibold group-hover:text-blue-700 transition-colors duration-300">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second row - reverse direction */}
            <div className="flex">
              <div className={`flex animate-marquee-reverse whitespace-nowrap ${isVisible ? 'animate-marquee-reverse' : ''}`}>
                {carouselItems.slice(Math.ceil(carouselItems.length / 2)).map((tech, index) => (
                  <div 
                    key={`row2-${tech.name}-${index}`}
                    className={`${tech.color} rounded-xl shadow-md mx-3 p-4 min-w-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-opacity-20 group flex items-center backdrop-blur-sm`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span className="text-2xl mr-3 transition-transform duration-300 group-hover:scale-110" role="img" aria-label={tech.name}>{tech.icon}</span>
                    <h3 className="text-md font-semibold group-hover:text-blue-700 transition-colors duration-300">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-300 text-6xl mb-4" role="img" aria-label="No results">🔍</div>
            <h3 className="text-xl font-medium text-slate-600 mb-2">No technologies found</h3>
            <p className="text-slate-500">Try a different search term or category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to Build Something Amazing?</h2>
            <p className="text-blue-100 mb-6 text-lg relative z-10">
              We leverage the right technologies to bring your vision to life with scalable, performant solutions.
            </p>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 relative z-10"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>

      {/* Add custom CSS for the animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 35s linear infinite reverse;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default TechnologiesUsed;