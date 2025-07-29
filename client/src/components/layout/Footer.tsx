import { Link } from "wouter";
import { companyInfo } from "@/lib/data";
import congruenceLogo from "@assets/Congruence_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={congruenceLogo} alt="Congruence Infrastructure Logo" className="h-16 mr-2 bg-white rounded-md p-1" />
              <span className="font-heading font-bold text-xl">Congruence</span>
            </div>
            <p className="text-white/70 mb-6">
              Quality construction and infrastructure development services with a commitment to excellence and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href={companyInfo.social.twitter} className="text-white/70 hover:text-secondary transition-colors" aria-label="X">
                <span className="font-bold">X</span>
              </a>
              <a href={companyInfo.social.linkedin} className="text-white/70 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={companyInfo.social.instagram} className="text-white/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {/* Service links */}
              <li>
                <Link href="/services#residential" className="text-white/70 hover:text-secondary transition-colors">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-white/70 hover:text-secondary transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="/services#infrastructure" className="text-white/70 hover:text-secondary transition-colors">
                  Infrastructure Projects
                </Link>
              </li>
              <li>
                <Link href="/services#design-build" className="text-white/70 hover:text-secondary transition-colors">
                  Design-Build
                </Link>
              </li>
              <li>
                <Link href="/services#bim-services" className="text-white/70 hover:text-secondary transition-colors">
                  BIM Services
                </Link>
              </li>
              <li>
                <Link href="/services#project-management" className="text-white/70 hover:text-secondary transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-secondary mt-1 mr-3"></i>
                <span className="text-white/70">
                  Congruence Infrastructure Private Limited,<br/>
                  170, Indra Nagar,<br/>
                  3rd Street, B.B.Kulam,<br/>
                  Madurai - 625002<br/>
                  Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-secondary mr-3"></i>
                <span className="text-white/70">{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Congruence Infrastructure Pvt. Ltd. All rights reserved.
          </p>
          <div>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link href="#" className="text-white/50 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-secondary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
