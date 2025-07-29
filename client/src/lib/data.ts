export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Projects",
    description: "Quality apartments and villas built with attention to detail, incorporating both modern amenities and elegant design elements for comfortable living spaces.",
    icon: "home"
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description: "We build commercial spaces like office buildings and shopping complexes that are functional, efficient and designed to meet modern business requirements.",
    icon: "building"
  },
  {
    id: "infrastructure",
    title: "Infrastructure Projects",
    description: "Civil engineering and infrastructure development including highways, bridges, and water management systems essential for modern urban development.",
    icon: "road"
  },
  {
    id: "design-build",
    title: "Design-Build",
    description: "Streamlined project delivery with a single point of contact for both design and construction phases, ensuring efficient coordination and seamless execution.",
    icon: "hard-hat"
  },
  {
    id: "bim-services",
    title: "BIM Services",
    description: "Advanced Building Information Modeling solutions that help create detailed 3D models of construction projects for better planning, visualization, and coordination between all stakeholders throughout the project lifecycle.",
    icon: "layer-group"
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Professional oversight of your construction project from planning to completion, ensuring smooth progress and effective resource management throughout the project lifecycle.",
    icon: "ruler-combined"
  }
];

export const projects: Project[] = [
  {
    id: "mixed-use-complex",
    title: "G+2 Residential-Commercial Complex",
    description: "Mixed-use building with ground-floor retail spaces and residential apartments on upper floors.",
    category: "Mixed-Use",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  },
  {
    id: "apartment-complex",
    title: "G+4 Apartment Building",
    description: "Five-story apartment complex with modern amenities and secure living environment.",
    category: "Residential",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  },
  {
    id: "parking-facility",
    title: "Multi-Level Parking Facility",
    description: "Modern multi-level parking facility designed to address urban parking challenges.",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/257416/pexels-photo-257416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  },
  {
    id: "modern-workspace",
    title: "Modern Workspace Project",
    description: "Contemporary office space with flexible layouts for businesses and professionals.",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  },
  {
    id: "luxury-villa",
    title: "Luxury Villa Project",
    description: "Custom-designed villa combining modern amenities with elegant architectural elements.",
    category: "Residential",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Congruence Infrastructure exceeded our expectations in every way. Their team was professional, the quality of work was outstanding, and they completed our office complex project ahead of schedule.",
    name: "Robert Smith",
    title: "Director, Techpark Developments",
    rating: 5
  },
  {
    id: "t2",
    quote: "We hired Congruence for our luxury villa construction and couldn't be happier with the results. Their attention to detail and commitment to quality is evident in every aspect of our new home.",
    name: "Emma Johnson",
    title: "Homeowner",
    rating: 5
  },
  {
    id: "t3",
    quote: "The Congruence team managed our residential community infrastructure project efficiently and professionally. Their technical expertise and innovative solutions helped us complete the project on time and within budget.",
    name: "Michael Davis",
    title: "Project Director, Harmony Developers",
    rating: 5
  }
];

export const companyInfo = {
  name: "Congruence Infrastructure Pvt. Ltd.",
  phone: "", // Per client request, no phone displayed
  email: "info@congruenceinfra.com",
  address: {
    street: "170, Indra Nagar",
    city: "3rd Street, B.B.Kulam",
    state: "Madurai 625002",
    zip: "Tamil Nadu, India"
  },
  // Hours removed per client request
  hours: {
    weekdays: "",
    saturday: "",
    sunday: ""
  },
  social: {
    facebook: "",
    twitter: "#",
    linkedin: "http://www.congruence-infra.com/",
    instagram: "#"
  },
  founded: 2021,
  completedProjects: "75+",
  teamMembers: "50+"
};
