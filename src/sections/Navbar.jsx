import { useState, useEffect } from "react";
import { moonTech } from "../assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-toggle')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900/95 shadow-lg' : 'py-4 bg-white/10'} backdrop-blur-md px-4 lg:px-16`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={moonTech}
            alt="MoonTech Logo"
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full transform transition-transform duration-300 hover:scale-110"
            width="48"
            height="48"
            loading="lazy"
          />
          <a
            href="#hero"
            className="text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text hover:text-white transition-all duration-500"
            aria-label="Home"
          >
            MoonTech
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <NavLink href="#about" label="About Me" />
          <NavLink href="#skills" label="Moon Skills" />
          <NavLink href="#projects" label="Moon Projects" />
          <NavLink href="#contact" label="Moon Contact" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="menu-toggle lg:hidden text-white text-2xl focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`mobile-menu lg:hidden fixed left-0 w-full bg-gray-900/95 text-white px-6 py-4 transition-all duration-300 z-40 backdrop-blur-md ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '72px' : '88px' }}
      >
        <nav className="flex flex-col space-y-2">
          <MobileLink href="#about" label="About Me" onClick={closeMenu} />
          <MobileLink href="#skills" label="Moon Skills" onClick={closeMenu} />
          <MobileLink href="#projects" label="Moon Projects" onClick={closeMenu} />
          <MobileLink href="#contact" label="Moon Contact" onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

// Reusable Nav Link for Desktop
const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="relative text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-medium hover:text-white transition-all duration-500 group"
  >
    {label}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Reusable Nav Link for Mobile
const MobileLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-3 px-2 text-lg text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text rounded-md hover:text-white transition-all duration-500"
  >
    {label}
  </a>
);

export default Navbar;