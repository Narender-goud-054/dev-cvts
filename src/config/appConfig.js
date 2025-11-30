/**
 * Application Configuration
 * Central configuration file for the IACTS Conference 2026 application
 */

export const APP_CONFIG = {
  // Conference Details
  conference: {
    name: 'IACTS Conference 2026',
    location: 'Mumbai, India',
    venue: 'Jio World Convention Centre',
    dates: {
      start: '2026-02-26',
      end: '2026-02-28',
      earlyBirdDeadline: '2025-11-30'
    },
    description: 'Premier gathering of global cardiothoracic experts'
  },

  // Contact Information
  contact: {
    email: 'conferences@vamaevents.com',
    phones: [
      '022-35406187',
      '022-35106391',
      '022-35406576',
      '022-35406579'
    ],
    address: {
      line1: 'Kohinoor Square Phase I, B Wing, Office No. 1004, 10th Floor',
      line2: 'N. C. Kelkar Road, Shivaji Park',
      city: 'Dadar West, Mumbai',
      pincode: '400 028',
      state: 'Maharashtra',
      country: 'India'
    }
  },

  // Venue Details
  venue: {
    name: 'Jio World Convention Centre',
    address: 'G Block, Bandra Kurla Complex, Mumbai 400 098, Maharashtra, India',
    description: "India's premier venue for world-class events, exhibitions, and conferences"
  },

  // Registration Link
  registrationLink: 'https://forms.gle/gFwT6oJf8fbKW9mE6',

  // Social Media (Add your actual links here)
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#'
  },

  // Navigation Links
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Registration', href: '#registration' },
    { name: 'About Mumbai', href: '#mumbai' },
    { name: 'Venue', href: '#venue' },
    { name: 'Committee', href: '#committee' },
    { name: 'Contact', href: '#contact' }
  ],

  // Registration Packages
  registrationPackages: [
    {
      title: 'IACTS Member',
      price: '₹ 25,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'member',
      features: [
        'Access to all scientific sessions',
        'Conference materials',
        'Networking opportunities',
        'Certificate of participation'
      ]
    },
    {
      title: 'IACTS Non Member',
      price: '₹ 30,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'non-member',
      features: [
        'Access to all scientific sessions',
        'Conference materials',
        'Networking opportunities',
        'Certificate of participation'
      ]
    },
    {
      title: 'Student/Trainee IACTS Member & Non Member',
      price: '₹ 10,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'student',
      features: [
        'Access to all scientific sessions',
        'Conference materials',
        'Networking opportunities',
        'Certificate of participation'
      ]
    },
    {
      title: 'Introductory Package Surgeon + PA + Nurse',
      price: '₹ 38,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'combo',
      features: [
        'Access for 3 participants',
        'All scientific sessions',
        'Conference materials for all',
        'Team networking opportunities'
      ]
    },
    {
      title: 'Physician Associate',
      price: '₹ 10,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'pa',
      features: [
        'Access to all scientific sessions',
        'Conference materials',
        'Networking opportunities',
        'Certificate of participation'
      ]
    },
    {
      title: 'Nurse',
      price: '₹ 10,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'nurse',
      features: [
        'Access to all scientific sessions',
        'Conference materials',
        'Networking opportunities',
        'Certificate of participation'
      ]
    }
  ],

  // Organizing Committee
  committee: [
    {
      name: 'Dr. Anvay Mulay',
      position: 'Organising Chairman',
      image: '/images/committee/anvay-mulay.png',
      bio: 'Leading cardiothoracic surgeon'
    },
    {
      name: 'Dr. Bijoy Kutty',
      position: 'Organising Secretary',
      image: '/images/committee/Bejoy-Kutty.png',
      bio: 'Expert in cardiac surgery'
    },
    {
      name: 'Dr. Zainul Hamdulay',
      position: 'Organising Secretary',
      image: '/images/committee/Zainul-Hamdulay.png',
      bio: 'Specialist in thoracic procedures'
    },
    {
      name: 'Dr. Neeraj Kamat',
      position: 'Treasurer',
      image: '/images/committee/Neeraj-Kamat.png',
      bio: 'Financial management expert'
    },
    {
      name: 'Dr. Sandeep Sinha',
      position: 'General Manager',
      image: '/images/committee/Sandeep-Sinha.png',
      bio: 'Operations and management'
    }
  ],

  // Theme Colors (for programmatic use)
  theme: {
    colors: {
      primary: '#1e3a8a',
      secondary: '#dc2626',
      accent: '#f59e0b'
    }
  }
};

export default APP_CONFIG;
