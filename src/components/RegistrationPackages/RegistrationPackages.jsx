import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const RegistrationPackages = () => {
  const packages = [
    {
      title: 'CVTS Member',
      price: '₹ 00,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'member'
    },
    {
      title: 'CVTS Non Member',
      price: '₹ 00,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'non-member'
    },
    {
      title: 'Student/Trainee CVTS Member & Non Member',
      price: '₹ 00,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'student'
    },
    {
      title: 'Introductory Package Surgeon + PA + Nurse',
      price: '₹ 00,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'combo'
    },
    {
      title: 'Physician Associate',
      price: '₹ 00,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'pa'
    },
    {
      title: 'Nurse',
      price: '₹ 00,000',
      category: 'For 3 Days',
      deadline: 'Early Bird Till 30th November 2025',
      type: 'nurse'
    }
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Registration Packages</h2>
        <p className="section-subtitle">
          Early Bird Pricing Available Until November 30th, 2025
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
                <p className="text-sm font-semibold mb-2 opacity-90">{pkg.category}</p>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-5xl font-extrabold">{pkg.price.split(' ')[0]}</span>
                  <span className="text-2xl ml-2">{pkg.price.split(' ')[1]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center text-green-600 mb-4">
                    <FaCheckCircle className="mr-2" />
                    <span className="text-sm font-semibold">{pkg.deadline}</span>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Access to all scientific sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Conference materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Networking opportunities</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="https://forms.gle/gFwT6oJf8fbKW9mE6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Registration Information
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All registrations include access to scientific sessions, conference materials, and networking events. 
            Early bird rates are available until November 30th, 2025. Register now to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPackages;
