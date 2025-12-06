import React from 'react';
import Member from './Member';

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
      name: 'Dr. Kaladhar',
      position: 'Organising Secretary',
      image: './images/committee/OrganisingSecretary.jpg'
    },
    {
      name: 'Dr. Sai Surabhi',
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
          {members.map((member, index) => <Member key={member.id} member={member}/>)}
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
