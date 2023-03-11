//libs
import React from 'react';
//component
import Link from './Link';
import FORMULIiiicon from './FORMULiiicon';

const Logo = () => {
  return (
    <Link href='/' className='logo-container'>
      <header className='logo'>
        <FORMULIiiicon />
      </header>
    </Link>
  );
};

export default Logo;
