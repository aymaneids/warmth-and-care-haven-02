
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface NavbarWithFooterProps {
  children: React.ReactNode;
}

const NavbarWithFooter: React.FC<NavbarWithFooterProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavbarWithFooter;
