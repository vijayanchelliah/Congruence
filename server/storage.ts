import { users, type User, type InsertUser, contactSubmissions, type Contact, type InsertContact, blogPosts, type BlogPost, type InsertBlogPost } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactSubmission(contact: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
  getContactSubmission(id: number): Promise<Contact | undefined>;
  
  // Blog/News methods
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, blogPost: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  userCurrentId: number;
  contactCurrentId: number;
  blogPostCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.blogPostCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submissions methods
  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt,
      phone: insertContact.phone || null 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getContactSubmission(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  // Blog/News methods
  async createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const published = new Date();
    const updatedAt = new Date();
    const post: BlogPost = { 
      ...blogPost, 
      id, 
      published, 
      updatedAt,
      featuredImage: blogPost.featuredImage || null 
    };
    this.blogPosts.set(id, post);
    return post;
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    // Return posts sorted by published date (newest first)
    return Array.from(this.blogPosts.values())
      .sort((a, b) => b.published.getTime() - a.published.getTime());
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async updateBlogPost(id: number, updatedPost: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updated: BlogPost = {
      ...post,
      ...updatedPost,
      updatedAt: new Date()
    };
    
    this.blogPosts.set(id, updated);
    return updated;
  }
  
  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }
  
  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.category === category)
      .sort((a, b) => b.published.getTime() - a.published.getTime());
  }
}

export const storage = new MemStorage();
