
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-hope-blue py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="page-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white font-bold mb-6">Ready to Experience Exceptional Care?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Schedule a tour of our facilities and discover how our compassionate care and vibrant community can enhance the quality of life for you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-hope-blue px-6 py-3 rounded-lg font-medium transition-colors">
              <Calendar className="h-5 w-5" />
              Schedule a Tour
            </Link>
            <a href="tel:+15551234567" className="flex items-center justify-center gap-2 bg-hope-text hover:bg-hope-text/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Phone className="h-5 w-5" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
