import React from 'react';
import './ScientificProgramme.css';

const WorkshopSection = () => {
  const workshops = [
    {
      day: 'DAY 1',
      time: '2PM - 6PM (SATURDAY)',
      title: 'CORONARY ANASTOMOSIS',
      stations: '18 STATIONS'
    },
    {
      day: 'DAY 2',
      time: '2PM - 6PM (SUNDAY)',
      title: 'AORTIC AND MITRAL VALVE REPLACEMENT',
      stations: 'Multiple Stations'
    },
    {
      day: 'DAY 2',
      time: '2PM - 6PM (SUNDAY)',
      title: 'LOBECTOMY',
      stations: '6 STATIONS'
    },
    {
      day: 'DAY 2',
      time: '2PM - 6PM (SUNDAY)',
      title: 'TRANSPLANT ANASTOMOSIS',
      stations: '6 STATIONS'
    }
  ];

  const simulators = [
    { name: 'VATS SIMULATOR', count: '2 in No.' },
    { name: '2D ECHO', count: '' },
    { name: 'AMBUSCOPE', count: '' },
    { name: 'RIBS IMPLANT', count: '' }
  ];

  return (
    <div className='mt-8'>
      <div className='p-6 shadow-lg rounded-md bg-white'>
        <h2 className="section-title text-center mb-8">Workshops & Hands-On Training</h2>
        <p className='tb-h3 text-center mb-6 text-black-400'>(2PM - 6PM)</p>
        
        {/* Main Workshops Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
          {workshops.map((workshop, index) => (
            <div 
              key={index} 
              className='workshop-card border-l-4 border-blue-150 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='flex justify-between items-start mb-3'>
                <span className='inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold'>
                  {workshop.day}
                </span>
                <span className='text-xs text-gray-500'>{workshop.time}</span>
              </div>
              <h3 className='font-bold text-lg text-gray-800 mb-2'>{workshop.title}</h3>
              <p className='text-gray-600 bg-white px-3 py-2 rounded inline-block text-sm'>
                {workshop.stations}
              </p>
            </div>
          ))}
        </div>

        {/* Simulators Section */}
        <div className='mt-10 pt-8 border-t-2 border-gray-200'>
          <h3 className='tb-h2 text-center mb-6'>Advanced Simulation Labs</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {simulators.map((simulator, index) => (
              <div 
                key={index} 
                className='simulator-card bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4 text-center hover:bg-indigo-100 transition-colors'
              >
                <p className='font-bold text-gray-800 text-sm mb-2'>{simulator.name}</p>
                {simulator.count && <p className='text-xs text-gray-600'>{simulator.count}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;
