import React from 'react';
import { FaStar, FaTrophy, FaAward } from 'react-icons/fa';

const Milestones = () => {
  const milestones = [
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: 'Excellence in Surgery',
      description: 'Decades of pioneering surgical innovations and techniques'
    },
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: 'Professional Development',
      description: 'Continuous education and training programs for surgeons'
    },
    {
      icon: <FaStar className="text-4xl text-red-600" />,
      title: 'Global Recognition',
      description: 'International collaborations and contributions to cardiac care'
    }
  ];

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title">NIMS CVTS Milestones & Evolution</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The Nizam Institute of Medical Sciences (NIMS) CVTS has a rich history marked by significant 
            milestones and landmark resolutions that have shaped the field of cardiothoracic surgery in India.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {milestone.icon}
              </div>
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
    </section>
  );
};

export default Milestones;
