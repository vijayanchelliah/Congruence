import { services } from "@/lib/data";
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import CallToAction from "@/components/home/CallToAction";

const Services = () => {
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO
    document.title = "Our Services - Congruence Infrastructure Pvt. Ltd.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Congruence Infrastructure offers comprehensive construction and infrastructure development services including commercial, residential, renovation, and civil engineering projects."
      );
    }
    
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && serviceRefs.current[hash]) {
        const element = serviceRefs.current[hash];
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <>
      <section className="relative bg-primary overflow-hidden py-20">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(26,58,95,0.9) 0%, rgba(26,58,95,0.8) 100%)" }}>
          <img 
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction services" 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Our Services</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We offer comprehensive Building and Infrastructure services tailored to meet the unique needs of every client and project.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Complete Project Solutions</h2>
            <p className="text-gray-600">
              We are a group of Construction Professionals with over 2 decades of experience. We provide a wide range of construction services.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                ref={el => serviceRefs.current[service.id] = el}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-light rounded-lg p-8 relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/20 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="text-secondary text-5xl mb-6">
                        <i className={`fas fa-${service.icon}`}></i>
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-primary mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <ul className="space-y-3 text-gray-600 mb-6">
                        {service.id === 'commercial' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Office buildings and corporate headquarters</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Retail spaces and shopping centers</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Restaurants and hospitality facilities</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Industrial warehouses and manufacturing plants</span>
                            </li>
                          </>
                        )}
                        {service.id === 'residential' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Custom home construction</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Multi-family housing developments</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Luxury homes and estates</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Residential community developments</span>
                            </li>
                          </>
                        )}
                        {service.id === 'design-build' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Integrated design and construction services</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Single point of responsibility</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Streamlined communication and decision-making</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Cost and time efficiency</span>
                            </li>
                          </>
                        )}
                        {service.id === 'bim-services' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>3D modeling and visualization</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Clash detection and conflict resolution</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Construction sequencing and 4D scheduling</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Cost estimation and quantity takeoffs</span>
                            </li>
                          </>
                        )}

                        {service.id === 'infrastructure' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Road and highway construction</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Bridge and overpass projects</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Water and sewer system installation</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Public facilities and civil engineering projects</span>
                            </li>
                          </>
                        )}
                        {service.id === 'project-management' && (
                          <>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Comprehensive project planning and scheduling</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Budget development and cost control</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Quality assurance and safety management</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                              <span>Contractor coordination and oversight</span>
                            </li>
                          </>
                        )}
                      </ul>
                      
                      <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-2 px-6 rounded-md inline-block transition-colors">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    {service.id === 'commercial' && (
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                        alt="Commercial Construction" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {service.id === 'residential' && (
                      <img 
                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                        alt="Residential Construction" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {service.id === 'design-build' && (
                      <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                        alt="Design-Build Services" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {service.id === 'bim-services' && (
                      <img 
                        src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="BIM Services" 
                        className="w-full h-full object-cover"
                      />
                    )}

                    {service.id === 'infrastructure' && (
                      <img 
                        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80" 
                        alt="Infrastructure Projects" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    {service.id === 'project-management' && (
                      <img 
                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Project Management" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Services;
