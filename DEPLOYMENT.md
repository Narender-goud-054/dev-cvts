# Deployment Guide

## Overview

This guide covers multiple deployment options for the IACTS Conference 2026 application.

---

## Option 1: Vercel (Recommended)

Vercel is optimized for Vite and React applications with zero configuration.

### Steps

1. **Install Vercel CLI** (optional)

   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**

   ```bash
   vercel
   ```

   Follow the prompts to complete deployment.

3. **Deploy via GitHub** (Recommended)
   - Push your code to GitHub
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

### Configuration

Vercel automatically detects Vite projects. No additional configuration needed.

**Build Settings:**

- Build Command: `npm run build`
- Output Directory: `dist`

---

## Option 2: Netlify

Netlify offers excellent hosting with continuous deployment.

### Steps

1. **Deploy via Drag & Drop**

   - Build your project: `npm run build`
   - Visit [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deployment area

2. **Deploy via GitHub**
   - Push code to GitHub
   - Connect repository to Netlify
   - Configure build settings

### Configuration

Create `netlify.toml` in the root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

### Steps

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   ```json
   {
     "homepage": "https://yourusername.github.io/ConfRegistration",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**

   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/ConfRegistration/",
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## Option 4: Traditional Web Hosting

Deploy to any web hosting service (cPanel, FTP, etc.).

### Steps

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload files**

   - Upload all files from the `dist` folder
   - Place in your public_html or www directory

3. **Configure redirects** (if needed)

   Create `.htaccess` file:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Option 5: Docker

Containerize your application for deployment anywhere.

### Dockerfile

Create `Dockerfile` in root:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Build and Run

```bash
# Build image
docker build -t iacts-conference .

# Run container
docker run -p 8080:80 iacts-conference
```

---

## Environment Variables

If you need environment variables:

1. **Create `.env` file**

   ```env
   VITE_API_URL=https://api.example.com
   VITE_GA_ID=UA-XXXXXXXXX-X
   ```

2. **Access in code**

   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configure in deployment platform**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - GitHub Pages: Use GitHub Secrets + Actions

---

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test the production build locally (`npm run preview`)
- [ ] Update links (remove any localhost references)
- [ ] Add proper meta tags for SEO
- [ ] Optimize images (compress, use WebP)
- [ ] Test on multiple devices/browsers
- [ ] Check console for errors
- [ ] Verify all external links work
- [ ] Test form submissions (if applicable)
- [ ] Check mobile responsiveness

---

## Performance Optimization

### 1. Image Optimization

```bash
# Install sharp for image optimization
npm install sharp

# Create optimization script
```

### 2. Code Splitting

Already handled by Vite's automatic code splitting.

### 3. Lazy Loading

Implement React.lazy for route-based code splitting:

```javascript
const Committee = React.lazy(() => import("./components/Committee/Committee"));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Committee />
</Suspense>;
```

### 4. Bundle Analysis

```bash
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [react(), visualizer()]
```

---

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "GA_MEASUREMENT_ID");
  </script>
</head>
```

---

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### GitHub Pages

1. Go to Repository Settings → Pages
2. Add custom domain
3. Create CNAME record pointing to `username.github.io`

---

## SSL/HTTPS

All recommended platforms (Vercel, Netlify, GitHub Pages) provide free SSL certificates automatically.

---

## Troubleshooting

### Blank page after deployment

- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Ensure all assets are correctly referenced

### 404 on refresh

- Add redirect rules (see platform-specific sections above)
- Configure server to serve `index.html` for all routes

### Build fails

- Check Node version compatibility
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors in code

---

## Continuous Integration/Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Support

For deployment issues:

- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)

---

**Recommended Platform**: Vercel for best performance and ease of use with Vite + React.
