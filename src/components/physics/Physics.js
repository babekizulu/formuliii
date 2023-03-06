//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../buttons/BackBtn';

const Physics = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/' />
      <div className='menu-grid'>
        <Link href='/physics/mechanics' className='menu-item'>
          Mechanics
        </Link>
      </div>
    </div>
  );
};

export default Physics;
