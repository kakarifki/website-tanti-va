'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold cursor-default">Tanti Pujian</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#hero"
                className="text-foreground/90 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground/90 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-foreground/90 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-foreground/90 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground/90 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;