import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { BlogPost } from "@shared/schema";
import BlogPostCard from "@/components/blog/BlogPostCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import SeedBlogPosts from "@/components/admin/SeedBlogPosts";
import { seedBlogPosts } from "@/utils/seed-blog-posts";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);
  
  // Fetch blog posts
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['/api/blog'],
    queryFn: async () => {
      try {
        const response = await apiRequest<{ success: boolean; data: BlogPost[] }>('/api/blog');
        return response.data || [];
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        return [];
      }
    }
  });
  
  const blogPosts = data || [];
  
  // Automatically load the blog post if none exists and set page title
  useEffect(() => {
    // Set the page title for the Blog page
    document.title = "News & Updates | Congruence Infrastructure";
    
    const loadInitialBlogPost = async () => {
      // Only load if there are no posts and we haven't already tried to load
      if (blogPosts.length === 0 && !isLoading && !hasLoadedInitialData) {
        setHasLoadedInitialData(true);
        try {
          console.log("Loading initial blog post...");
          const posts = await seedBlogPosts();
          
          // Add the post to the database
          for (const post of posts) {
            await apiRequest('/api/blog', {
              method: 'POST',
              data: post
            });
          }
          
          // Refresh the data
          refetch();
        } catch (error) {
          console.error('Error loading initial blog post:', error);
        }
      }
    };
    
    loadInitialBlogPost();
  }, [blogPosts.length, isLoading, hasLoadedInitialData, refetch]);

  const categories = blogPosts.length > 0
    ? Array.from(new Set(blogPosts.map(post => post.category)))
    : [];

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory) 
    : blogPosts;

  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            News & Updates
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Stay updated with the latest news, industry insights, and project highlights from Congruence Infrastructure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Seed Blog Posts UI (for admin/demo purposes) */}
        {blogPosts.length === 0 && !isLoading && (
          <div className="mb-10">
            <SeedBlogPosts />
          </div>
        )}

        {/* Category Filter */}
        {categories.length > 0 && (
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading state
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full flex items-center justify-center py-12 text-center">
              <div>
                <p className="text-red-500 text-lg mb-2">Failed to load blog posts</p>
                <p className="text-gray-600">Please try again later</p>
              </div>
            </div>
          ) : filteredPosts.length === 0 ? (
            // Empty state
            <div className="col-span-full flex items-center justify-center py-12 text-center">
              <div>
                <p className="text-xl font-semibold mb-2">No posts available</p>
                <p className="text-gray-600">
                  {selectedCategory 
                    ? `No posts found in the "${selectedCategory}" category` 
                    : "Check back soon for new content"}
                </p>
              </div>
            </div>
          ) : (
            // Display posts
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}