# Component Flow and Data Structure

## Application Component Hierarchy

```
App.jsx (Root)
│
├── Navigation (Sticky Header)
│   ├── Logo
│   ├── Desktop Menu
│   │   ├── Home Link
│   │   ├── Registration Link
│   │   ├── About Mumbai Link
│   │   ├── Venue Link
│   │   ├── Committee Link
│   │   └── Contact Link
│   └── Mobile Menu (Hamburger)
│       └── Slide-down Menu Items
│
├── Hero (Landing Section)
│   ├── Background Gradient
│   ├── Logo/Branding
│   ├── Main Title
│   ├── Date & Location Info
│   ├── Countdown Timer
│   │   ├── Months Display
│   │   ├── Days Display
│   │   ├── Hours Display
│   │   ├── Minutes Display
│   │   └── Seconds Display
│   ├── CTA Button (Register)
│   └── Scroll Indicator
│
├── Collaboration (Partners Section)
│   └── Partner Logos Grid (4 items)
│       ├── Partner 1 Card
│       ├── Partner 2 Card
│       ├── Partner 3 Card
│       └── Partner 4 Card
│
├── WelcomeMessage (Introduction)
│   ├── Section Title
│   └── Content Card
│       ├── Conference Description
│       ├── Highlights
│       └── Organizers Info
│
├── RegistrationPackages (Pricing Section)
│   ├── Section Title
│   ├── Section Subtitle
│   ├── Package Grid (6 cards)
│   │   ├── IACTS Member Card
│   │   │   ├── Category Badge
│   │   │   ├── Title
│   │   │   ├── Price
│   │   │   ├── Deadline Badge
│   │   │   ├── Features List
│   │   │   └── Register Button
│   │   ├── Non Member Card
│   │   ├── Student Card
│   │   ├── Combo Package Card
│   │   ├── PA Card
│   │   └── Nurse Card
│   └── Info Banner
│
├── AboutMumbai (City Info)
│   ├── Section Title
│   ├── Description Text
│   ├── Image Gallery (6 images)
│   │   ├── Gateway of India
│   │   ├── Marine Drive
│   │   ├── Taj Hotel
│   │   ├── Mumbai Skyline
│   │   ├── CST Station
│   │   └── Bandra-Worli Sea Link
│   └── IACTS History Card
│       ├── History Title
│       └── Historical Content
│
├── Milestones (Achievements)
│   ├── Section Title
│   ├── Description
│   ├── Milestone Cards Grid (3 cards)
│   │   ├── Excellence Card
│   │   │   ├── Trophy Icon
│   │   │   ├── Title
│   │   │   └── Description
│   │   ├── Development Card
│   │   │   ├── Award Icon
│   │   │   ├── Title
│   │   │   └── Description
│   │   └── Recognition Card
│   │       ├── Star Icon
│   │       ├── Title
│   │       └── Description
│   └── Summary Banner
│
├── Venue (Location Details)
│   ├── Section Title
│   ├── Main Venue Info Grid
│   │   ├── Venue Image
│   │   └── Venue Details Card
│   │       ├── Location Icon
│   │       ├── Venue Name
│   │       ├── Address
│   │       └── Description
│   ├── Transportation Section
│   │   ├── "How to Get There" Title
│   │   └── Transport Cards Grid
│   │       ├── Train Card
│   │       │   ├── Train Icon
│   │       │   ├── Title
│   │       │   └── Instructions
│   │       └── Bus Card
│   │           ├── Bus Icon
│   │           ├── Title
│   │           └── Instructions
│   └── Additional Info Banner
│       ├── Infrastructure Title
│       ├── Description
│       └── Interior Image
│
├── Committee (Team Section)
│   ├── Section Title
│   ├── Section Subtitle
│   ├── Member Cards Grid (5 cards)
│   │   ├── Dr. Anvay Mulay Card
│   │   │   ├── Profile Image
│   │   │   ├── Name
│   │   │   └── Position
│   │   ├── Dr. Bijoy Kutty Card
│   │   ├── Dr. Zainul Hamdulay Card
│   │   ├── Dr. Neeraj Kamat Card
│   │   └── Dr. Sandeep Sinha Card
│   └── Info Banner
│
└── Footer (Contact & Links)
    ├── Main Footer Grid
    │   ├── About Section (2 columns)
    │   │   ├── IACTS Logo
    │   │   ├── Conference Description
    │   │   └── Organizers Credit
    │   ├── Useful Links Section
    │   │   ├── Links Title
    │   │   └── Navigation Links
    │   │       ├── Home
    │   │       ├── Registration
    │   │       ├── About Mumbai
    │   │       ├── Venue
    │   │       └── Committee
    │   └── Contact Section
    │       ├── Vama Logo
    │       ├── Address
    │       │   ├── Location Icon
    │       │   └── Full Address
    │       ├── Phone Numbers
    │       │   ├── Phone Icon
    │       │   └── Contact Numbers
    │       └── Email
    │           ├── Email Icon
    │           └── Email Address
    └── Footer Bottom
        ├── Social Media Links
        │   ├── Facebook
        │   ├── Twitter
        │   ├── LinkedIn
        │   └── Instagram
        └── Copyright Info
            ├── Copyright Text
            └── Developer Credit
```

---

## Data Flow Architecture

### State Management Strategy

#### 1. **Local Component State** (useState)

Used for UI-specific state that doesn't need to be shared:

```javascript
Navigation Component:
- isOpen (boolean) → Controls mobile menu visibility

Hero Component:
- countdown (object) → Timer values updated every second
  {
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  }
```

#### 2. **Custom Hooks** (Reusable Logic)

```javascript
useCountdown(targetDate)
├── Input: Date object (Feb 26, 2026)
├── Effect: setInterval updates every 1000ms
└── Output: Countdown object with time remaining

useScroll(threshold)
├── Input: Scroll threshold in pixels (default: 50)
├── Effect: window scroll event listener
└── Output: Boolean (scrolled past threshold?)
```

#### 3. **Props** (Parent → Child Communication)

Currently minimal prop passing due to self-contained components.
Each component manages its own data.

```javascript
App.jsx (No props needed)
└── All child components are self-contained
    └── Data defined within each component
```

---

## Event Flow

### User Interactions

```
1. Navigation Click
   User clicks nav link
   ↓
   Smooth scroll to section (#id)
   ↓
   URL hash updates
   ↓
   Mobile menu closes (if open)

2. Mobile Menu Toggle
   User clicks hamburger icon
   ↓
   isOpen state toggles
   ↓
   Menu animates open/closed
   ↓
   Icon switches (FaBars ↔ FaTimes)

3. Register Button Click
   User clicks "Register Now"
   ↓
   Opens external Google Form
   ↓
   New tab/window (target="_blank")

4. Countdown Timer
   Component mounts
   ↓
   useEffect sets up interval
   ↓
   Every 1 second:
   - Calculate time difference
   - Update state
   - Re-render display
   ↓
   Component unmounts
   ↓
   Cleanup: clear interval

5. Scroll Detection
   User scrolls page
   ↓
   Window scroll event fires
   ↓
   useScroll hook checks position
   ↓
   If > threshold: apply shadow
   ↓
   Navigation style updates
```

---

## Component Communication Patterns

### Pattern 1: Self-Contained Components

Most components are **autonomous** and don't communicate with each other.

```
Navigation ─┐
Hero ───────┤
Collaboration│ → No direct communication
...         │   Each manages own state
Footer ─────┘
```

### Pattern 2: Event-Based (Scroll)

Multiple components respond to the same browser events:

```
Window Scroll Event
├── Navigation (adds shadow)
└── Potential future: Parallax effects, animations
```

### Pattern 3: URL Hash Navigation

Single-page app navigation through URL fragments:

```
User clicks "Venue" in Navigation
↓
Smooth scroll to #venue
↓
Venue component is in viewport
```

---

## Styling Architecture

### Tailwind CSS Utility Classes

```
Component Level
├── Responsive Modifiers (sm:, md:, lg:, xl:)
├── State Modifiers (hover:, focus:, active:)
├── Layout (flex, grid, space-y, gap)
├── Sizing (w-full, h-screen, max-w-7xl)
├── Colors (bg-blue-900, text-white)
├── Typography (text-2xl, font-bold)
└── Effects (shadow-lg, rounded-xl, transition-all)

Global Level (index.css)
├── @tailwind directives
├── Base styles (@layer base)
├── Component classes (@layer components)
│   ├── .container-custom
│   ├── .btn-primary
│   ├── .btn-secondary
│   ├── .section-title
│   └── .section-subtitle
└── Custom animations
    ├── @keyframes fadeInUp
    ├── @keyframes fadeIn
    └── Animation classes
```

---

## Responsive Design Strategy

### Mobile-First Approach

```
Base Styles (Mobile < 768px)
├── Single column layouts
├── Stacked components
├── Hamburger menu
├── Larger touch targets
└── Optimized typography

Tablet Breakpoint (md: 768px+)
├── Two column grids
├── Larger images
├── Horizontal navigation
└── Adjusted spacing

Desktop Breakpoint (lg: 1024px+)
├── Multi-column layouts
├── Maximum content width
├── Enhanced hover effects
└── Optimized for mouse input
```

### Breakpoint Usage Pattern

```javascript
// Typical component responsive classes
<div className="
  grid                        // Base: Grid layout
  grid-cols-1                 // Mobile: 1 column
  md:grid-cols-2              // Tablet: 2 columns
  lg:grid-cols-3              // Desktop: 3 columns
  gap-4                       // Mobile: 16px gap
  md:gap-6                    // Tablet: 24px gap
  lg:gap-8                    // Desktop: 32px gap
">
```

---

## Performance Optimization Strategy

### Build-Time Optimizations (Vite)

```
Source Code
├── JSX Components
├── Tailwind CSS
└── JavaScript

        ↓ Vite Build Process

Production Bundle
├── Minified JavaScript
├── Tree-shaken code
├── Optimized CSS (purged)
├── Code splitting
└── Hashed filenames (cache)

        ↓ Deployment

CDN/Hosting
├── Gzip compression
├── Browser caching
└── Fast delivery
```

### Runtime Optimizations

```
Component Render Cycle
├── React.StrictMode (dev only)
├── Functional components (lightweight)
├── useEffect dependencies (prevent re-renders)
└── Conditional rendering

Future Enhancements:
├── React.memo (prevent unnecessary re-renders)
├── React.lazy (code splitting)
├── useMemo (expensive calculations)
└── useCallback (stable function references)
```

---

## File Organization Philosophy

### Component Folder Structure

```
components/
└── ComponentName/
    └── ComponentName.jsx

Why?
✓ Scalable - Easy to add styles, tests later
✓ Clear - One component per folder
✓ Maintainable - Related files together

Future additions per component:
├── ComponentName.jsx
├── ComponentName.module.css (if needed)
├── ComponentName.test.jsx (unit tests)
└── index.js (clean exports)
```

---

## Summary: Key Architectural Decisions

| Decision                   | Reason                         | Benefit                      |
| -------------------------- | ------------------------------ | ---------------------------- |
| Functional components only | Modern React best practice     | Simpler, more testable code  |
| Tailwind CSS               | Rapid development, consistency | Fast styling, small bundle   |
| Vite build tool            | Fast HMR, optimized builds     | Better DX, faster production |
| Self-contained components  | Loose coupling                 | Easy to maintain/modify      |
| Custom hooks               | Reusable logic                 | DRY principle, testable      |
| Mobile-first design        | Progressive enhancement        | Better mobile UX             |
| Single-page layout         | Conference site pattern        | Smooth UX, easy navigation   |

---

This architecture provides:

- ✅ **Scalability**: Easy to add new components
- ✅ **Maintainability**: Clear structure and patterns
- ✅ **Performance**: Optimized builds and rendering
- ✅ **Developer Experience**: Fast development with Vite
- ✅ **User Experience**: Smooth, responsive, animated
