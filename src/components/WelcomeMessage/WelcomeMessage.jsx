import React from 'react';

const WelcomeMessage = () => {
  return (
    <section id="message" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Welcome Message</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              CVTS 2026 Dr Pooja is inviting you to an exceptional event at the Trauma Auditorium, Nizam Institute of Medical Sciences, Hyderabad.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
               Live Heart Anatomy Demonstrations. Valve and Coronary Surgeries demonstrations on heart and person to person guided hands on sessions.
            </p>
            
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
