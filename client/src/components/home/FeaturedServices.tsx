import { Link } from "wouter";
import { services } from "@/lib/data";

const FeaturedServices = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">We offer comprehensive Building and Infrastructure services tailored to meet your specific needs and requirements.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="service-card bg-white rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl"
            >
              <div className="text-secondary text-4xl mb-4">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link href={`/services#${service.id}`} className="inline-flex items-center font-heading font-semibold text-secondary hover:text-primary">
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
