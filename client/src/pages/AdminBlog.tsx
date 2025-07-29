import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { InsertBlogPost, blogPostFormSchema } from "@shared/schema";
import SeedBlogPosts from "@/components/admin/SeedBlogPosts";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminBlog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const { toast } = useToast();

  // Get blog posts
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['/api/blog'],
    queryFn: async () => {
      try {
        const response = await apiRequest<{ success: boolean; data: any[] }>('/api/blog');
        return response.data || [];
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        return [];
      }
    }
  });

  // Form for creating/editing blog posts
  const form = useForm<InsertBlogPost>({
    resolver: zodResolver(blogPostFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featuredImage: "",
      category: "",
      authorId: 1, // Default author ID
    } as InsertBlogPost,
  });

  // Create blog post mutation
  const createMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      return apiRequest('/api/blog', {
        method: 'POST',
        data
      });
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/blog'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
      console.error("Error creating blog post:", error);
    },
  });

  // Function to generate a slug from the title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Handle title change to auto-generate slug
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue("title", title);
    
    // Only auto-generate slug if it hasn't been manually edited or is empty
    if (!form.getValues("slug") || form.getValues("slug") === generateSlug(form.getValues("title"))) {
      form.setValue("slug", generateSlug(title));
    }
  };

  // Handle form submission
  const onSubmit = (data: InsertBlogPost) => {
    createMutation.mutate(data);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog Administration</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create New Blog Post</CardTitle>
              <CardDescription>
                Fill in the form below to create a new blog post for your company news section.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter blog post title" 
                            {...field} 
                            onChange={handleTitleChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL Slug</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="url-friendly-slug" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. Projects, Infrastructure, Awards" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief summary of the post (shown in listings)" 
                            {...field} 
                            rows={2}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Full content of the blog post (supports HTML)" 
                            {...field} 
                            rows={10}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="featuredImage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image URL</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://example.com/image.jpg" 
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={createMutation.isPending}
                  >
                    {createMutation.isPending ? "Saving..." : "Create Blog Post"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <SeedBlogPosts />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Blog Posts</CardTitle>
              <CardDescription>
                {isLoading 
                  ? "Loading blog posts..." 
                  : blogPosts?.length 
                    ? `${blogPosts.length} posts found` 
                    : "No blog posts yet"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse h-10 bg-gray-200 rounded"></div>
                  ))}
                </div>
              ) : blogPosts?.length ? (
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {blogPosts.map((post: any) => (
                    <div 
                      key={post.id}
                      className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedPost(post.id)}
                    >
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-gray-500">{post.category}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No blog posts yet. Create one or use the "Add Sample Blog Posts" button.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}