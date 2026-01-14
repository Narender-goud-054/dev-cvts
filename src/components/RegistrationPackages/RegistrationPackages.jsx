import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const RegistrationPackages = () => {
  const packages = [
    {
      title: 'MBBS/UG Student',
      price: '₹ 1,000',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Deadline to register Jan 15th',
      type: 'member'
    },
    {
      title: 'PG/MS Student',
      price: '₹ 1,500',
      category: 'NON RESIDENTIAL PACKAGE',
      deadline: 'Deadline to register Jan 15th',
      type: 'non-member'
    },
    {
      title: 'Mch Resident/ Post Mch',
      price: '₹ 2,000',
      category: 'RESIDENTIAL PACKAGE',
      deadline: 'Deadline to register Jan 15th',
      type: 'student'
    }
  ];

  const faculty = {
      title: 'Faculty',
      price: '₹ 0',
      category: '',
      deadline: '',
      type: 'student',
      formLink: 'https://forms.gle/e6v3Gh9ZpoNutSaC7'
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Registration Packages</h2>
        <p className="section-subtitle">
          Deadline to register Jan 21st, 2026
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
                {/* <p className="text-sm font-semibold mb-2 opacity-90">{pkg.category}</p> */}
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-5xl font-extrabold">{pkg.price.split(' ')[0]}</span>
                  <span className="text-2xl font-bold ml-2">{pkg.price.split(' ')[1]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6">
                  {/* <div className="flex items-center text-green-600 mb-4">
                    <FaCheckCircle className="mr-2" />
                    <span className="text-sm font-semibold">{pkg.deadline}</span>
                  </div> */}
                  
                  
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Hands-on Coronary and Valve Surgery Workshop </span>
                    </li>
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
                    {pkg.title !== "MBBS/UG Student" &&
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Dinner Symposium</span>
                      </li>
                    }
                  </ul>
                </div>

                <a 
                  href="https://forms.gle/PE4d5BJago9kuSnJ6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
    
        {/*Facutly card included in Grid after all packages*/}  
        <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
            {/* <p className="text-sm font-semibold mb-2 opacity-90">{pkg.category}</p> */}
            <h3 className="text-2xl font-bold mb-2">{faculty.title}</h3>
            <div className="flex items-baseline justify-center mt-4">
              <span className="text-5xl font-extrabold">{faculty.price.split(' ')[0]}</span>
              <span className="text-2xl font-bold ml-2">{faculty.price.split(' ')[1]}</span>
            </div>
          </div>
          {/* Card Body */}
          <div className="p-6">
            <div className="mb-6">        
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span>We will be priviliged to have you</span>
                </li>
                <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Hands-on Coronary and Valve Surgery Workshop </span>
                    </li>
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
                    <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Dinner Symposium</span>
                    </li>
              </ul>
            </div>
            <a 
            href={faculty.formLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
            >
            Register Now
            </a>
          </div>
        </div> 
      </div>  {/* closing the Grid Div */}

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Registration Information
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
             Register now to secure your spot! Limited Slots Available.
          </p>
        </div>
      </div>  {/* closing container div */}
    </section>
  );
};

export default RegistrationPackages;
