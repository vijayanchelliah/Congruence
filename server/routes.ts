import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, blogPostFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const result = await storage.createContactSubmission({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || "",
        projectType: validatedData.projectType,
        message: validatedData.message
      });
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Get all contact submissions
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json({
        success: true,
        data: submissions
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contact submissions"
      });
    }
  });

  // ------------------- BLOG/NEWS ROUTES -------------------

  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.status(200).json({
        success: true,
        data: posts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve blog posts"
      });
    }
  });

  // Get blog post by ID
  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format"
        });
      }

      const post = await storage.getBlogPostById(id);
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }

      res.status(200).json({
        success: true,
        data: post
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve blog post"
      });
    }
  });

  // Get blog post by slug
  app.get("/api/blog/slug/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      const post = await storage.getBlogPostBySlug(slug);
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }

      res.status(200).json({
        success: true,
        data: post
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve blog post"
      });
    }
  });

  // Get blog posts by category
  app.get("/api/blog/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const posts = await storage.getBlogPostsByCategory(category);
      
      res.status(200).json({
        success: true,
        data: posts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve blog posts"
      });
    }
  });

  // Create a new blog post
  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = blogPostFormSchema.parse(req.body);
      
      const result = await storage.createBlogPost({
        title: validatedData.title,
        slug: validatedData.slug,
        excerpt: validatedData.excerpt,
        content: validatedData.content,
        featuredImage: validatedData.featuredImage,
        category: validatedData.category,
        authorId: validatedData.authorId
      });
      
      res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Update a blog post
  app.put("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format"
        });
      }

      // Check if post exists
      const existingPost = await storage.getBlogPostById(id);
      if (!existingPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }

      // Validate the update data
      const updateData = req.body;
      
      const result = await storage.updateBlogPost(id, updateData);
      
      res.status(200).json({
        success: true,
        message: "Blog post updated successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Delete a blog post
  app.delete("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format"
        });
      }

      // Check if post exists
      const existingPost = await storage.getBlogPostById(id);
      if (!existingPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found"
        });
      }

      const deleted = await storage.deleteBlogPost(id);
      
      if (deleted) {
        res.status(200).json({
          success: true,
          message: "Blog post deleted successfully"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to delete blog post"
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An unexpected error occurred"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
