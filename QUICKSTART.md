# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Upgrade Node.js (Important!)

Your current Node.js version is **v12.10.0**, which is outdated. You need **Node.js v14+** to run this project.

#### Option A: Using NVM (Recommended)

If you have NVM installed:

```bash
# Install Node 18 (LTS)
nvm install 18

# Use Node 18
nvm use 18

# Set as default
nvm alias default 18

# Verify
node --version  # Should show v18.x.x
```

#### Option B: Download from nodejs.org

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (v18 or v20)
3. Run the installer
4. Verify installation:
   ```bash
   node --version
   ```

---

### Step 2: Install Dependencies

Once Node.js is updated:

```bash
cd /Users/sai-12663/Documents/Projects/ConfRegistration
npm install
```

This will install:

- React 18.2
- Vite 5.0
- Tailwind CSS 3.3
- React Icons
- All other dependencies

---

### Step 3: Run the Application

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔍 What Was Built

### ✅ Complete Features

1. **Responsive Navigation**

   - Sticky header with scroll detection
   - Mobile hamburger menu
   - Smooth scrolling to sections

2. **Hero Section**

   - Full-screen landing
   - Live countdown timer to Feb 26, 2026
   - Animated entrance

3. **Registration Packages**

   - 6 pricing cards
   - Early bird pricing display
   - External registration links

4. **About Mumbai**

   - City information
   - Image gallery (6 placeholders)
   - IACTS history

5. **Venue Information**

   - Jio World Convention Centre details
   - Transportation guide (train, bus)
   - Interactive cards

6. **Organizing Committee**

   - 5 committee member cards
   - Responsive grid layout

7. **Footer**
   - Contact information
   - Conference secretariat
   - Social media links
   - Navigation links

---

## 🎨 Design System

### Colors

- **Primary Blue**: #1e3a8a (Blue-900)
- **Secondary Red**: #dc2626 (Red-600)
- **Accent**: #f59e0b (Amber-500)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 2xl-6xl
- **Body**: Regular, base-lg

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📁 Project Structure

```
ConfRegistration/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   └── Navigation.jsx
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   ├── Collaboration/
│   │   │   └── Collaboration.jsx
│   │   ├── WelcomeMessage/
│   │   │   └── WelcomeMessage.jsx
│   │   ├── RegistrationPackages/
│   │   │   └── RegistrationPackages.jsx
│   │   ├── AboutMumbai/
│   │   │   └── AboutMumbai.jsx
│   │   ├── Milestones/
│   │   │   └── Milestones.jsx
│   │   ├── Venue/
│   │   │   └── Venue.jsx
│   │   ├── Committee/
│   │   │   └── Committee.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   ├── useScroll.js
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── COMPONENTS.md
├── DEPLOYMENT.md
└── QUICKSTART.md (this file)
```

---

## 🛠️ Technology Stack

- **React 18.2**: Modern React with hooks
- **Vite 5.0**: Fast build tool and dev server
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **React Icons 4.12**: Icon library (Font Awesome)
- **PostCSS**: CSS processing with Autoprefixer

---

## ✨ Key Features Implemented

### 1. Countdown Timer

- Real-time countdown to conference date
- Updates every second
- Displays: Months, Days, Hours, Minutes, Seconds

### 2. Responsive Design

- Mobile-first approach
- Breakpoints: Mobile, Tablet, Desktop
- Touch-friendly on mobile devices

### 3. Smooth Animations

- Fade-in effects on scroll
- Hover transitions on cards
- Smooth scrolling navigation

### 4. Interactive Components

- Hover effects with elevation
- Scale transforms on cards
- Dynamic navigation shadow

---

## 🎯 Next Steps (Optional Enhancements)

### Add Real Images

Replace placeholder images in:

- `AboutMumbai.jsx` - Mumbai gallery
- `Committee.jsx` - Committee member photos
- `Venue.jsx` - Venue images
- `Collaboration.jsx` - Partner logos

### Add More Interactivity

- Image lightbox for gallery
- Form validation for contact form
- Animated statistics counters
- Testimonials carousel

### SEO Optimization

- Add meta tags in `index.html`
- Create sitemap
- Add structured data (JSON-LD)

### Performance

- Image optimization (WebP format)
- Lazy loading images
- Code splitting with React.lazy()

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution**:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution**: Vite will automatically use the next available port (3001, 3002, etc.)

### Issue: CSS not loading

**Solution**: Make sure Tailwind is properly configured. Restart the dev server.

### Issue: Blank page

**Solution**: Check browser console for errors. Ensure all imports are correct.

---

## 📚 Additional Documentation

- **README.md**: Complete project overview and setup instructions
- **COMPONENTS.md**: Detailed component documentation
- **DEPLOYMENT.md**: Deployment guides for various platforms

---

## 💡 Tips

1. **Hot Module Replacement**: Vite provides instant updates. No need to refresh!
2. **Component Structure**: Each component is self-contained and reusable
3. **Tailwind Classes**: Use Tailwind IntelliSense extension in VS Code
4. **Icons**: Browse all icons at [react-icons.github.io](https://react-icons.github.io)

---

## 🤝 Need Help?

- Check the browser console for errors
- Review component documentation in COMPONENTS.md
- Ensure Node.js version is 14+
- Verify all dependencies are installed

---

**Ready to go! Run `npm run dev` after updating Node.js** 🚀
