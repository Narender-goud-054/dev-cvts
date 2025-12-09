import React from 'react';
import { FaTrain, FaBus, FaMapMarkerAlt } from 'react-icons/fa';

const Venue = () => {
  const transportOptions = [
    {
      icon: <FaTrain className="text-4xl text-blue-600" />,
      title: 'By Train',
      description: 'Take a train to Secunderabad or Begumpet station, then take metro rail to Irrum Manzil. Walk 300 m from Irrum Mazil metro '
    },
    {
      icon: <FaBus className="text-4xl text-red-600" />,
      title: 'By Bus',
      description: "Don't take Hyderabad buses, you will be stuck in Traffic"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Venue</h2>

        {/* Main Venue Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Venue Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200">
              <img 
                src="./images/venue/NIMS_hyd.jpg" 
                alt="Jio World Convention Centre"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-100"><span class="text-gray-600 font-medium">Venue Image</span></div>';
                }}
              />
            </div>
          </div>

          {/* Venue Details */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-3xl text-red-600 mr-4 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Event Venue</p>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Trauma Auditorium, NIMS
                  </h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Panjagutta Market, Panjagutta, Hyderabad 500 082, Telangana, India
              </p>

              <div className="border-t border-gray-300 pt-6">
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of NIMS Hospital, where legends meet for CVTS BootCamp 2026.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Get There */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How to Get There?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  {option.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {option.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-center">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Venue Image */}
        <div className="bg-gradient-to-r from-gray-100 to-blue-50 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  World-Class Infrastructure
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NIMS Trauma Auditorium offers state-of-the-art facilities with modern amenities, 
                  making it the ideal location for international conferences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experience seamless connectivity, cutting-edge technology, and exceptional hospitality 
                  in Hyderabad.
                </p>
              </div>
            </div>
            <div className="min-h-[300px] bg-gray-200">
              <img 
                src="./images/venue/NIMS_hyd.jpg" 
                alt="Convention Centre Interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-red-200"><span class="text-gray-600 font-medium">Convention Centre Interior</span></div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
