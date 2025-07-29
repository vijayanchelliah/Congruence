# Congruence Infrastructure Website Deployment Guide

## Overview
This guide will walk you through the process of deploying your Congruence Infrastructure website to your custom domain (congruenceinfra.com) using GitHub and Netlify for free hosting.

## Step 1: Export Your Project from Replit

1. In your Replit project, click on the three dots menu (⋮) in the top-right corner
2. Select "Download as zip"
3. Save the ZIP file to your computer
4. Extract the ZIP file to a folder on your computer

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top-right corner and select "New repository"
3. Repository settings:
   - Name: `congruence-website` (or any name you prefer)
   - Description: "Official website for Congruence Infrastructure"
   - Visibility: Public (easier for Netlify integration)
   - Don't initialize with any files
4. Click "Create repository"

## Step 3: Upload Your Files to GitHub

After creating the repository, you'll see a page with setup instructions.

1. In the section titled "…or push an existing repository from the command line", copy these commands
2. If you're comfortable with Git commands:
   - Open a terminal/command prompt on your computer
   - Navigate to your extracted project folder
   - Run the Git commands you copied from GitHub
3. Alternatively, use GitHub Desktop or the GitHub web interface:
   - On the repository page, click "uploading an existing file"
   - Drag and drop your project files or use the file selector
   - Add a commit message: "Initial website upload"
   - Click "Commit changes"

## Step 4: Set Up Netlify Deployment

1. Create a free account at [Netlify](https://netlify.com)
2. After logging in, click "New site from Git"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `congruence-website` repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `client/dist`
7. Click "Deploy site"

## Step 5: Create a netlify.toml File (Optional)

If the deployment fails, you may need to add a configuration file to your repository.

1. Create a file named `netlify.toml` in your repository with the following content:
```
[build]
  command = "npm run build"
  publish = "client/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
2. Commit this file to your GitHub repository
3. Netlify will automatically redeploy your site

## Step 6: Connect Your Custom Domain

1. After your site is deployed, go to the Netlify dashboard
2. Select your site and go to "Domain management" or "Domain settings"
3. Click "Add a domain"
4. Enter your domain: `congruenceinfra.com`
5. Follow Netlify's instructions for updating DNS records
6. In your GoDaddy account:
   - Log in to GoDaddy
   - Go to your domain's DNS settings
   - Add the DNS records provided by Netlify (usually CNAME or A records)
   - Save changes

## Step 7: Wait for DNS Propagation

After updating your DNS records:
1. It may take from a few minutes up to 48 hours for DNS changes to propagate
2. Netlify will automatically issue an SSL certificate for your site
3. Your website will be live at https://congruenceinfra.com

## Getting Help

If you encounter any issues:
- Netlify Documentation: https://docs.netlify.com
- GitHub Documentation: https://docs.github.com
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-records-680

## Updating Your Website in the Future

When you want to make updates to your website:
1. Make changes to your files in the GitHub repository
2. Netlify will automatically detect the changes and redeploy your site
3. No additional steps needed - your site will be updated automatically