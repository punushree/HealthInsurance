import React from 'react';
import PlanCard from './PlanCard';

const Plan = () => {
  const planDetail = [
    {
      id: 1,
      heading: 'Trending Plans',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur optio.',
      price: '399/month',
    },
    {
      id: 2,
      heading: 'For your future',
      text: 'consectetur adipisicing elit. Fuga tenetur optio enim architecto beatae.',
      price: '499/month',
    },
    {
      id: 3,
      heading: 'For your Kids',
      text: 'reprehenderit, ab corrupti nesciunt? Iste numquam ea, laborum tenetur praesentium ',
      price: '600/month',
    },
  ];
  return (
    <div className='plan'>
      <h2 className='headingSecondary'>Affordable Plans</h2>
      <p className='planText'>Save less, Secure more</p>
      <div className='planCard'>
        {planDetail.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plan;
