# BuildMaster Construction Website

## Overview

This project is a complete web application for a construction company called BuildMaster. It features a modern full-stack architecture with a React frontend, Express backend, and PostgreSQL database (using Drizzle ORM). The application includes various pages for company information (Home, About, Services, Projects) and a contact form that stores submissions in the database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture:

1. **Frontend**: React application built with Vite, using Wouter for routing, shadcn/ui components, and Tailwind CSS for styling.
2. **Backend**: Express.js server that serves both the static frontend assets and provides RESTful API endpoints.
3. **Database**: PostgreSQL database managed through Drizzle ORM, with a simple schema for users and contact form submissions.
4. **Type Safety**: TypeScript is used throughout the application for type safety and better developer experience.

The application is designed to be deployed on Replit, with configurations in the `.replit` file to handle both development and production environments.

## Key Components

### Frontend

1. **Pages**: The application has several key pages:
   - Home: Landing page with hero section, featured services, testimonials, etc.
   - Services: Details about construction services offered
   - Projects: Portfolio of completed projects
   - About: Company information
   - Contact: Form for potential customers to reach out

2. **Components**:
   - UI Components: Extensive collection of shadcn/ui components in `/client/src/components/ui/`
   - Layout Components: Header and Footer for consistent layout
   - Page-specific Components: Organized by page (e.g., home, contact)

3. **Styling**:
   - Tailwind CSS for utility-based styling
   - Custom color scheme with primary (blue), secondary (orange), and accent (light blue) colors
   - Responsive design for mobile and desktop

### Backend

1. **Express Server**: Handles API endpoints and serves the static frontend.
2. **API Routes**: Currently implemented:
   - `/api/contact`: POST endpoint for contact form submissions and GET endpoint to retrieve submissions
   - More routes can be added as needed

3. **Storage Interface**: Abstraction for data persistence that allows for different implementations.

### Database

1. **Schema**:
   - `users`: Basic user table with id, username, and password
   - `contact_submissions`: Stores contact form data including name, email, phone, project type, message

2. **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations

## Data Flow

1. **Contact Form Submission**:
   - User fills out form on the frontend
   - Form data is validated using Zod schema
   - Data is sent to `/api/contact` endpoint
   - Server validates the data again
   - Valid data is stored in the database
   - Success/failure response is sent back to the client
   - UI provides feedback to the user

2. **Page Navigation**:
   - Handled client-side by Wouter router
   - Page components load related data and update title/meta tags for SEO

## External Dependencies

### Frontend Dependencies

1. **Core**:
   - React: UI library
   - Vite: Build tool and development server
   - TypeScript: Type safety

2. **Routing**:
   - Wouter: Lightweight routing library

3. **UI Components**:
   - shadcn/ui: Component collection based on Radix UI
   - Tailwind CSS: Utility-first CSS framework
   - Font Awesome: Icon library

4. **Data Management**:
   - TanStack Query (React Query): Data fetching and state management
   - Zod: Schema validation

### Backend Dependencies

1. **Core**:
   - Express: Web server framework
   - TypeScript: Type safety

2. **Database**:
   - Drizzle ORM: Database ORM
   - @neondatabase/serverless: PostgreSQL client

3. **Utilities**:
   - zod-validation-error: Better error messages for Zod validation

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development Mode**:
   - Started with `npm run dev` command
   - Uses Vite's dev server with hot module replacement
   - Express server runs alongside Vite for API endpoints

2. **Production Mode**:
   - Build process: Vite builds the frontend, esbuild bundles the server
   - Runs with `npm run start` command
   - Express serves static assets from the build directory and handles API routes

3. **Database**:
   - Uses PostgreSQL, which is provisioned through Replit
   - Connection string is provided via environment variables

4. **Configuration**:
   - `.replit` file includes settings for Replit-specific features
   - Deployment target is set to "autoscale"
   - Port 5000 is mapped to port 80 for external access