import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-24T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ months, days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-red-800">
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6">
            <img 
              src="./images/logos/cvts_logo-full.png"
              alt="IACTS Logo"
              className="w-24 h-24 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center"><span class="text-4xl font-bold">CVTS</span></div>';
              }}
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          BOOT CAMP CVTS 2026
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in-up">
          NIMS, Hyderabad, India
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up">
          24th - 25th January 2026 | Trauma Auditorium, NIMS
        </p>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6">Conference Begins In</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { label: 'Months', value: countdown.months },
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[100px]">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-gray-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="#registration" 
          className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Register Now
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
