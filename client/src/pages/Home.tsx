import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import { useEffect } from "react";
import { useLocation } from "wouter";

const Home = () => {
  const [location, setLocation] = useLocation();
  
  useEffect(() => {
    // Set the page title for the Home page
    document.title = "Congruence Infrastructure";
    
    // Handle hash navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location]);
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedServices />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
