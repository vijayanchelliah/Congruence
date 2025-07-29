import { Link } from "wouter";
import { companyInfo } from "@/lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">About Us</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Congruence Infrastructure delivers premium building and infrastructure solutions with precision and excellence. Our leadership team brings extensive industry expertise to every project we undertake.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We specialize in commercial, residential, and infrastructure development, implementing advanced engineering methodologies and sustainable practices to create structures that define the landscape of tomorrow.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our commitment to quality craftsmanship, innovative design, and client satisfaction has established Congruence as a trusted partner in the infrastructure development sector.
            </p>
            
            <Link href="/about" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
              Learn More
            </Link>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* Modern commercial building */}
              <div className="rounded-lg shadow-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Modern commercial building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Infrastructure project */}
              <div className="rounded-lg shadow-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Infrastructure development" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Architectural design discussion */}
              <div className="rounded-lg shadow-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Construction project" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Residential project */}
              <div className="rounded-lg shadow-lg overflow-hidden h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Residential project" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
