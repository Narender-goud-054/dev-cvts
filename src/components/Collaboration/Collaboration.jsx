import React from 'react';

const Collaboration = () => {
  const collaborators = [
    { name: 'Naveen', logo: '/images/collaborations/logo1.jpg' },
    { name: 'Pooja', logo: '/images/collaborations/logo2.jpg' },
    { name: 'SaiRam', logo: '/images/collaborations/logo3.jpg' },
    { name: 'Narender', logo: '/images/collaborations/logo4.jpg' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          In Collaboration With
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {collaborators.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-40 h-32 flex items-center justify-center"
            >
              <div className="text-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-24 h-16 object-contain mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = `<div class="w-24 h-16 bg-gray-200 rounded flex items-center justify-center mx-auto"><span class="text-xs text-gray-500">${partner.name}</span></div>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
