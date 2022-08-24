import './Plan.css';
import insurance from '../../assests/vaccine.jpg';
import plan from '../../assests/plan.jpg';
import oldFamily from '../../assests/oldFamily.jpg';

const Plan = () => {
  return (
    <div className='planPage'>
      <div className='healthInsurance'>
        <div className='healthInsuranceBox'>
          <h2 className='headingSecondary'>Health Insurance</h2>
          <p className='healthInsuranceText'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            corporis alias exercitationem officiis fugiat sed provident magni
            nemo quia odit accusantium porro minima tempora numquam magnam
            delectus earum, nulla voluptates facilis maiores illo perspiciatis
            blanditiis cupiditate neque. Officiis praesentium esse animi
            voluptatem rem nostrum. Et accusamus sed earum quaerat sunt
            deleniti! Dolor quis earum rerum laborum ratione, sit eius ullam eos
            id quae accusantium ipsam saepe atque, labore sapiente dolorum!
          </p>
        </div>
        <div className='imageContainer'>
          <img src={insurance} alt='insurance' className='image' />
        </div>
      </div>
      <div className='healthInsurance'>
        <div className='healthInsuranceBox'>
          <h2 className='headingSecondary'>Why we need health insurace</h2>
          <p className='healthInsuranceText'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestias quasi nihil asperiores cumque sapiente numquam totam quo
            itaque vero deserunt, excepturi obcaecati necessitatibus ad eius at!
            Aut, debitis esse Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere, quos!
          </p>
        </div>

        <div className='imageContainer'>
          <img src={oldFamily} alt='family picture' className='image' />
        </div>
      </div>
      <div className='healthInsurance'>
        <div className='imageContainer'>
          <img src={plan} alt='insurance plan' className='image' />
        </div>
        <div className='healthInsuranceBox'>
          <h2 className='headingSecondary'>Find best insurance for you</h2>
          <p className='healthInsuranceText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a
            suscipit ab, hic illo accusantium rem quaerat repellat animi
            repudiandae nesciunt cupiditate sint quidem. Sequi fuga rerum, sunt
            commodi a adipisci alias.Aut, debitis esse Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facere, quos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
