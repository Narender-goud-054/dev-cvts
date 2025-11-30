# Component Documentation

## Overview

This document provides detailed information about each component in the IACTS Conference 2026 application.

---

## Navigation Component

**Location**: `src/components/Navigation/Navigation.jsx`

### Purpose

Provides main navigation for the single-page application with smooth scrolling to different sections.

### Features

- Fixed position sticky navigation
- Responsive mobile menu (hamburger)
- Dynamic styling on scroll
- Smooth scroll to sections

### Props

None - fully self-contained

### State

- `isOpen` (boolean): Controls mobile menu visibility
- `scrolled` (boolean): Tracks scroll position for styling

### Dependencies

- `react-icons/fa` (FaBars, FaTimes)

---

## Hero Component

**Location**: `src/components/Hero/Hero.jsx`

### Purpose

Landing section with countdown timer and conference title.

### Features

- Full-screen hero section
- Live countdown timer to conference date
- Gradient background
- Animated entrance effects
- CTA button to registration

### Props

None

### State

- `countdown` (object): Contains months, days, hours, minutes, seconds

### Key Functions

- `updateCountdown()`: Calculates time difference and updates state
- Uses `setInterval` for real-time updates

---

## RegistrationPackages Component

**Location**: `src/components/RegistrationPackages/RegistrationPackages.jsx`

### Purpose

Displays registration options with pricing and details.

### Features

- 6 registration package cards
- Early bird pricing information
- External registration links
- Hover effects and animations
- Responsive grid layout

### Props

None - uses internal package data array

### Data Structure

```javascript
{
  title: string,
  price: string,
  category: string,
  deadline: string,
  type: string
}
```

---

## AboutMumbai Component

**Location**: `src/components/AboutMumbai/AboutMumbai.jsx`

### Purpose

Provides information about Mumbai and IACTS history.

### Features

- City description
- Image gallery grid (6 images)
- IACTS history section
- Responsive layout

---

## Venue Component

**Location**: `src/components/Venue/Venue.jsx`

### Purpose

Displays venue information and transportation options.

### Features

- Venue details (Jio World Convention Centre)
- Transportation guide (train, bus)
- Interactive cards with icons
- Dual layout with images and text

### Dependencies

- `react-icons/fa` (FaTrain, FaBus, FaMapMarkerAlt)

---

## Committee Component

**Location**: `src/components/Committee/Committee.jsx`

### Purpose

Showcases organizing committee members.

### Features

- 5 committee member cards
- Profile images (placeholders)
- Names and positions
- Responsive grid (1-5 columns based on screen size)

### Data Structure

```javascript
{
  name: string,
  position: string,
  image: string
}
```

---

## Footer Component

**Location**: `src/components/Footer/Footer.jsx`

### Purpose

Provides footer with contact information and links.

### Features

- Conference description
- Useful navigation links
- Conference secretariat details
- Contact information (phone, email, address)
- Social media links
- Copyright information

### Dependencies

- `react-icons/fa` (Multiple icons)

---

## Responsive Breakpoints

All components use Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Animation Classes

### Custom Animations

- `.animate-fade-in`: Fade in animation
- `.animate-fade-in-up`: Fade in with upward motion
- `.animate-bounce`: Bounce animation (Tailwind built-in)

### Transitions

- All interactive elements use `transition-all duration-300`
- Hover effects: `transform hover:scale-105`, `hover:shadow-2xl`

---

## Color Palette

### Primary Colors

- Blue-900: `#1e3a8a` (Primary)
- Red-600: `#dc2626` (Secondary/Accent)
- Gray-800: `#1f2937` (Text)

### Background Colors

- White: Main backgrounds
- Gray-50: `#f9fafb` (Alternate sections)
- Gradient backgrounds: Blue to Red combinations

---

## Icons Used

### Navigation

- FaBars (Hamburger menu)
- FaTimes (Close menu)

### Venue

- FaTrain (Train transportation)
- FaBus (Bus transportation)
- FaMapMarkerAlt (Location pin)

### Footer

- FaPhone, FaEnvelope, FaMapMarkerAlt (Contact)
- FaFacebook, FaTwitter, FaLinkedin, FaInstagram (Social)

### Milestones

- FaTrophy, FaAward, FaStar (Achievements)

### Registration

- FaCheckCircle (Features/Benefits)

---

## Best Practices

1. **Component Structure**: Each component is self-contained in its own folder
2. **Naming**: PascalCase for components, camelCase for functions/variables
3. **Props**: Minimal prop drilling, data contained within components
4. **Styling**: Tailwind utility classes, no external CSS files per component
5. **Responsiveness**: Mobile-first approach with responsive modifiers
6. **Accessibility**: Semantic HTML, aria-labels on interactive elements
