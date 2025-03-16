
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hope-text text-white">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-white grid place-items-center">
                <span className="text-hope-blue font-heading font-bold text-lg">H</span>
              </div>
              <div>
                <h4 className="text-lg font-heading font-bold">Hope Health</h4>
                <p className="text-xs text-gray-300 leading-tight">Rehabilitation & Senior Living</p>
              </div>
            </Link>
            <p className="text-gray-300 mt-4 max-w-xs">
              Providing compassionate care and a supportive community for rehabilitation and senior living services.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-hope-blue transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Our Community</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold mb-4">Services</h5>
            <ul className="space-y-3">
              <li><Link to="/services/rehabilitation" className="text-gray-300 hover:text-white transition-colors">Rehabilitation Services</Link></li>
              <li><Link to="/services/nursing" className="text-gray-300 hover:text-white transition-colors">Skilled Nursing Care</Link></li>
              <li><Link to="/services/long-term-care" className="text-gray-300 hover:text-white transition-colors">Long-Term Care</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Care Lane, Hopeville, NY 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-hope-blue transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@hopehealthcenter.com" className="hover:text-hope-blue transition-colors">info@hopehealthcenter.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="page-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Hope Health & Rehabilitation Center. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
