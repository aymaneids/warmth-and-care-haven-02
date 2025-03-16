
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Shield, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach each resident with empathy, kindness, and genuine care for their well-being."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in healthcare, constantly improving our services."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive environment where residents feel at home and form meaningful connections."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our practices."
    }
  ];
  
  const timelineEvents = [
    {
      year: "1998",
      title: "Foundation",
      description: "Hope Health & Rehabilitation Center was founded with a mission to provide compassionate senior care."
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Expanded our facilities to include a dedicated rehabilitation wing with state-of-the-art equipment."
    },
    {
      year: "2010",
      title: "Innovation",
      description: "Introduced innovative therapy programs and enhanced our skilled nursing capabilities."
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Received recognition for excellence in senior care and rehabilitation services."
    },
    {
      year: "Present",
      title: "Continuing Excellence",
      description: "Continuing our tradition of excellence while evolving to meet the changing needs of our community."
    }
  ];
  
  const leadership = [
    {
      name: "Dr. Elizabeth Carter",
      title: "Medical Director",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1374",
      bio: "Dr. Carter has over 20 years of experience in geriatric medicine. She oversees all medical aspects of resident care at Hope Health."
    },
    {
      name: "Michael Robinson",
      title: "Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374",
      bio: "With a background in healthcare administration, Michael ensures that our facility operates at the highest standards of quality and efficiency."
    },
    {
      name: "Sarah Thompson, RN",
      title: "Director of Nursing",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470",
      bio: "Sarah leads our nursing team with compassion and expertise, ensuring that each resident receives personalized, high-quality care."
    }
  ];
  
  return (
    <main>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our history, mission, and the dedicated team behind Hope Health & Rehabilitation Center."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
      />
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm staggered-animation-1">
                Our Mission & Vision
              </div>
              <h2 className="text-hope-text font-semibold staggered-animation-2">
                Dedicated to <span className="text-hope-blue">Enhancing Lives</span>
              </h2>
              
              <div className="space-y-6 staggered-animation-3">
                <div className="bg-white shadow-sm border border-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-hope-text-light">
                    To provide compassionate, high-quality care that enhances the physical, emotional, and social well-being of each resident in a supportive, home-like environment.
                  </p>
                </div>
                
                <div className="bg-white shadow-sm border border-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-hope-text-light">
                    To be the leading provider of rehabilitation and senior living services, recognized for excellence in care, innovation in programs, and dedication to enhancing quality of life.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative staggered-animation-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-hope-blue/10 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-hope-lavender/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1585243839351-31c1f348fe11?q=80&w=1470" 
                alt="Caring staff with senior resident" 
                className="w-full h-auto object-cover rounded-2xl shadow-md relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-hope-gray">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4 staggered-animation-1">
              Our Values
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              The Core Principles That Guide Us
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              These values are at the heart of everything we do, shaping our approach to care and our interactions with residents, families, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-xl shadow-md text-center staggered-animation-${index + 1}`}
                >
                  <div className="h-16 w-16 rounded-full bg-hope-beige grid place-items-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-hope-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-hope-text-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm mb-4 staggered-animation-1">
              Our History
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              A Legacy of Care and Compassion
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              For over two decades, we have been committed to providing exceptional care and support to our community.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-hope-blue/20 z-0"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12 relative z-10">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} staggered-animation-${index % 4 + 1}`}
                >
                  <div className="md:w-1/2 text-center md:text-right">
                    <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-hope-text-light">{event.description}</p>
                  </div>
                  
                  <div className="hidden md:block bg-hope-blue text-white h-12 w-12 rounded-full grid place-items-center z-20 -my-5">
                    <Calendar className="h-6 w-6" />
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-hope-beige/50">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4 staggered-animation-1">
              Our Leadership
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              Meet the Team Behind Our Success
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              Our experienced leadership team is dedicated to ensuring the highest standards of care and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden staggered-animation-${index + 1}`}
              >
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-hope-blue font-medium mb-3">{leader.title}</p>
                  <p className="text-hope-text-light">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default About;
