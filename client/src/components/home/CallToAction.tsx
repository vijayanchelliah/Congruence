import { Link } from "wouter";

const CallToAction = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/90">Contact us today for a free consultation and estimate. Let's build your vision together.</p>
          </div>
          <div>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
