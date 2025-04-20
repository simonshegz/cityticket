import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Ticket } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || location.pathname !== '/' 
      ? 'bg-white shadow-md py-3' 
      : 'bg-transparent py-5'
  }`;

  const linkClasses = `font-medium transition hover:text-primary-600 ${
    isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
  }`;

  const activeLinkClasses = `font-semibold ${
    isScrolled || location.pathname !== '/' ? 'text-primary-600' : 'text-white'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <Ticket 
            size={28} 
            className={`transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-primary-600' : 'text-white'
            }`} 
          />
          <span 
            className={`text-xl font-bold transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}
          >
            CityTicket
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/events" 
            className={location.pathname.includes('/events') ? activeLinkClasses : linkClasses}
          >
            Events
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? activeLinkClasses : linkClasses}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? activeLinkClasses : linkClasses}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            className={`p-1 rounded-full transition hover:bg-gray-100/20 ${
              isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <Link 
            to="/account" 
            className={`p-1 rounded-full transition hover:bg-gray-100/20 ${
              isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          
          <Link 
            to="/checkout" 
            className="relative p-1"
            aria-label="Cart"
          >
            <ShoppingCart 
              size={20} 
              className={`transition ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
              }`} 
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X 
              size={24} 
              className={isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={24} 
              className={isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/events" 
              className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded"
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded"
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-around">
              <button 
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link 
                to="/account" 
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
              <Link 
                to="/checkout" 
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full relative"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;