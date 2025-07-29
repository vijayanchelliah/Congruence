import { useEffect } from "react";
import { Link } from "wouter";
import { companyInfo } from "@/lib/data";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO
    document.title = "About Us - Congruence Infrastructure Pvt. Ltd.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Learn about Congruence Infrastructure Pvt. Ltd., our history, values, and team. Excellence in infrastructure development and construction."
      );
    }
  }, []);
  
  return (
    <>
      <section className="relative bg-primary overflow-hidden py-20">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(26,58,95,0.9) 0%, rgba(26,58,95,0.8) 100%)" }}>
          <img 
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction company" 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">About Congruence Infrastructure</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Founded in {companyInfo.founded}, we've grown to become a leading infrastructure company with a reputation for excellence.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Congruence Infrastructure Pvt. Ltd. was founded in {companyInfo.founded} by a team of experienced infrastructure professionals who shared a vision of creating a company that would set new standards in the construction and infrastructure industry.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with small infrastructure projects, we quickly built a reputation for quality engineering and client satisfaction. As our reputation grew, so did our capabilities, allowing us to expand into commercial and residential projects.
              </p>
              <p className="text-gray-600 mb-4">
                Today, with our years of experience, we have completed projects across various sectors, establishing ourselves as a trusted name in the infrastructure development industry.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of dedicated professionals brings expertise and commitment to excellence to every project we undertake.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="BuildMaster team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Our core values guide everything we do and shape our approach to construction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our work, from planning to execution.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">We conduct our business with honesty, transparency, and ethical practices.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Teamwork</h3>
              <p className="text-gray-600">We believe in the power of collaboration and working together toward common goals.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">We are committed to environmentally responsible construction practices.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-gray-600">We follow a comprehensive process to ensure the success of every project.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-light rounded-lg p-8">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Consultation</h3>
                <p className="text-gray-600">We begin by understanding your vision, requirements, and expectations for the project.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-light rounded-lg p-8">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Planning</h3>
                <p className="text-gray-600">We develop a detailed plan including design, timeline, budget, and resource allocation.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-light rounded-lg p-8">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Execution</h3>
                <p className="text-gray-600">Our experienced team brings the plan to life with precision and attention to detail.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-light rounded-lg p-8">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Completion</h3>
                <p className="text-gray-600">We ensure quality control, client satisfaction, and proper handover of the finished project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" 
                  alt="Construction team" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500&h=300" 
                  alt="Construction site" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=500&h=300" 
                  alt="Building construction" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" 
                  alt="Architecture design" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-6">
                At Congruence Infrastructure Private Limited, we differentiate ourselves through our commitment to excellence, client satisfaction, and innovative solutions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Experienced Team</h4>
                    <p className="text-gray-600">Our team brings decades of combined experience in all aspects of construction.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Quality Assurance</h4>
                    <p className="text-gray-600">We maintain rigorous quality control processes throughout every project.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Timely Delivery</h4>
                    <p className="text-gray-600">We pride ourselves on completing projects on schedule and within budget.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Client-Centered Approach</h4>
                    <p className="text-gray-600">We prioritize open communication and responsiveness to client needs.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Innovative Solutions</h4>
                    <p className="text-gray-600">We utilize the latest technologies and methods to optimize project outcomes.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default About;
