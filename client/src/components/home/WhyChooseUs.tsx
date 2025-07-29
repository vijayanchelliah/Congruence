import { Link } from "wouter";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              {/* Construction team reviewing building plans on site */}
              <img 
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80" 
                alt="Construction team reviewing plans" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-bold font-heading mb-1">5+</p>
                <p className="font-heading">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Why Choose Congruence</h2>
            <p className="text-gray-600 mb-6">
                At Congruence, we differentiate ourselves through our commitment to excellence, client satisfaction, and innovative solutions.
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
            
            <div className="mt-10">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
