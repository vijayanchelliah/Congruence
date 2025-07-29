import { useEffect } from "react";
import { Link } from "wouter";
import { companyInfo } from "@/lib/data";

const Careers = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO
    document.title = "Careers - Congruence Infrastructure Private Limited";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Join our team at Congruence Infrastructure Private Limited. Explore career opportunities in construction, engineering, and project management."
      );
    }
  }, []);
  
  return (
    <>
      <section className="relative bg-primary overflow-hidden py-20">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(26,58,95,0.9) 0%, rgba(26,58,95,0.8) 100%)" }}>
          <img 
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction team" 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Join Our Team</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Build your career with Congruence Infrastructure Private Limited and help us create the structures of tomorrow.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-primary mb-4">Why Work With Us</h2>
              <p className="text-gray-600">
                At Congruence Infrastructure, we value our employees and provide a supportive environment for professional growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-light rounded-lg p-8">
                <div className="text-secondary text-4xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  We provide our employees with clear career advancement paths and opportunities to work on diverse, challenging projects.
                </p>
              </div>
              
              <div className="bg-light rounded-lg p-8">
                <div className="text-secondary text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Our team-oriented approach fosters knowledge sharing and cross-functional collaboration.
                </p>
              </div>
              
              <div className="bg-light rounded-lg p-8">
                <div className="text-secondary text-4xl mb-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Professional Development</h3>
                <p className="text-gray-600">
                  We invest in our employees through training programs, certifications, and continuing education opportunities.
                </p>
              </div>
              
              <div className="bg-light rounded-lg p-8">
                <div className="text-secondary text-4xl mb-4">
                  <i className="fas fa-medal"></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Recognition & Rewards</h3>
                <p className="text-gray-600">
                  We recognize and reward exceptional performance, innovation, and dedication to quality.
                </p>
              </div>
            </div>
            
            <div className="bg-primary text-white rounded-lg p-8 mb-16">
              <h3 className="font-heading font-bold text-2xl mb-4">Current Openings</h3>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <h4 className="font-heading font-bold text-xl mb-2">Project Engineer</h4>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">Full Time</span>
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">5+ Years Experience</span>
                  </div>
                  <p className="text-white/80 mb-4">
                    We are looking for an experienced Project Engineer to oversee construction projects from conception to completion. The ideal candidate should have a strong background in civil engineering, excellent problem-solving abilities, and leadership skills.
                  </p>
                  <a href={`mailto:${companyInfo.email}?subject=Application for Project Engineer Position`} className="bg-white text-primary hover:bg-white/90 font-heading font-semibold py-2 px-6 rounded-md transition-colors inline-block">
                    Apply Now
                  </a>
                </div>
                
                <div className="border-b border-white/20 pb-6">
                  <h4 className="font-heading font-bold text-xl mb-2">Site Supervisor</h4>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">Full Time</span>
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">3+ Years Experience</span>
                  </div>
                  <p className="text-white/80 mb-4">
                    We are seeking a Site Supervisor to coordinate and supervise construction activities on-site. Responsibilities include ensuring quality control, adherence to safety standards, and efficient resource utilization.
                  </p>
                  <a href={`mailto:${companyInfo.email}?subject=Application for Site Supervisor Position`} className="bg-white text-primary hover:bg-white/90 font-heading font-semibold py-2 px-6 rounded-md transition-colors inline-block">
                    Apply Now
                  </a>
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-xl mb-2">Quantity Surveyor</h4>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">Full Time</span>
                    <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm">2+ Years Experience</span>
                  </div>
                  <p className="text-white/80 mb-4">
                    We are looking for a detailed-oriented Quantity Surveyor to manage project costs, prepare bills of quantities, and ensure cost-effective procurement. The ideal candidate should have experience in construction cost estimating and contract administration.
                  </p>
                  <a href={`mailto:${companyInfo.email}?subject=Application for Quantity Surveyor Position`} className="bg-white text-primary hover:bg-white/90 font-heading font-semibold py-2 px-6 rounded-md transition-colors inline-block">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-light rounded-lg p-8 mb-16">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">How to Apply</h3>
              <p className="text-gray-600 mb-4">
                If you're interested in joining our team but don't see a relevant position listed, we still welcome your application. Please send your resume and a cover letter to:
              </p>
              <div className="bg-white p-4 rounded-md inline-block text-primary font-semibold">
                {companyInfo.email}
              </div>
              <p className="text-gray-600 mt-4">
                Please include the position you're interested in as the email subject. We'll keep your resume on file and contact you when a suitable position becomes available.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">Have Questions?</h3>
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;