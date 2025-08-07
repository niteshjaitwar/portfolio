import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100'
      }`} role="navigation" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16 lg:h-20 gap-2 md:gap-4">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Scroll to top"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Nitesh Jaitwar Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-200 group-hover:rotate-3"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                  Nitesh Jaitwar
                </h1>
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                  Java Developer
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  tabIndex={0}
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Tablet Navigation - Dropdown */}
            <div className="hidden md:block lg:hidden">
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                aria-label="Navigate to section"
                tabIndex={0}
              >
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.icon} {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              tabIndex={0}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className="pt-4 space-y-1 border-t border-gray-200" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  tabIndex={0}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 shadow-lg" aria-label="Mobile Bottom Navigation">
        <div className="grid grid-cols-5 gap-1 px-1 py-1 sm:px-2 sm:py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}
              aria-label={`Navigate to ${item.label} section`}
              tabIndex={0}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
