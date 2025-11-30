import React from 'react';

const AboutHyderabad = () => {
  const images = [
    { id: 1, src: './images/hyderabad/charminar.jpg', alt: 'Charminar of Hyderabad', title: 'Charminar of Hyderabad' },
    { id: 2, src: './images/hyderabad/buddha.jpg', alt: 'Buddha Statue',title: 'Buddha Statue' },
    { id: 3, src: './images/hyderabad/nehrupark.jpg', alt: 'Nehru Zoological Park', title: 'Nehru Zoological Park' },
    { id: 4, src: './images/hyderabad/birlaTemple.jpg', alt: 'Birla Temple', title: 'Birla Temple' },
    { id: 5, src: './images/hyderabad/golconda.jpg', alt: 'Gloconda Fort', title: 'Gloconda Fort' },
    { id: 6, src: './images/hyderabad/salarJungMuseum.jpg', alt: 'Salar Jung Museum', title: 'Salar Jung Museum' }
  ];

  return (
    <section id="hyderabad" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Hyderabad</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hyderabad blends historic charm with modern sophistication, giving the city 
            a refined and balanced identity. Its old quarters, graceful architecture, and
             deep cultural traditions create an atmosphere of timeless elegance that 
             continues to shape its character.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            At the same time, its contemporary districts introduce polished urban design,
             landscaped avenues, and vibrant commercial hubs. Together, these elements form a city
              that feels both culturally rich and impressively modern, offering a distinctive and 
              enduring sense of elegance.
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
                title={image.title}
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
            History of the <br/>Nizam Institute of Medical Sciences <br/> CardioVascular-Thoracic Surgeons (NIMS CVTS)
          </h3>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nizam Institute of Medical Sciences, CardioVascular-Thoracic Surgeons (NIMS CVTS) has been at the forefront of advancing 
            cardiothoracic surgery in India. With a rich legacy of excellence, NIMS CVTS has played a pivotal role in shaping 
            surgical practices, education, and research in the field.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Through decades of dedication, NIMS CVTS has fostered collaboration among surgeons, promoted innovation, and 
            contributed significantly to improving patient outcomes across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHyderabad;
