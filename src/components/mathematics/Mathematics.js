//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../buttons/BackBtn';

const Mathematics = () => {
  return (
    <div className='menu'>
      <BackBtn />
      <div className='menu-grid'>
        <Link href='/mathematics/algebra' className='menu-item'>
          Algebra
        </Link>
      </div>
    </div>
  );
};

export default Mathematics;
