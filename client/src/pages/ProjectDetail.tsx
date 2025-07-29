import { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { projects } from '@/lib/data';
import CallToAction from '@/components/home/CallToAction';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set the project from the ID
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
    
    // Update page title and meta description for SEO
    if (foundProject) {
      document.title = `${foundProject.title} - Congruence Infrastructure`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content", 
          `View details of our ${foundProject.category} project: ${foundProject.title}. Learn more about the features, specifications, and benefits of this project.`
        );
      }
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/projects" className="bg-primary text-white px-6 py-3 rounded-md font-semibold">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <section className="relative bg-primary overflow-hidden py-20">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(26,58,95,0.9) 0%, rgba(26,58,95,0.7) 100%)" }}>
          <img 
            src={project.image}
            alt={project.title} 
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">{project.title}</h1>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-light rounded-lg overflow-hidden shadow-lg mb-12">
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading font-bold text-3xl text-primary">Project Overview</h2>
              <p className="text-gray-700 text-lg">{project.description}</p>
              
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light rounded-lg p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-4">Project Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Quality materials and construction techniques</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Timely completion within project timeline</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Adherence to safety and building standards</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Innovative design and engineering solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-light rounded-lg p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-4">Project Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Increased functionality and usability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Enhanced aesthetic appeal and visual impact</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Improved energy efficiency and sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>Long-term durability and reduced maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-primary">Our Approach</h3>
              <p className="text-gray-700">
                At Congruence Infrastructure, we approach each project with a commitment to excellence and 
                attention to detail. For this {project.category.toLowerCase()} project, we worked closely with 
                the client to understand their specific needs and objectives. Our team of experienced 
                professionals developed a comprehensive plan that addressed all aspects of the project, 
                from initial design to final implementation.
              </p>
              
              <p className="text-gray-700">
                Throughout the project lifecycle, we maintained open communication with all stakeholders, 
                ensuring that everyone was informed and engaged. We implemented rigorous quality control 
                measures to guarantee that all work met or exceeded industry standards. Our proactive 
                approach to problem-solving allowed us to address challenges efficiently and effectively, 
                minimizing delays and disruptions.
              </p>
              
              <div className="mt-12 text-center">
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 px-8 rounded-md inline-block transition-colors">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary">More Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore other projects completed by Congruence Infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image}
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-secondary/10 text-secondary text-sm font-semibold py-1 px-3 rounded-full">
                        {relatedProject.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-primary mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedProject.description}</p>
                    <Link 
                      href={`/project/${relatedProject.id}`}
                      className="inline-flex items-center font-heading font-semibold text-secondary hover:text-primary"
                    >
                      View Details
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/projects" className="bg-white border border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold py-2 px-6 rounded-md inline-block transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default ProjectDetail;