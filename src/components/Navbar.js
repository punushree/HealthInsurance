import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLeft'>
        {/* <img src='' alt="company's logo" /> */}
        Logo
      </div>
      <div className='navbarRight'>
        <Link to='/' className='link'>
          <li>Home</li>
        </Link>
        <Link to='/plan' className='link'>
          <li>Plan</li>
        </Link>
        <Link to='#' className='link'>
          <li>Renew</li>
        </Link>
        <Link to='#' className='link'>
          <li>Contact</li>
        </Link>
        <Link to='#' className='link'>
          <li>Buy Now</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
