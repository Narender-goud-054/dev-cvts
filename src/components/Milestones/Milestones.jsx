import React from 'react';
import { FaStar, FaTrophy, FaAward, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
const Milestones = () => {
  const milestones = [
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: 'First Coronary Bypass Surgery',
      description: 'The first coronary bypass surgery in the state of Andhra Pradesh was performed at NIMS in 1985 by Dr. Dasari Prasada Rao'
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: 'First Heart Transplant',
      description: ' NIMS achieved another major milestone by performing its first heart transplant in 2007.'
    },
    {
      icon: <FaStar className="text-4xl text-red-600" />,
      title: 'Pioneering Techniques',
      description: 'In 1994, radial artery grafting in coronary bypass surgery was introduced at the institute.'
    },
    {
      icon: <FaStar className="text-4xl text-red-600" />,
      title: 'State-Run Leadership',
      description: 'NIMS became the first state-run hospital in Telangana to successfully conduct a heart transplantation after the formation of the new state in December 2015.'
    },
    {
      icon: <FaStar className="text-4xl text-red-600" />,
      title: 'Ongoing Advancements',
      description: ' In recent years (2024-2025), the department has performed numerous advanced procedures, including complex pediatric heart surgeries in collaboration with UK surgeons and novel minimally invasive procedures, many under government healthcare schemes like Aarogyasri.'
    },
    {
      icon: <FaStar className="text-4xl text-red-600" />,
      title: 'Pediatric Care',
      description: 'Dedicated high-end facility pediatric cardiac care ICU was established by Dr. Amaresh Rao Malempat in year 2022'
    }
  ];

  return (
    <section id="milestones" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title">NIMS CVTS Milestones & Evolution</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The Nizam Institute of Medical Sciences (NIMS) CVTS has a rich history marked by significant 
            milestones and landmark resolutions that have shaped the field of cardiothoracic surgery in India.
            The specialties of Cardiology and Cardio-Thoracic Surgery were added to NIMS in mid 1970-1980's.
            A dedicated Cardiac Sciences Out-Patient Department was inaugurated as early as April 2003, indicating 
            a significant focus on developing the specialty at that time. 
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* <div className="flex justify-center mb-6">
                {milestone.icon}
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {milestone.title}
              </h3>
              <p className="text-gray-600">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <p className="text-lg leading-relaxed text-center">
            These landmark resolutions and events have been pivotal in shaping the trajectory of cardiothoracic surgery 
            in India, fostering collaboration, and promoting continuous professional development within the specialty.
          </p>
        </div>
      </div>

    <div className="p-4 flex space-x-6 mb-6 md:mb-0 justify-around">
      {/* <a 
        href="#" 
        className="text-blue-700 hover:text-gray-500 transition-colors duration-300"
        aria-label="Facebook"
      >
        <FaFacebook size={72} />
      </a> */}
      <a 
        href="https://www.youtube.com/@NIMSCVTS" 
        target='_blank'
        className="text-red-600 hover:text-gray-500 transition-colors duration-300"
        aria-label="Youtube"
      >
        <FaYoutube size={72} />
      </a>
      <a 
        href="https://www.instagram.com/cvtsbootcamp.2026/" 
        target='_blank'
        className="text-red-600 hover:text-gray-500 transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram size={72} />
      </a>
    </div>
    </section>
  );
};

export default Milestones;
