
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hope-beige/80 to-hope-beige/20 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm header-animation">
              Welcome to Hope Health & Rehabilitation Center
            </div>
            <h1 className="font-heading font-bold text-hope-text header-animation" style={{animationDelay: "0.4s"}}>
              Compassionate Care, <br className="hidden md:block" />
              <span className="text-hope-blue">Supportive Community</span>
            </h1>
            <p className="text-lg text-hope-text-light max-w-lg header-animation" style={{animationDelay: "0.5s"}}>
              Providing exceptional rehabilitation and senior living services in a warm, welcoming environment where dignity and comfort are our highest priorities.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 header-animation" style={{animationDelay: "0.6s"}}>
              <Link to="/services" className="btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule a Tour
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 header-animation" style={{animationDelay: "0.7s"}}>
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-bold text-2xl text-hope-blue">25+</div>
                <div className="text-sm text-hope-text-light">Years of Care</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-bold text-2xl text-hope-blue">100%</div>
                <div className="text-sm text-hope-text-light">Dedicated Staff</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-bold text-2xl text-hope-blue">24/7</div>
                <div className="text-sm text-hope-text-light">Care Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative hero-image-animation">
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-hope-lavender/20 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-hope-blue/20 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
              alt="Senior residents enjoying community activities" 
              className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
