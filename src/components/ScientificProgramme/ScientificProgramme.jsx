import React from 'react';
import './ScientificProgramme.css';
import ProgrammeTable from './ProgrammeTable';
import { day1Data, day2Data } from './programmeData';

const ScientificProgramme = () => {
  return (
    <div className="container">
      <div>
        <h1 className="tb-h1">Scientific Programme<br />Day 1 <br />FOUNDATIONS & CRITICAL CARE MASTERY</h1>
        <h2 className="tb-h2">“Strong Basics. Safe Outcomes.”</h2>
        <div className="table-responsive">
          <ProgrammeTable data={day1Data} />
        </div>
      </div>

      <div>
        <h1 className="tb-h1">Scientific Programme<br />Day 2 <br/> FROM CONVENTIONAL TO CUTTING EDGE</h1>
        <h2 className="tb-h2">“Tomorrow’s CVTS Surgeon — Today.”</h2>
        <div className="table-responsive">
          <ProgrammeTable data={day2Data} />
        </div>
      </div>
    </div>
  );
};

export default ScientificProgramme;
