import React from 'react';

const AboutMumbai = () => {
  const images = [
    { id: 1, src: '/images/mumbai/gateway-of-india.jpg', alt: 'Gateway of India' },
    { id: 2, src: '/images/mumbai/marine-drive.jpg', alt: 'Marine Drive' },
    { id: 3, src: '/images/mumbai/taj-hotel.jpg', alt: 'Taj Hotel' },
    { id: 4, src: '/images/mumbai/mumbai-skyline.jpg', alt: 'Mumbai Skyline' },
    { id: 5, src: '/images/mumbai/cst-station.jpg', alt: 'Chhatrapati Shivaji Terminus' },
    { id: 6, src: '/images/mumbai/sea-link.jpg', alt: 'Bandra-Worli Sea Link' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Mumbai</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mumbai, the financial capital of India, is a vibrant metropolis that seamlessly blends rich history with modern 
            innovation. Known as the "City of Dreams," Mumbai offers a unique cultural experience with its iconic landmarks, 
            diverse cuisine, and warm hospitality.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            From the majestic Gateway of India to the stunning Marine Drive, from bustling markets to world-class restaurants, 
            Mumbai has something for everyone. The city's energy and dynamism make it the perfect destination for IACTS 2026.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gray-200"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-red-200"><span class="text-gray-600 font-medium">${image.alt}</span></div>`;
                }}
              />
            </div>
          ))}
        </div>

        {/* History Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            History of the Indian Association of Cardiovascular-Thoracic Surgeons (IACTS)
          </h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Indian Association of Cardiovascular-Thoracic Surgeons (IACTS) has been at the forefront of advancing 
            cardiothoracic surgery in India. With a rich legacy of excellence, IACTS has played a pivotal role in shaping 
            surgical practices, education, and research in the field.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Through decades of dedication, IACTS has fostered collaboration among surgeons, promoted innovation, and 
            contributed significantly to improving patient outcomes across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMumbai;
