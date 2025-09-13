import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Process from './Components/Process';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/Pages/about';
import Careers from './Components/Pages/careers';
import Cookies from './Components/Pages/cookies';
import Faq from './Components/Pages/faq';
import Help from './Components/Pages/help';
import Privacy from './Components/Pages/privacy';
import Sitemap from './Components/Pages/sitemap';
import Support from './Components/Pages/support';
import Team from './Components/Pages/team';
import Terms from './Components/Pages/terms';
import Technologiesused from './Components/Technologiesused';

// Layout component to wrap around all pages
const Layout = ({ children, onSearch, searchTerm, onClearSearch, onLogoClick }) => {
  return (
    <>
      <Header 
        onSearch={onSearch}
        onLogoClick={onLogoClick}
        searchTerm={searchTerm}
        onClearSearch={onClearSearch}
      />
      {children}
      <Footer />
    </>
  );
};

// Homepage component with all sections
const Homepage = ({ 
  servicesData, 
  portfolioData, 
  processData, 
  testimonialsData,
  heroRef,
  servicesRef,
  portfolioRef,
  highlightedSections
}) => {
  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={servicesRef}>
        <Services 
          services={servicesData} 
          isHighlighted={highlightedSections.includes('services')}
        />
      </div>
      <div ref={portfolioRef}>
        <Portfolio 
          portfolio={portfolioData} 
          isHighlighted={highlightedSections.includes('portfolio')}
        />
      </div>
      <Process process={processData} />
      <Technologiesused />
      <Testimonials testimonials={testimonialsData} />
      <Contact />
    </>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [highlightedSections, setHighlightedSections] = useState([]);

  // Refs for scrolling to sections
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const heroRef = useRef(null);

  // Sample data for all sections
  const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create responsive and modern websites using the latest technologies.',
      icon: 'fas fa-laptop-code',
      tags: ['web', 'development', 'responsive', 'react']
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: 'fas fa-mobile-alt',
      tags: ['mobile', 'apps', 'ios', 'android']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience.',
      icon: 'fas fa-paint-brush',
      tags: ['design', 'ui', 'ux', 'user experience']
    },
    {
      id: 4,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with payment integration.',
      icon: 'fas fa-shopping-cart',
      tags: ['ecommerce', 'store', 'payment', 'online']
    },
    {
      id: 5,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      icon: 'fas fa-cloud',
      tags: ['cloud', 'hosting', 'deployment', 'aws']
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and online advertising campaigns.',
      icon: 'fas fa-chart-line',
      tags: ['marketing', 'seo', 'social media', 'advertising']
    }
  ];

 const portfolioData = [
  {
    id: 1,
    title: 'Kashkart Ecommerce',
    description: 'A fully responsive online store with payment integration and inventory management system.',
    image: '/images/portfolio1.jpg',
    category: 'Web Development',
    tags: ['ecommerce', 'react', 'nodejs', 'mongodb'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    client: 'Retail Business',
    date: 'January 2023',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    highlights: [
      'Increased conversion rate by 45%',
      'Reduced loading time by 60%',
      'Mobile-first responsive design'
    ]
  },
  {
    id: 2,
    title: 'Traveligo Travel Website',
    description: 'Comprehensive travel booking platform with flight, hotel, and package booking capabilities.',
    image: '/images/portfolio2.jpg',
    category: 'Web Development',
    tags: ['travel', 'booking', 'responsive', 'react'],
    technologies: ['React', 'Express.js', 'MySQL', 'Stripe'],
    client: 'Travel Agency',
    date: 'March 2023',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    highlights: [
      'Streamlined booking process',
      'Integrated multiple payment gateways',
      'Real-time availability checking'
    ]
  },
  {
    id: 3,
    title: 'Websy Technologies Corporate Site',
    description: 'Modern website for a technology company showcasing services and portfolio.',
    image: '/images/portfolio3.jpg',
    category: 'Web Design',
    tags: ['corporate', 'technology', 'design', 'animation'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    client: 'Websy Technologies',
    date: 'May 2023',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: false,
    highlights: [
      'Improved user engagement by 70%',
      'SEO optimized structure',
      'Accessibility compliant'
    ]
  },
];

  const processData = [
    {
      id: 1,
      title: 'Discovery',
      description: 'We begin by understanding your business goals and target audience.',
      icon: 'fas fa-search'
    },
    {
      id: 2,
      title: 'Planning',
      description: 'We create a detailed project plan with milestones and deliverables.',
      icon: 'fas fa-tasks'
    },
    {
      id: 3,
      title: 'Design',
      description: 'Our designers create wireframes and mockups for your approval.',
      icon: 'fas fa-pencil-ruler'
    },
    {
      id: 4,
      title: 'Development',
      description: 'Our developers bring the design to life with clean, efficient code.',
      icon: 'fas fa-code'
    },
    {
      id: 5,
      title: 'Testing',
      description: 'We rigorously test everything to ensure quality and performance.',
      icon: 'fas fa-bug'
    },
    {
      id: 6,
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support as needed.',
      icon: 'fas fa-rocket'
    }
  ];

  const testimonialsData = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, TechStart Inc.',
      content: 'The team delivered beyond our expectations. Our website traffic increased by 150% after the redesign.',
      avatar: '/images/avatar1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, BrightLabs',
      content: 'Their attention to detail and creative solutions helped us stand out from competitors.',
      avatar: '/images/avatar2.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Founder, FoodieApp',
      content: 'The mobile app they developed has exceeded all our user acquisition targets.',
      avatar: '/images/avatar3.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'E-commerce Manager, FashionHub',
      content: 'Our conversion rates improved significantly after implementing their recommendations.',
      avatar: '/images/avatar4.jpg',
      rating: 5
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'CTO, InnovateTech',
      content: 'Their technical expertise and project management skills made our complex project a success.',
      avatar: '/images/avatar5.jpg',
      rating: 5
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      position: 'Product Manager, GrowthApp',
      content: 'The user experience they designed received overwhelmingly positive feedback from our customers.',
      avatar: '/images/avatar6.jpg',
      rating: 5
    }
  ];

  // Handle search from Header component
  const handleHeaderSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
    
    if (searchQuery === '') {
      setFilteredServices(servicesData);
      setFilteredPortfolio(portfolioData);
      setHighlightedSections([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const sections = [];

    // Filter services
    const filteredServices = servicesData.filter(service => 
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.tags.some(tag => tag.toLowerCase().includes(query))
    );

    // Filter portfolio
    const filteredPortfolio = portfolioData.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query)) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    );

    setFilteredServices(filteredServices);
    setFilteredPortfolio(filteredPortfolio);

    // Determine which sections have results
    if (filteredServices.length > 0) sections.push('services');
    if (filteredPortfolio.length > 0) sections.push('portfolio');
    setHighlightedSections(sections);

    // Scroll to first matching section
    if (filteredServices.length > 0 && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (filteredPortfolio.length > 0 && portfolioRef.current) {
      setTimeout(() => {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setFilteredServices(servicesData);
    setFilteredPortfolio(portfolioData);
    setHighlightedSections([]);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize data
  useEffect(() => {
    setFilteredServices(servicesData);
    setFilteredPortfolio(portfolioData);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/blog" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Blog />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <About />
            </Layout>
          } />
          <Route path="/careers" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Careers />
            </Layout>
          } />
          <Route path="/cookies" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Cookies />
            </Layout>
          } />
          <Route path="/faq" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Faq />
            </Layout>
          } />
          <Route path="/help" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Help />
            </Layout>
          } />
          <Route path="/privacy" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Privacy />
            </Layout>
          } />
          <Route path="/sitemap" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Sitemap />
            </Layout>
          } />
          <Route path="/support" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Support />
            </Layout>
          } />
          <Route path="/team" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Team />
            </Layout>
          } />
          <Route path="/terms" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Terms />
            </Layout>
          } />
          <Route path="/Testimonials" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Testimonials testimonials={testimonialsData} />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Contact />
            </Layout>
          } />
          <Route path="/technologies" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Technologiesused />
            </Layout>
          } />
          <Route path="/" element={
            <Layout 
              onSearch={handleHeaderSearch}
              searchTerm={searchTerm}
              onClearSearch={clearSearch}
              onLogoClick={scrollToTop}
            >
              <Homepage 
                servicesData={filteredServices}
                portfolioData={filteredPortfolio}
                processData={processData}
                testimonialsData={testimonialsData}
                heroRef={heroRef}
                servicesRef={servicesRef}
                portfolioRef={portfolioRef}
                highlightedSections={highlightedSections}
              />
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;