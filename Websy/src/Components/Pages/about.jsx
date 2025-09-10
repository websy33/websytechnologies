import React from 'react';

const aboutus = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Tech visionary with 15+ years in software development and business strategy.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems with a passion for innovation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Lead Designer',
      bio: 'Creative problem solver who transforms complex ideas into intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'DevOps Engineer',
      bio: 'Automation enthusiast who ensures our systems run smoothly 24/7.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe great things happen when people work together.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We do what is right, not what is easy.',
      icon: '🔒'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Websy Technologies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate innovators building the future of digital solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Websy Technologies began as a small startup with a big vision: to make advanced
                technology accessible to businesses of all sizes. Today, we're a leading provider of innovative
                digital solutions that empower companies to thrive in the digital age.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by continuous learning, adaptation, and growth. We've evolved from
                a three-person team working in a garage to a diverse group of 50+ professionals with clients
                across the globe, but our core mission remains unchanged.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-blue-100 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with transformative technology solutions that drive growth,
                  efficiency, and competitive advantage in an increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">250+</h3>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-xl">Team Members</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">98%</h3>
              <p className="text-xl">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how Websy Technologies can help you achieve your digital goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default aboutus;