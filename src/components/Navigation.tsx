import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '/public/images/logo.png'; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about-us' },
    { name: 'Services', to: '/services' },
    { name: 'Binding', to: '/binding' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' },
    { name: 'Our Team', to: '/teams' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Apex logo" className="h-14 w-auto" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-apex-blue via-apex-pink to-apex-yellow bg-clip-text text-transparent">
              Apex Printing
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-apex-black hover:text-apex-blue transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apex-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              size="sm"
              className="bg-apex-pink hover:bg-pink-600 text-white rounded-full px-6 animate-pulse-glow"
              onClick={() => window.location.href = 'tel:+977-985-1098800'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-apex-black hover:text-apex-blue transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block w-full text-left px-6 py-2 text-apex-black hover:text-apex-blue hover:bg-gray-50 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <Button
                size="sm"
                className="w-full bg-apex-pink hover:bg-pink-600 text-white rounded-full"
                onClick={() => window.location.href = 'tel:+977-985-1098800'}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
