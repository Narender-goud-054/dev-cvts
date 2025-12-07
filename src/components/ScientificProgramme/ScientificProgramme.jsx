import React from 'react';
import './ScientificProgramme.css';
import ProgrammeTable from './ProgrammeTable';
import { day1Data, day2Data } from './programmeData';

const ScientificProgramme = () => {
  return (
    <section id="scientificProgramme" className="py-20 scroll-mt-12 bg-gradient-to-b from-white to-gray-50">
    <div className="container">
      <h1 className="section-title">Scientific Programme<br /></h1>
      <div className='p-4 shadow-lg rounded-md'>
        <h1 className="tb-h2">Day 1</h1>
        <h2 className="tb-h2">FOUNDATIONS & CRITICAL CARE MASTERY</h2>
        <h3 className="tb-h3">“Strong Basics. Safe Outcomes.”</h3>
        <div className="table-responsive p-4  bg-gray-50">
          <ProgrammeTable data={day1Data} />
        </div>
      </div>

      <div className='p-8 mt-4 shadow-lg rounded-md'>
        <h1 className="tb-h2">Day 2</h1>
        <h2 className="tb-h2">FROM CONVENTIONAL TO CUTTING EDGE</h2>
        <h3 className="tb-h3">“Tomorrow’s CVTS Surgeon — Today.”</h3>
        <div className="table-responsive p-4 bg-gray-50">
          <ProgrammeTable data={day2Data} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default ScientificProgramme;
