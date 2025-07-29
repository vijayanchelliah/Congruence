import { InsertBlogPost } from "@shared/schema";

// Sample blog posts for Congruence Infrastructure
export const sampleBlogPosts: InsertBlogPost[] = [
  {
    title: "Celebrating 5 Years of Excellence in Infrastructure",
    slug: "celebrating-5-years-excellence",
    excerpt: "Congruence Infrastructure marks its 5th anniversary with a look back at key achievements and contributions to development.",
    content: `
      <p>This month, Congruence Infrastructure Private Limited celebrates five years of contributing to growing infrastructure needs. Founded in 2021 in Madurai, Tamil Nadu, our company has grown from a small team of dedicated professionals to becoming a recognized name in the construction and infrastructure development sector.</p>
      
      <h3>Key Milestones</h3>
      
      <p>Over the past five years, we have:</p>
      
      <ul>
        <li>Successfully completed numerous major projects</li>
        <li>Created many direct jobs and thousands of indirect employment opportunities</li>
        <li>Established partnerships with leading technology providers to bring innovative solutions to infrastructure challenges</li>
        <li>Received certification for our commitment to quality management systems and environmental standards</li>
        <li>Expanded our operations to include specialized divisions for transportation, commercial, and residential projects</li>
      </ul>
      
      <p>Our founder and CEO reflected on the journey: "When we started Congruence Infrastructure, we had a clear vision of contributing to development through quality construction and ethical business practices. Five years later, I'm proud to say we've stayed true to that vision while adapting to the changing needs."</p>
      
      <h3>Community Impact</h3>
      
      <p>Beyond our commercial success, we're particularly proud of our community impact initiatives. Through our corporate social responsibility program, we've supported education in rural areas, organized skill development programs for construction workers, and participated in disaster relief efforts.</p>
      
      <h3>Looking Forward</h3>
      
      <p>As we look to the future, Congruence Infrastructure is committed to embracing new technologies, expanding our capabilities, and continuing to deliver projects that improve lives and support economic growth. We're excited about upcoming projects in renewable energy infrastructure and smart city initiatives.</p>
      
      <p>We extend our sincere thanks to our clients, partners, employees, and the communities we serve for being part of this remarkable journey.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    category: "Company News",
    authorId: 1
  }
];

// Function to return the sample blog posts
export async function seedBlogPosts(): Promise<InsertBlogPost[]> {
  return sampleBlogPosts;
}