
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="page-container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-hope-blue grid place-items-center shadow-sm">
              <span className="text-white font-heading font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-heading font-bold text-hope-text">Hope Health</h1>
              <p className="text-xs sm:text-sm font-heading text-hope-text-light leading-tight">Rehabilitation & Senior Living</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/') ? 'text-hope-blue' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/about') ? 'text-hope-blue' : ''}`}>
              About Us
            </Link>
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/services') || isActive('/services/rehabilitation') || isActive('/services/nursing') || isActive('/services/long-term-care') ? 'text-hope-blue' : ''}`}
                onClick={() => toggleServices()}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to="/services" className="block px-4 py-2 hover:bg-hope-beige transition-colors">All Services</Link>
                <Link to="/services/rehabilitation" className="block px-4 py-2 hover:bg-hope-beige transition-colors">Rehabilitation</Link>
                <Link to="/services/nursing" className="block px-4 py-2 hover:bg-hope-beige transition-colors">Skilled Nursing</Link>
                <Link to="/services/long-term-care" className="block px-4 py-2 hover:bg-hope-beige transition-colors">Long-Term Care</Link>
              </div>
            </div>
            <Link to="/community" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/community') ? 'text-hope-blue' : ''}`}>
              Our Community
            </Link>
            <Link to="/careers" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/careers') ? 'text-hope-blue' : ''}`}>
              Careers
            </Link>
            <Link to="/gallery" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/gallery') ? 'text-hope-blue' : ''}`}>
              Gallery
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
          
          <button className="lg:hidden text-hope-text" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-lg font-medium py-2 border-b border-gray-100">Home</Link>
          <Link to="/about" className="text-lg font-medium py-2 border-b border-gray-100">About Us</Link>
          
          <div>
            <button 
              className="w-full flex items-center justify-between text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => toggleServices()}
            >
              Services <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link to="/services" className="py-2">All Services</Link>
                <Link to="/services/rehabilitation" className="py-2">Rehabilitation</Link>
                <Link to="/services/nursing" className="py-2">Skilled Nursing</Link>
                <Link to="/services/long-term-care" className="py-2">Long-Term Care</Link>
              </div>
            )}
          </div>
          
          <Link to="/community" className="text-lg font-medium py-2 border-b border-gray-100">Our Community</Link>
          <Link to="/careers" className="text-lg font-medium py-2 border-b border-gray-100">Careers</Link>
          <Link to="/gallery" className="text-lg font-medium py-2 border-b border-gray-100">Gallery</Link>
          <Link to="/contact" className="btn-primary mt-4 text-center">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
