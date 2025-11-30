import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting scroll position
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} Whether scroll position exceeds threshold
 */
export const useScroll = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
