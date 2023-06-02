//libs
import React from 'react';
//components
import BackBtn from '../../../buttons/BackBtn';
import Link from '../../../Link';

const Motion = () => {
  return (
    <div className='menu'>
      <BackBtn prevDir='/physics/mechanics' />
      <div className='menu-grid'>
        <Link href='/physics/mechanics/motion/velocity' className='menu-item'>
          Velocity
        </Link>
        <Link
          href='/physics/mechanics/motion/displacement'
          className='menu-item'
        >
          Displacement
        </Link>
        <Link
          href='/physics/mechanics/motion/velocity-squared'
          className='menu-item'
        >
          Velocity²
        </Link>
        <Link
          href='/physics/mechanics/motion/average-velocity'
          className='menu-item'
        >
          Average Velocity
        </Link>
      </div>
    </div>
  );
};

export default Motion;
