import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const clickHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='navbar'>
      <div className='navbarLeft'>
        {/* <img src='' alt="company's logo" /> */}
        <Link to='/'>Logo</Link>
      </div>

      <div className='navbarRight'>
        <div className='links' id={showNav ? 'hidden' : ''}>
          <Link to='/'>Home</Link>
          <Link to='/plan'>Plan</Link>
          <Link to='/renew'>Renew</Link>
          <Link to='/buy'>Buy Now</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <button onClick={clickHandler}>|&nbsp;|&nbsp;|</button>
      </div>
    </div>
  );
};

export default Navbar;
