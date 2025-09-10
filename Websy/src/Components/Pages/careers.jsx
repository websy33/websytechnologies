import React, { useState } from 'react';

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showGeneralApplicationForm, setShowGeneralApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'We are looking for an experienced frontend developer with React expertise to join our growing team.',
      requirements: ['5+ years of experience', 'Expertise in React.js', 'Experience with state management', 'Familiarity with modern frontend tools'],
      responsibilities: ['Develop new user-facing features', 'Build reusable components', 'Optimize applications for maximum speed', 'Collaborate with back-end developers']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      type: 'Full-time',
      location: 'San Francisco, CA',
      description: 'Join our design team to create beautiful, intuitive user experiences for our products.',
      requirements: ['4+ years of UI/UX design experience', 'Portfolio demonstrating design skills', 'Proficiency in Figma', 'Understanding of user-centered design'],
      responsibilities: ['Create wireframes and prototypes', 'Design user interfaces', 'Conduct user research', 'Collaborate with product team']
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: ['3+ years of DevOps experience', 'Knowledge of AWS/Azure', 'Experience with Docker/Kubernetes', 'CI/CD pipeline development'],
      responsibilities: ['Maintain cloud infrastructure', 'Automate deployment processes', 'Monitor system performance', 'Ensure system security']
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      type: 'Full-time',
      location: 'New York, NY',
      description: 'Drive our digital marketing efforts and help grow our brand presence.',
      requirements: ['3+ years of digital marketing experience', 'SEO/SEM expertise', 'Social media management', 'Analytics skills'],
      responsibilities: ['Develop marketing campaigns', 'Manage social media channels', 'Analyze campaign performance', 'Optimize conversion rates']
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'operations',
      type: 'Full-time',
      location: 'Remote',
      description: 'Lead product development initiatives and help shape our product roadmap.',
      requirements: ['5+ years of product management', 'Technical background', 'Experience with agile methodologies', 'Strong analytical skills'],
      responsibilities: ['Define product vision', 'Prioritize features', 'Work with cross-functional teams', 'Analyze market trends']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer industry-leading compensation packages',
      icon: '💰'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours',
      icon: '🏡'
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision insurance',
      icon: '❤️'
    },
    {
      title: 'Learning Budget',
      description: 'Annual stipend for professional development',
      icon: '📚'
    },
    {
      title: 'Team Retreats',
      description: 'Regular company meetups and events',
      icon: '✈️'
    },
    {
      title: 'Equipment',
      description: 'Latest technology to do your best work',
      icon: '💻'
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleGeneralApplication = () => {
    setShowGeneralApplicationForm(true);
  };

  const ApplicationForm = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-screen overflow-y-auto border border-blue-100 relative">
        {/* Animated background elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200/40 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-ping-slow"></div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{selectedJob.department} • {selectedJob.location}</p>
          </div>
          <button 
            onClick={() => setShowApplicationForm(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="space-y-5 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" required />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                </div>
                <input type="file" className="hidden" required />
              </label>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
            <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Why are you interested in this position?"></textarea>
          </div>
          <div className="flex justify-end space-x-4 pt-2">
            <button 
              type="button" 
              onClick={() => setShowApplicationForm(false)}
              className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md font-medium"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const GeneralApplicationForm = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/80 to-rose-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-screen overflow-y-auto border border-purple-100 relative">
        {/* Animated background elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-200/40 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-ping-slow"></div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">General Application</h3>
            <p className="text-gray-600 text-sm mt-1">We'd love to hear from you</p>
          </div>
          <button 
            onClick={() => setShowGeneralApplicationForm(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="space-y-5 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" required />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" required />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" placeholder="Which role are you interested in?" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-purple-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                </div>
                <input type="file" className="hidden" required />
              </label>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
            <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" placeholder="Tell us about yourself and why you're interested in working at Websy"></textarea>
          </div>
          <div className="flex justify-end space-x-4 pt-2">
            <button 
              type="button" 
              onClick={() => setShowGeneralApplicationForm(false)}
              className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition shadow-md font-medium"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career at Websy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team of innovators and help shape the future of technology
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Work at Websy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                At Websy Technologies, we believe that great ideas can come from anywhere. Our culture is built on 
                collaboration, innovation, and a shared passion for creating technology that makes a difference.
              </p>
              <p className="text-gray-600 mb-4">
                We value diversity and inclusion, and we're committed to creating an environment where everyone 
                can do their best work and grow both personally and professionally.
              </p>
              <p className="text-gray-600">
                When you join Websy, you're not just taking a job - you're becoming part of a team that's 
                building the future together.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employee Testimonials</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">"The best decision of my career was joining Websy. The projects are challenging, the team is supportive, and I'm growing every day."</p>
                    <p className="text-gray-600 font-medium mt-2">- Maria, Senior Developer</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">"I've never worked at a company that invests so much in its employees' growth. The learning opportunities are incredible."</p>
                    <p className="text-gray-600 font-medium mt-2">- James, Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Open Positions</h2>
          <p className="text-gray-600 text-center mb-8">Join our team and help us build the future</p>
          
          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-4 py-2 rounded-full transition-colors ${activeDepartment === dept.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {dept.name}
              </button>
            ))}
          </div>
          
          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{job.type}</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{job.location}</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full capitalize">{job.department}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleApplyNow(job)}
                        className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
                      >
                        Apply Now
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Responsibilities</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No openings in this department at the moment.</p>
                <p className="text-gray-600 mt-2">Check back later or explore other departments.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Not Seeing the Perfect Role?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll contact you when a matching position opens up.
          </p>
          <button 
            onClick={handleGeneralApplication}
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-gray-100 shadow-lg"
          >
            Submit General Application
          </button>
        </div>
      </section>

      {/* Application Modals */}
      {showApplicationForm && <ApplicationForm />}
      {showGeneralApplicationForm && <GeneralApplicationForm />}

      {/* Add custom animations to the global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.7; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Careers;