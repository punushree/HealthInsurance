import React from 'react';

const PlanCard = ({ plan: { heading, text, price } }) => {
  return (
    <div className='planBox'>
      <h3 className='headingTertiary textCenter'>{heading}</h3>
      <p className='planBoxText'>{text}</p>
      <p className='price'>{price}</p>
    </div>
  );
};

export default PlanCard;
