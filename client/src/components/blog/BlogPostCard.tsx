import { Link } from "wouter";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@shared/schema";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {post.featuredImage && (
          <div className="h-48 overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-primary rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              {formatDate(new Date(post.published))}
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading mb-3 text-primary hover:text-secondary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <div className="text-secondary font-medium hover:underline mt-auto">
            Read more
          </div>
        </div>
      </a>
    </Link>
  );
}