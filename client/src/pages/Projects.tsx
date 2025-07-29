import { projects } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import CallToAction from "@/components/home/CallToAction";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO
    document.title = "Our Projects - Congruence Infrastructure Pvt. Ltd.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "View Congruence Infrastructure's portfolio of completed projects including commercial buildings, residential developments, and infrastructure projects."
      );
    }
    
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && projectRefs.current[hash]) {
        const element = projectRefs.current[hash];
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction projects" 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Our Projects</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Explore our portfolio of completed projects that showcase our expertise, quality craftsmanship, and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-full font-heading font-semibold transition-colors ${
                  filter === "all" 
                    ? "bg-primary text-white" 
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter("commercial")}
                className={`px-6 py-2 rounded-full font-heading font-semibold transition-colors ${
                  filter === "commercial" 
                    ? "bg-primary text-white" 
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
              >
                Commercial
              </button>
              <button 
                onClick={() => setFilter("residential")}
                className={`px-6 py-2 rounded-full font-heading font-semibold transition-colors ${
                  filter === "residential" 
                    ? "bg-primary text-white" 
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
              >
                Residential
              </button>
              <button 
                onClick={() => setFilter("infrastructure")}
                className={`px-6 py-2 rounded-full font-heading font-semibold transition-colors ${
                  filter === "infrastructure" 
                    ? "bg-primary text-white" 
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
              >
                Infrastructure
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                id={project.id}
                ref={el => projectRefs.current[project.id] = el} 
                className="project-card bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-secondary/10 text-secondary text-sm font-semibold py-1 px-3 rounded-full">{project.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    href={`/project/${project.id}`}
                    className="inline-flex items-center font-heading font-semibold text-secondary hover:text-primary"
                  >
                    View Details
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">No projects found</h3>
              <p className="text-gray-600">No projects match your current filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Projects;
