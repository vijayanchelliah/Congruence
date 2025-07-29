import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { useEffect } from "react";
import { companyInfo } from "@/lib/data";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO
    document.title = "Contact Us - Congruence Infrastructure Pvt. Ltd.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Contact Congruence Infrastructure for your infrastructure and construction project needs. Get a free consultation and estimate."
      );
    }
  }, []);
  
  return (
    <>
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Get In Touch</h1>
            <p className="max-w-2xl mx-auto text-gray-600">Have a construction project in mind? Contact us for a consultation and free estimate.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <ContactInfo 
                address={`${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}`}
                phone={companyInfo.phone}
                email={companyInfo.email}
                hours={`${companyInfo.hours.weekdays}\n${companyInfo.hours.saturday}\n${companyInfo.hours.sunday}`}
                socialLinks={companyInfo.social}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
