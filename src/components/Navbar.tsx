
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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
    // Close mobile drawer when route changes
    setIsDrawerOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavLinks = () => (
    <>
      <Link to="/" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/') ? 'text-hope-blue' : ''}`}>
        Home
      </Link>
      <Link to="/about" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/about') ? 'text-hope-blue' : ''}`}>
        About Us
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={`flex items-center gap-1 text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/services') || isActive('/services/rehabilitation') || isActive('/services/nursing') || isActive('/services/long-term-care') ? 'text-hope-blue' : ''}`}>
          Services <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/services" className="w-full">All Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/rehabilitation" className="w-full">Rehabilitation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/nursing" className="w-full">Skilled Nursing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/long-term-care" className="w-full">Long-Term Care</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/community" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/community') ? 'text-hope-blue' : ''}`}>
        Our Community
      </Link>
      <Link to="/careers" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/careers') ? 'text-hope-blue' : ''}`}>
        Careers
      </Link>
      <Link to="/gallery" className={`text-hope-text hover:text-hope-blue font-medium transition-colors ${isActive('/gallery') ? 'text-hope-blue' : ''}`}>
        Gallery
      </Link>
    </>
  );

  const MobileNavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`text-lg font-medium py-3 border-b border-gray-100 block ${isActive(to) ? 'text-hope-blue' : ''}`}
    >
      {children}
    </Link>
  );

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
          
          {!isMobile ? (
            <div className="hidden lg:flex items-center gap-8">
              <NavLinks />
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          ) : (
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6 text-hope-text" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh] pt-5">
                <DrawerHeader className="mb-4">
                  <DrawerTitle className="text-center text-2xl font-heading">Menu</DrawerTitle>
                  <DrawerClose className="absolute right-4 top-4" asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="px-6 flex flex-col">
                  <MobileNavItem to="/">Home</MobileNavItem>
                  <MobileNavItem to="/about">About Us</MobileNavItem>
                  
                  <div className="py-3 border-b border-gray-100">
                    <button 
                      className="w-full flex items-center justify-between text-lg font-medium"
                      onClick={toggleServices}
                    >
                      Services <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-3 flex flex-col gap-3">
                        <Link to="/services" className="py-2">All Services</Link>
                        <Link to="/services/rehabilitation" className="py-2">Rehabilitation</Link>
                        <Link to="/services/nursing" className="py-2">Skilled Nursing</Link>
                        <Link to="/services/long-term-care" className="py-2">Long-Term Care</Link>
                      </div>
                    )}
                  </div>
                  
                  <MobileNavItem to="/community">Our Community</MobileNavItem>
                  <MobileNavItem to="/careers">Careers</MobileNavItem>
                  <MobileNavItem to="/gallery">Gallery</MobileNavItem>
                  
                  <div className="mt-6">
                    <Link to="/contact" className="btn-primary w-full text-center block">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
