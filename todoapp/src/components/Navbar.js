import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <Link href='/' className='brand-logo'>
          India Times
        </Link>
        <ul className='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
