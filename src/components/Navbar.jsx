import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Désactiver le scroll du corps quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Explorer', path: '/explorer' },
    { name: 'Technologie', path: '/technology' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-[110]">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <path d="M10 10C10 10 11 18 16 24C21 30 20 36 20 36" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M30 10C30 10 29 18 24 24C19 30 20 36 20 36" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 26C20 26 21.5 22 21.5 19" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
            </svg>
          </div>
          <div className="text-2xl font-black tracking-tighter text-white uppercase">
            VAPE<span style={{ color: '#8b5cf6' }}>MOOD</span>.
          </div>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 font-medium text-[11px] uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-white transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTIONS (Cart + Hamburger) */}
        <div className="flex items-center space-x-6">
          <button onClick={onCartToggle} className="relative group p-2">
            <i className="fa-solid fa-cart-shopping text-xl text-white group-hover:text-purple-400 transition-colors"></i>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* HAMBURGER BUTTON */}
          <button 
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
            <span className={`h-0.5 bg-purple-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 h-screen w-screen z-[105] bg-black/95 backdrop-blur-[40px] transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center space-y-10 w-full">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-4xl font-black text-white tracking-tighter uppercase transition-all duration-500 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons for Mobile */}
          <div className={`flex gap-10 pt-10 transition-all duration-700 delay-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a href="#" className="text-2xl text-white/50 hover:text-purple-500 transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl text-white/50 hover:text-purple-500 transition-colors">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;