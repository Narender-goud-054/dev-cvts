import React from 'react';

const ProgrammeTable = ({ data }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th className="header-cell">Time</th>
          <th>Topic</th>
          <th>Speaker</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={row.isHeader ? 'header-row' : ''}
          >
            {row.cells.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cell.isHeaderCell ? 'header-cell' : ''}
                colSpan={cell.colSpan || 1}
                rowSpan={cell.rowSpan || 1}
                dangerouslySetInnerHTML={{ __html: cell.content }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProgrammeTable;
