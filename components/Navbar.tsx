import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  // If we are NOT on home, we generally want a visible navbar background (or handle it differently).
  // For this design, we'll keep the transparency logic but ensure text is visible if pages are light.
  // Most inner pages will likely have a hero header or start with content.
  // Let's enforce 'scrolled' style on non-home pages if they don't have a dark hero.
  // Assuming inner pages might have white backgrounds, we force "scrolled" look for contrast unless customized.
  
  const forceDarkNav = !isHome && !scrolled; 
  
  // Actually, let's just make the navbar behavior consistent but text color readable.
  // If on inner page (white bg), text should be dark immediately.
  const isDarkBgPage = location.pathname === '/careers' || location.pathname === '/portfolio'; 
  // Adjust logic:
  // Home: Starts transparent (white text), becomes white (dark text).
  // Light Pages: Always white (dark text).
  // Dark Pages (Careers): Starts transparent (white text), becomes white (dark text).

  const effectiveScrolled = scrolled || (!isHome && !isDarkBgPage);
  
  // Text Colors
  const textColor = effectiveScrolled ? 'text-brew-900' : 'text-white';
  const logoBg = effectiveScrolled ? 'bg-brew-900' : 'bg-amber-400';
  const logoIconColor = effectiveScrolled ? 'text-amber-400' : 'text-brew-900';
  
  const navLinks = [
    { name: 'Work', href: '/portfolio' },
    { name: 'Armory', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'DevLogs', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Try On', href: '/try-on' },
  ];

  const buttonBase = "px-6 py-2.5 rounded-none font-bold transition-all duration-300 border-2";
  const buttonStyle = effectiveScrolled 
    ? "border-brew-900 bg-amber-400 text-brew-900 shadow-[4px_4px_0px_0px_rgba(62,39,35,1)] hover:bg-brew-900 hover:text-white"
    : "border-amber-400 bg-amber-400 text-brew-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:bg-white hover:text-brew-900 hover:border-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        effectiveScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`${logoBg} p-2 rounded-lg ${logoIconColor} group-hover:scale-105 transition-transform shadow-lg transition-colors duration-300`}>
              <Gamepad2 size={24} />
            </div>
            <span className={`font-display font-bold text-2xl ${textColor} tracking-tight transition-colors duration-300`}>
              Brew <span className="text-amber-500">Monster</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium ${textColor} hover:text-amber-500 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-amber-500 after:transition-all hover:after:w-full ${location.pathname === link.href ? 'text-amber-500' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={(e) => {
                  // If on home page, simple scroll, else navigate to home#contact (handled by App routing usually, or just separate contact page)
                  // For now, let's scroll if on home.
                  if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                  }
              }}
              className={`${buttonBase} ${buttonStyle} hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]`}
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${textColor} hover:text-amber-600 transition-colors`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brew-950 border-t border-gray-800 overflow-hidden shadow-xl absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-lg font-medium text-gray-100 hover:bg-gray-800 hover:text-amber-400 rounded-md border-b border-gray-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;