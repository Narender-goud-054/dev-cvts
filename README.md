# IACTS Conference 2026 Mumbai - Frontend Clone

A fully responsive front-end clone of the IACTS Conference 2026 Mumbai website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and hooks
- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Tailwind CSS Styling**: Utility-first CSS framework for rapid UI development
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Clean Component Structure**: Well-organized and modular codebase
- **Fast Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v14 or higher recommended)
- npm or yarn package manager

**Note**: If you're running Node.js v12, please upgrade to v14+ for compatibility with Vite.

## 🛠️ Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:3000` (or another port if 3000 is occupied).

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ConfRegistration/
├── public/                  # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navigation/     # Navigation bar component
│   │   ├── Hero/          # Hero section with countdown
│   │   ├── Collaboration/ # Collaboration partners section
│   │   ├── WelcomeMessage/# Welcome message section
│   │   ├── RegistrationPackages/ # Registration pricing cards
│   │   ├── AboutMumbai/   # Mumbai information section
│   │   ├── Milestones/    # IACTS milestones section
│   │   ├── Venue/         # Venue information
│   │   ├── Committee/     # Organizing committee
│   │   └── Footer/        # Footer with contact info
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🎨 Component Architecture

### Core Components

1. **Navigation** (`Navigation.jsx`)

   - Sticky navigation bar with smooth scrolling
   - Responsive mobile menu with hamburger icon
   - Dynamic shadow on scroll

2. **Hero** (`Hero.jsx`)

   - Full-screen hero section with gradient background
   - Live countdown timer to conference date (Feb 26, 2026)
   - Animated entrance effects

3. **Collaboration** (`Collaboration.jsx`)

   - Partner/collaborator logos display
   - Responsive grid layout

4. **WelcomeMessage** (`WelcomeMessage.jsx`)

   - Conference introduction and welcome text
   - Gradient card design

5. **RegistrationPackages** (`RegistrationPackages.jsx`)

   - Six registration package cards
   - Pricing information with early bird deadline
   - External registration link integration
   - Hover effects and transitions

6. **AboutMumbai** (`AboutMumbai.jsx`)

   - Mumbai city information
   - Image gallery grid
   - IACTS history section

7. **Milestones** (`Milestones.jsx`)

   - IACTS achievements and milestones
   - Icon-based feature cards
   - Animated hover effects

8. **Venue** (`Venue.jsx`)

   - Jio World Convention Centre details
   - Transportation information (train, bus)
   - Interactive cards with icons

9. **Committee** (`Committee.jsx`)

   - Organizing committee member cards
   - Profile images with names and positions
   - Responsive grid layout

10. **Footer** (`Footer.jsx`)
    - Conference information and contact details
    - Useful links navigation
    - Conference secretariat information
    - Social media links
    - Copyright information

## 🎯 Responsive Design Decisions

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Strategy

1. **Mobile-First Approach**: Base styles target mobile devices, with progressive enhancement for larger screens
2. **Flexbox & Grid**: Utilized for flexible and responsive layouts
3. **Tailwind Responsive Utilities**: Using `sm:`, `md:`, `lg:`, and `xl:` prefixes
4. **Dynamic Navigation**: Hamburger menu for mobile, horizontal menu for desktop
5. **Adaptive Typography**: Font sizes scale based on screen size
6. **Flexible Images**: Images and cards adjust proportionally
7. **Touch-Friendly**: Larger tap targets for mobile users

## 🎨 Styling Approach

### Tailwind CSS

- **Utility-First**: Rapid UI development with utility classes
- **Custom Theme**: Extended color palette (primary, secondary, accent)
- **Custom Components**: Reusable button and section styles
- **Responsive Modifiers**: Built-in responsive design utilities

### Custom CSS

- **Animations**: Custom keyframe animations (fadeIn, fadeInUp)
- **Smooth Scrolling**: Enhanced navigation experience
- **Transitions**: Hover and state transition effects

## 🔧 Technologies Used

- **React 18.2**: Modern React with hooks
- **Vite 5.0**: Next-generation frontend tooling
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **React Icons 4.12**: Icon library
- **PostCSS**: CSS processing with Autoprefixer

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Optimization

- Touch-friendly interactive elements
- Optimized images and assets
- Reduced animations for performance
- Responsive typography and spacing

## 🎯 Key Features Implementation

### 1. Countdown Timer

- Real-time countdown to conference date
- Displays months, days, hours, minutes, seconds
- Updates every second using `useEffect` and `setInterval`

### 2. Smooth Scrolling

- Navigation links smoothly scroll to sections
- Implemented via CSS `scroll-behavior: smooth`
- Enhanced user experience for single-page layout

### 3. Sticky Navigation

- Fixed position with dynamic styling on scroll
- Shadow appears when scrolled
- Managed with scroll event listener

### 4. Responsive Navigation

- Desktop: Horizontal menu
- Mobile: Hamburger menu with slide-down animation
- Close on link click for better UX

### 5. Interactive Cards

- Hover effects with elevation and scale
- Smooth transitions
- Enhanced visual feedback

## 🚀 Performance Optimizations

- Vite's lightning-fast HMR
- Optimized production builds
- CSS purging with Tailwind
- Minimal JavaScript bundle
- Lazy loading ready

## 📝 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',    // Change primary color
      secondary: '#dc2626',   // Change secondary color
      accent: '#f59e0b',      // Change accent color
    }
  }
}
```

### Modifying Content

- Update text directly in component files
- Replace placeholder images with actual images
- Modify registration links in `RegistrationPackages.jsx`

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation links in `Navigation.jsx`

## 🐛 Troubleshooting

### Node Version Issues

If you encounter errors related to Node version:

```bash
node --version  # Check current version
nvm install 18  # Install Node 18 (if using nvm)
nvm use 18      # Use Node 18
```

### Port Already in Use

If port 3000 is occupied, Vite will automatically use the next available port.

### Dependencies Installation Failure

```bash
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

This is a frontend clone project. Feel free to enhance and customize as needed.

## 📄 License

This project is created for educational and demonstration purposes.

## 🙏 Acknowledgments

- Original design from [IACTS Conference 2026 Mumbai](https://iactscon2026mumbai.com/)
- Built with React, Vite, and Tailwind CSS
- Icons from React Icons library

---

**Built with ❤️ using Modern React Practices**
