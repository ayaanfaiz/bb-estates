import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle header style change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const headerClass = isHomePage
    ? `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`
    : 'sticky top-0 w-full z-50 bg-white shadow-md py-2';

  const linkClass = isHomePage && !isScrolled
    ? 'text-white hover:text-secondary-500'
    : 'text-primary-900 hover:text-primary-500';

  const logoClass = isHomePage && !isScrolled
    ? 'text-white'
    : 'text-primary-500';

  return (
    <header className={headerClass}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Building2 className={`mr-2 ${logoClass}`} size={32} />
          <div className={`font-display font-bold text-2xl ${logoClass}`}>
            BB <span className="text-secondary-500">Estates</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `${linkClass} font-medium ${isActive ? 'text-secondary-500' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/properties" 
                className={({ isActive }) => 
                  `${linkClass} font-medium ${isActive ? 'text-secondary-500' : ''}`
                }
              >
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `${linkClass} font-medium ${isActive ? 'text-secondary-500' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `${linkClass} font-medium ${isActive ? 'text-secondary-500' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isHomePage && !isScrolled ? 'text-white' : 'text-primary-900'} size={24} />
          ) : (
            <Menu className={isHomePage && !isScrolled ? 'text-white' : 'text-primary-900'} size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-primary-500 bg-opacity-95 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-white text-2xl font-medium ${isActive ? 'text-secondary-500' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/properties" 
                  className={({ isActive }) => 
                    `text-white text-2xl font-medium ${isActive ? 'text-secondary-500' : ''}`
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-white text-2xl font-medium ${isActive ? 'text-secondary-500' : ''}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-white text-2xl font-medium ${isActive ? 'text-secondary-500' : ''}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;