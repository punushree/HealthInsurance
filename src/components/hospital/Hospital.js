import React from 'react';
import HospitalList from './HospitalList';
import './Hospital.css';

const Hospital = () => {
  const hospitalList = [
    { id: 1, name: 'Hospital 1,', place: 'luc' },
    { id: 2, name: 'Hospital 2,', place: 'XYZ' },
    { id: 3, name: 'Hospital 3,', place: 'XYZ' },
    { id: 4, name: 'Hospital 4,', place: 'XYZ' },
    { id: 5, name: 'Hospital 5,', place: 'XYZ' },
    { id: 6, name: 'Hospital 6,', place: 'XYZ' },
    { id: 7, name: 'Hospital 7,', place: 'XYZ' },
    { id: 8, name: 'Hospital 8,', place: 'XYZ' },
    { id: 9, name: 'Hospital 9,', place: 'XYZ' },
    { id: 10, name: 'Hospital 10,', place: 'XYZ' },
    { id: 11, name: 'Hospital 11,', place: 'XYZ' },
    { id: 12, name: 'Hospital 12,', place: 'XYZ' },
    { id: 13, name: 'Hospital 13,', place: 'XYZ' },
    { id: 14, name: 'Hospital 14,', place: 'XYZ' },
  ];

  return (
    <div className='hospital'>
      <h2 className='headingSecondary  textCenter'>List of hospital</h2>
      <div className='hospitalList'>
        {hospitalList.map((list) => (
          <HospitalList key={list.id} hospital={list} />
        ))}
      </div>
    </div>
  );
};

export default Hospital;
