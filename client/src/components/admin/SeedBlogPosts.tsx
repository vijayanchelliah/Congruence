import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { seedBlogPosts } from "@/utils/seed-blog-posts";

export default function SeedBlogPosts() {
  const [isSeeding, setIsSeeding] = useState(false);
  const { toast } = useToast();

  const seedMutation = useMutation({
    mutationFn: async () => {
      try {
        setIsSeeding(true);
        // Get the sample posts from our utility
        const posts = await seedBlogPosts();
        
        // Send each post to the API
        for (let i = 0; i < posts.length; i++) {
          await apiRequest('/api/blog', {
            method: 'POST',
            data: posts[i]
          });
        }
        
        return { success: true };
      } catch (error) {
        console.error("Error seeding blog posts:", error);
        throw error;
      } finally {
        setIsSeeding(false);
      }
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Sample blog posts added successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/blog'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add sample blog posts",
        variant: "destructive",
      });
    }
  });

  const handleSeedPosts = async () => {
    if (window.confirm("This will add sample blog posts to your database. Continue?")) {
      seedMutation.mutate();
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Need some sample content? Add example blog posts to get started quickly.
      </p>
      <Button
        variant="outline"
        disabled={isSeeding || seedMutation.isPending}
        onClick={handleSeedPosts}
        className="w-full"
      >
        {isSeeding || seedMutation.isPending ? "Adding Sample Posts..." : "Add Sample Blog Posts"}
      </Button>
    </div>
  );
}