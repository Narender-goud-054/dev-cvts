import React from 'react';

const WelcomeMessage = () => {
  return (
    <section id="message" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Welcome Message</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to the NIMS CVTS Boot Camp 2026 — a gathering of minds, skills, and aspirations
               united by a shared pursuit of surgical excellence. This year’s theme, 
               Reset. Reinnovate. Refine., invites each of us to pause, realign, and rediscover
                the essence of our craft. Over these days, we step beyond routine, embracing fresh perspectives,
                 advanced techniques, and the courage to evolve. Together, we celebrate learning, curiosity, 
                 and the relentless spirit that defines cardiovascular and thoracic surgery. May this boot camp inspire breakthroughs, 
                 shape mastery, and ignite a renewed passion for the future of healing
            </p>
            
            {/* <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
               Live Heart Anatomy Demonstrations. Valve and Coronary Surgeries demonstrations on heart and person to person guided hands on sessions.
            </p> */}
            
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-center text-gray-600 font-semibold">
                Join us for an extraordinary convergence of knowledge, innovation, and collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
