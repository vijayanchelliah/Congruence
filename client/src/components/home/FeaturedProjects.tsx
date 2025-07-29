import { Link } from "wouter";
import { projects } from "@/lib/data";

const FeaturedProjects = () => {
  // Display only first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Take a look at some of our recent construction projects that showcase our expertise and quality workmanship.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
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
                <Link href={`/projects#${project.id}`} className="inline-flex items-center font-heading font-semibold text-secondary hover:text-primary">
                  View Project
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects" className="bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
