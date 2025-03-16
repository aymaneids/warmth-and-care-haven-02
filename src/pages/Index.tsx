
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, UserRound, User, Stethoscope, Brain, Home, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import LocationMap from '../components/LocationMap';

const Index = () => {
  const services = [
    {
      icon: Activity,
      title: "Rehabilitation Services",
      description: "Comprehensive rehabilitation programs designed to help patients recover from injuries, surgeries, or medical conditions.",
      link: "/services/rehabilitation",
      delay: 0.3
    },
    {
      icon: Stethoscope,
      title: "Skilled Nursing Care",
      description: "Professional nursing care available 24/7 to address complex medical needs with compassion and expertise.",
      link: "/services/nursing",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Long-Term Care",
      description: "Supportive care in a comfortable environment for seniors requiring ongoing assistance with daily activities.",
      link: "/services/long-term-care",
      delay: 0.5
    },
    {
      icon: Brain,
      title: "Memory Care",
      description: "Specialized care for individuals with Alzheimer's and other forms of dementia in a secure, supportive setting.",
      link: "/services/memory-care",
      delay: 0.6
    }
  ];
  
  const testimonials = [
    {
      quote: "The staff at Hope Health truly became like family to my mother. Their compassionate care and attention to her needs made such a difference in her recovery.",
      name: "Sarah Johnson",
      title: "Daughter of Resident",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361",
      delay: 0.3
    },
    {
      quote: "After my hip replacement, the rehabilitation team worked with me daily and helped me regain my independence. I'm now back to my gardening hobby!",
      name: "Robert Williams",
      title: "Rehabilitation Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470",
      delay: 0.4
    },
    {
      quote: "The care my father receives in the long-term care unit is exceptional. The staff is attentive, kind, and they truly treat him with dignity.",
      name: "Emily Thompson",
      title: "Family Member",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376",
      delay: 0.5
    }
  ];
  
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative staggered-animation-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-hope-blue/10 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-hope-lavender/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=1469" 
                alt="Staff caring for resident" 
                className="w-full h-auto object-cover rounded-2xl shadow-md relative z-10"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm staggered-animation-1">
                About Us
              </div>
              <h2 className="text-hope-text font-semibold staggered-animation-2">
                Compassionate Care in a <span className="text-hope-blue">Supportive Community</span>
              </h2>
              <p className="text-hope-text-light staggered-animation-3">
                Hope Health & Rehabilitation Center is dedicated to providing exceptional care in a comfortable, home-like environment. Since our founding in 1998, we've been committed to supporting our residents' physical, emotional, and social well-being.
              </p>
              <p className="text-hope-text-light staggered-animation-3">
                Our team of dedicated healthcare professionals works together to create personalized care plans that address each resident's unique needs and goals, helping them achieve their highest potential quality of life.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 staggered-animation-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Experienced Staff</h4>
                    <p className="text-sm text-hope-text-light">Skilled professionals dedicated to your care</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Modern Facilities</h4>
                    <p className="text-sm text-hope-text-light">Comfortable, safe, and welcoming spaces</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Personalized Care</h4>
                    <p className="text-sm text-hope-text-light">Customized care plans for each resident</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Enriching Activities</h4>
                    <p className="text-sm text-hope-text-light">Engaging social and recreational programs</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 staggered-animation-4">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-hope-gray">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4 staggered-animation-1">
              Our Services
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              Comprehensive Care Solutions
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              We offer a wide range of services designed to meet the diverse needs of our residents, from short-term rehabilitation to long-term care and specialized programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={service.delay}
              />
            ))}
          </div>
          
          <div className="text-center mt-10 staggered-animation-4">
            <Link to="/services" className="group inline-flex items-center text-hope-blue font-medium">
              View All Services 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Community Life Section */}
      <section className="py-20 bg-white">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm mb-4 staggered-animation-1">
              Our Community
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              Life at Hope Health & Rehabilitation Center
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              We believe that a fulfilling life involves more than just medical care. Our community offers a variety of activities, amenities, and opportunities for social engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md staggered-animation-1">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374" 
                alt="Dining Services" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Dining Services</h3>
                <p className="text-hope-text-light mb-4">
                  Nutritious and delicious meals prepared by our culinary team, with special diets accommodated.
                </p>
                <Link to="/community" className="text-hope-blue font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md staggered-animation-2">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470" 
                alt="Activities & Recreation" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Activities & Recreation</h3>
                <p className="text-hope-text-light mb-4">
                  Engaging programs including arts and crafts, music therapy, games, and special events.
                </p>
                <Link to="/community" className="text-hope-blue font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md staggered-animation-3">
              <img 
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1384" 
                alt="Comfortable Accommodations" 
                className="w-full h-60 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Comfortable Accommodations</h3>
                <p className="text-hope-text-light mb-4">
                  Private and semi-private rooms designed for comfort, safety, and a home-like atmosphere.
                </p>
                <Link to="/community" className="text-hope-blue font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 staggered-animation-4">
            <Link to="/community" className="btn-primary">
              Explore Our Community
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-hope-beige/50">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4 staggered-animation-1">
              Testimonials
            </div>
            <h2 className="text-hope-text font-semibold mb-4 staggered-animation-2">
              What Families Say About Us
            </h2>
            <p className="text-hope-text-light staggered-animation-3">
              Hear from residents and their families about their experiences with our care and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Location Map */}
      <LocationMap />
    </main>
  );
};

export default Index;
