
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Stethoscope, Heart, Brain, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';

const Services = () => {
  const mainServices = [
    {
      icon: Activity,
      title: "Rehabilitation Services",
      description: "Comprehensive rehabilitation programs tailored to help patients recover from injuries, surgeries, or medical conditions. Our expert therapists work with each patient to develop a personalized plan for recovery.",
      link: "/services/rehabilitation",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1470"
    },
    {
      icon: Stethoscope,
      title: "Skilled Nursing Care",
      description: "Professional nursing care available 24/7 to address complex medical needs with compassion and expertise. Our licensed nurses provide comprehensive care under the supervision of our medical director.",
      link: "/services/nursing",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470"
    },
    {
      icon: Heart,
      title: "Long-Term Care",
      description: "Supportive care in a comfortable environment for seniors requiring ongoing assistance with daily activities. Our long-term care focuses on quality of life, dignity, and meaningful engagement.",
      link: "/services/long-term-care",
      image: "https://images.unsplash.com/photo-1577368211130-4bbd0181dede?q=80&w=1470"
    },
    {
      icon: Brain,
      title: "Memory Care",
      description: "Specialized care for individuals with Alzheimer's and other forms of dementia in a secure, supportive setting. Our memory care program is designed to enhance quality of life through structured activities and compassionate support.",
      link: "/services/memory-care",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470"
    }
  ];
  
  const additionalServices = [
    {
      title: "Physical Therapy",
      description: "Specialized therapy to improve mobility, strength, and function after injury or surgery."
    },
    {
      title: "Occupational Therapy",
      description: "Helping residents regain independence in daily activities through adaptive techniques."
    },
    {
      title: "Speech Therapy",
      description: "Support for communication, swallowing, and cognitive-linguistic skills."
    },
    {
      title: "Respiratory Care",
      description: "Management of breathing disorders and oxygen therapy."
    },
    {
      title: "Pain Management",
      description: "Comprehensive approaches to manage acute and chronic pain."
    },
    {
      title: "Nutritional Counseling",
      description: "Personalized dietary guidance to support health and recovery."
    },
    {
      title: "Medication Management",
      description: "Careful administration and monitoring of medications."
    },
    {
      title: "Hospice Coordination",
      description: "Compassionate end-of-life care in partnership with hospice providers."
    }
  ];
  
  return (
    <main>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive care solutions to meet the diverse needs of our residents."
        backgroundImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480"
      />
      
      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm mb-4 staggered-animation-1">
              Core Services
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              Our Primary Care Offerings
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              We provide a range of specialized services designed to address the diverse needs of our residents, with a focus on personalized care and positive outcomes.
            </p>
          </div>
          
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} staggered-animation-${index % 4 + 1}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-hope-blue/10 z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-hope-lavender/10 z-0"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover rounded-2xl shadow-md relative z-10"
                    />
                  </div>
                </div>
                
                <div className={`space-y-4 order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-hope-beige rounded-full">
                      <service.icon className="h-6 w-6 text-hope-blue" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-hope-text-light">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="group inline-flex items-center text-hope-blue font-medium mt-2"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-hope-gray">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4 staggered-animation-1">
              Additional Support
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              Complementary Services
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              Beyond our core offerings, we provide a variety of specialized services to support the complete well-being of our residents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-md staggered-animation-${index % 4 + 1}`}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-hope-text-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance Information */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm staggered-animation-1">
                Insurance & Payment
              </div>
              <h2 className="text-hope-text font-semibold staggered-animation-2">
                Understanding Your Coverage Options
              </h2>
              <p className="text-hope-text-light staggered-animation-3">
                We work with a variety of insurance providers and payment options to help make quality care accessible. Our administrative team is available to assist with insurance verification and to answer any questions about coverage.
              </p>
              
              <div className="space-y-4 staggered-animation-3">
                <h3 className="text-xl font-semibold">We Accept:</h3>
                <ul className="space-y-2 text-hope-text-light">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Medicare
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Medicaid
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Private Insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Long-Term Care Insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Veterans Benefits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-hope-blue"></div>
                    Private Pay
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 staggered-animation-4">
                <Link to="/contact" className="btn-primary">
                  Contact Us for More Information
                </Link>
              </div>
            </div>
            
            <div className="relative staggered-animation-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-hope-blue/10 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-hope-lavender/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470" 
                alt="Administrative staff helping with insurance" 
                className="w-full h-auto object-cover rounded-2xl shadow-md relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default Services;
