'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === '/';
    
    if (!isHomePage) {
      window.location.href = `/${sectionId}`;
      return;
    }

    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = 64; // h-16 = 4rem = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#b4d2c3] backdrop-blur-md ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold cursor-default text-white font-sans">
            <Link 
        href="/"
        // className="flex items-center justify-center px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base md:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none"
      >
        Tanti Pujian
      </Link>
              </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('#hero')} className="text-white hover:text-white/80 px-3 py-2 text-sm font-bold transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Home</button>
              <button onClick={() => scrollToSection('#about')} className="text-white hover:text-white/80 px-3 py-2 text-sm font-bold transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">About</button>
              <button onClick={() => scrollToSection('#services')} className="text-white hover:text-white/80 px-3 py-2 text-sm font-bold transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Services</button>
              <button onClick={() => scrollToSection('#testimonials')} className="text-white hover:text-white/80 px-3 py-2 text-sm font-bold transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Testimonials</button>
              <button onClick={() => scrollToSection('#contact')} className="text-white hover:text-white/80 px-3 py-2 text-sm font-bold transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Contact</button>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#b4d2c3] backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <button onClick={() => scrollToSection('#hero')} className="w-full text-left px-3 py-2 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Home</button>
            <button onClick={() => scrollToSection('#about')} className="w-full text-left px-3 py-2 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">About</button>
            <button onClick={() => scrollToSection('#services')} className="w-full text-left px-3 py-2 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Services</button>
            <button onClick={() => scrollToSection('#testimonials')} className="w-full text-left px-3 py-2 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('#contact')} className="w-full text-left px-3 py-2 text-base font-bold text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;