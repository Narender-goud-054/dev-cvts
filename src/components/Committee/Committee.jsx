import React from 'react';
import Member from './Member';

const Committee = () => {
  const members = [
    {
      name: 'Dr. N Bheerappa',
      NIMS_position: 'Director, NIMS',
      position: 'Patron',
      image: './images/committee/DR. N BHEERAPPA.jpg'
    },
    {
      name: 'Dr. Liza Rajasekhar',
      NIMS_position: 'DEAN, NIMS',
      position: 'Co-Patron',
      image: './images/committee/DR. LIZA RAJASEKHAR.jpg'
    },
    {
      name: 'Dr. N Satayanarayana',
      NIMS_position: 'MS, NIMS',
      position: 'Co-Patron',
      image: './images/committee/DR. N SATYANARAYANA.jpg'
    },
    {
      name: 'Dr. Amaresh Rao M',
      NIMS_position: 'HOD, Dept of CVTS, NIMS',
      position: 'Organising Chairperson',
      image: './images/committee/DR. AMARESH RAO M.jpg'
    },
    {
      name: 'Dr. T Ramakrishna Dev ',
      NIMS_position: 'Unit cheif, dept of CVTS, NIMS',
      position: 'Organising Co-Chairperson',
      image: './images/committee/DR. T RAMAKRISHNA DEV.jpg'
    },
    {
      name: 'Dr. Kaladhar',
      NIMS_position: 'Addl prof, dept of CVTS, NIMS',
      position: 'Organising Secretary',
      image: './images/committee/OrganisingSecretary.jpg'
    },
    {
      name: 'Dr. Vikas Puppala',
      NIMS_position:'',
      position: 'Co-Organising Secretary',
      image: './images/committee/Co-Organiser_VikasPuppala.jpg'
    },
    {
      name: 'Dr. Sai Surabhi',
      NIMS_position: 'Addl prof, dept of CVTS, NIMS',
      position: 'Treasurer',
      image: './images/committee/Treasurer.jpg'
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
          {members.map((member, index) => <Member key={index} member={member}/>)}
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
