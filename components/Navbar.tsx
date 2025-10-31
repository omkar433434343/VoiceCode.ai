import React, { useState } from 'react';
import { View } from '../App';

interface NavbarProps {
  navigateTo: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (view: View) => {
    navigateTo(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0D0D0D]/80 backdrop-blur-md z-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavigation('landing')}
        >
          <div className="w-10 h-10 rounded-full bg-[#B9FF66]/10 flex items-center justify-center">
            <i className="fas fa-headset text-brand-green"></i>
          </div>
          <span className="text-lg md:text-xl font-bold">VoiceCode AI</span>
        </div>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a onClick={() => handleNavigation('courses')} className="cursor-pointer hover:text-brand-green transition">Courses</a>
          <a onClick={() => handleNavigation('pricing')} className="cursor-pointer hover:text-brand-green transition">Pricing</a>
          <a href="#demo" className="hover:text-brand-green transition">Demo</a>
          <button onClick={() => handleNavigation('dashboard')} className="btn-primary px-6 py-2 rounded-md">
            Dashboard
          </button>
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} mobile-menu absolute top-full left-0 w-full py-4 px-4 md:hidden`}>
        <a onClick={() => handleNavigation('courses')} className="block py-2 cursor-pointer hover:text-brand-green">Courses</a>
        <a onClick={() => handleNavigation('pricing')} className="block py-2 cursor-pointer hover:text-brand-green">Pricing</a>
        <a href="#demo" className="block py-2 hover:text-brand-green" onClick={() => setIsMenuOpen(false)}>Demo</a>
        <button onClick={() => handleNavigation('dashboard')} className="w-full mt-4 btn-primary px-6 py-3 rounded-md">
          Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
