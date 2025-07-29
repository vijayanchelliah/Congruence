import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  
  // Fetch blog post by slug
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog/slug', slug],
    queryFn: async () => {
      try {
        const response = await apiRequest<{ success: boolean; data: BlogPost }>(`/api/blog/slug/${slug}`);
        return response.data;
      } catch (err) {
        console.error('Error fetching blog post:', err);
        return null;
      }
    },
    enabled: !!slug,
  });
  
  const post = data;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description for SEO if post is loaded
    if (post) {
      document.title = `${post.title} - Congruence Infrastructure Pvt. Ltd.`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <a className="inline-block bg-secondary text-white py-2 px-6 rounded-md font-heading font-semibold transition-colors hover:bg-primary">
              Back to Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Blog Post Header */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <Link href="/blog">
                <a className="inline-flex items-center text-accent hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Blog
                </a>
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm md:text-base">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-primary rounded-full">
                {post.category}
              </span>
              <span className="text-gray-300 ml-4">
                {formatDate(new Date(post.published))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {post.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {/* Render content with HTML - we'll sanitize this on the server side */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold font-heading mb-4">Related Articles</h3>
            
            {/* TODO: Implement related posts functionality */}
            <div className="text-center py-8">
              <p className="text-gray-600">Related articles coming soon!</p>
              <Link href="/blog">
                <a className="inline-block mt-4 text-secondary font-medium hover:underline">
                  Browse all articles
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}