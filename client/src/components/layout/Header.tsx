import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { companyInfo } from "@/lib/data";
import congruenceLogo from "@assets/Congruence_Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Navigation */}
      <nav id="main-nav" className={`bg-white shadow-md transition-nav ${
        isScrolled 
          ? 'py-2 shadow-lg' 
          : 'py-3'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center py-1">
                <img 
                  src={congruenceLogo} 
                  alt="Congruence Infrastructure Logo" 
                  className="h-24 w-auto object-contain mr-4" 
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/services' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/projects' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/blog' || location.startsWith('/blog/') 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/about' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                About
              </Link>
              <Link 
                href="/careers" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/careers' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className={`font-heading font-medium text-base px-2 py-1 ${
                  location === '/contact' 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary hover:border-b-2 hover:border-secondary'
                } transition-all duration-200`}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-primary focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
