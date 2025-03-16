import React from 'react';
import Link from 'next/link';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Link 
        href="/register"
        className="flex items-center justify-center px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base md:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none"
      >
        Free Content Planner
      </Link>
    </div>
  );
};

export default FloatingButton;