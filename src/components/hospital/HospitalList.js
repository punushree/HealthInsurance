import './Hospital.css';

const HospitalList = ({ hospital: { name, place } }) => {
  return (
    <>
      <div className='hospitalCard'>
        <p>{name}</p>
        <p style={{ marginLeft: '2.5rem' }}>{place}</p>
      </div>
    </>
  );
};

export default HospitalList;
