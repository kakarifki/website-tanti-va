'use client';

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#b4d2c3] backdrop-blur-md ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold cursor-default text-white font-sans">Tanti Pujian</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#hero" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Home</a>
              <a href="#about" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">About</a>
              <a href="#services" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Services</a>
              <a href="#testimonials" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Testimonials</a>
              <a href="#contact" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4 decoration-white/70">Contact</a>
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
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Services</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Testimonials</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;