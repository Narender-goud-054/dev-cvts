import { useState, useEffect } from 'react';

/**
 * Custom hook for countdown timer
 * @param {Date} targetDate - The target date for countdown
 * @returns {Object} Object containing months, days, hours, minutes, seconds
 */
export const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ months, days, hours, minutes, seconds, isExpired: false });
      } else {
        setCountdown({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};
