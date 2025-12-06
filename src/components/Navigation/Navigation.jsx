import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [dropdownOpen, setDropdownOpen] = useState({
    abstract: false,
    gallery: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'message', 'committee', 'registration', 'abstract', 'scientificProgramme', 'gallery', 'venue', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(`#${currentSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen({ abstract: false, gallery: false });
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    closeMenu();
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'MESSAGE', href: '#message' },
    { name: 'COMMITTEE', href: '#committee' },
    { 
      name: 'ABSTRACT', 
      href: '#abstract',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Submit Abstract', href: '#submit-abstract' },
        { name: 'Guidelines', href: '#abstract-guidelines' }
      ]
    },
    { name: 'SCIENTIFIC PROGRAMME', href: '#scientificProgramme' },
    { 
      name: 'GALLERY', 
      href: '#gallery',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Photo Gallery', href: '#photos' },
        { name: 'Video Gallery', href: '#videos' }
      ]
    },
    { name: 'VENUE', href: '#venue' },
    { name: 'ABOUT US', href: '#milestones' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Main Navigation */}
        <nav className={`bg-gradient-to-r from-[#CF8B6B] via-[#D4956F] to-[#CF8B6B] transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-md'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#home" onClick={() => handleLinkClick('#home')} className="flex items-center">
                  <span className="text-xl lg:text-2xl font-bold text-white">CVTS BOOT CAMP 2026</span>
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden xl:!flex items-center space-x-1 pl-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    {link.hasDropdown ? (
                      <>
                        <button
                          className={`px-3 py-2 text-white font-semibold text-xs uppercase tracking-wide transition-all duration-300 flex items-center space-x-1 hover:bg-white/20 rounded whitespace-nowrap ${
                            activeLink === link.href ? 'bg-white/30' : ''
                          }`}
                        >
                          <span>{link.name}</span>
                          <FaChevronDown className="text-[10px]" />
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 z-50">
                          <div className="py-2">
                            {link.dropdownItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleLinkClick(item.href)}
                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#CF8B6B] transition-colors duration-200 text-sm"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`px-3 py-2 text-white font-semibold text-xs uppercase tracking-wide transition-all duration-300 hover:bg-white/20 rounded whitespace-nowrap ${
                          activeLink === link.href ? 'bg-white/30' : ''
                        }`}
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Register Button */}
                <a 
                  href="#registration"
                  onClick={() => handleLinkClick('#registration')}
                  className="ml-2 bg-white text-[#CF8B6B] px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  REGISTER
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:bg-white/20 p-2 rounded focus:outline-none transition-colors duration-300"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-b from-[#C17E5F] to-[#B07353] border-t border-white/20">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name.toLowerCase())}
                        className="w-full text-left px-6 py-4 text-white font-medium text-sm uppercase hover:bg-white/20 transition-all duration-300 flex items-center justify-between"
                      >
                        <span>{link.name}</span>
                        <FaChevronDown 
                          className={`text-xs transition-transform duration-300 ${
                            dropdownOpen[link.name.toLowerCase()] ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <div className={`bg-white/10 overflow-hidden transition-all duration-300 ${
                        dropdownOpen[link.name.toLowerCase()] ? 'max-h-48' : 'max-h-0'
                      }`}>
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleLinkClick(item.href)}
                            className="block px-10 py-3 text-white/90 text-xs hover:bg-white/20 transition-colors duration-300"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`block px-6 py-4 text-white font-medium text-sm uppercase hover:bg-white/20 transition-all duration-300 ${
                        activeLink === link.href ? 'bg-white/30 border-l-4 border-white' : ''
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Register Button */}
              <div className="px-6 py-4">
                <a 
                  href="#registration"
                  onClick={() => handleLinkClick('#registration')}
                  className="block text-center bg-white text-[#CF8B6B] px-6 py-3 rounded-full font-bold text-sm uppercase shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;
