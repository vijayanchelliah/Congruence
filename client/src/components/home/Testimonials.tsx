import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-white/80">Hear from businesses and individuals who have trusted us with their construction projects.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-secondary"></i>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-primary">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
