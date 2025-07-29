import { Link } from "wouter";
import { companyInfo } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(36,54,96,0.85) 0%, rgba(36,54,96,0.7) 100%)" }}>
        {/* Industrial construction site with workers and machinery in action */}
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Construction site with workers" 
          className="object-cover w-full h-full mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Building Infrastructure for a Better Tomorrow
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 opacity-90">
            Excellence in Building and Infrastructure with expertise in Residential, Commercial, and Infrastructure Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
