import React from 'react';

const Committee = () => {
  const members = [
    {
      name: 'Dr. Anvay Mulay',
      position: 'Organising Chairman',
      image: './images/committee/duoclose.jpg'
    },
    {
      name: 'Dr. Bijoy Kutty',
      position: 'Organising Secretary',
      image: './images/committee/Bejoy-Kutty.png'
    },
    {
      name: 'Dr. Zainul Hamdulay',
      position: 'Organising Secretary',
      image: './images/committee/OrganisingSecretary.jpg'
    },
    {
      name: 'Dr. Neeraj Kamat',
      position: 'Treasurer',
      image: './images/committee/Treasurer.jpg'
    },
    {
      name: 'Dr. Sandeep Sinha',
      position: 'General Manager',
      image: './images/committee/Sandeep-Sinha.png'
    }
  ];

  return (
    <section id="committee" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Organising Committee</h2>
        <p className="section-subtitle">
          Meet the distinguished team organizing CVTS 2026
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Member Image */}
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E👤%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Committee Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Expert Leadership
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our organizing committee comprises renowned cardiothoracic surgeons and healthcare professionals 
            committed to delivering an exceptional conference experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Committee;
