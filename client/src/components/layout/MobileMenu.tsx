import { Link, useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [location] = useLocation();

  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t`}>
      <div className="container mx-auto px-4 py-3 space-y-3">
        <Link 
          href="/" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Home
        </Link>
        <Link 
          href="/services" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/services' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Services
        </Link>
        <Link 
          href="/projects" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/projects' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Projects
        </Link>
        <Link 
          href="/blog" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/blog' || location.startsWith('/blog/') ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Blog
        </Link>
        <Link 
          href="/about" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/about' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          About
        </Link>
        <Link 
          href="/careers" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/careers' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Careers
        </Link>
        <Link 
          href="/contact" 
          onClick={onClose}
          className={`block font-heading font-semibold ${location === '/contact' ? 'text-secondary' : 'text-primary hover:text-secondary'} py-2`}
        >
          Contact
        </Link>

      </div>
    </div>
  );
};

export default MobileMenu;
